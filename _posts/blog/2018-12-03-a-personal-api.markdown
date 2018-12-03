---
title: "A personal API"
layout: post
date: 2018-05-15 01:00
tag: open humans, personal api, personal data
blog: true
---
<img src="/assets/images/personal-api.png" style="border: solid gray 2px; border-radius:5px;" />
<small>What the <a href="https://my-personal-api.herokuapp.com/">output of a personal API</a> can look like.</small>

*Open Humans* has been expanding thanks to lots of new data sources that have gone live in the last couple of months.
Thanks to our Outreachy interns we already have added support for sharing your [Google Location History](https://google-location.openhumans.org/) and your [Spotify Listening History](https://spotify.openhumans.org/).
Additionally you can now collect your GPS movement patterns [from the Overland iOS application](https://overland.openhumans.org/) and [activity, heart rate and body temperature from the Oura Ring](https://oura.openhumans.org/).

Collecting all of these data in one place is great, especially if you want to dig the data: The growing collection of [Personal Data Notebooks on the Personal Data Exploratory](https://exploratory.openhumans.org/) makes this super easy. But what else one do with all of the data? [Aaron Parecki's](https://aaronparecki.com/now/) website gave me an idea: Aaron lists his current location, time zone and weather conditions along with his phone battery level and the amount of tabs he has in browser right on his website. I was wondering: Could I use all of my data that's already stored in *Open Humans* to re-create such a thing right on my own blog? The short answer is yes, as you can see in the screenshot above as well as in the footer of this page.

So how does it work? The *Open Humans* API can offer much of the data needed for this! The [Overland integration](https://overland.openhumans.org/) provides the latest GPS coordinates (they are updated ~ every 5 minutes), along with the battery status of my phone. From the longitude & latitude one can easily get to the local time (using [timezonedb](https://timezonedb.com/)) as well as the current weather conditions from the [Yahoo APIs](https://developer.yahoo.com/weather/). And the [Spotify API integration](http://spotify.openhumans.org/) into *Open Humans* grabs your last played songs every couple of minutes.

The only tricky bit is getting live step-counts and heart rates. Right now the general [Fitbit integration](https://fitbit.openhumans.org/) only gives access to the daily aggregate data due to API limits of *Fitbit*. This makes it impossible to get live heart rate data. Luckily there is a way to set up a personal API endpoint through Fitbit. This allows you to subscribe to the intra-day data, including the current heart rate. While this is not yet part of the *Open Humans* data collection, [it will be soon](https://github.com/openhumans/oh-fitbit-intraday).

So how can we transform all of this data from the files stored in *Open Humans* into something that can easily be displayed in another website? By turning all of it into a nice little `JSON` that [only contains the information we want to display](https://my-personal-api.herokuapp.com/data/15713726/)! Which can then in turn be read through some `JavaScript` to fill in the blanks in the e.g. this website's footer or wherever you might want to display it.

![](/assets/images/personal-api-2.png)

And the best part: As all the data is stored on *Open Humans* and shared through its API, it's already generalized, so you can do the same thing right now. The small [MyPersonalAPI application](https://my-personal-api.herokuapp.com) allows you to log in with your own *Open Humans* account and in return it will give you a URL that contains your own URL that will always contain the latest `JSON` with your personal data tidbits. Have fun displaying your own data wherever you want!

Your personal data source from *Open Humans* and data summary is missing and you'd like to see it added? Good news, [the code for this is open source](https://github.com/gedankenstuecke/personal-api/), so you can either easily do it yourself or be in touch to see what we can do about it!
