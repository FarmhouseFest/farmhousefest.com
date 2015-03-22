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

			{% for brewery in site.data.breweries.breweries %}
				<li class="brewery" id="{{ brewery.id }}">
					<a href="{{ brewery.url }}">
						<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
					</a>
					<div class="details">
						<a href="{{ brewery.url }}">
							<h2 class="styled">{{ brewery.name }}</h2>
						</a>
						<p>
							{{ brewery.description }}
						</p>
					</div>
				</li>
			{% endfor %}

		</ul> 

		<h3 class="styled secondary centered">Even more coming soon...</h3>
	</div>

</div>



{% include details.html %}