---
title: "Getting started at Open Humans"
layout: post
date: 2017-11-22 01:00
tag: open-humans
blog: true
---
The first month in Berkeley – and with that also with [*Open Humans*](https://www.openhumans.org) – is slowly coming to an end. And while much of this time was spent wrangling various forms of organisational and bureaucratic ordeals (finding an apartment; making sure all visa stuff is in order; getting a Social Security Number; learning how to run away from earthquakes/mountain lions/active shooters), I got to dangle my feet into the *Open Humans* ecosystem quite a bit. And what better way would there be to get to know the whole thing than implementing my own project on *Open Humans*? With [*openSNP*](https://opensnp.org) we luckily [had planned to integrate with *Open Humans*](https://github.com/openSNP/snpr/issues/392) for quite a while already.

![](/assets/images/open_humans.png)

The integration of non-text phenotypes into *openSNP* was always a bit makeshift. Especially the integration of activity tracking data had deprecated significantly as *Fitbit* made changes to their interface that we never implemented on our end. *Open Humans* on the other hand was planned in a modular way from the start. Thanks to this the platform not only supports data from *Fitbit*, but also from a growing collection of further data sources like *Apple Health*. We had thus planned to allow our users to link their *openSNP* accounts to their *Open Humans* accounts. 🌉 This is not only nice for us on the *openSNP* team, as it allows us to maintain less code, but also for all ours users who no longer have to worry about uploading their data multiple times in different places! 👍

But [for various reasons](http://ruleofthirds.de/writing-up-a-phd/) we hadn't found the time to make this a reality so far. This finally changed this month, perfectly coinciding with the [*do-a-thon* of *OpenCon*](http://doathon.opencon2017.org/) (which I sadly missed in person this year). Over the day I could [lay the foundation](https://github.com/openSNP/snpr/pull/438) to connect *openSNP* and *Open Humans* to each other. After the *do-a-thon* I spent some more time to finalise the whole thing and since yesterday [our bridge is finally available](https://opensnp.org/openhumans) on [both services](https://www.openhumans.org/activity/opensnp/). 🎉 The first people have already connected their accounts and more are to come, enabling the best use of genetic and behavioural data through the these links. 🔗 

![](/assets/images/open_humans2.png)

You want to write your own project that integrates with *Open Humans*? I can now confidently say that it's so easy that even I managed to do it. 😂 But seriously, the [documentation on getting your own project connected to Open Humans](https://www.openhumans.org/direct-sharing/overview/) is pretty extensive and full of examples, making it pretty easy. Give it a try! If you have some idea for a project but would need some financial support for it [there are even mini grants of $5,000](https://www.openhumans.org/grants/) available. And last but not least: You have a project idea, but would like to bounce it off people – or want to find others who can help with it? I and a lot of other people are [available on the Open Humans Slack](http://slackin.openhumans.org/). 👍
