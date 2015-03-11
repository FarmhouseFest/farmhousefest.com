---
layout: page
title: The Festival
permalink: /2015/festival/
---


<div class="panel-container two-up festival-intro-2up">

	<div class="fixed-contents">

		<div class="panel light">

		    <h1 class="page-title">{{ page.title }}</h1>

			Drinking a great beer is more than just putting the liquid into your mouth and swallowing. It’s an intense sensory experience. Look at how the colour of the beer catches the sun’s rays. Listen to the faint pop of the slowly dissipating head. Stick your nose in the glass and breathe deeply. Faint hops? A bit of fruit? Maybe some acid? Then take a sip, close your eyes and enjoy the cool breeze blowing over you.
		</div>

		<div class="panel silent">

		</div>

	</div>
</div>


<div class="panel-container two-up festival-description-2up">

	<div class="fixed-contents">

		<h2 class="styled full-width">We Chose Saisons and Wild Ales For a Reason</h2>

		<div class="panel">

			<p>Doesn't sound like any beer festival you've ever beer to, does it? Well, maybe you've just been going to the wrong festivals. How is Farmhouse Festival different? Well, let's start with the beer.</p>

			<p>We're a style-forward festival, focusing on Saisons, Wild-Ales and Sours. That means no IPAs, no Lagers, and no last minute "oh crap the festival is tomorrow, let's cram some hops in a pin" casks.</p>

		</div>

		<div class="panel">

			<p>What about the breweries? Hand selected by a collection of beer nerds as picky as you are. Only breweries with the chops to produce great on-style beer were even invited.</p>

			<p>Even the location was carefully selected to maximize beer drinking pleasure. Not only is the UBC a beautiful grass field surrounded by forest and an apple orchard, it's also huge. Farmhouse Festival will boost the most square feet per festival-goer of any local beer festival. You can even bring a picnic blanket and spread out for the day.</p>

		</div>

	</div>

</div>


<div class="panel-container two-up festival-beer-2up">

	<div class="fixed-contents">

		<div class="panel light beers">

			<ul class="brewery-logos">

				{% for brewery in site.data.breweries.breweries %}
					<li class="brewery">
						<a href="{{ brewery.url }}">
							<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
						</a>
					</li>
				{% endfor %}

			</ul>
			<h3 class="styled secondary full-width">And More To Come!</h3>
		</div>

		<div class="panel light">
			<h2 class="styled">We Picked Good Beer</h2>
			<p>Sour/acidic barleywine gravity terminal gravity hops wort specific gravity, tulip glass. Wit units of bitterness heat exchanger? Malt pitching, black malt, lambic wort attenuation cask reinheitsgebot! Amber scotch ale trappist black malt lambic.</p>
		</div>



</div>

{% include details.html %}