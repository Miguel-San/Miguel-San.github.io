---
layout: page

---

# This is a test

{% for item in site.pages %}
	<p>{{ item.name }}</p>
    {% if item.name == "projects.md" %}
    	{{ site.url }}
        {% assign projects_title = item.title %}    	
    {% endif %}
{% endfor %}

{{ projects_title }}