<div class="notification is-warning is-light">
  Por favor, ten en cuenta de que esta página está todavía <strong>bajo desarrollo</strong>. Habrá más contenido disponible pronto.
</div>

## ¡Bienvenido!

¡Bienvenido a mi Web! Soy Miguel Sánchez.

En esta Web encontrarás proyectos que he hecho en el pasado e información útil sobre cómo solucionar problemas utilizando matemáticas, física y tecnología.  
En definitiva: ¡Ingeniería!

## Proyectos destacados

Esta es una lista de algunos de los proyectos que he hecho. Puedes encontrar la lista completa en [Proyectos](/projects/).

{% for project in site.projects %}
{% if project.featured %}

{% include featured_project.html url=project.permalink title=project.title subtitle=project.subtitle description=project.description tags=project.tags %}

{% endif %}
{% endfor %}

{% include latest-posts.html %} 