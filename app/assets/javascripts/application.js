/*
	Code JavaScript
*/
//= require jquery_cycle

// Jquery Cycles
$(document).ready(function() {
    $('.slideshow').cycle({
		fx:     'fade', 
	    speed:  'slow', 
	    timeout: 0, 
	    next:   '#next2', 
	    prev:   '#prev2' 
	});
});

// AddThis
var addthis_config = {"data_track_addressbar":true};

// Coments disqus
var disqus_shortname = 'luizpicolo';
(function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

// Tweet Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
