---
title: "They are Good Dogs, Indeed"
layout: post
date: 2017-02-16 01:00
tag: datascience
blog: true
---
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/brant">@brant</a> they&#39;re good dogs Brent</p>&mdash; WeRateDogs™ (@dog_rates) <a href="https://twitter.com/dog_rates/status/775410014383026176">September 12, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Being more of a dog-person (or to stay in *OkCupid* lingo *likes dogs, has cats*) I was sad when I saw that the *[CatterPlots](https://github.com/Gibbsdavidl/CatterPlots)* made their rounds on Twitter again this week, as there's still no dog-centric alternative if you're an *R*-faring data visualizer. In order to dry my tears I went over to [dog_rates](https://twitter.com/dog_rates) for some binge dog-watching. And then I wondered, aren't these puppers all getting cuter and cuter? Luckily this is easy to check, thanks to the excellent, objective, and above all numeric ratings applied by *dog_rates*. So h*ck, why not give it a try?

As there are only little over 3500 tweets for *dog_rates*, one can nearly scrape all the ratings done out since the beginning in late 2015 through Twitter's API. Then one just needs to filter out the retweets (as we don't want to count any doggo twice) and now we can look at all valid ratings, with a valid rating being everything that's some numeric value that's followed by */10*. And that's it, you're good to go to analyze how cute those puppers are! Doing this one ends up with around 1,500 rated dogs, posted between 2015-12-03 and 2017-02-16.

![scatterplot uncleaned](/assets/images/doggo-atticus.png)

And the first naive scatterplot shows us only one clear thing: Atticus is a very good (and extremely patriotic) dog. But if we, just for the sake of data resolution, exclude him for a tiny second we can see that there's a clear trend towards cuter dogs with basically all puppers taking at least 11/10 these days. That totally smells like [the canine Flynn effect](https://en.wikipedia.org/wiki/Flynn_effect) to me!

![scatterplot cleaned](/assets/images/doggo-scatterplot.png)

The dogsplot shows that trend even better. I'll leave it up to you to calculate in which year we can't rate dogs any longer as Twitter will not have enough characters to fit the complete rating. At least we'll have something to look forward to during these times.

![dogsplot cleaned](/assets/images/doggo-barkplot.png)

But having 1,500 rated dogs gives you the opportunity for something else, as all of these dogs not only come with their rating, but also with a picture of themselves. And most of them you can even easily download through the *Twitter* API as well. If you're now thinking *Barkificial Intelligence*, then you're totally right! So I went and downloaded the images for ~1,200 of those dogs and labelled them with their respective rating. As the distribution of the dogs is so skewed I limited myself to the six categories <9/10 and 9-13/13. From there on it was just following the *[Tensorflow for Dog-Lovers](https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/)* tutorial. But looking at the test accuracy tells us that, despite all the grand claims for *Deep Learning*, it's just not ready yet to accurately rate dogs: `Final test accuracy = 34.4%`. So, rest assured dog raters all over the world, robots are not yet coming to take your jobs.

The [code for scraping the tweets, doing the plots and downloading the images is on GitHub](https://github.com/gedankenstuecke/good_puppeRs). Good luck in getting better dog classifications.
