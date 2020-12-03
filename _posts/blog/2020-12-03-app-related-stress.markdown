---
title: "Measuring app-related stress"
layout: post
date: 2020-12-03 01:00
tag: open humans, personal data, quantified self, productivity, stress, heart rate, wearable, apple watch, apple health
blog: true
---
<p style="text-align:center;"><img  src="/assets/images/2020-12-02-header.png"/></p>

**tl;dr: Differences in my heart rate depending on the applications I use are small**

With France being back in a second lockdown (though the rules are a bit less strict this time around), I thought it would be interesting [to look at the impact of different habits](/lockdown-effects/) a bit more. With most meetings still being remote (or at best being hybrid) – and significant portions of the day being spent in front of a screen regardless of that – I was __wondering if using different applications on my computer is stressing me out differently__.

There is some literature about how mental stress and different mental tasks can lead to to changes in heart rate[^1],[^2]. Given that I'm a) running _RescueTime_ – which records the applications I use & when use them – and b) wear an _Apple Watch_ throughout the day – which records heart rate recordings in regular intervals – it should be possible for me to align those records and see if I have a higher heart rates when using some applications.

Merging those records to align individual heart rate records with the recording intervals of _RescueTime_ wasn't too hard, though it required some decisions about which records to include: As _RescueTime_ bins time into 5-minute long windows and then tells you how many seconds you used a given application within that window I had to figure out under which conditions to associate a heart rate record with a given application. For simplicity, I decided to link a heart rate record with an app usage record if an application was used for more than 1/3rd of the time inside that window, meaning that a single heart rate record can be linked to at most 2 different applications [^3].

Below you can find the results, broken down into _productivity level_ categories, _application categories_, and the _applications_ itself [^4]:

[![](/assets/images/2020-12-02-hr_app_overview.png)](/assets/images/2020-12-02-hr_app_overview.png)
<small>Red vertical bar gives the average heart rate reading. Click to make larger</small>

On the productivity level, there aren't a lot of differences to be seen given how similar the distributions are. On the level of application categories the picture isn't too different, though individual categories like _editing & IDEs_ (aka coding) fall below the average, while others like _Presentations_ seem to fall above the average heart rates.

A slightly more interesting picture emerges for the most common individual applications, mostly as the spread is slightly bigger there: Some coding-related applications (like _Atom_ and _GitHub_) are generally associated with slightly lower heart rates, while others (like _RStudio_) are showing higher heart rates. Which __makes me wonder whether _R_ (mostly written in _Rstudio_) stresses me out more than _Python_ (mostly written in _Atom_)?__ A small hint of this appears in the bi-modal distribution of the _notebooks.openhumans.org_, which I use to both write _Python_ and _R_.

A similar bi-modal effect can be seen for preparing & giving presentations in _Keynote_, which averages to a rather high heart rate. __Could it be that the lower heart rate values are for _preparing_ a presentation, while higher values are _giving_ presentations__ (hello stage fright)?

Another interesting bit: While _Netflix_ scores the highest average heart rate, the _VLC Media Player_ ranks as the application with the lowest average heart rate (amongst the one viewed here), making me wonder what what kind of content I watched in them!

Interested in having a look at your own data? __[The code for all of this is available so that you can give it a try](https://exploratory.openhumans.org/notebook/166/), happy exploring!__

[^1]: [Vrijkotte T et al. _Effects of Work Stress on Ambulatory Blood Pressure, Heart Rate, and Heart Rate Variability_ (2000)](https://www.ahajournals.org/doi/full/10.1161/01.HYP.35.4.880)
[^2]: [Taelman J et al. _Influence of Mental Stress on Heart Rate and Heart Rate Variability_ (2009)](https://link.springer.com/chapter/10.1007/978-3-540-89208-3_324)
[^3]: This is a trade-off between _accuracy_ and the _sensitivity_. E.g. I could decide to require an application to be used exclusively for the whole 5 minute interval, but due to task switching this rarely happens, leading to a much smaller data basis.
[^4]: Shown are only the applications and application categories that are most-frequent (having at least 8 hours of usage)

### Appendix & Footnotes
<small>You can also find bigger versions of the individual sub-graphs below</small>
[![](/assets/images/2020-12-02-hr_app_level.png)](/assets/images/2020-12-02-hr_app_level.png)

[![](/assets/images/2020-12-02-hr_category_level.png)](/assets/images/2020-12-02-hr_category_level.png)

[![](/assets/images/2020-12-02-hr_productivity_level.png)](/assets/images/2020-12-02-hr_productivity_level.png)
