---
layout: page
title: The Festival
permalink: /2015/festival/
---


<div class="panel-container two-up festival-intro-2up">

	<div class="fixed-contents">

		<div class="panel light">

		    <h1 class="page-title styled main">{{ page.title }}</h1>

			We felt it was time for Vancouver to have a unique, style-forward festival. What makes Farmhouse Fest unique? Well, let’s start with the experience of drinking great beer.
		</div>

		<div class="panel silent">

		</div>

	</div>
</div>


<div class="panel-container two-up festival-description-2up">

	<div class="fixed-contents">

		<h2 class="styled full-width">We Chose Saisons and Wild Ales For a Reason</h2>

		<div class="panel">
			<p>Drinking a great beer is more than just putting the liquid into your mouth and swallowing. It’s an intense sensory event. Look at how the colour of the beer catches the sun’s rays. Listen to the faint pop of the slowly dissipating head. Stick your nose in the glass and breathe deeply. Faint hops? A bit of fruit? Maybe some acid? Then take a sip, close your eyes and enjoy the cool breeze blowing over you.</p>
		</div>

		<div class="panel">
			<p>Hosting a festival outside isn’t just a location variable. It’s a deliberate decision made to reinforce the connection between what’s in your glass, and what’s in your surroundings. At the UBC Farm, those surroundings include forest, hop bines and an apple orchard. Beer doesn’t spring forth from nothingness. It’s planted, cultivated, harvested, and meticulously crafted into a delicious final product.</p>
		</div>

		<div class="full-width">
			<h3>The Fine Print:</h3>
			<p>All ticket sales are final. This event is 19+ only - no minors allowed. Two pieces of ID will be required for entry. Serving it Right Rules apply. Any person appearing intoxicated will not be allowed entry to the festival. We reserve the right to have security remove unruly or intoxicated persons from the festival at our descretion.</p>
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

			<p>Being a style-forward festival, we’re focusing only on Saisons, Wild-Ales and Sours. That means you won’t find IPAs, Lagers or Stouts at this Fest.</p>

			<p>What about the breweries? Hand picked by a collection of beer nerds as picky as you are. Only breweries with the chops to produce great on-style beer were invited.</p>
		</div>



</div>

{% include details.html %}