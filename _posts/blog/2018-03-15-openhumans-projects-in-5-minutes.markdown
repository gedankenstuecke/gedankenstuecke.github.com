---
title: "Get your own Open Humans project up in 5-10 minutes"
layout: post
date: 2018-03-15 01:00
tag: open-humans
blog: true
---
![](/assets/images/ftdna_upload.png)

How can we make it easy to add data to *Open Humans*?

*Open Humans* lives through its community of members and the projects they design. That's why there's a large number of tools that make the creation of these projects possible: Projects can be run [right on-site](https://www.openhumans.org/direct-sharing/on-site-features/), use the [Python command line interface library](https://github.com/OpenHumans/open-humans-api) or use generic [OAuth2-based API-methods](https://www.openhumans.org/direct-sharing/oauth2-features/) to interact with *Open Humans*. But one simple need remained painful: simply enabling *Open Humans* members to upload file(s) into your own project.

Doing this needed some fiddling. Even if you code, setting up your own website can be time-consuming and often is something you don't want to spend a lot of time on. Along with [Mad](https://www.twitter.com/madprime) – and the great help of some of our prospective Outreachy interns – I've been busy to reduce this pain...

[Meet the `oh_data_uploader`](https://github.com/gedankenstuecke/oh_data_uploader) template! All you need to allow *Open Humans* members to upload data into your project, with a **one-click deployment to *Heroku, for free!***  All of the project configuration can be done right in your browser, no assembly or coding required.

Now the process boils down to [a simple 5-step guide](https://github.com/gedankenstuecke/oh_data_uploader/blob/master/README.md) and instead of taking some hours to set up your own data source it should now take between 5-10 minutes. Just use the administrative backend to fill out the configuration parameters, add the file meta data you expect and edit the copy-text of your project website using Markdown in the same way and you're good to go. You can [click here to see how it looks like out of the box](https://ohuploadertemplatetest.herokuapp.com/) (just ask if you want to have the demo password 😊).

I made already good use of this template myself, because it is what I used to [quickly deploy the *FamilyTreeDNA* integration](https://familytreedna-upload.herokuapp.com/) into *Open Humans*. What new data source will \*you\* add to *Open Humans* today?
