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
personal history and find those funny cat pictures you once posted. But there is additional value in the archive, transcending the trips down to memory lane. For example, by looking into a full *Twitter* archive one can investigate longitudinal trends in interaction behaviour or geotag-based movement patterns. While *Twitter* archives come with their own user interface, they are not really designed for such deeper dives into the data. Which is why I have been <a href='http://twarxiv.org/'>working on a small tool called <font color="#1DA1F2">Tw</font>Arχiv</a> that tries to allow for such insights.

<div class='gender_replies'></div>

The plot above is an example of what <font color="#1DA1F2">Tw</font>Arχiv does. It gives you an idea of how my personal `reply` behaviour has changed over time. Using a *gender-guessing* `Python` library it classifies the users I replied to based on their first names. You can quickly see that I did have an extreme male-bias starting in early 2009 that becomes less pronounced in more recent years. What happened in 2009? I became an active member of the [overwhelmingly male German Pirate Party](https://en.wikipedia.org/wiki/Pirate_Party_Germany). Go figure.

The plots that the <font color="#1DA1F2">Tw</font>Arχiv generates include further interesting data. You can [see a full demo done on my personal Twitter archive](https://twtr-analyser.herokuapp.com/tweet_display/interactions/72944223/). The <font color="#1DA1F2">Tw</font>Arχiv also looks into how your tweet behaviour changes with respect to whether you use *Twitter* for replying, retweeting or making original posts on your own; at which times of the day you tweet; and even how you move across the globe while tweeting. The gif below gives you a small glimpse into parts of my 2016 movements based on tweets.

<center><a href='https://twtr-analyser.herokuapp.com/tweet_display/location/72944223/'><img src="/assets/images/twitter-map.gif" alt=""></a></center>

If you want to analyse your own *Twitter* archive please give <a href='http://twarxiv.org/'><font color="#1DA1F2">Tw</font>Arχiv</a> a try. As it uses [*Open Humans*](https://www.openhumans.org) for the archive storage you can optionally also choose to make that data publicly available. If you have an unprotected *Twitter* account this data is already public but harder to systematically access (at least for anyone but *Twitter* itself). So why not help out social media researchers everywhere by giving your data?

If you have ideas for some data analyses that are missing so far: The code of <font color="#1DA1F2">Tw</font>Arχiv is [open source and I'd love to get your contributions and suggestions](https://github.com/gedankenstuecke/twitter-analyser). And if you have a larger feature/analysis idea that's not in <font color="#1DA1F2">Tw</font>Arχiv yet, [Open Humans is giving out grants of up to $5,000](https://www.openhumans.org/grants) for projects that help to grow their eco-system. Improving on <font color="#1DA1F2">Tw</font>Arχiv is are a perfect match for this.

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
