---
title: "The SciHub Data Part 2: Academic Pirates"
layout: post
date: 2016-05-23 01:00
tag: openscience
blog: true
---
![header](/assets/images/scihub2-header.png)

You might remember [my last post about digging into the data on where and when people are using *Sci-Hub* to get around paywalls](/analyzing-scihub-data/). One of the questions that immediately came to my mind when they released the data was: **How many people are actually using *Sci-Hub* to download publications while they are in universities?** Because one of the claims that I (at least used to) hear quite often when debating open access is that academic researchers have nothing to complain about, because they can access all the literature in any case thanks to library subscriptions.

While this claim obviously ignores all the legitimate reasons for non-researchers to read primary literature (like, patients reading up on their illnesses – or just the general public who paid for all the research to start with…), I wondered: Is it even true? From my own experience I was pretty certain that it's not the case, and I guess it's not only because the University of Frankfurt is too cheap to pay for subscriptions. Which is why I tried to somehow quantify the extent to which academics are using *Sci-Hub* by looking at the download times in the last post.

A much nicer approach to quantify this would be to cross-reference the *Sci-Hub* data with known university IP-ranges, to see which downloads are actually made from inside universities. But for straight-forward reasons the *Sci-Hub* data didn't include any IP addresses. So I did [the same thing that John Bohannon did for his piece in Science](http://www.sciencemag.org/news/2016/04/whos-downloading-pirated-papers-everyone): I asked for the data.

Because if you look around a bit (and nicely ask some people to help you in your search) you can [find a list of around 5800 University/College IP ranges](https://bitbucket.org/pieralexandre/world-university-ip/wiki/Home) from many places around the globe. This list obviously has some shortcomings: It's about 1 1/2 years old by now and the names of the universities are mined from *LinkedIn* and *Webometric*. So I would say it's pretty safe to say that we are missing out lots of universities and their respective IPs with this list, so all measurements generated from this list should be taken as a lower bound.

In any case: These public address ranges could then be matched to the data held by *Sci-Hub*. They were so helpful to send me the anonymized and matched data in two levels of detail: [The first data set](https://github.com/gedankenstuecke/scihub_analysis/blob/master/uni-stats-date.tab) contains the percentage of downloads done from those university addresses for each day. With this it is easy enough to see that academic use of *Sci-Hub*, while not completely stable, seems to oscillate between 8 and 10 percent on a given workday.

[![](/assets/images/university_downloads_vs_time-thumb.png)](/assets/images/university_downloads_vs_time.png)
[click for larger version](/assets/images/university_downloads_vs_time.png)

As you would expect (or at least hope), the number of downloads from universities does cut back over the weekends (and holidays like Christmas). And it also seems that there is some larger seasonality in the data, if you have good ideas where it comes from: let me know. One important thing to keep in mind: This data is the worldwide aggregate, so different time zones will play into the weekday-calculation (and not all cultures hold their weekends on Saturday/Sunday).

[![](/assets/images/university_downloads_per_weekday-thumb.png)](/assets/images/university_downloads_per_weekday.png)
[click for larger version](/assets/images/university_downloads_per_weekday.png)

If you directly compare the different weekdays to each other, you can see the weekend effect even better. All in all we might draw two conclusions from this: Firstly, academia never really sleeps. And secondly, **we can answer John Bohannon's question on *Who's downloading pirated papers?* with a resounding *Academics do for sure!*.**

The [second data set that I received](https://github.com/gedankenstuecke/scihub_analysis/blob/master/uni-stats-country.tab) on the academic use of *Sci-Hub* goes down to the country level. But to protect the people using the service, the resolution of the data has been cut back. So instead of providing 24h resolution, data is grouped by 10-day intervals. But this still allows to compare the academic use between different countries, at least to some degree.

[![](/assets/images/university_downloads_ranking-thumb.png)](/assets/images/university_downloads_ranking.png)
[click for larger version](/assets/images/university_downloads_ranking.png)

If we just plot the mean academic use for the countries included in the data we see a huge spread, with academic use ranging from 70% to basically 0% (the plot excludes countries with 0% academic use). The huge variation is in part due to the fact that some countries have very small sample sizes. Front runner Honduras for example only has 1,070 downloads in *Sci-Hub* in total, so a hand full of academic users can skew the value. On the other extreme, Peru for example does have a lot of downloads in principle, but the IP range data only includes 5 entries. Which might very well be an underestimation of Peru's higher education landscape and thus be extremely misleading.

[![](/assets/images/university_downloads_per_enrolment-thumb.png)](/assets/images/university_downloads_per_enrolment.png)
[click for larger version](/assets/images/university_downloads_per_enrolment.png)

I nevertheless tried to see whether there's some underlying reason for this distribution. The first idea I could come up with was the percentage of the population being enrolled in higher education. Again the [Worldbank was useful to find some data on this](http://databank.worldbank.org/data/home.aspx). I used the *Gross enrolment ratio for tertiary education across both sexes* (title by the Worldbank, not mine). Plotting this against the percentage of downloads (and at least visualizing the bias in the data by plotting the total number of downloads alongside), we see very little influence of it. Which might be because the gross enrolment includes non-university level education, but I somehow doubt that this has much of an influence.   

[![](/assets/images/university_downloads_per_researchspending-thumb.png)](/assets/images/university_downloads_per_researchspending.png)
[click for larger version](/assets/images/university_downloads_per_researchspending.png)

The second hypothesis I had was that it's dependent on the amount of spending done on research in general: Once you start investing into research, having more academics around might lead to an initial increase in *Sci-Hub* downloads, which eventually might decrease because once you have enough money, you can afford the journal subscriptions? But that also doesn't seem to be the case. I guess at the end it does not matter how much money you throw at publishers, you'll never be able to pay their subscriptions.

The [data used for these plots, as well as the code for generating the plots is on GitHub](https://github.com/gedankenstuecke/scihub_analysis), as usual. If you have ideas on how to improve the analyses [drop me an issue there](https://github.com/gedankenstuecke/scihub_analysis/issues) or [tweet me](https://twitter.com/gedankenstuecke). And big thanks go to Alexandra Elbakyan for providing the data, I hope seeing this is of some use!
