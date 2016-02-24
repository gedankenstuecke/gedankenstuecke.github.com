---
title: "Punctuation in Code"
layout: post
date: 2016-02-24 01:00
tag: programming
blog: true
---
![python Punctuation](/assets/images/language_comp_header.png)

Over the last two days I was involved in giving a *Python for Beginners* course for fellow PhD students and Post-Docs. I was part of a similar course on *Perl* last year and I noticed it felt much harder to teach the basics of *Perl* than the basics of *Python*.

There may be a multitude of reasons for this:

* I might have gained more experience in teaching programming.
* The awesome [Software Carpentry materials](http://swcarpentry.github.io/python-novice-inflammation/), which we partially used are just so good.
* Python might be inherently easier to learn.

While I guess it is a combination of the above (at least I hope for \#1), I strongly suspect that the whole Python ecosystem and the language features itself are really helpful in making the language easier to learn. As mentioned, we based our materials on the *Python Novice* Software Carpentry course and [extended/changed it a bit](http://gedankenstuecke.github.io/python-novice-inflammation/), which are a great step-by-step guide.

As the lessons make great use of [Jupyter](http://jupyter.org/) notebooks they drastically decrease the cost of errors. In Perl you frequently had to switch between writing and running your code, which was especially annoying for beginners. With the notebooks (or any interactive shell for that matter) you can just edit your code inline, hit `<CMD>+<ENTER>` and can see the results of your changes right away. Which seems to make it much easier to experiment
and try out what happens if you change some bits.

And then there's how the language looks like. Personally I still find Perl pretty ugly to read, all the *;* and *{* and *}* all over the place just confuse me and from my experience they do the same for everyone getting started with the language. But is Python so much better on the eyes?

While thinking about it I remembered [those nice visualizations of punctuation in novels](https://medium.com/@neuroecology/punctuation-in-novels-8f316d542ec4#.3uk0h24u1), that Adam J Calhoun posted a couple of days back. The idea is that you strip away all the words and see what is left if you just look at the punctuation and compare it between different authors. And, lo and behold, you can see very different patterns. For example you can easily spot the texts of Cormac McCarthy, who famously does not use any quotation marks.

Luckily Adam [made his code for generating those plots freely available](https://github.com/adamjcalhoun/punctuation), so I decided to give it a quick test run between different programming languages. I just needed some code from the different languages. And ideally the code should basically do the same thing, in order to keep things somewhat comparable. I found [a nice example](http://www.danvk.org/josephus.html) that solves the [Josephus problem](https://en.wikipedia.org/wiki/Josephus_problem) in *Perl*, *Python* and *Ruby*. I copied all 3 programs and removed all comments, as those would skew our visualizations towards *\#*s. The resulting texts were used as *books* for Adam's script, with minor modifications to give us smaller graphs.

![perl Punctuation](/assets/images/language_comp_perl.png)

I won't spoil which image belongs to which language here, scroll down to see the ordering. The visualization above is pretty much dominated by *$* signs, followed by the nearly as ubiquitous curly brackets.  

![ruby Punctuation](/assets/images/language_comp_ruby.png)

This language gets rid of all the *$* signs, but introduces the *@* instead. The curly brackets are completely gone, but the *:* is now featured much more.

![python Punctuation](/assets/images/language_comp_python.png)

Neither *@*, nor *$* can be found in this code. Instead we now find some *%* signs. The *:* stays pretty frequent as well.

Just from looking at those graphs I find the second and third pictures much more pleasing as they are much more balanced in a way. The first image is so dominated by the *$* and *{}* that I can't really see the forest for the trees. But I am pretty clearly biased here, so your milage may vary. And please get in touch if you have similar code in your favorite programming language that you want to compare!

**Spoiler** *(Not Really, I Guess)*

1. Perl
2. Ruby
3. Python

---

#### Addendum

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Addendum to my Punctuation in Code: Brainfuck. <a href="https://t.co/bHsR4sOyfS">pic.twitter.com/bHsR4sOyfS</a></p>&mdash; Bastian Greshake (@gedankenstuecke) <a href="https://twitter.com/gedankenstuecke/status/702497843274227712">February 24, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Some of you actually came forward and sent requests regarding other pictures, after I posted another picture on *Twitter*. The picture above is from a [*brainfuck*](https://en.wikipedia.org/wiki/Brainfuck) conversion. For the 2 people who will notice: Yes, this isn't the Josephus problem but rather taken from a simple *Hello World*.

![punctuation malbolge](/assets/images/language_comp_malbolge.png)

[Blinry](https://twitter.com/blinry) suggested the equally cryptic [*Malbolge*](https://en.wikipedia.org/wiki/Malbolge). As there no Josephus solution available I instead [went for a text adventure](https://twitter.com/blinry/status/702501773257396224), which you can see above. And by now I really feel I should not have complained about the readability of *Perl*.  
