---
layout: page
date: 2020-07-04 12:19:48 +0200

---

# Debug page

### HEY!

Hey, Listen! You stumbled upon my debug page. This exists only with the purpose to help me deal with some features I'm getting trouble with other pages of the site, without burning everything else to the ground in the process :)

I should remove it from the master branch but I decided to leave it as an Easter Egg. So, congratulations! You are a very curious human!

<!-- Unless you are reading it from my GitHub. In that case is kind of easy finding this page, since it's on the main folder. --> 

### The debugging starts here

{% for item in site.pages %}
	<p>{{ item.name }}</p>
    {% if item.name == "projects.md" %}
    	{{ site.url }}
        {% assign projects_title = item.title %}    	
    {% endif %}
{% endfor %}

{{ projects_title }}

---

{% for item in site.data.navigation %}
{% assign name = item.name | prepend:"global." %}
<p>{{ name }}</p>
{% endfor %}

---

{% assign m = page.date | date: "%-m" %}
{% assign mon = m | prepend: "global.months." %}
{{ page.date | date: "%-d"}}
{% t mon %}
{{ page.date | date: "%Y" }}

{{ mon }}

---

Baseurl:   {{ site.baseurl }}


Baseurl_root: {{ site.baseurl_root }}


Pageurl: {{ page.url }}