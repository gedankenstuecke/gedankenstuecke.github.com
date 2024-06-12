---
title: "Interpreting the quantified self"
layout: post
date: 2024-06-12 01:11
image: /assets/images/2024-06-12-watchos-vitals.png
image_alt: "a marketing image of an apple watch, showing the vitals interface with a row of dots and reading 'over night vitals: 2 outliers'"
tags: 
- citizen science
- quantified self
- personal science
- wearables
blog: true
last_modified_at: 2024-06-12 11:11
---

[![a marketing image of an apple watch, showing the vitals interface with a row of dots and reading 'over night vitals: 2 outliers'""](/assets/images/2024-06-12-watchos-vitals.png)](/assets/images/2024-06-12-watchos-vitals.png)
<small>Image: Apple</small>

As is custom, _Apple_ gave a sneak peek into the new features that will come with the new versions of their operating systems later this year at the WWDC. This includes updates to the [OS features for the Apple Watch](https://www.gearpatrol.com/fitness/apple-watch-watchos-11/), where a particular bit caught my attention: the _Vitals_ feature (see image above). 

The idea for this feature seems to be to provide an overview about the overnight values of heart rate, respiratory rate, (wrist) temperature, sleep duration, and blood oxygen values. If 2 or more values will be outside the "_normal_" range it'll inform the wearer about the outliers. According to the news reports I've seen, it might also suggest potential "causal environmental features", but let's ignore those for a second.

Instead, I want to focus on the idea of uncovering (and then surfacing) the outliers for the individual using the wearable. While the reporting describes those "_normal ranges_" for the different vital signs as "_ideal_" parameters, my strong suspicion is that those are not _neutral_ values but rather are centered on the _observed normal_ for each wearer, as each of us will have a different baseline. 

[![a screenshot of quantified flu, showing a longitudinal graph of dates on the X, with heart rate values on the Y. A dark and light grey color give the 1st and 2nd standard deviation](/assets/images/2024-06-12-qf.png)](/assets/images/2024-06-12-qf.png)
<small>A screenshot of my own <em>Quantified Flu</em> graphs.</small>

This mimicks the [individual-centered approach we took back in 2020](https://www.jmir.org/2021/9/e28116/), when we developed [_Quantified Flu_](https://quantifiedflu.org/report/list/member/79502270), which combines manual symptom tracking with physiological data from wearables such as _Oura_ or Apple Watch. Based on the observed data for an individual, we calculated the standard deviations to give people visual feedback for how much their value deviate from their personal normal.

Based on this idea that  we developed through _Quantified Flu_, I [also created my own _Vitals_-like heuristic](https://tzovar.as/heuristic/) to provide more insight into my own data. My own heuristic was based on four physiological values: heart rate, respiratory rate, heart rate variability and (finger-measured) body temperature changes. For each of those, I [calculated the distribution of observed values to then count how many/how much each of those values deviated from the baseline and validated it with known sickness-days](https://wiki.openhumans.org/wiki/A_heuristic_for_feeling_fine).

The interesting bit to me here is not necessarily that _Apple_ basically uses the same approach for their _Vitals_ app as I made for myself – though, that does feel like some nice external validation - but the point of view that their approach takes (at least implicitly): _Quantified Flu_ and my further heuristic development are rooted in a tradition of [_Personal Science_](https://wiki.openhumans.org/wiki/Personal_science), in which individuals take a first-person view in trying to understand
any data that they collect about themselves. Which (at least to me) means not centering the physiological metrics as the be-all and end-all, but rather recognizing the limitations of such metrics when they are devoid of context. 

<p id='fn1-anchor'>In particular, this really indicates how central the individual is in making sense of any of these data: All data describing people is limited, and this is particularly true for wearable, sensor-derived physiological data. Is your heart rate elevated because of having an infection? Because of having had a couple of drinks yesterday? Stress at work? Having a broken heart? <strong>No sensor will know, but the person wearing the sensor will very easily be able to reason about those numbers</strong><sup><a href="#fn1">[1]</a></sup>.</p> 

This focus on _individual sense-making_ stands in stark contrast to the tech zeitgeist: 'AI' is still everywhere, including in _Apple_'s own presentation, which of course had to cram their own 'AI' solutions into all of their operating systems. In that sense, the _Vitals_ approach highlights a different path that we could be taking - one that does not rely on increasingly complex models that hunger for data, water and energy but instead looks at simple outliers and then uses our own intelligence for
making sense of them. In recognition of the fact that situated, personal knowledge is really hard to emulate and outperform.  


<p id='fn1'>
<small>
<a href="#fn1-anchor">[1]</a> As a fun aside/anecdote that I never tire of telling: The same is true not only for passively collected sensor-data, but also actively reported data. With <em>Quantified Flu</em>, one person reported a drastic increase of <em>coughing</em> as a symptom alongside heavily increased resting heart rate. All of that would typically indicate an infection. The real reason the person reported in the free-text comment field: They had lost their job due to the
lockdowns – and were now sitting at home smoking a lot more than they used to due to the stress. 
</small>
</p>
