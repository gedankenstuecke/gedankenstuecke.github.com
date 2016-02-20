---
title: "Quantified Self"
layout: post
date: 2016-02-19 22:10
tag: quantifiedself
projects: true
description: "Analyzing yourself"
jemoji: '<img class="emoji" title=":crystal_ball:" alt=":crystal_ball:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f52e.png" height="20" width="20" align="absmiddle">'

---
> The unexamined life is not worth living.

- [Socrates](https://en.wikipedia.org/wiki/The_unexamined_life_is_not_worth_living)

I'm a huge fan of the *Quantified Self* movement and try to collect and mine as many personal data sources as possible. And visualizing the data to learn from this is the part I really enjoy.

#### Geolocations
[![my_routes](/assets/images/qs_travel_plot_routes_thumb.png)](/visualize-geolocations/)

I did some work into visualizing my own movement patterns using the data collected by *Swarm* and *Twitter*, showing how I travelled the world over the last years. [There's a more detailed explanation including the code](/visualize-geolocations/).

#### Chat/Twitter Behavior
I also started to look into my written communication using instant messaging logs, looking at how my chat behavior fluctuates over time and varies between days. The plot below is an example using data collected over a time of around 3 years and an array of different chat protocols. It shows the number of messages sent & received on different weekdays/hours.

![chat data](/assets/images/qs_chatresults.png)

[![twitter data](/assets/images/qs_twitterresults_thumb.png)*click to show full size*](/assets/images/qs_twitterresults.png)

I did a similar thing using my nearly 75.000 tweets collected starting April 2008, showing how the number of tweets goes down during night, while the relative frequency of replies/mentions increases during this time. Unfortunately those chat/twitter results aren't really written up so far. But the code is on GitHub as well. See [here](https://github.com/gedankenstuecke/chatanalysis) and [here](https://github.com/gedankenstuecke/gchat_analysis).

#### Activity / Sleep Tracking
![sleep data](/assets/images/qs_sleep_plot.png)
I started wearing my first *Fitbit* in early 2012, tracking my daily sleep and movement as well as my weight. Since then I moved over to an *Apple Watch* for tracking, but the idea remains the same. In between I wore other trackers as well and [did some comparative work on them](/stepcounting-fitbit-vs-fuelband/).

I also looked into how [sharing a bed with different people influences my sleep](/on-getting-sleep/) (see the graph above, spoiler: it doesn't). And last but not least: Gamification really seems to work for me, which you can see if you plot the histogram of my daily step counts. The red vertical lines give the breaks at which you can earn achievements on *Fitbit*, go figure.

![step data](/assets/images/qs_stepcount.png)
