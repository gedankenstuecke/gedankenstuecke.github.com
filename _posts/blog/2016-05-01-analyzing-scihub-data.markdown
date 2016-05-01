---
title: "Analyzing the SciHub data"
layout: post
date: 2016-05-01 01:00
tag: openscience
blog: true
---
![header](/assets/images/scihub-header.png)

If you're following the world of academic publishing (and the paywalls that keep researchers from doing their jobs) you will have heard of [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub), which offers an elegant way to get around those paywalls. Often called *the PirateBay of Academia*, Sci-Hub gives you access to over 48 million paywalled articles, happily ignoring copyright. In my book that's a great thing to do, after all it's the general public that's paying academic research and they are the ones that suffer most from paid access. And don't get me started about the absurdity of university libraries having to buy back the results their own institutions generated.

In any case, between September 2015 and February 2016 over 28 million downloads were done using their system. And last week [Sci-Hub published the meta-data for those downloads](http://datadryad.org/resource/doi:10.5061/dryad.q447c), along with [analyses done on the data](http://www.sciencemag.org/news/2016/04/whos-downloading-pirated-papers-everyone) and [very cool visualizations](https://blog.datadryad.org/2016/04/28/sci-hub-stories/). The data includes not only the time the download was done, but also the DOI that was requested (which also tells you which journal/publisher was paywalled) and the country/city from which the download was made.

When I saw this data I immediately wondered whether most of those downloads were made from outside universities/by the general public or whether they were done by academic researchers who couldn't get access through their institution due to the lack of subscriptions. So I started digging into the download times, looking at which weekdays and times most downloads occurred.

[![](/assets/images/scihub-download_time-thumb.png)](/assets/images/scihub-download_time.png)
[click for larger version](/assets/images/scihub-download_time.png)

The bulk of downloads seems to take place between the magical 9am to 5pm time frame, which means people are accessing the data during their work hours, which will include many academics. So it's not only people after hours (either the general public or academics from home) who access the data.

![](/assets/images/scihub-download_time_germany_feb2016.png)

A small aside: [As rightfully pointed out on Twitter](https://twitter.com/johnstravis/status/725984011659661312), I used all data for this, but the time stamps are all UTC, so non-UTC time zones distort the picture. To account for this effect in the quickest way I plotted the same data, filtered once for downloads from Germany (above) and once for downloads from Hong Kong (below). You see the shift in those distributions, but if you adjust for it the picture stays the same.

![](/assets/images/scihub-download_time_hong_kong_feb2016.png)

But the country data can be used for so much more things than just adjusting the time zones. You can easily correlate the data with more general public data sets. For example, [the World Bank offers a great deal of public data](http://databank.worldbank.org/). You can get the population for all countries, the GDP or the number of internet users.

I started out by correlating the population sizes to the number of downloads. You'd naively expect that the larger a population is, the more downloads will be done. Which is true, up to a point. If we plot the population size and the number of downloads (on a log10 scale), we see a nice positive correlation between those.

[![](/assets/images/scihub-downloads_per_population_thumb.png)](/assets/images/scihub-downloads_per_population.png)
[click for larger version](/assets/images/scihub-downloads_per_population.png)

But there are obvious outliers. Some countries, such as the Iran, have much more downloads than expected given the linear fit, others have much less. We can look at the residuals if we want to see how much those countries differ from the expectation given by our model. This is just the difference between the expected value and the observed value.

[![](/assets/images/scihub-downloads_per_population_residuals-thumb.png)](/assets/images/scihub-downloads_per_population_residuals.png)
[click for larger version](/assets/images/scihub-downloads_per_population_residuals-thumb.png)

We again see, when looking at the absolute difference, that much more downloads are done from Iran than we'd expect. And Scott pointed out that [some of the Iranian mirrors were not even included](https://twitter.com/SCEdmunds/status/726122053703618561). When we move away from those total numbers and instead look at *Downloads per 1,000 inhabitants* we see a pretty similar picture.

[![](/assets/images/scihub-downloads_per_population_ranked-thumb.png)](/assets/images/scihub-downloads_per_population_ranked.png)
[click for larger version](/assets/images/scihub-downloads_per_population_ranked.png)

Using the *Downloads per 1,000 inhabitants* metric we can now also correlate those numbers to other metrics measured by the World Bank. For example the Gross Domestic Product (GDP) per inhabitant. Which yields a nice positive correlation as well, basically saying that the higher the economic performance of a country, the more people will illegally download scientific publications.

[![](/assets/images/scihub-normalized_downloads_gdp-thumb.png)](/assets/images/scihub-normalized_downloads_gdp.png)
[click for larger version](/assets/images/scihub-normalized_downloads_gdp.png)

But is it really the GDP in itself that's driving the effect, or are we rather measuring other things that might explain it? What about being online? In order to illegally download publications you need to be able to download stuff at all.

[![](/assets/images/scihub-normalized_downloads_internet_users-thumb.png)](/assets/images/scihub-normalized_downloads_internet_users.png)
[click for larger version](/assets/images/scihub-normalized_downloads_internet_users.png)

So far this is pretty much what you'd expect: The more people are online, the more downloads you find for a given country. Which also isn't too surprising, if you think about that [GDP and the number of internet users itself is closely correlated to each other](/assets/images/scihub-gdp_vs_internet.png).

Another thing that obviously could have an impact on whether you'd be interested in academic literature is whether you have time to care about such things. So let's look at life expectancy at birth.

[![](/assets/images/scihub-normalized_downloads_life_expectancy-thumb.png)](/assets/images/scihub-normalized_downloads_life_expectancy.png)
[click for larger version](/assets/images/scihub-normalized_downloads_life_expectancy.png)

This also seems to intuitively make sense. The higher the life expectancy, the more downloads you find for a given country. Let's look at one last metric here: The unemployment rate amongst the potential work force.

[![](/assets/images/scihub-normalized_downloads_unemployment-thumb.png)](/assets/images/scihub-normalized_downloads_unemployment.png)
[click for larger version](/assets/images/scihub-normalized_downloads_unemployment.png)

Which, interestingly enough, is a very bad predictor of how many papers will be downloaded. Regardless of unemployment levels there are countries which do download a lot of papers and others less so. Amongst the high-unemployment countries Spain and Greece make interesting positive outliers for example, having lots of downloaded papers.

There's probably much more interesting going on inside the Sci-Hub data, especially if you correlate it with different external data sources. Thanks to many open data resources that's easily possible. If you're interested in doing your own analyses [my source code for those graphs can be found on GitHub](https://github.com/gedankenstuecke/scihub_analysis), along with the World Bank data I used here. If you have ideas what else I could look into, or if you want to contribute, please [feel free to open issues](https://github.com/gedankenstuecke/scihub_analysis/issues) and [get in touch](https://www.twitter.com/gedankenstuecke).
