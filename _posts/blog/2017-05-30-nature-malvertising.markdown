---
title: "When Nature pushes Malvertising"
layout: post
date: 2017-05-30 01:00
tag: scientific publishing
blog: true
---
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">«Is science only for the rich?» *charges ~200€ for a yearly, personal subscription*  ¯\_(ツ)\_/¯ <a href="https://t.co/MqYPuefkZ4">https://t.co/MqYPuefkZ4</a></p>&mdash; Bastian Greshake (@gedankenstuecke) <a href="https://twitter.com/gedankenstuecke/status/869180878198591489">May 29, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

In the process of doing research for a snarky tweet I was looking for the yearly subscription costs of *Nature*. In itself not an easy task, as the corresponding page one finds via Google is devoid of content. But something even more weird happened, as I was greeted by some scammy looking popup, which tried to push a *Chrome* extension to the unsuspecting user in the most annoying way: Playing sounds, forced dialog popups, images that look like real popups and all that for the ironic promise to make you get rid of advertisements.

![popup](/assets/images/nature-malvertising2.png)

Which in sum doesn't scream ***malware*** at all, right? At first I suspected that some of my own *Chrome* extensions or system would be to blame for this. So I went through removing all Chrome extensions and the issue remained. And then I reproduced the same thing on a different machine with a different installation of *Chrome* and a different operating system. And sure enough, the *Nature* website, at least on some occasions, leads you to this badly hidden try to install dubious things on your computer.

[![popup](/assets/images/nature-malvertising1.png)](/assets/images/nature-malvertising1.png)

Intrigued I started with a simple [*whois*](https://www.whois.com/whois/yogachallengepix.us) for the domain from which the popup arises. And lucky enough, the site is hosted by a gentleman called *Anatoliu Golovin* from Moscow. Some further googling showed, I'm not the only person who has made indirect contact with that person, [David Gil De Gómez Perez blogged about his encounter with the same kind of attack](http://studiosi.es/malware-basics-analyzing-a-possible-malware-inside-a-chrome-extension), using a different vector, two weeks ago and describes the same kind of attack, which seems to combine the [forced *Chrome* extension installation](https://blog.malwarebytes.com/cybercrime/2016/11/forced-into-installing-a-chrome-extension/) with [a less sophisticated version of the malvertising approach](https://blog.malwarebytes.com/cybercrime/2017/05/roughted-the-anti-ad-blocker-malvertiser).

Which means it most likely comes down to this: Someone is buying online advertisements to get you to install malware on your end. Which end up on the *Nature* website, where you wouldn't expect to find such things. But it seems that there's no incentive for *Nature* to really check what kind of advertisements are running on their website, as long as it's a nice financial supplement to their subscription fees. I'm [hardly](https://twitter.com/chlobro12345678/status/869302155710255107) the [first](https://twitter.com/niederhuth/status/869188314255032320) person to notice these things. In fact: At least 3 days ago someone reported the same thing to the [Twitter-account of *Nature*](https://twitter.com/ResearchDepos/status/868273381971513344), to no avail.

In the end it looks like *Nature*, proud to be one of the oldest scientific journals around, seems to peddle the same kind of malvertising one would expect to see on dubious porn and file sharing sites. Funny enough, I've so far never seen this happening on *Sci-Hub*…
