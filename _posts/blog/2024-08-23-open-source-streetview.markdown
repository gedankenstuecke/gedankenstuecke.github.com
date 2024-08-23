---
title: "Openly licensed Streetview with Panoramax"
layout: post
date: 2024-08-23 13:45
image: /assets/images/2024-08-23-panoramax.png
image_alt: "a screenshot of panoramax, showing a map with lines on it for where images are placed, with a small insert of an actual 360 degree image"
tags: 
- open source
- foss 
- floss 
- panoramax
- open street map
- openstreetmap
- OSM
- street-level images
- street view
blog: true
last_modified_at: 2024-08-23 13:45
---

<video controls width="100%" loop="true" poster="/assets/images/2024-08-23-panoramax.png">
  <source src="/assets/videos/2024-08-23-panoramax.mp4" type="video/mp4"/>
    <p>
        A video of Panoramax in action. Starting out with a map view which has small orange lines for where images are available. 
        Then going into the actual 360 degree images and moving around. 
    </p>
</video>
<small id="fn1-anchor">
    Above: a video showcasing the panoramax viewer, with a map to see where (most<sup><a href="#fn1">[1]</a></sup>) images are, and the 360º views.
</small>

**tl;dr: If you are interested in contributing to a street-level imagery commons, [check out _Panoramax_](https://panoramax.fr/)**

Street-level images are not just a great way to virtually explore places (or for playing the not-so-occasional round of [GeoGuessr](https://www.geoguessr.com/)), but are also extremely useful for providing detailed local information when contributing to [OpenStreetMap](https://www.openstreetmap.org). 

Of course, most of those street-level image collections are produced and controlled by big tech, including Google, Apple and Microsoft.
And so, I'd been wondering for a while, if there were any free/open alternatives to those these days. 
While, back when street-view imagery first started out, a lot of specialised equipment was needed to get GPS-registered, 360º images, today there's at least somewhat affordable 360º consumer cameras that directly write GPS coordinates too. 
And beyond that - if photospheres aren't a hard requirement -  each and every smartphone will provide geo-located photos. 

With some longer road trips in the current and future - and a wish to convert those into photo data collection trips if possible - I looked into the topic again a few weeks ago and found this [great overview of street-level imagery services](https://wiki.openstreetmap.org/wiki/Street-level_imagery_services) on the wiki of _OpenStreetMap_. 
At first glance it might seem that there's some options to choose from if one wants to record openly licensed images, but the reality is somewhat sadder: 
_Mapillary_ and _KartaView_ both make use of _CC-BY-SA_ as their license, but the underlaying stack for hosting and controlling those images are far from open. 
Not only are their backends, viewers and uploaders all proprietary, they are owned by big tech - _Facebook_ & _Grab_, respectively. 
Proprietary tools owned & controlled by big tech promise the exact opposite of commoning, so those definitely were out. 
But, then I saw [_Panoramax_](https://panoramax.fr) in that list, which pretty much ticks all the boxes for building a sustainable commons. 

Supported and developed by the _Geocommons Factory_ of the French [_National Institute of Geographic and Forest Information_](https://www.ign.fr/institut) (IGN), each part of the whole _Panoramax_ street-level imagery pipeline is openly licensed: 
From the different modes of uploading data (there's a web uploader and a CLI tool already), over the backand and the embeddable viewer, to the data itself. 
And not only that, the system is set-up to allow for federation. Which means that people can spin up their own local instances if they so wish. 

The federation of _Panoramax_ helps to address two of the big challenges with providing comprehensive street-level imagery. 
The first being the pure cost of storage. 
While storage prices are low, keeping around potentially millions and billions of 360º photospheres from around the world is still a peta- if not exabyte problem. Just keeping those data around in a centralised way is expensive. 

The second challenge being potential differences in legal requirements around anonymity/privacy, e.g. in what needs to be blurred/removed. _Panoramax_ provides an API to automatically send each image to a photo blurring service, to e.g. blur out people's faces or license plates. But depending on the jurisdiction, other things might need to be anonymised too, and local Panoramax instances can also chose blurring methods that suit those needs. 

So far, there are two publicly accessible _Panoramax_ instances: 
[One run by the French IGN](https://panoramax.ign.fr), which is limited in scope to images taken in France. 
And [one run by the French chapter of _OpenStreetMap_](https://panoramax.openstreetmap.fr), which accepts images from a global scope at least for testing (they do not want to become the single repository for the world's street-level images). Lastly, you can see the federation in action [on this joint map that includes that from both](https://api.panoramax.xyz).

Which is all a long-winded way of saying: 
I've been contributing images to Panoramax since mid-July and I'm having a blast. 
Since then, I've contributed around 40k images, taken with a 360º camera that takes images every 2 seconds. 
Mostly by car, but also [by foot](https://scholar.social/@gedankenstuecke/112763921080835205) (and [Eugenia by bike](https://scholar.social/@gedankenstuecke/112779020016826824)). 
On roads, in the woods and some parks. 
Between England, France, Belgium, the Netherlands and Germany, for a total distance covered of around 2,500 km. 

If you're now interested in contributing:
You do not need a 360º camera that can do photospheres, any smartphone will do to get started.
You [can check out the instructions on the French OSM instance](https://panoramax.openstreetmap.fr).
And if you want to learn more about _Panoramax_, Christian Quest of the project [gave a talk at last year's _State of the Map Europe_](https://www.youtube.com/watch?v=Vh87F5Zie6k). 

<p id='fn1'>
    <small>
        <a href="#fn1-anchor">[1]</a> <em>Mostly</em>, as currently the cut-off for joining images on the map visualisation 
        <a href="https://gitlab.com/panoramax/server/api/-/issues/177">is too low for the speeds on highways</a> but a fix has already 
        <a href="https://gitlab.com/panoramax/server/api/-/merge_requests/300">been proposed</a>.
    </small>
</p>
