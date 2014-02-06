/*
	Code JavaScript
*/
function menu(){
	$("#nav-principal a").each(function(){
		alert($(this).attr("href"));
		$(this).attr("href") == window.location.pathname && $(this).parent().attr("class","selecionado")
	})
};
menu();

$(document).scroll(function(){140<=parseInt($(this).scrollTop())?$("#nav-principal").css({position:"fixed",top:"-15px",background:"#FFF",width:"780px"}):$("#nav-principal").css({position:"relative",top:"0"})});