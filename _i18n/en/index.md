<div class="notification is-danger">
  Please, note that this site is under <strong>heavy development</strong>. There will be more content available soon.
</div>

### Welcome!

Welcome to my website! I'm Miguel Sánchez.

On this site you will find projects I made in the past as well as some useful information about solving problems using maths, physics and technology.  
Definitely: Engineering!

### Featured projects

This is a list of some projects I made. You can find the entire list on the [Projects](/projects/) page.

{% for project in site.projects %}
{% if project.featured %}

{% include featured_project.html url=project.permalink title=project.title subtitle=project.subtitle description=project.description tags=project.tags %}

{% endif %}
{% endfor %}

{% include latest-posts.html %} 
