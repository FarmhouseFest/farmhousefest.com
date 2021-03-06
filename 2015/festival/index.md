---
layout: default-festival
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

			<ul class="participating">

				{% for brewery in site.data.2015.breweries.breweries %}
					<li class="beer">
						<a href="/2015/beer/#{{ brewery.id }}">
							<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
						</a>
					</li>
				{% endfor %}

			</ul>
			<h3 class="styled secondary full-width">
				<a href="/2015/beer/">And Even More!</a>
			</h3>
		</div>

		<div class="panel light">
			<h2 class="styled">We Chose Good Beer</h2>

			<p>Being a style-forward festival, we’re focusing only on Saisons, Wild-Ales and Sours. Don't expect to find your typical IPAs, Lagers or Stouts at this Fest&#8230; unless they're a little wild.</p>

			<p>What about the breweries? As a small festival, we aren't able to invite all of the great BC breweries, so only select breweries who brew these styles were hand-picked to be a part of this year's event.</p>
		</div>



</div>

{% include details.html %}