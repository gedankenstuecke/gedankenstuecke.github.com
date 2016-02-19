---
title: "Stepcounting: Fitbit vs. Fuelband"
layout: post
date: 2013-02-07 20:32
tag: quantifiedself
blog: true
#star: true
---
About two weeks ago I posted a comparison of the step data I've collected through the [*Fitbit*](http://fitbit.com) and the [Nike+ *Fuelband*](http://www.nike.com/us/en_us/lp/nikeplus-fuelband) over a timeframe of about two months on the [QuantifiedSelf blog](http://quantifiedself.com/2013/01/fuelband-vs-fitbit-do-they-agree-on-steps/). For those of you who haven't read it,{" the tl;dr is: On most days the *Fuelband* counts much less steps than the Fitbit does "} and contrary to my initial belief the recent firmware updates of the *Fuelband* didn't help at all to bring down the difference between both devices. [Ernesto on the other hand found that both counts are quite close](http://quantifiedself.com/2013/01/nike-fuelband-vs-fitbit-step-tracking-are-they-the-same/), while [Austin's results are quite similar to mine](http://ajaqs.wordpress.com/2013/01/22/fitbit-vs-fuelband/).

Reading those posts I noticed one difference in the way data was collected: While Austin & I did wear the Fuelband on our dominant wrists, Ernesto wore his on the non-dominant arm. My theory was that the algorithms applied in the *Fuelband* might play a role in why there might be a difference. The *Fuelband* does not only count steps but also awards *Fuel points* for activities which are not steps. So it could be that the algorithm discards valid steps if you move your dominant arm around too much while walking. Fortunately there's an easy way to test this by just wearing the *Fuelband* on the other wrist for a couple of days.

So I put the *Fuelband* onto my non-dominant wrist for two weeks and did the same comparison as for the *Quantified Self* posting. The graph is quite simple: The x-axis gives the different days, the y-axis gives the difference between the *Fitbit* and the *Fuelband*. On days with positive values the *Fitbit* counted more steps, on days with negative values the *Fuelband* counted more steps. Blue bars are days on which the *Fuelband* was worn on the dominant wrist while orange bars are days on which the *Fuelband* was worn on the non-dominant wrist.

Just by looking at the graph it seems clear that this doesn't really make a difference. And after doing a standard t-test it's also clear that there's no statistically significant difference between both conditions. So: Nope, changing your wrist will not make your *Fuelband* count more steps. But...

There's a clear difference in *Fuel points* awarded for each step between the different conditions. The y-axis now shows the ratio of steps to *Fuel points*. Wearing the *Fuelband* on the non-dominant arm it takes more steps to achieve a single *Fuel point*. When it's worn on the dominant arm the *Fuelband* on average awards a *Fuel point* after 3.2 steps, when worn on the non-dominant arm it takes 4.5 steps (following the t-test this is a statistically significant difference).

That makes sense: As the non-dominant arm is getting used less during the day there are less *Fuel points* awarded overall. By combining both tests we can now also see that the algorithms applied by the *Fuelband* don't drop valid steps. If you're active without walking it will award you *Fuel points* without counting or discounting steps. So: If you want to get the most *Fuel points* you should wear the *Fuelband* on your dominant arm, if you want to challenge yourself and make it harder to earn points you should go with the non-dominant arm. Stepwise it doesn't make a difference. If you want to play around with the data for yourself it can be found below.
