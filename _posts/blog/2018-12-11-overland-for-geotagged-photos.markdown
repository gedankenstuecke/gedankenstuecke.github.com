---
title: "Using Overland to Geotag Photos with Lightroom"
layout: post
date: 2018-12-11 01:00
tag: open humans, overland, personal data, gps, google location history
blog: true
---
<img src="/assets/images/overland-lightroom.png"/>
<small>Geotagging photos in <i>Adobe Lightroom</i>.</small>

After [semi-accidentally ending up at SantaCon in San Francisco](/santaconsf) last weekend, I was wondering how I could geo-tag my photos more easily. If you're only taking pictures with your smartphone, that's not much of an issue as the internal GPS applies the metadata automatically. But lots of modern cameras still don't come with an internal GPS or require some [ridiculous add-ons](https://www.leicacamerausa.com/evf-visoflex-typ-020-black-x-typ-113-tl-m10.html).

So what to do when you end up with photos that don't have location metadata written yet? *Adobe Lightroom* allows you to drag & drop photos onto a map. Besides this being tedious work, it requires you to have a nearly photographic memory to remember where took all those photos (In which case you might not be much into actual photography 😉). The second option given is to load a `GPX` track file in which you recorded your movement. The location timestamps can then be aligned with the metadata of your photos to automate the writing of the location metadata.

Sounds great, but always having to remember to start recording a GPS track through some additional software is just as annoying as having to put an additional GPS dongle on your camera. Luckily, I'm already passively recording my location by [running Overland on my iOS phone](https://overland.p3k.app/) and [store the collected GPS coordinates in Open Humans](https://overland.openhumans.org/). Which means I have a huge backlog of my personal location data that's recorded more or less 24/7, making it an ideal data source to geo-tag all of my photos.

There's only one single catch: Overland delivers all its data as `GeoJSON` data points by default. So to make use of the location history it needs to be converted into the `GPX` format. Fortunately it turns out that it's rather easy to write those `GPX`-formatted tracks, especially if all one is interested in are the latitude, longitude and timestamps. In fact it's so easy that it [can easily be run in a short Personal Data Notebook right on Open Humans](https://exploratory.openhumans.org/notebook/22/).

After running this notebook one can easily download the newly created `GPX` files and import them into *Adobe Lightroom* and start the automated geo-tagging process. The `GPX` file itself will contain a track for each day of the month, but *Lightroom* automatically gives you the option to use data of given days or all found tracks (as long as your tracks have less than 50,000 points in total).

If you want to setup the same workflow from scratch, these are the steps:

- [Install the Overland app on your iPhone](https://overland.p3k.app/)
- [Setup the Overland data retrieval on Open Humans](https://overland.openhumans.org/)
- [Convert your data to GPX and download it](https://exploratory.openhumans.org/notebook/22/)
- [Load the GPS track from your downloaded `GPX` file](/assets/images/overland-lightroom1.png)
- [Select Photos and tag them](/assets/images/overland-lightroom2.png)

And that's it. Or at least that's it if you remembered to set the time zone on your camera correctly - which is necessary so that the time of your GPS tracks and the metadata in your photos are aligned. But all hope is lost otherwise, as you can set a time zone offset through *Lightroom* to shift the time zones of your GPS track so that they align with the photo timestamps.

With the GPS data now written to your photos e.g. [Flickr](https://www.flickr.com/photos/gedankenstuecke/) will now automatically display a map of where the photos were taken [right next to the images](https://www.flickr.com/photos/gedankenstuecke/32383449808).

### Bonus uses & Google Location History!

If you're not running Overland to collect your GPS data you might be able to use your [Google Location History instead](https://google-location.openhumans.org/). A [notebook to convert the Google Location History data to `GPX` is available as well](https://exploratory.openhumans.org/notebook/23/).

And having the data as GPX has another big benefit: You can import those tracks right into *Google Earth* and start exploring it there!

![](/assets/images/overland-googleearth.png)

<small>Some of my GPS tracks around my office.</small>
