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
			<p>Farmhouse ales are a perfect canvas for new and innovative ideas. Their rich depth of flavours lets brewers explore exciting possibilities in any aspect of the beer. Malt character, hop flavours and aromas, yeast esters and phenols, funk and acid, fruit and spice additions, and oak aging are all on the table for the brewmaster. As such, brewing farmhouse ales is no easy task, but drinking them sure is.</p>

			<p>We&#8217;re bringing in some of the best breweries in the province, as well as guests from around the world. We don&#8217;t want to count our chickens before they hatch, so we&#8217;ll announce attending breweries as we get confirmation. The best way to stay up to date with who will be serving at Farmhouse Fest is to follow us on <a href="https://facebook.com/FarmhouseFest">Facebook</a>, <a href="https://twitter.com/farmhousefest">Twitter</a>, or <a href="https://instagram.com/farmhousefest">Instagram</a>, as we&#8217;ll be posting updates as we get closer to festival day.</p>
		</div>

		<ul class="brewery-list">

			{% for brewery in site.data.2016.breweries.breweries %}
				{% if brewery.type == "primary" %}
					<li class="brewery" id="{{ brewery.id }}">
						<a href="{{ brewery.url }}" class="brewery-logo">
							<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
						</a>
						<div class="details">
							<a href="{{ brewery.url }}">
								<h2 class="styled">{{ brewery.name }}</h2>
								<p>{{ brewery.url | remove:'http://' | remove:'www.' | replace:'/',' ' }}</p>
							</a>
						</div>
					</li>
				{% endif %}
			{% endfor %}
		</ul>
		<h3 class="full-width spaced">
			With many more still to come&#8230;
		</h3>

</div>