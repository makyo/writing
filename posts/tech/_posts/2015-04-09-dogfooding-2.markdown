---
layout: post
title: Dogfooding - Pt. 2

---

*This is a continuation of the [first
post](/posts/tech/2015/04/06/dogfooding-1/); you should read that first!*

This is part 2 of the "Dogfooding Juju" series that I'm doing. This time, I want
to go into a little bit of detail about the Warren charm and how I wound up
structuring it.  As I mentioned in the previous post, there are perhaps more
elegant ways to do this, but I found the documentation to be lacking in ways
that prevented me from dedicating relatively scant free time to the task.
Instead, I wound up following the path that I've followed before on the job with
several of the charms we use for our own projects.

## How a Charm Works

One can think of a charm as a deployment solution. In a lot of ways, it follows
the same path as many other dev-ops solutions out there, such as Ansible, Chef,
or Puppet.  In fact, one can use any one of those solutions (or more than one,
if one is so inclined) in managing what happens during the deployment of a charm
into a service, as many charms do.  Charms are meant to be biased, best-practice
solutions that install a service and describe the way that service relates to
other services in the Juju environment.

A charm is, at its core, primarily built around two concepts: configuration and
hooks.  Configuration describes the way the charm is built and how it can
interact with other services, while hooks describe how the service responds to
state changes, both internally and externally.  There is a third bit, which we
won't get into here, as it's not relevant, but is worth mentioning as part of
the charm, which is "actions".  Actions are code within the service that
responds to requests, either from the user or from the environment, through Juju
itself.

A lot of (digital) ink has been spilled on charm building, so I'm not going to
go too far in depth beyond explaining how this works with the Warren charm.
Please feel free to check out the [extensive
docs](https://jujucharms.com/docs/stable/authors-intro) if you're interested in
diving deeper.

### Configuration

Configuration primarily happens in two files used by the charm: `metadata.yaml`
and `config.yaml`.  `metadata.yaml` contains information about the charm, who
wrote it, and how it connects to various other charms within the environment,
while `config.yaml` contains all of the configuration options that a charm may
use during execution of any of its numerous hooks.

Anyone who is familiar with packaging software in any way will be familiar with
the way these two files work.  You can specify the name of the charm, the
authors, a short description, and some tags in the `metadata.yaml` file.
Additionally, if this charm relies on other services, they will be defined in
the interfaces section.  `config.yaml` is basically a schema describing the
configuration options that the charm uses.  For each option, a type, a
description, and a default may be provided.

### Hooks

Hooks are where all of the action takes place in a charm.  There are a few main
hooks, and then several which depend on the state of the environment.  The main
hooks are:

* `install` - work that needs to take place as the charm is first being
  installed.
* `start` - actions that take place as the charm is moving from `installed` to
  `started` states.
* `stop` - actions that take place as the charm is moving from `started` to
  `stop` or `dying` states.
* `config-changed` - actions that take place when any configuration value has
  changed.

The other hooks you might encounter are relation hooks.  These are fired as the
state of relations to the charm change.  They come in four types, each of which
includes the name of the relation interface as part of it:

* `*-relation-joined` - fired when the two services first start talking to each
  other.
* `*-relation-changed` - fired when some aspect of the relation is changed, such
  as data about that relation is changed.
* `*-relation-departed` - fired when a relation is removed by the user.
* `*-relation-broken` - fired when the relation is broken between the two
  services for some reason, such as one service being removed.

## The Structure of the Warren Charm

The Warren charm is basically typical, as far as charms go.  It has its own
metadata and config files, as well as a full collection of hooks.

### Configuration

#### metadata.yaml

The `metadata.yaml` file contains a lot of basics that will be familiar at a
glance.  Name, summary, maintainer, description, tags, these are all pretty
straight forward.  Of note, however, are the subordinate element, which declares
whether or not this service will be subordinate to another (a topic for a later
date), and the provides/requires elements, which describe how this service can
relate to others.

Provides describes the interface that this service will expose to others within
the Juju environment.  Of particular note (mostly because the others haven't
been implemented yet) is the website interface, which provides a means of
hosting content over HTTP/S.  This will be used by the haproxy charm, which will
provide load balancing over this interface.

Requires describes the interfaces that this service needs other charms to
provide within the environment in order to run fully. In this case, this means
Mongo via the mongodb charm, and ElasticSearch via the eponymous charm.

<pre><code class="language-yaml">
name: warren-charm
summary: Warren is a networked content-sharing site.
maintainer: Madison Scott-Clary <makyo@drab-makyo.com>
description: |
  Warren is a networked content-sharing site, allowing users to not only post
  their creations, but link them together into a web of their works, and the
  works of others.  It manages each post as an abstract entity and uses content
  types to render those abstract types into something viewable within a
  browser.
tags:
  - social
  - cms
  - applications
subordinate: false
provides:
  website:
    interface: http
  nrpe-external-master:
    interface: nrpe-external-master
    scope: container
  local-monitors:
    interface: local-monitors
    scope: container
requires:
  mongodb:
    interface: mongodb
  elasticsearch:
    interface: elasticsearch
</code></pre>

#### config.yaml

Our configuration values for this charm are also pretty straight-forward.  You
can see that we have options for an SMTP server, which will be used for sending
notification emails, two keys which are used for encrypting session data, the
database name, the port to listen on, and the source.  Source is interesting
because it's structured to allow various different ways to fetch the source for
building Warren.  Since this is a thin charm (that is, it does not include any
of the source for Warren itself), the charm will have to figure out how to fetch
the source as required.  We've provided a few ways of specifying that, all of
which interface with Git: one can specify a branch name, a tag name, or a
commit SHA.

<pre><code class="language-yaml">
options:
  smtp-server:
    default: smtp.example.com
    description: Address for the SMTP server for sending emails from Warren
    type: string
  session-auth-key:
    default: CHANGEME--------
    description: Session authentication key (16 or 32 bytes)
    type: string
  session-encryption-key:
    default: CHANGEME--------
    description: Session encryption key (16, 32, or 64 bytes)
    type: string
  mongo-db:
    default: warren
    description: The mongo database name
    type: string
  listen_port:
    default: 3000
    description: The port to listen on
    type: int
  source:
    default: "branch:master"
    description: A string containing a "branch:", "tag:", or "commit:" followed
      by a branch name, a tag name, or a commit, respectively
    type: string
</code></pre>

### Hooks

This is where the meat of the charm lives.  Hooks are executable bits of code
within the `/hooks` directory of the charm, each named appropriately.  That is,
there is an executable file in `/hooks` named `install`, one named `start`, and
so on for all of the hooks that will be fired for our service.  As is standard
practice for this type of charm, I actually have all of the code in one file,
`hooks.py`, and all of the hooks files are simply symlinked to point to that
file.

I'm not going to go too in depth here, nor post the [entire
file](ttps://github.com/warren-community/warren-charm/blob/master/hooks/hooks.py),
which you can look at yourself, but simply outline the way the hooks are called.
Future posts may go more in depth as to how things work on a more atomic level.

First is our install hook, as shown by the decorator.  This one takes care of
some initial work that needs to be done to get the service up and running.  It
updates all packages, ensures dependencies (such as golang, git, and bzr), adds
a user which will be used to run the service, makes source and build
directories, and installs the source for Warren.

<pre><code class="language-python">
@hooks.hook('install')
def install():
    '''Install required packages, user, and warren source.'''
    apt_get_update()
    ensure_packages(*dependencies)    
    host.adduser(owner)
    prep_installation()
    install_from_source()
</code></pre>

The stop hook is similarly simple.  It stops the Warren service and deletes the
upstart file for starting it.

<pre><code class="language-python">
@hooks.hook('stop')
def stop():
    '''Stop the warren service.'''
    log('Stopping service...')
    host.service_stop(system_service)
    if upstart_conf:
        unlink_if_exists(upstart_conf)
</code></pre>

Here's where the fun begins.  As is standard practice for several charms, many
hooks should behave in the same way.  This was put to me by Kapil Thangavelu as,
"There should only be a config-changed hook, and everything else is subordinate
to that."  This means that all or most relation hooks, the config-changed hook,
and the start hook should basically be the same.

Below, we've decorated the `main hook` method will most of our relation hooks,
start, and config-changed.  The work this does is fairly straight forward.  It
fetches the source and updates to the specified version if necessary, writes the
Warren config file, writes the upstart file, opens or closes ports as necessary,
and restarts the service.

<pre><code class="language-python">
@hooks.hook('start')
@hooks.hook('config-changed')
@hooks.hook('mongodb-relation-joined')
@hooks.hook('mongodb-relation-departed')
@hooks.hook('mongodb-relation-broken')
@hooks.hook('mongodb-relation-changed')
@hooks.hook('elasticsearch-relation-joined')
@hooks.hook('elasticsearch-relation-departed')
@hooks.hook('elasticsearch-relation-broken')
@hooks.hook('elasticsearch-relation-changed')
def main_hook():
    '''Main hook functionality
    On most hooks, we simply need to write config files, work with hooks, and
    restart.  If the source has changed, we'll additionally need to rebuild.
    '''
    if config.changed('source'):
        log('Source changed; rebuilding...')
        install_from_source()
    write_init_file()
    write_config_file()
    manage_ports()
    restart()
</code></pre>

In our case, the haproxy hooks take a little bit more work, however.  The
haproxy service requires a bit of information from us: the hostname for this
unit of the Warren service, and the port on which it is listening.  For each
`website` relation on this service, we simply send (using `relation_set`) those
data to the remote service.

<pre><code class="language-python">
@hooks.hook('website-relation-joined')
@hooks.hook('website-relation-departed')
@hooks.hook('website-relation-broken')
@hooks.hook('website-relation-changed')
def website_relation_hook():
    '''Notify all website relations of our address and port.'''
    for relation_id in relations.get('website', {}).keys():
        private_address = hookenv.unit_private_ip()
        hookenv.relation_set(
            relation_id=relation_id,
            relation_settings={'hostname': private_address, 'port': config['listen_port']})
</code></pre>

How are the hooks run?  Simple.  When the `hooks.py` file is called, we pass all
the work on to the charmhelpers library, which will decide which decorated hook
methods to call:

<pre><code class="language-python">
if __name__ == "__main__":
    hooks.execute(sys.argv)
</code></pre>

## The Good

There's just so much to be said for having a repeatable, debuggable (I'll get
into `juju debug-hooks` at some point, promise!) means of deploying a service.
With this layout for a charm, it's easy to see what hook does what, and is
fairly easy to organize your code around that.  The configuration files are in a
familiar and readable format (I'm looking at you, countless `*.pom` files), and
the python charmhelpers package keeps our hooks fairly simple.

## The Bad

I'll be totally honest and say that a lot of the work that I did on this charm
came from observing the ways other charms were built, not by reading
documentation.  I don't mean to harp on this, but I simply had no other path
forward for creating my charm, there wasn't much to read.  Again, this is
something I'll be focusing on helping along, myself.

My other problems stem from the issues involved with this path forward and may
be mitigated by utilizing the new services framework.

The `hooks.py` file is big, but there are enough hooks and enough code
repetition that it wouldn't necessarily make sense to have it any other way.
There are a few other charms that have gotten big enough to divide the
deployment strategies into several different files and classes (notably the
[Juju GUI](https://jujucharms.com/juju-gui/) charm) in sensible ways.  In the
case of Warren, though there weren't obvious break points, and yet the file
still feels relatively long.

## What's next

In the next post, I'd like to go more in depth on the process of developing a
charm.  That means going into `debug-hooks`, `juju ssh`, and a few other
commands that are useful for developing and debugging a charm.
