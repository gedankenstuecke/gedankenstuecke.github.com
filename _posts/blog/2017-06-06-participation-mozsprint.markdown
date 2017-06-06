---
title: "openSNP at the #mozsprint"
layout: post
date: 2017-06-06 01:00
tag: mozilla global sprint
blog: true
---
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The last two days for us. Thanks to everyone who made this such a great <a href="https://twitter.com/hashtag/mozsprint?src=hash">#mozsprint</a> 🙏🎉 <a href="https://t.co/rzvHcaM5tV">pic.twitter.com/rzvHcaM5tV</a></p>&mdash; openSNP team (@openSNPorg) <a href="https://twitter.com/openSNPorg/status/870679611436261376">June 2, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[Philipp](http://www.twitter.com/PhilippBayer) and I again participated in the [*Mozilla Global Sprint*](https://mozilla.github.io/global-sprint/), which took place on 1st and 2nd of July. Last year we already participated, with the #mozsprint being the big finale of our participation in the *Working Open Workshop* and the *Mozilla Open Leadership Cohort*. This year we not only switched sides and both mentored people in the programs (which was awesome, I can't wait to do the post-#mozsprint calls with the mentees to hear how it went), but again took the chance to get some uninterrupted time to work on [*openSNP*](https://opensnp.org). Split between Perth and Frankfurt we don't often get the chance to work side-by-side, even if it's only virtual (damned be those time zones). No wonder that I was so excited to get started on the first day, that I accidentally started my way into the office on bare feet👣.

![popup](/assets/images/2017-mozsprint-opensnp-wide.png)

This year we had prepared a good list of big items we wanted to tackle. The biggest being the redesign of *openSNP*. Since we started the website in 2011 the frontend had aged a good bit, with the design being more or less unchanged since the start. Which also meant that we were one of the last sites on the web that didn't support any responsive interfaces, which made using *openSNP* a pain if you happened to access it from your smartphone or tablet.

[Mateus](https://github.com/MateusJabour), one of our *Google Summer of Code*-student did a great job on implementing the last version of *Bootstrap* into *openSNP*. Unfortunately, there were a good number of merge conflicts and bugs that were a result of the underlying code base changing too much during the *Summer of Code*. Having the two days of the *#mozsprint* was a great opportunity for us to finally merge the wonderful new design into the production system 😍.

Which means you can finally browse *openSNP* from your phone without having to worry about your thumbs getting sore from scrolling so much in all directions. And we even managed to [fix most of the bugs](https://github.com/openSNP/snpr/issues/375) that came with the makeover 🐛🎈.

![popup](/assets/images/2017-mozsprint-opensnp-responsive.png)

Another big thing, that was a headache each time we wanted to adjust our email system, was the poor layout of our email templates, which was the opposite of *Don't Repeat Yourself*. I spent a good amount of time to finally implement a proper templating system, which means changes to any emails sent to the openSNP users will no longer mean a day full of suffering. 🎉 And one thing that must have made [Helge](https://github.com/tsujigiri/) super happy is the increase of our test coverage which has [increased by some percent since the *#mozsprint*](https://github.com/openSNP/snpr/pull/388).

But the best part of the sprint is that new people will join you in contributing, like [Amiefairs](https://github.com/amiefairs), who [fixed our broken grammar](https://github.com/openSNP/snpr/pull/369) in so many places 🖋. Or [Bverpaalen](https://github.com/bverpaalen), who helped to significantly improve our documentation 🖊. In the same spirit I moonlighted a bit on [betatim's](https://github.com/betatim) [command line interface for the Open Science Framework](https://github.com/dib-lab/osf-cli) 🖥..

![popup](/assets/images/2017-mozsprint-impact.png)

The numbers for *openSNP* are really cool, not only contributed 6 people in 45 commits, closing 25 pull requests and 10 issues, but we could also shrink our code base by a good 4,000 lines of code 💖! Thanks to all of the contributors who spent their time helping us out. I already can't wait for the next sprint, to work on the next big projects across all time zones!

![thanks](/assets/images/2017-mozsprint-thanks.gif)
