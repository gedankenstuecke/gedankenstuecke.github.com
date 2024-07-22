---
title: "Code from some mountaintop"
layout: post
date: 2024-07-22 16:00
image: /assets/images/2024-07-22-hagiang.jpg
image_alt: "a black and white photo of a person sitting on a fence overlooking a mountain scene"
tags: 
- open source
- foss 
- floss 
- codeberg
blog: true
last_modified_at: 2024-07-22 17:00
---

[![a black and white photo of a person sitting on a fence overlooking a mountain scene](/assets/images/2024-07-22-hagiang.jpg)](/assets/images/2024-07-22-hagiang.jpg)

In the [last blog post](/seizing-means-of-computation/), I had mentioned that I was looking to move away some of my personal code hosting away from GitHub (GH), to avoid being locked in into yet another tech giant. 
Instead, I wanted to move to a proper free alternative. 
On Mastodon, lots of folks recommended checking out [Codeberg](https://codeberg.org/) as a potential alternative that is based on [forgejo](https://forgejo.org/) and provides [static page hosting](https://codeberg.page/).

Beyond actually running on open source software, I particularly like the idea of how they organize [the governance of the platform](https://docs.codeberg.org/getting-started/what-is-codeberg/#what-is-codeberg-e.v.%3F):
Codeberg is structured as a registered non-profit association (or _eingetragener Verein_) in Berlin.
And while one doesn't have to become a (paying & active) member of the association to make an account, I love that this is an option. 
Beyond the financial support, the membership also means having a more active role in the governance, including the ability to vote on the presidium & board. 

And so I made the switch over the last week, at least for the first two projects: 
This website you're currently reading and the [_One Button Tracker_ for the Puck.js](https://tzovar.as/one-button-tracker/), which both are based on static hosting. 

As Codeberg, unlike GH pages does not automatically integrate with static site generators like Jekyll a bit more manual setup was needed, but [thanks to the extensive documentation](https://docs.codeberg.org/codeberg-pages/) that was quite doable. 
To automate a build from a static site generator like Jekyll (which this site uses), one can use of Codeberg's deployment of the [_Woodpecker CI_](https://woodpecker-ci.org/). 
The CI can can create the build based on a `source` repository to then push the output into a `pages` repository that codeberg.page can then serve. Luckily, Codeberg [even provides an example `yaml` Woodpecker config file](https://codeberg.org/Codeberg-CI/examples/src/branch/main/Jekyll/.woodpecker) for this. 

As this all worked like a charm, I [flipped the DNS settings for my domain yesterday](https://scholar.social/@gedankenstuecke/112823968573749986) and since then this page is being delivered through Codeberg.
The one thing I then noticed was that [Codeberg does not handle custom domain settings in 100% the same way that GitHub does](https://codeberg.org/Codeberg/Community/issues/1525): 
With GitHub, once you have setup `mydomain.tld` for the main user GH page, all further project-repositories will be accessible as `mydomain.tld/project_repo_name` (unless you setup a custom domain for them too), which does not happen with Codeberg.page. 

But luckily, there's an easy - albeit slightly inelegant - fix for it: Codeberg.page also looks for a `_redirects` file, in [which one can specify redirects](https://docs.codeberg.org/codeberg-pages/redirects/). Which is what I did for the _one button tracker_, which before was accessible at `tzovar.as/one-button-tracker`, despite being hosted in a different repository. With the redirect that link will still work, despite now being at `https://gedankenstuecke.codeberg.page/one-button-tracker/`.

When I started the process of moving even just these two repositories I was slightly worried about how many things could (and thus probably would) break. 
But it turns out that this was extremely painless! 
And, I'm super happy to have these pages and projects now be hosted in a place a lot more aligned to my own interests and values. 
Let's see if replacing Google as my email provider will be on the menu next!

---
Yes, I also use these posts to document this stuff for my forgetful self, so here are the links to the setup files:

- [source repository](https://codeberg.org/gedankenstuecke/pages-source)
- [final pages repository](https://codeberg.org/gedankenstuecke/pages)
- [Woodpecker setup](https://codeberg.org/gedankenstuecke/pages-source/src/branch/master/.woodpecker.yaml)
- [`_redirects`](https://codeberg.org/gedankenstuecke/pages-source/src/branch/master/_redirects)
