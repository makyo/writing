---
counts:
    characters_real: 7009
    characters_total: 8638
    file: ./posts/tech/_posts/2015-04-21-done-vs-finished.markdown
    paragraphs: 21
    type: jekyll
    words: 1592
layout: post
title: Done vs. Finished - On Code Reviews and Learning Languages
---

As part of my yearly goals at work, I've been doing more and more work in Go.
It's a pretty fantastic language, I've found, and fairly easy to pick up, minus
a few little caveats (goroutines took me a bit to wrap my head around).  A lot
of this has been taking place in a little project,
[jujusvg](https://github.com/juju/jujusvg), which takes a Juju bundle and
outputs an SVG representation of that bundle for displaying in webpages such as
[jujucharms.com](https://jujucharms.com).  This was a project I started on a
sprint and have been shepherding through its growth over the last several months
with the help of several members of our team who are more well-versed in Go than
I am.

In particular, a recent branch of mine has brought up a lot of interesting stuff
to think about, especially when it comes to learning a new language and what it
means to be finished.

The goal with [#23](https://github.com/juju/jujusvg/pull/23) was to allow
embedding of charm icons in the bundle SVG so that the diagram was totally self
contained, not requiring any requests to outside assets such as the icon SVGs
through SVG's `<image>` tag.  The main benefit to this is that anyone can build
a bundle diagram and embed it anywhere - a slideshow, a webpage, whatever -
where it will work without network access.  In addition to this, we can now do
some checking on whether or not an icon exists, is really an SVG, and so on.  In
the case of the charm store, we can also embed icons by fetching them directly
from GridFS, rather than over HTTP, which will be a significant speed boost.

Within our projects on the Juju UI Engineering team (and, I suspect, elsewhere
in the company), we utilize a system of reviews required to land code.  In
particular, we require at least one QA, and at least two positive reviews in
order to land any branch.  If there are any negative reviews, they must be
addressed and received positively before the branch can land.

In the case of #23, the process of reviewing stretched out over 21 days and 124
comments, which is exceptionally long for a branch to live in review (we
generally aim to have a branch completed - from start to reviewed to landed -
within one day), but in this case, I think that the reviews helped me to learn
how to be a better Go programmer, and a better programmer after all.

This, I'm sorry to say, felt slightly unusual for me.  I think that the industry
of software development is strongly imbued with "guess culture".  In this
dichotomy, social interaction between actors is divided into either "guess
culture" or "ask culture", which describes the ways in which the actor will act
when confronted with a problem they do not know how to solve.  In software,
you're expected to either a) know how to solve the problem, or b) know how to
figure it out yourself.

This was shown to me early on in an interview question:

> Given a private jet in a hanger, find out how much it weighs.

Answers ranged from "cut it in half again and again into smaller parts until you
can place one on a scale" as a sort of Zeno's Paradox of plane-weighing, to
"fill it with a known amount of jet fuel and fly it until it crashes."

The answer that the interviewer was looking for, however, was "Google it".

I think this is an interesting question when it comes to the idea of ask versus
guess culture.  On the one hand, it points to the obvious solution of "sure,
it's good to be able to solve a problem given limited resources, but don't be
afraid to just ask," but it also highlights, in a simple-minded sort of way,
that you should be able to sort the problem out by yourself without opening
yourself up to criticism by asking what might be a stupid question.

Counter to guess culture, though, is the concept of ask culture, wherein it's
acceptable to ask for help, clarification, or instruction.  There's a lot bound
up with this, though, and the ideas of machismo so prevalent in software
culture, as well as the idea that we should leave university with 100% of what
we need to know in order to be successful, both of which are ludicrous when
investigated with the least amount of scrutiny.

While I scoffed at it early on, I think that Agile methodologies (we follow a
Lean Kanban style) do a good job of subtly encouraging a shift from guess to ask
culture within a team at the very least, and sometimes within a whole company.
The idea behind Agile isn't specifically to provide upper management with
burn-down charts and instant results, but to create an environment where
knowledge-sharing, rather than knowledge-hoarding, is the norm.  A lot of the
other aspects of Agile fall out from that: cross-training, quick turn-around,
daily stand-ups, and so on.

In the case of reviews, the requirement to get two thumbs up and address any
concerns means that a conversation is automatically required between developers.
I think that worked really well for us on this branch, not just because I got to
be a better Go developer, but also because others on the team know exactly how
to implement my proposed API changes, and get to understand just how the library
itself works on a lower level than they might if they just looked at the
example.go file.

The only place we found ourselves stumbling happened to be purely mechanical:
GitHub, while it's great in a lot of respects, did not lend itself well to this
review turn-around.  Other tools, such as Rietveld, allow both inline comments
as well as inline responses, and unified messages back and forth.  With GitHub,
I found myself having to reply to each comment left on my branch with "done" in
order to track which I had responded to in code, which meant that all of my
coworkers got a list of emails containing simply "done" and a link to the pull
request.  Better, I think, to have a single email sent with my replies
addressing each comment once I pushed my subsequent branch.  Again, it's simply
a mechanical thing, and not that tough to deal with, but I feel as though there
are other code review tools out there that work better than GitHub's.

What it really came down to, after all of the reviews, was that I needed to be
more than just productive in Go, I needed to be fluent.  There's a lot that can
be said either way when it comes to coding styles, but there are some objective
benefits to language fluency.  In particular, my approach to fetching icons took
the following path

1. Fetch synchronously, one icon at a time, over HTTP in all cases.
2. Implement `IconFetcher`s for retrieving icons how the user specifies,
defaulting to HTTP
3. Allow fetching icons concurrently using goroutines, using one set of channels
for synchronization and another for errors.
4. Allow fetching icons concurrently using goroutines and
[WaitGroups](http://golang.org/pkg/sync/#WaitGroup) to simplify synchronization.
5. Since concurrency was either on or off, threads could get out of hand, so
allow fetching icons concurrently up to a limit using
[github.com/juju/utils/parallel](https://godoc.org/github.com/juju/utils/parallel),
which vastly simplifies the code overall path of the code, abstracting out a lot
of (but not all of - we're not trying to be magical) the asynchronous patterns.

Each of these iterations was shepherded along through suggestions and code
snippets from my reviewers.  The point being was that I was writing Go code in
order to be productive while not yet being fluent.  Through the help of others,
I was able to step all the closer to Go fluency so that I could make a branch
that did more than just get the job done by any means necessary, but also do
what I needed to in a clean, easy to read, and efficient manner, a perfect
example of utilizing an ask instead of a guess method.  Which brings me to my
last point: done versus finished.

When I first proposed the branch, even though I proposed it as a WIP branch,
knowing that there would be comments, it was technically done.  It fetched all
of the icons needed for a bundle, embedded them in the SVG diagram, and produced
a valid output.  However, it wasn't *finished*.

If we had wanted or needed to iterate on this branch faster than we eventually
did, then I'm sure we could've landed it as-is on each go-around with a
follow-up card created to represent future work.  My activity graph on my
profile might've looked a little more full, but I think that having something
finished was much more important, for a library such as this.  We didn't want to
leave things hanging too long and risk releasing something which wasn't
complete, even if it did what it said on the tin.

The responses that I got on my code review were basically all about that.  It
was a little painful to have a branch lingering for 21 days, but on the other
hand, it's much more satisfying to land something that I'm proud of than
something I feel more like sweeping under the rug.  Through the help of Roger
and Martin, I was able to do that.  Not only was the branch more finished than
it was simply done, I became a better developer in the process, learning more
about what is the Go-ish thing to do specifically as well as what is a good
CS-ish thing to do generally.
