---
counts:
    characters_real: 1587
    characters_total: 1986
    file: ./posts/tech/_posts/2019-01-09-sparkleup.md
    paragraphs: 15
    type: jekyll
    words: 367
layout: post
title: Headless SparkleShare with sparkleup
---

I found myself wanting a headless version of SparkleShare, and was stymied by [the lack thereof](https://github.com/hbons/SparkleShare/issues/1683). I wanted to keep some IRC and MUCK logs in a SparkleShare project, but I run my clients for those in a `tmux` session on a server. However, that server lives elsewhere, and has no X, so, alas, the usual SparkleShare clients were right out.

My solution was a combination of ones I've seen elsewhere, and I'm calling it sparkleup because...I dunno, it sounded fun. It looks like this:

```
sparkleup/
├── projects/
│   └── logs*
└── ssh*
```

`logs.sh` is a simple script to be run by cron, but before I get to that, a minor diversion into git land.

My ssh key on the server requires a password --- as do all of mine --- which makes interacting with SparkleShare programatically difficult. After all, if I just do `dazzle link` with my normal key, then every time I try to commit to the project, I'll be asked for a password. I'm not scripting that.

The solution was to generate a new SSH key with no password and `dazzle link` that. However, since that key lives in `~/.ssh/sparkle`, git won't pick up on it by default, because SSH won't pick up on it by default. Add to that the fact that you can't select an SSH key for git to use and...bleh.

So the solution was two layered. First, I created a new `ssh` for git to use. `sparkleup/ssh` is a script to be passed to git with the `GIT_SSH` environment variable. It looks like:

```bash
#!/bin/bash

ssh -i ~/.ssh/sparkle $@
```

That lets me write a job that will, without any interaction from me, commit and push to a SparkleShare project. That's one script per SparkleShare project I need to manage this way, each of which looks like:

```bash
#!/bin/bash

export GIT_SSH=/home/makyo/sparkleup/ssh
cd /home/makyo/logs
pwd
git add .
git commit -am "update from sparkleup"
git push origin master
```

Then I add a crontab line to run that daily (or however frequently I need to update the project):

```
# m h  dom mon dow   command
  0 5  *   *   *     /home/makyo/sparkleup/projects/logs
```

It's not really the type of thing I can turn into a separate project, but maybe it helps someone out with similar problems!
