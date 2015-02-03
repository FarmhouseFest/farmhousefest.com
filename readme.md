# FARMHOUSE FESTIVAL WEBSITE

This is the website for the Farmhouse Festival, powered by Jekyll.

## SETUP

To start contributing changes, clone this repo into a new folder and then on
the command line:

* Install Jekyll if necessary (instructions at http://jekyllrb.com/)
* Install Grunt if necessary (instructions at http://gruntjs.com/)
* Navigate to the repo and install dependicies with ``npm install``
* Run Jekyll server with ``jekyll serve``
* Make your changes and test them locally
* Before sending up your changes, run all grunt tasks (CSS prefixing, 
  minification) with ``grunt``
* Push your changes to Github and issue a pull request


## ADDING A PAGE

Adding pages is pretty simple.

* Choose where you want the page to live in the URL structure
* Create a folder, and add an index.html or index.md file -- you can use
  either HTML or Markdown to build your page, see /about/organizers/index.html
  and /about/vision/index.md for examples of each, including required metadata.
* Within the metadata, choose a layout (all layouts exist in /_layouts/) and
  title your page. Use this syntax at the top:

        ---
        layout: page
        title: This Page's Title
        ---

* If your page needs to exist within the main navigation, add it to
  /_data/menu.yaml

Alternatively, just clone an existing page and update the metadata.