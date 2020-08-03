<div class="notification is-warning is-light">
  Por favor, ten en conta de que esta Web está <strong>baixo desenvolvemento</strong>. Pronto haberá máis contido dispoñíbel.
</div>

## Benvido!

Benvido á miña páxina web. Eu son Miguel Sánchez.

Nesta web atoparás tanto proxectos que fixen no pasado como outra información útil acerca de resolver problemas utilizando as **matemáticas**, a **física** e a **tecnoloxía**.  
En definitiva: **Enxeñaría!**

## Proxectos destacados

Esta é unha lista de algúns dos proxectos que levei a cabo. Podes atopar a lista enteira na páxina de [Proxectos](/projects/).

{% for project in site.projects %}
{% if project.featured %}

{% include featured_project.html url=project.permalink title=project.title subtitle=project.subtitle description=project.description tags=project.tags %}

{% endif %}
{% endfor %}

{% include latest-posts.html %}