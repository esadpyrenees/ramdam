  $(function(){ 
  	var $menulink = $('<span id="menulink">☰</span>');
  	$menulink.on('click', function(){
  		$('body').toggleClass('open-toc');
  	})
  	$("#toc").before($menulink);
    $("#toc").tableOfContents(
      $("#wrapper"),      // Scoped to div#wrapper
      {
        startLevel: 1,    // H2 and up
        depth:      3,    // H2 through H4,
        //topLinks:   true, // Add "Top" Links to Each Header
      }
    ); 
  });

