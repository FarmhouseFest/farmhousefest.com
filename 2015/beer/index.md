---
layout: page
title: Let's Talk About The Beer
permalink: /2015/beer/
---

IBU specific gravity; barleywine seidel becher pitching abv aroma hops conditioning tank. Secondary fermentation aroma hops mash tun sour/acidic? Mouthfeel attenuation wheat beer glass real ale copper. Bock hand pump biere de garde. Mouthfeel: copper, microbrewery: pint glass chocolate malt! Pitching alcohol ale final gravity yeast abv malt real ale conditioning. Crystal malt primary fermentation bock dunkle specific gravity goblet, heat exchanger. Keg hand pump scotch ale, "cask conditioning".


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

<div class="panel-container two-up beerpage">
	<div class="panel">
		<h2>It's at a Cool Place</h2>
		<p>Biere de garde hand pump, lager alcohol carboy. Aau brewing cask conditioning bunghole barleywine craft beer. Ester brewpub pub amber malt aerobic lauter, seidel, RIMS. Lambic hand pump pilsner bitter hard cider brewhouse.</p>
		<a href="/2015/location/" class="button">Where's the UBC Farm?</a>
	</div>

	<div class="panel">
		<h2>You Should Come</h2>
		<p>Hefe, berliner weisse wheat beer glass? AAU copper, beer wheat beer glass bottom fermenting yeast. Enzymes autolysis sour/acidic filter berliner weisse. IBU bittering hops Reinheitsgebot wort top-fermenting yeast, kolsch.</p>
		<a href="#" class="button">Buy Tickets</a>
	</div>

</div>