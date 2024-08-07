---
title: "Automating data exports from Apple Health"
layout: post
date: 2024-04-24 16:16
image: /assets/images/2024-04-24-footer.png
image_alt: A screenshot of this website's footer. Showing different personal data, including physiological, weather, location etc.
tags: 
- personal science 
- quantified self 
- personal data 
- health data 
- wearables 
- apple health 
- apple watch
blog: true
last_modified_at: 2024-05-03 22:33
---

[![A screenshot of this website's footer. Showing different personal data, including physiological, weather, location etc."](/assets/images/2024-04-24-footer.png)](/assets/images/2024-04-24-footer.png)

The dynamic footer of my website has been [powered by a little aggregation of some of my personal data](https://tzovar.as/a-personal-api/) for about 5 1/2 years by now. Until recently, all the data related to my activity and physiology (steps, heart rate, sleep, body) came from an [Oura Ring](https://wiki.openhumans.org/wiki/Oura_Ring). Beyond the untypical form factor (being finger instead of wrist-worn), the different iterations of the ring were also quite early in having a temperature sensor and giving blood oxygen readings, which were fun to play around with, especially for [creating a heuristic for feeling okay](https://tzovar.as/heuristic/). 

Unfortunately, a recurring issue with the Oura Ring (or at least the different ones that I had over the last 6 years) is that their batteries tend to die after ~12-15 months, probably at least in part due to the small size. And while the 24 month EU warranties somewhat cover this quite predictable device death for a while, it's definitely not too sustainable. So, instead of replacing yet another ring I've gone back to exclusively use an Apple Watch for recording data, as the [recent models of those also can record blood oxygen and 'wrist' temperature](https://wiki.openhumans.org/wiki/Apple_Watch) (though, the blood oxygen functions are [disabled in the US over patent issues](https://www.theverge.com/2024/1/17/24041945/apple-watch-series-9-ultra-2-blood-oxygen-ban)). And unlike Oura, which syncs all your data into their 'cloud', Apple stores all the health data in _Apple Health_ right on your phone. Which is great from a privacy perspective, but also means that there's no easy or preinstalled on-board way for automatically exporting or accessing your data from outside your device, e.g. for use in my website footer.

While _Apple Health_ itself offers an export function, this needs to be manually triggered for each export and results in humongous dump of all data in a ZIP file that in turn contains lots of different XML files, which means it's not a practical solution to working with the data in a more ongoing fashion. Over the years, I've tried a couple of different _Apple Health_ exporter apps for iOS: Quantified Self used to provide a (no-longer supported) _QS Access_ app, which produced CSV files on request. And for [_Quantified Flu_](https://quantifiedflu.org/) we created our own iOS app to export a small subset of physiological data to _Open Humans_, but that didn't include all the data I'd wanted to include in the footer. 

Which is how I settled on [_Health Auto Export_](https://wiki.openhumans.org/wiki/Health_Auto_Export_(Apple)), an [iOS app](https://www.healthexportapp.com/) I had tried before and which is designed to be very flexible when it comes to exporting data from _Apple Health_: On a basic level, it allows to get all the data into cloud storage services such as iCloud or Dropbox. But more importantly for my use case, it also provides the option of sending data from _Apple Health_ to a REST API endpoint. It allows picking a subset of health metrics of choice (or all of them!), the level of aggregation, the format (CSV or JSON) and the periodicity of how frequently one wants to push data.

When I tried to export data with the app in the past, the REST API approach was a bit flaky, I think mainly due to iOS limitions regarding background tasks and how long they can last and how much memory they are allowed to access. But Lybron Sobers, the developer of _Health Auto Export_ has been working on this over time, and at least for targeted data exports the REST API-solution now works for my use case: I've set it up to export ~10 different health metrics as JSON up to 4x/hour, aggregated into a single value for the current day. With those settings, I use the API export to then send the data to my experimental [_personal API_](https://github.com/gedankenstuecke/personal-api) setup that I run through Heroku, which in turn processes and stores the data.

And, as you can see in the footer it works. As larger data exports are a bit problematic, I've for now removed the "heuristic" part – as it relies on comparisons to longer historic records – but with the current setup it's working quite well. Sometimes the app needs a little nudge, especially if I haven't opened the actual _Apple Health_ app in a while, but it's reliable enough for me. If you have a lot of data in _Apple Health_ and look for a way to get the data out of it either in an automated/API way (or just want a way to generate CSV files of your data instead of XML files), give _Health Auto Export_ a look. 

The full feature set requires an in-app purchase. The app has a subscription payment service, useful if you want to just give it a try. It also allows for a one-off permanent payment, which is useful if you end up putting into "production" use. (And no Lybron isn't paying me anything for this, I'm just genuinely grateful for an app that works for my specific use case). 

I'm also collecting some of the settings I use on the [_Health Auto Export_ page on the _Personal Science Wiki_](https://wiki.openhumans.org/wiki/Health_Auto_Export_(Apple)) if you're interested in reproducing this.