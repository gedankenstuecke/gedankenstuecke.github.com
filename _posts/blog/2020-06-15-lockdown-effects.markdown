---
title: "The effects the COVID-19 lockdown had on me"
layout: post
date: 2020-06-15 01:00
tag: open humans, personal data, quantified self, sleep, activity, productivity, coronavirus, COVID19
blog: true
---
<p style="text-align:center;"><img  src="/assets/images/lockdown_oura-header.png"/></p>

The COVID-19 confinement in Paris and France at large lasted from March 17th to May 11th, with comparatively strict measures on when you could leave your house, where you could go and for how long & when you could be outside. As a result a lot of folks, including me were forced to drastically change their daily routines, shifting to a home office approach. Around half-way through the lockdown I had started to look into what measurable effects it would have on my own behavior. Sparked by [this amazing blogpost by Paula Leonova](https://pleonova.github.io/shelter-in-place/) – which she highlighted during one of the _Open Humans_ community calls – I wanted to look into how the lockdown changed my own behavior in some different dimensions and whether I've bounced back from it, now that things are slowly going back to normal.

## The Man Who Stares at Screens

In a first step I wanted to check out how my "productivity" has evolved. Or rather, how many hours I spend in front of my computer, as [measured by RescueTime](https://www.rescuetime.com/). Since the COVID-19 pandemic started we've been very busy to get _Quantified Flu_ – [a collaborative self-tracking effort to see how wearables can predict infections (and that you should definitely join)](https://quantifiedflu.org/) – off the ground. Based on this alone I'd expect to have spend more time in front of a screen.

But that's not the only effect of course: Shifting from working out of shared spaces at an institute to being in the home office each and every day means that everything that used to be a chat over coffee during "normal" times (and thus goes untracked) is now a virtual Zoom/Google Meet/Jitsi etc meeting. In a similar vein a lot of those informal chats now also happen via email, Slack etc.

![](/assets/images/lockdown_rescuetime.png)

<small>How many hours I spend working on my computer before/during/after the lockdown.</small>

For plotting purposes and to remove some of the noise that comes from weekends, holidays, vacations etc. I've aggregated my weekly hours in front of my computer. Additionally I've broken out the hours spent with "messaging" and "meeting" related applications. As you can see there's a clear change during the lockdown. Before the lockdown the time spent varies a lot (largely as our period includes Christmas and a 3-week vacation in January), but typical weeks are around 20-30 hours of time in front of the computer per week. During the lockdown they peak at over 50 hours per week, with drastic increases in time spent for virtual meetings and messaging. Since the end of lockdown the weekly hours decrease, but haven't gone down to pre-lockdown levels yet. Most likely as some meetings are happening in person again, but not all of them.

## From Bed to Desk and Back Again

The second set of parameters I looked at were my physical activity and sleep as measured by through the [_Oura Ring_](https://ouraring.com/) I'm wearing. Besides plainly tracking the amount of sleep I get per night and the number of steps taken every day they also calculate a number of scores for each day. Those scores range from 0-100 (with 100 being "_best_") for "_activity_", "_sleep_", and "_readiness_" (calculated based on prior "_sleep_" and "_activity_"). To smoothen out some of the noise that comes with the differences between weekdays and weekends and day-to-day fluctuations I calculated the weekly averages for all of those metrics.

![](/assets/images/lockdown_oura.png)

<small>How my sleep and physical activity changes before/during/after the lockdown.</small>

As expected, the lockdown did lead to some clear changes in my activity & sleep behavior. Usually I manage to get my 10,000 daily steps in quite easily, often averaging well over 12,000 steps a day (which is easy to do if you're walking to/from the office that's around 4.5 km away from home). That changes quite a bit during the lockdown, as the 'office' came as close as being 1.5 meters away from the bed. As a result the daily step count drops down to well below 5k during peak-confinement. But since the end of the lockdown the trend looks good at least, with the daily step counts being on the rise again.

Having the bed right next to the office has some clear upsides. For example, getting more sleep is pretty easy. Instead of getting an average of around 6 1/2 hours of sleep per night before the lockdown I could get a good 7.5 hours of sleep in per night. An effect that still survives so far, even after the confinement! But then this might not related as much to the home office but rather to bars, concert halls, etc. still being closed down in Paris.

The scoring system of Oura offers no surprise, following the raw data trends: _Activity_ is down, _Sleep_ is up. And of course the _readiness_ rises as well, as it turns out you're very ready to be physically active every day if a) you didn't do any activity in the days before and b) you slept a ton.

At least for the screen-time my results clearly fall [in line with what Paula observed](https://pleonova.github.io/shelter-in-place/), but it seems that her only suspected change in sleep seems to indeed manifest for me! What about you?

If you want to reproduce these graphs using your own data you can easily do so using the _Open Humans_ notebook infrastructure: All you need to do is to [connect your _RescueTime_](https://ohrescuetimesource.herokuapp.com/) & [connect _Oura Ring_](https://oura.openhumans.org/) and then [run this notebook](https://exploratory.openhumans.org/notebook/127/). And if you find this kind of self-research interesting you should [join us on our _Open Humans_ community and self-research calls](https://tinyurl.com/wprwl2b) that happen every Tuesday & Thursday (10am Pacific / 1pm Eastern / 7pm CEST) or [join our Slack](https://slackin.openhumans.org)!
