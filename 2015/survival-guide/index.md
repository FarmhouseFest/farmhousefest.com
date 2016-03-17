---
layout: page
title: Farmhouse Fest Survival Guide
permalink: /2015/survival-guide/
---

<div class="panel-container two-up beer-intro-2up">

	<div class="fixed-contents">
		<div class="panel">

		    <h1 class="page-title styled main">Welcome to the Fest!</h1>

			<p>All the important info you'll need today. Stay safe, drink lots of water, and find some shade. For emergencies, please find an organizer or call 604 603 0834.</p>

		</div>

		<div class="panel silent">

		</div>
	</div>
</div>


<div class="panel-container one-up beer-listing-1up">


	<ul class="survival-nav">
		<li><a href="#survival-venue">The Venue</a></li>
		<li><a href="#survival-beer">The Beer</a></li>
		<li><a href="#survival-home">Getting Home Safely</a></li>
	</ul>

	<div class="fixed-contents survival-siteplan" id="survival-venue">

		<h2 class="styled full-width">The Venue</h2>

		<a href="/images/2015/site-map.png">
			<img src="/images/2015/site-map.png" alt="Bus Map" class="survival-map" />
		</a>

		<h3 class="styled secondary">Local Breweries</h3>
		<ul>
			<li><em>5</em> Brassneck</li>
			<li><em>26</em> Category 12</li>
			<li><em>12</em> Dageraad</li>
			<li><em>2</em> Driftwood</li>
			<li><em>24</em> Four Winds</li>
			<li><em>20</em> Lighthouse</li>
			<li><em>6</em> Main Street</li>
			<li><em>19</em> Moon Under Water</li>
			<li><em>11</em> Parallel 49</li>
			<li><em>21</em> Persephone</li>
			<li><em>9</em> Powell Street</li>
			<li><em>25</em> Steel &amp; Oak</li>
			<li><em>7</em> Strange Fellows</li>
			<li><em>10</em> Storm</li>
			<li><em>27</em> Yellow Dog</li>
		</ul>

		<h3 class="styled secondary">Imports</h3>
		<ul>
			<li><em>17</em> Beerthirst</li>
			<li><em>15</em> Bravo</li>
			<li><em>23</em> The Commons</li>
			<li><em>22</em> Copper &amp; Theory</li>
			<li><em>28</em> CRAFT Beer Importers</li>
			<li><em>16</em> Goose Island</li>
			<li><em>8</em> Txotx Imports</li>
			<li><em>1</em> UnTapped</li>
			<li><em>13</em> Westbier</li>
		</ul>

		<h3 class="styled secondary">Food &amp; Drink</h3>
		<ul>
			<li><em>18</em> Bottle Shop</li>
			<li><em>14</em> Ed's Daily</li>
			<li><em>3</em> Nice Pops</li>
			<li><em>4</em> Sip Soda</li>
		</ul>

	</div>

	<div class="fixed-contents survival-beer" id="survival-beer">

		<div class="survival-pourtimes">
			<h2 class="styled full-width">Special Pour Times</h2>
			{% for brewery in site.data.breweries.breweries %}
				{% if brewery.type == "primary" %}
					{% if brewery.beer %}
						{% for beer in brewery.beer %}
							{% if beer.type == "limited" %}
								<h3 class="beer-name">{{ beer.name }}</h3>
								<p class="beer-description">Pouring at {{ brewery.name }}, booth {{ brewery.booth }}, {{ beer.pour-time }}pm</p>
							{% endif %}
						{% endfor %}
					{% endif %}
				{% endif %}
			{% endfor %}
		</div>

		<h2 class="styled full-width">The Full Beer List</h2>

		<ul class="brewery-list">

			{% for brewery in site.data.breweries.breweries %}
				{% if brewery.type == "primary" %}
					{% if brewery.beer %}
					<li class="brewery" id="{{ brewery.id }}">
						<div class="details">
							<a href="{{ brewery.url }}">
								<h3 class="styled secondary">{{ brewery.name }}</h3>
							</a>
							<ul class="beer-list">
							{% for beer in brewery.beer %}
								<li>
									<h3 class="beer-name">{{ beer.name }}</h3>
									<p class="beer-description">{{ beer.description }}{% if beer.ratebeer %} <a href="{{ beer.ratebeer}}">(info)</a>{% endif %}{% if beer.type == "limited" %} - pours at {{ beer.pour-time }}pm{% endif %}</p>
								</li>
							{% endfor %}
							</ul>
						</div>
					</li>
					{% endif %}
				{% endif %}
			{% endfor %}
		</ul>

	</div>



<div class="panel-container two-up">

	<div class="fixed-contents survival-home" id="survival-home">

		<h2 class="styled full-width">Getting Home Safely</h2>

		<div class="panel">

			<a href="/images/2015/bus-map.png">
				<img src="/images/2015/bus-map.png" alt="Bus Map" class="survival-map" />
			</a>

			<p>Route C18 &amp; C20 service the <a href="http://ubcfarm.ubc.ca/contact-us/">UBC Farm</a> gate every 30 minutes, taking you to the UBC Loop, where connections are available to the 99 B-Line, 33, 41, 49 etc. bus loops that will take you west to downtown or connecting points.</p>

			<h3 class="styled secondary">Taxis</h3>
			<p>Yellow Cab: 604.681.1111</p>
			<p>Black Tob Cabs: 604.731.1111</p>
			<p>Maclure's: 604.831.1111</p>

			<h3 class="styled secondary">Designated Driver Services</h3>
			<p>A Safe Alternative: 605.566.1564</p>
			<p>Ride Home Safely: 778.987.7441</p>
		</div>

	</div>
</div>



</div>


