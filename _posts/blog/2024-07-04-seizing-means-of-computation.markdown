---
title: "Seizing my means of computation"
layout: post
date: 2024-07-04 16:00
image: /assets/images/2024-07-04-fence.jpg
image_alt: "a black and white photo of a fence overlooking some train tracks"
tags: 
- open source
- foss 
- floss 
- linux
- framework
- darktable
blog: true
last_modified_at: 2024-07-04 16:00
---

[![a black and white photo of a fence overlooking some train tracks](/assets/images/2024-07-04-fence.jpg)](/assets/images/2024-07-04-fence.jpg)

Or: Why 2024 is my personal _year of Linux on the desktop_

According to Doctorow, [_enshittification_ might be coming _for absolutely everything_](https://en.wikipedia.org/wiki/Enshittification).
I've more and more felt this was for my own digital devices and means of digital production: Be that Apple's just increasing love for walled gardens - especially since having the opaque app review processes (c.f. [cpython's `--with-app-store-compliance`](https://github.com/python/cpython/pull/120984)), Microsoft's (successful?) attempts to [monopolize open source through GitHub & VS code](https://ghuntley.com/fracture/), or Google's enclosure of email, maps, and even the browser market. 
And then there's Adobe's lock-in through its subscription model and maybe the [final loss of trust over whether and how they use their customer data to train 'AI'](https://www.theverge.com/2024/6/7/24173838/adobe-tos-update-firefly-generative-ai-trust).

While none of these troublesome developments are really _new_, I feel like they now collectively have reached my personal tipping point — at which it felt like too much of cognitive dissonance between my own interests in contributing to an open and collectively owned digital infrastructure, and the closed tools I used for building those. 
Which is why I've recently started to divest my personal computing environments from closed systems, and started to move towards free/open software alternatives where possible.
Luckily, thanks to efforts by folks like Robert W. Gehl (of [_FOSS Academic_](https://fossacademic.tech/)), [David Llwellyn-Jones](https://www.flypig.co.uk/blog), and projects like the [_Opt-Out Project_](https://www.optoutproject.net/) or [_Switching Software_](https://switching.software/), there is also plenty of documentation how to do this. 

To dip my toes (back or deeper) into it, I started out by replacing _VS Code_ with good old `vim` a few weeks ago, and have been refreshing my muscle memory for all the shortcuts ever since. 
Similarly, I've started to replace _Google Maps_ with [_Organic Maps_](https://organicmaps.app/), which uses _OpenStreetMap_ for its maps (and which also provides an easy way to make minor contributions to it). 
The change I was most worried about was how I would replace Adobe's _Lightroom_ as my main photo editing suite (as that was always one of the main drivers to stick with Mac OS for me). 
But, after [seeing the great work done with _Darktable_ on Mastodon](https://mastodon.social/@darktable) I gave that a go and was a) impressed with the quality of the output and b) more than happy with using that for my photo workflows.

<p id='fn1-anchor'> 
And so a couple of weeks ago I ordered a machine to replace my aging MacBook - the DIY version of the 13" Framework Laptop, to also benefit from the modular repairability going forward. 
The assembly and installing Ubuntu were both without any issues, and since then I've been using it as my main (non-paid work) machine! 
And (as I had hoped), my day to day kept being nearly<sup><a href="#fn1">[1]</a></sup> drama free!
I've already successfully scanned & edited the first ~10 rolls of film using VueScan & DarkTable (some of which <a href="https://www.flickr.com/photos/gedankenstuecke/">are already on Flickr</a>).
If you're looking for a free & open alternative to Lightroom I'd strongly suggest giving it a try. 
The paradigms to editing are a bit different to Adobe's, but nothing one wouldn't get quite quickly used to — I had used Lightroom for 15+ years and still managed to make the switch.
</p> 

I'm quite happy with the changes made so far, but of course I know that there's a lot of more things I could (and hopefully will) replace with more open alternatives in the future. 
Which I plan on, once I've made myself comfortable with the replacements done so far. Here's some rough next steps I already have on my roadmap:

1. Leave Google Mail for something non-Google
2. Move my own projects away from GitHub to a free alternative
3. In the very long run: replace iOS as my mobile OS

If you have recommendations for any of those, [drop me a line on Mastodon](https://scholar.social/@gedankenstuecke)!

<p id='fn1'>
<small>
<a href="#fn1-anchor">[1]</a> This was actually the one slightly less trivial thing, so this at least partially serves as my own reminder: My 35mm negative scanner - a Pacific Image Electronics PrimeFilm XA - didn't allow scanning as non-root with plug & play. I fixed this by adding <code>SUBSYSTEMS=="usb", ATTRS{idVendor}=="ID", ATTRS{idProduct}=="ID", MODE="0666"</code> into a freshly made <code>/lib/udev/rules.d/40-scanner.rules</code> file. The <code>ID</code> can be found via <code>lsusb</code>.
</small>
</p>
