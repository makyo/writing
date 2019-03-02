---
counts:
    characters_real: 127
    characters_total: 151
    file: ./posts/tech/how-charming/index.md
    paragraphs: 3
    type: jekyll
    words: 18
layout: category
title: How Charming
---

An exploration in charming and deploying applications for Juju.

-----

{% for post in site.categories.how-charming %}
* [{{ post.title }}]({{ post.url }}) posted on {{ post.date|date_to_string }}
{% endfor %}
