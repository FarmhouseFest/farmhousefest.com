---
layout: page
title: Let's Talk About Beer
permalink: /2015/beer/
---

<div class="panel-container two-up beer-intro-2up">

	<div class="fixed-contents">
		<div class="panel">

		    <h1 class="page-title" class="styled">{{ page.title }}</h1>

			<p>You know the drill. At every beer festival you’ve ever attended the routine is the same. Line up. Get tickets and glass. Get program. Pick out the two or three great beers you want to try. Do that. Peruse program for something else great to drink. Give up and try something at random.</p>

			<p>It’s not you. It’s the beer. Most festivals throw open their doors for every and any brewery to bring every and any beer they brew. The result is a whole lot of random beer that, on average, really isn’t that great. How much did it cost to get in here, again?</p>

			<p>Farmhouse Festival is different. First off, only three styles are allow: Saisons, Wild Ales and Sours. Second, only breweries selected by a panel of beer geeks were invited. Just look at this list!</p>

		</div>

		<div class="panel silent">

		</div>
	</div>
</div>


<div class="panel-container one-up beer-listing-1up">

	<div class="fixed-contents">
		<ul class="brewery-list">

			{% for brewery in site.data.breweries.breweries %}
				<li class="brewery">
					<a href="{{ brewery.url }}">
						<img class="logo" src="{{ brewery.logo }}" alt="{{ brewery.name }}" />
					</a>
					<a href="{{ brewery.url }}">
						<h2 class="styled">{{ brewery.name }}</h2>
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