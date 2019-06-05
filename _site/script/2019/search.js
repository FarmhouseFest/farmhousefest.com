searchField = $("input#search");

searchField.quicksearch(".beer-list li");

searchField.on("input", function() {

  searchTerm = $(this).val();

  if(searchTerm.length > 0) {
    $(".beer-intro").hide();
  	return false;
  } else {
    $(".beer-intro").show();
  	return false;
  }

});
