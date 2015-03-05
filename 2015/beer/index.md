---
layout: page
title: Let's Talk About Beer
permalink: /2015/beer/
---

<div class="panel-container one-up">

	<div class="panel dark">

		<div class="fixed-contents">
		    <h1 class="page-title">{{ page.title }}</h1>

			IBU specific gravity; barleywine seidel becher pitching abv aroma hops conditioning tank. Secondary fermentation aroma hops mash tun sour/acidic? Mouthfeel attenuation wheat beer glass real ale copper. Bock hand pump biere de garde. Mouthfeel: copper, microbrewery: pint glass chocolate malt! Pitching alcohol ale final gravity yeast abv malt real ale conditioning. Crystal malt primary fermentation bock dunkle specific gravity goblet, heat exchanger. Keg hand pump scotch ale, "cask conditioning".
		</div>

	</div>
</div>


<div class="panel-container one-up">

	<div class="fixed-contents">
		<ul class="brewery-list">

			{% for brewery in site.data.breweries.breweries %}
				<li class="brewery">
					<a href="{{ brewery.url }}">
						<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
					</a>
					<a href="{{ brewery.url }}">
						<h2>{{ brewery.name }}</h2>
					</a>
					<p>
						{{ brewery.description }}
					</p>
				</li>
			{% endfor %}

		</ul> 
	</div>

</div>



{% include details.html %}