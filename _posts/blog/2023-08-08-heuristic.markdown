---
title: "A heuristic for feeling fine"
layout: post
date: 2023-08-08 01:00
tag: personal science, wearable, wearables, quantified self
blog: true
---

[![](/assets/images/heuristic.jpeg)](/assets/images/heuristic.jpeg)

This website has included a little [*personal API*](a-personal-api/) in the footer for quite a while. But in recent-(ish) months I've expanded a bit on it, as you can see in the screenshot above. It now also makes an informed guess on whether I'm likely doing okay on a given day or whether I might be under the weather – for example because of falling sick, having slept poorly or other factors.

These predictions/informed guesses are made based on four variables that are measured by the Oura Ring I wear: Resting heart rate, heart rate variability, body temperature deviation and respiratory rate. These four metrics are generally derived over night based on the optical heart rate and temperature sensors – and at least some of those metrics are quite [useful for measuring stress as well](https://wiki.openhumans.org/wiki/Impact_of_work-related_stress). 

For each of those four metrics I compare a given day's value to the total distribution of values I have observed for myself before. And as a I have been wearing the same device since ~November 2018, there's plenty of historic data to generate that distribution. And depending on if (and how much) a value deviates from the normal values, the more likely it is that I'm not doing super well. In order to generate a simple score, I then sum up the number of observed standard deviations for a day into a _physiological deviation score_.

[![](/assets/images/heuristics-boxplot.png)](/assets/images/heuristics-boxplot.png)

And it seems that this works quite okay: Since ~April 2020 I have also been tracking a variety of symptoms each day (e.g. coughs, headaches, sore throad, …) through [Quantified Flu](https://quantifiedflu.org/), providing me with some level of ground truth. And, comparing the predictions made by the physiological symptom scores to my actually recorded symptoms, there's definitely some interesting correlation! 

If you want to read more about the ideas behind this heuristic, how I calculate it and how I "validated" it, you can [read a detailed report on it on the Personal Science Wiki](https://wiki.openhumans.org/wiki/A_heuristic_for_feeling_fine).

**Update: Currently the heuristic is not displayed in the footer: As I've moved from an _Oura Ring_ to an _Apple Watch_ as my main wearable, I need to sort out how to adapt the calculation/export the data.**