---
layout: page
title: Let's Talk About Beer
permalink: /2015/beer/
---

<div class="panel-container two-up beer-intro-2up">

	<div class="fixed-contents">
		<div class="panel">

		    <h1 class="page-title" class="styled main">{{ page.title }}</h1>

			<p>Farmhouse Fest is different from most festivals. First off, only three styles are allowed: Saisons, Wild Ales and Sours. Second, to ensure the quality and selection we are striving for, only select breweries who brew these styles were invited. We want to showcase new and unique beers and because of this, we hand-picked the beers from each brewery.</p>

		</div>

		<div class="panel silent">

		</div>
	</div>
</div>


<div class="panel-container one-up beer-listing-1up">

	<div class="fixed-contents">
		<ul class="brewery-list">

			{% for brewery in site.data.2015.breweries.breweries %}
				{% if brewery.type == "primary" %}
					{% if brewery.beer %}
					<li class="brewery" id="{{ brewery.id }}">
						<a href="{{ brewery.url }}">
							<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
						</a>
						<div class="details">
							<a href="{{ brewery.url }}">
								<h2 class="styled">{{ brewery.name }}</h2>
							</a>
							<ul class="beer-list">
							{% for beer in brewery.beer %}
								{% if beer.type == "limited" %}
								{% else %}
									<li>
										<h3 class="beer-name">{{ beer.name }}</h3>
										<p class="beer-description">{{ beer.description }}{% if beer.ratebeer %} <a href="{{ beer.ratebeer}}">(info)</a>{% endif %}</p>
									</li>
								{% endif %}
							{% endfor %}
							</ul>
						</div>
					</li>
					{% endif %}
				{% endif %}
			{% endfor %}
		</ul>
		
		<!--<ul class="brewery-list coming-soon">

			{% for brewery in site.data.breweries.breweries %}
				{% if brewery.type == "primary" %}
					{% if brewery.beer %}
					{% else %}
					<li class="brewery" id="{{ brewery.id }}">
						<a href="{{ brewery.url }}">
							<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
						</a>
						<div class="details">
							<a href="{{ brewery.url }}">
								<h2 class="styled">{{ brewery.name }}</h2>
							</a>
							<p class="tbd">Beer list to be announced.</p>
						</div>
					</li>
					{% endif %}
				{% endif %}
			{% endfor %}

		</ul>-->

		<h3 class="styled secondary centered">Specific beers subject to availability &amp; distribution whims.</h3>
	</div>

</div>



{% include details.html %}