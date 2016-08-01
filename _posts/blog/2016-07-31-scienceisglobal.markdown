---
title: "#ScienceIsGlobal"
layout: post
date: 2016-07-31 01:00
tag: openscience
blog: true
---

[![header](/assets/images/scienceisglobal_thumb.png)](/assets/images/scienceisglobal.png)

Last week the *The Royal Society* issued [a joint statement about the importance of the international nature of research](https://royalsociety.org/topics-policy/publications/2016/european-academies-statement-science-is-global/?utm_source=social_media&utm_medium=hootsuite&utm_campaign=standard) along with national academies across the UK and Europe. At the same time they started the hashtag *#ScienceIsGlobal* on *Twitter*, where individuals reported what nationalities are collaborating in their labs.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">For openSNP (I bet I forgot some country!): 🇨🇦🇧🇷🇦🇺🇩🇪🇺🇸🇮🇳🇬🇧 <a href="https://twitter.com/hashtag/ScienceIsGlobal?src=hash">#ScienceIsGlobal</a></p>&mdash; Bastian Greshake (@gedankenstuecke) <a href="https://twitter.com/gedankenstuecke/status/758254940343140352">July 27, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I, and many others, reported their lab's composition using the emoji flags. I assumed those should be easy to parse those flags out of the Twitter stream, to create a network showing the international collaborations that happend across the globe with people from so many different countries. Because I was too lazy for anything else I set up the [Twitter Archiver](https://chrome.google.com/webstore/detail/twitter-archiver/pkanpfekacaojdncfgbjadedbggbbphi?hl=en), which stores all the data it collects in a Google Docs spreadsheet. [Which gave me around 9000 tweets at the time, all publicly stored here](https://docs.google.com/spreadsheets/d/1NRxvV0JP_eF98WUfbkpj1iMBlFEe25JGKGhblM6U3KQ/edit?usp=sharing). And as the parsing goes on the data set will automatically grow over time.

Using some rather ugly *Python* code ([to be found here, along with the resulting output](https://github.com/gedankenstuecke/scienceisglobal)), I extracted the emoji-flags from those tweets as a simple adjacency list, to import them into [*Gephi*](https://gephi.org). Only to figure out that UTF-8 is terrible and that there's apparently no way to make *Gephi* display the flags. If I'm wrong on that please let me know how to make that work, as I spent like half a day of my life fighting this battle. So instead I ultimately gave up and converted the more interesting flags to (boring!) text instead, which could then be somehow displayed on a network.

The tl;dr of the resulting graph: Science is truly global, as all you see is this ball of wool, for many countries there are edges leading to all other countries in the graph. Though there is some heavy focus on the usual (western, rich, industrialized) suspects. If you want to explore the data yourself, maybe even coming in with more network knowledge than I have, [please play around with the data](https://github.com/gedankenstuecke/scienceisglobal)!
