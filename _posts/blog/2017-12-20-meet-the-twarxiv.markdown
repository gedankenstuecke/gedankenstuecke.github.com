---
title: "Meet the TwArχiv"
layout: post
date: 2017-12-20 01:00
tag: open-humans
blog: true
---
<link href='https://cdnjs.cloudflare.com/ajax/libs/metrics-graphics/2.11.0/metricsgraphics.min.css' rel='stylesheet' type='text/css'>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/metrics-graphics/2.11.0/metricsgraphics.min.js"></script>

Exactly 5 years ago *Twitter* started [offering the option for users to download their full
archive of personal tweets](https://blog.twitter.com/official/en_us/a/2012/your-twitter-archive.html). The archive gives you a change to quickly browse through your
personal history and find those funny cat pictures you once posted. But there is additional value in the archive that transcends the trips down to memory lane. By looking into a full *Twitter* archive one can investigate things like longitudinal trends in interaction behaviour and movement patterns based on geo locations. And while the *Twitter* archives come with their own UI, they are not really designed for such deeper dives into the data. Which is why I have been <a href='http://twarxiv.org/'>working on a small tool called <font color="#1DA1F2">Tw</font>Arχiv</a> that tries to allow for such insights.

<div class='gender_replies'></div>

The plot above is an example of what <font color="#1DA1F2">Tw</font>Arχiv does. It gives you an idea of how my personal `reply` behaviour has changed over time, using a *gender-guessing Python library* that classifies the users I replied to based on their first names. Using this you can quickly see that I did have an extreme male-bias starting in early 2009, which becomes less pronounced later on. What happened in 2009? I became an active member of the [overwhelmingly male German Pirate Party](https://en.wikipedia.org/wiki/Pirate_Party_Germany). Go figure.

The plots that the <font color="#1DA1F2">Tw</font>Arχiv generates include more interesting data, you can [see a demo done on my personal Twitter archive](https://twtr-analyser.herokuapp.com/tweet_display/interactions/72944223/). <font color="#1DA1F2">Tw</font>Arχiv also looks into how your tweet behaviour changes with respect to whether you use *Twitter* for replying, retweeting or making original posts on your own, at which times of the day you tweet and even how you move across the globe while tweeting. The gif below gives you a small glimpse into parts of my 2016 tweets.

<center><a href='https://twtr-analyser.herokuapp.com/tweet_display/location/72944223/'><img src="/assets/images/twitter-map.gif" alt=""></a></center>

If you want to analyse your own *Twitter* archive give <a href='http://twarxiv.org/'><font color="#1DA1F2">Tw</font>Arχiv</a> a try. As it uses [*Open Humans*](https://www.openhumans.org) for the storage of the archive you can also easily choose to make that data available to further researchers. If you have an unprotected *Twitter* account this data is already out there in public but hard to systematically access for anyone but Twitter. So why not help social media researchers out by giving your data?

If you have ideas for data analysis that is missing so far: The code of <font color="#1DA1F2">Tw</font>Arχiv is open source and I'd love to [get your contributions and suggestions](https://github.com/gedankenstuecke/twitter-analyser). And if you have a larger feature/analysis idea that's not in <font color="#1DA1F2">Tw</font>Arχiv yet, [Open Humans is giving out grants of up to $5,000](https://www.openhumans.org/grants) for projects that help to grow their eco-system. Improving on <font color="#1DA1F2">Tw</font>Arχiv is are a perfect match for this.

<script>

d3.json('/graph.json', function(data) {
   data = MG.convert.date(data, 'date');
   MG.data_graphic({
     title: "replies & gender",
     data: data,
     width: 600,
     height: 450,
     right: 60,
     full_width: true,
     target: ".gender_replies",
     x_accessor: "date",
     y_accessor: ["male",'female'],
     legend: ["male",'female'],
     aggregate_rollover: true,
   });
});
</script>
