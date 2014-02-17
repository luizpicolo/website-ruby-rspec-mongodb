/*
	Code JavaScript
*/
//= require jquery_cycle

$(document).ready(function() {
    $('.slideshow').cycle({
		fx:     'fade', 
	    speed:  'slow', 
	    timeout: 0, 
	    next:   '#next2', 
	    prev:   '#prev2' 
	});
});

function menu(){
	$("#nav-principal a").each(function(){
		alert($(this).attr("href"));
		$(this).attr("href") == window.location.pathname && $(this).parent().attr("class","selecionado")
	})
};

menu();

$(document).scroll(function(){140<=parseInt($(this).scrollTop())?$("#nav-principal").css({position:"fixed",top:"-15px",background:"#FFF",width:"780px"}):$("#nav-principal").css({position:"relative",top:"0"})});
var url=window.location,urlString=url.toString(),urlArray=urlString.split("/");menu(urlArray[3]);function menu(a){$("#nav-principal a").each(function(){a&&($(this).parent().removeClass(),$(this).attr("href")==a&&$(this).parent().attr("class","selecionado"))})}$(document).scroll(function(){140<=parseInt($(this).scrollTop())?$("#nav-principal").css({position:"fixed",top:"-15px",background:"#FFF",width:"780px"}):$("#nav-principal").css({position:"relative",top:"0"})});
