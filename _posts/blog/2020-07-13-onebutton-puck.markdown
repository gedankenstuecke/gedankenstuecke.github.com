---
title: "Turning a Puck.js into an open source one-button tracker"
layout: post
date: 2020-07-13 01:00
tag: open humans, personal data, quantified self, one button tracker, one button, one-button-tracker
blog: true
---
<p style="text-align:center;"><img  src="/assets/images/puckjs.png"/></p>

**tl;dr: You can [turn your Puck.js into a *one-button tracker* with this open source website](https://tzovar.as/one-button-tracker/#) I made**

*Open Humans* community member James Littlejohn highlighted the [_Espruino_ family of open source hardware boards and devices](https://www.espruino.com/) during one of our community calls some weeks ago. Their devices are fully open source – including the hardware, software and all of the documentation – which makes it super easy to get started for beginners like me. And programming the hardware is especially nice, thanks to two characteristics:

1. You can push code right from your web-browser and don't need to install any software. Thanks to all devices having _Bluetooth Low Energy_ capabilities you can use web bluetooth to directly connect your web browser to them and use a web IDE.
2. You can code in JavaScript and don't have to learn yet another language. Thanks to the excellent documentation even a JS-beginner like me could do it.

Since getting my hands on some of their devices I've been playing around with them, especially the [_Puck.js_](https://www.puck-js.com/), a bluetooth beacon that's packed full of sensors: An accelerometer, a gyroscope, a temperature sensor, a magnetometer, a light sensor and _most importantly_ the whole device acts as a button.

This button brings a great opportunity to do some self-tracking of discrete events, as you could use it to record whatever events you are interested in. During our *Open Humans* community calls the potential use cases for such _one-button trackers_ are frequently discussed: Tracking how much/when you sneeze, tracking how much you eat, keeping a log of your allergies, figuring out how often you stand up. Getting a record of when it happened could be just a press of a button away, your own creativity is the limit. Inspired by another _one-button tracker_ project that's under development by Thomas Blomseth Christiansen and Jakob Eg Larsen I decided to [give it a go and __turn one of my _Puck.js_ into a one-button tracker__](https://tzovar.as/one-button-tracker/).

The whole process was extremely painless and could be done in less than 15 lines of JavaScript code. All that was left to do was to [write a small website around it and now you can use this website to configure any Puck.js into a one-button tracker](https://tzovar.as/one-button-tracker/). You can install the necessary code right from that website and even download the data from it. As it’s all done with an otherwise static website and because the JavaScript bits only run in your own browser, your data fully remains yours – it comes from the Puck directly onto your computer, without ever going through the web.

When you press the button of your Puck it records:

- the time when you pressed it,
- for how long you pressed it,
- the current temperature & light levels,
- the accelerometer data.

The latter might be useful to figure out if you accidentally pressed it. And when you install the one-button on the Puck.js the internal clock of it will also automatically be set to your current browser time, which makes it easy to have the correct timestamps for your button presses.

Of course the whole thing is open source too, and you can [find the whole code for the one-button tracker on GitHub](https://github.com/gedankenstuecke/one-button-tracker).

[Give it a try](https://tzovar.as/one-button-tracker/) and [let me know what you think](https://forum.quantifiedself.com/t/cheap-open-source-one-button-tracker/8234). Happy button presses!
