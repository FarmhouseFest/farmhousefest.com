---
layout: 2016/default
title: Farmhouse Fest 2016 Guide
permalink: /2016/guide/
---

<div class="panel-container">

	<div class="fixed-contents">
		<div class="panel">

		    <h1>Welcome to the Fest!</h1>

			<p>Here's all the most important info you'll need today. Stay safe, drink lots of water, and find some shelter from the weather. For emergencies, please find an organizer or call 604 603 0834.</p>

		</div>
	</div>
</div>


<div class="panel-container one-up guide">


	<ul class="guide-nav">
		<li><a href="#guide-venue">The Venue</a></li>
		<li><a href="#guide-beer">The Beer</a></li>
		<li><a href="#guide-home">Getting Home Safely</a></li>
	</ul>

	<div class="fixed-contents guide-siteplan" id="guide-venue">

		<h2 class="styled full-width">The Venue</h2>
		<p class="help">(tap to expand)</p>

		<a href="/images/2016/site-map.png" class="plan">
			<img src="/images/2016/site-map.png" alt="Bus Map" class="guide-map" />
		</a>

		<div class="panel-container two-up">
			<div class="fixed-contents">
				<div class="panel">
					<ul>
						<li><em>1</em> Steel &amp; Oak</li>
						<li><em>2</em> Dageraad</li>
						<li><em>3</em> Brassneck</li>
						<li><em>4</em> Strange Fellows</li>
						<li><em>5</em> Copper &amp; Theory</li>
						<li><em>6</em> pFriem</li>
						<li><em>7</em> Parallel 49</li>
						<li><em>8</em> Main Street</li>
						<li><em>9</em> Westbier</li>
						<li><em>10</em> Txotx</li>
						<li><em>11</em> Yellow Dog</li>
						<li><em>12</em> Twin Sails</li>
						<li><em>13</em> Moody Ales</li>
						<li><em>14</em> Four Winds</li>
					</ul>
				</div>
				<div class="panel">
					<ul>
						<li><em>15</em> Trou du Diable</li>
						<li><em>16</em> Dunham</li>
						<li><em>17</em> Le Castor</li>
						<li><em>18</em> Untapped</li>
						<li><em>19</em> Callister</li>
						<li><em>20</em> Steel Toad</li>
						<li><em>21</em> Steamworks</li>
						<li><em>22</em> Fuggles &amp; Warlock</li>
						<li><em>23</em> Trading Post</li>
						<li><em>24</em> Field House</li>
						<li><em>25</em> Moon Under Water</li>
						<li><em>26</em> Modern Times</li>
						<li><em>27</em> Beerthirst</li>
					</ul>
				</div>
			</div>
		</div>

	</div>

	<div class="fixed-contents guide-beer" id="guide-beer">

		<h2 class="styled full-width">The Full Beer List</h2>

		<ul class="brewery-list">

			{% for brewery in site.data.2016.breweries.breweries %}
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

	<div class="fixed-contents guide-home" id="guide-home">

		<h2 class="styled full-width">Getting Home Safely</h2>

		<div class="panel">

			<a href="/images/2015/bus-map.png">
				<img src="/images/2015/bus-map.png" alt="Bus Map" class="guide-map" />
			</a>

			<p>Route C18 &amp; C20 service the <a href="http://ubcfarm.ubc.ca/contact-us/">UBC Farm</a> gate every 30 minutes, taking you to the UBC Loop, where connections are available to the 99 B-Line, 33, 41, 49 etc. bus loops that will take you west to downtown or connecting points.</p>

			<p>Additionally, <a href="http://www.vineandhops.ca/">Vine &amp; Hops</a> will be operating a shuttle every 20 minutes between the UBC Bus Loop and the UBC Farm. Signs will direct you to the pickup spot, and the schedule has been <a href="https://twitter.com/Vineandhops/status/743210280373596160">posted</a>. Space is very limited, and this will only be offered on a first come, first serve basis.</p>

			<h3 class="styled secondary">Taxis</h3>
			<p>Yellow Cab: 604.681.1111</p>
			<p>Black Top Cabs: 604.731.1111</p>
			<p>Maclure's: 604.831.1111</p>

			<h3 class="styled secondary">Designated Driver Services</h3>
			<p>A Safe Alternative: 604.566.1564</p>
			<p>Ride Home Safely: 778.987.7441</p>
		</div>

	</div>
</div>



</div>


