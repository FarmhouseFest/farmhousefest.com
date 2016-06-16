---
layout: 2016/default
title: The Beer
permalink: /2016/beer/
---


<div class="page-intro">

	<h1 class="page-title main">The Beer</h1>

</div>



<div class="panel-container two-up">

	<div class="fixed-contents">

		<div class="panel brand">

		    <p>Farmhouse Fest is different from most festivals. We obsessively focus on a narrow range of beer styles: Saisons, Wild Ales and Sours. Second, to ensure the quality and selection we are striving for, we focus on breweries who are quality driven, experimental, and have a track record of producing great farmhouse beers.</p>
		</div>


		<div class="panel photo beerglass">
			<!-- decoration placeholder -->
		</div>

	</div>

</div>


<div class="content-container">

	<h2 class="secondary-title">Breweries</h2>

		<div class="content-intro">
			<p>Farmhouse ales are a perfect canvas for new and innovative ideas. Their rich depth of flavours lets brewers explore exciting possibilities in any aspect of the beer. Malt character, hop flavours and aromas, yeast esters and phenols, funk and acid, fruit and spice additions, and oak aging are all on the table for the brewer.</p>

			<p>We&#8217;re bringing in some of the best and newest breweries in the province, as well as guests from around the world. What you'll find at Farmhouse Fest is listed below.</p>

			<!-- <p>We don&#8217;t want to count our chickens before they hatch, so we&#8217;ll announce attending breweries and beers as we get confirmation. The best way to stay up to date with who will be serving at Farmhouse Fest is to follow us on <a href="https://facebook.com/FarmhouseFest">Facebook</a>, <a href="https://twitter.com/farmhousefest">Twitter</a>, or <a href="https://instagram.com/farmhousefest">Instagram</a>, as we&#8217;ll be posting updates as we get closer to festival day.</p>-->

		</div>



		<ul class="brewery-list announced">

			{% for brewery in site.data.2016.breweries.breweries %}
				{% if brewery.type == "primary" %}
					{% if brewery.beer %}
					<li class="brewery" id="{{ brewery.id }}">
						<a href="{{ brewery.url }}" class="brewery-logo">
							<img class="logo ff-fix" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
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

<!-- 		<h3 class="full-width spaced">
			And Coming Soon&#8230;
		</h3>


		<ul class="brewery-list coming-soon">

			{% for brewery in site.data.2016.breweries.breweries %}
				{% if brewery.covered %}
				{% else %}
					{% if brewery.beer %}
					{% else %}
					<li class="brewery" id="{{ brewery.id }}">
						<a href="{{ brewery.url }}" class="brewery-logo">
							<img class="logo ff-fix" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
						</a>
						<div class="details">
							<a href="{{ brewery.url }}">
								<h2 class="styled">{{ brewery.name }}</h2>
							</a>
							<p class="tbd">List to be announced.</p>
						</div>
					</li>
					{% endif %}
				{% endif %}
			{% endfor %}
 -->
		</ul>



		<h3 class="full-width spaced callout">
			Specific beers subject to availability &amp; distribution whims.
		</h3>

</div>