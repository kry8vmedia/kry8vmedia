---
layout: post
title:  We Are Live
date:   2016-12-05 10:30:00 +0200
categories: ['Technology']
tags: ['live','blog', 'update', 'Jekyll', 'Namecheap', 'Netlify', 'Cloudinary', 'Formspree', 'MailChimp', 'Bootstrap', 'SCSS', 'Disqus']
img: img/we-are-live-2
image: https://res.cloudinary.com/krvmedia/c_fill,w_1200,f_jpg/img/we-are-live-2
comments: true
post: true
page-id: post-page
published: true
description: We are live! Bookmark our website or follow us on social media for updates.
type: article
publisher:  https://www.facebook.com/krvmedia
author: chanda
---
So I have been planning on creating this website for a while now. It took some work but at least now I can share quite a lot from one awesome, central location. Read on and find out how I got this online.
<!--more-->
<hr class="post-separator" />

The first decision I had to make was what kind of website I would build. I wanted a small, easy-to-maintain website that I could fully design. That being said, services such as [WordPress] and [Blogger] were not an option. In no way am I discouraging using their services<span>&mdash;</span>I've used each one of them before<span>&mdash;</span>but something about coding appeals to me (I'm studying Computer Science).  The only ~~problem~~ advantage with doing the coding is the ~~amount of code I would have to write and what not.~~ freedom to make my own design choices.

### Thank You Jekyll, Bootstrap and SCSS
I'm thankful for these services, they are super helpful. [Jekyll] is a static website generator which has helped me tonnes with creating this website. It has functions, variables, loops and templates that makes it easier to write and maintain <abbr title="HyperText Markup Language">HTML</abbr> code with little to no repeated code. This is all thanks to [Liquid], a templating language created by [Shopify] and written in [Ruby], which is a breeze to learn, especially if one is familiar with programming. 

[Bootstrap] on the other hand helped make the coding faster as most of the work has already been done for me. However, bootstrap can certainly come with a lot of stuff you don't really need. This is the part where I get to praise <abbr title="Sassy Cascading Stylesheet">SCSS</abbr> which to me is <abbr title="Cascading Stylesheet">CSS</abbr> on steroids. Who would have thought CSS would be so much fun! Functions, loops, variables, partials, mixins and placeholders (templates) and a whole bunch of other stuff. This helped me get only what I needed out of the Bootstrap framework to keep my code 'small'. You can find out more about SCSS (and <abbr title="Syntactically Awesome Stylesheet">Sass</abbr>) at their [website]. 

### Domain Name and Hosting 
Everything I've said before this section is open source and free. When it comes to the domain name and hosting, that's when wallets begin to peep out of pockets. With so many hosting services around it's hard for one to pick one fish from the sea. I decided to go with [Namecheap] for my domain name. Before you go crazy and say it's because of the word 'cheap' in their name, you're probably right. Plus I got it for only $6! :grinning: Honestly, the best advice I can give is do your research.

Hosting was a bit tricky to figure out because...I wanted something free, but also fast. The source code of this website is hosted on [Github] so I had the choice of using GitHub Pages for hosting. Just when I was about to do so, I came across a company called [Netlify] that uses a <abbr title="Content Delivery Network">CDN</abbr> system to serve websites it hosts. Long story short, that's really good web performance and increased [page speed] for your website. They also have really cool features I couldn't turn down.

### Other Cool Stuff and Optimizations
Anyone who pays attention to websites these days is familiar with the word 'responsive'. You know, the thing that makes websites look good **and** consistent on all devices? Well, with bootstrap that's pretty easy but when it comes to images it can get a little tricky. There's so many devices to cater for and some devices can't handle large images. And don't argue about resizing in CSS because what is delivered is still a large image taking up a lot of bandwidth. Then I met [Cloudinary]. Cloudinary is the service I use to serve responsive images that are transformed on the fly depending on the device one is using. So if I have a 1000px by 1000px image in my archive but only need a 100px by 100px version of it, I can just tell Cloudinary to transform it at the same time I'm requesting it. And get this: they use a CDN too! What's not to love about them?

Since this is a static website, it has no databases and back-ends and stuff like that. It's 'simple' front-end code. So for the contact forms and newsletter subscriptions I use [Formspree] and [MailChimp] respectively. They make things for us front-end developers so much easier! Lastly, if you scroll down, you should see a comment section<span>&mdash;</span>which also needs a back-end and database<span>&mdash;</span>that runs thanks to what I believe is the best web comment/audience building service out there: [Disqus]! Really flexible and easy to implement.

### Bonus
{% include blog-image.html name="blogging-in-code" side="left" %}
I get to write my blog posts as though I were coding a software or something! Just look at the this image. I typically write my blog posts in [Markdown] and when I'm done, I just push my changes to Github and Netlify automatically updates the website.<br /><br />

### Conclusion
This is a pretty little summary of the what I did to build this site. There are a few things I left out because that would make this post so long to read. If you have any questions, feel free to ask them in the comments section below. Let's talk! :smile:

<small>Blog post image courtesy of [Burak Kebapci](https://www.pexels.com/u/weekendplayer/)</small>

[Bootstrap]: http://getbootstrap.com/
[Namecheap]: https://www.namecheap.com/?aff=105438
[Wordpress]: https://wordpress.com
[Blogger]: https://www.blogger.com
[Jekyll]: https://jekyllrb.com
[Liquid]: https://shopify.github.io/liquid 
[Shopify]: https://www.shopify.com
[Ruby]: https://www.ruby-lang.org
[website]: sass-lang.com
[Github]: https://github.com
[Netlify]: https://www.netlify.com
[Cloudinary]: https://cloudinary.com
[Formspree]: https://formspree.io
[MailChimp]: https://mailchimp.com
[Disqus]: https://disqus.com
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[page speed]: https://moz.com/learn/seo/page-speed