/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2013 M. Alsup
 * Version: 3.0.3 (11-JUL-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.7.1 or later
 */
function menu(){$("#nav-principal a").each(function(){alert($(this).attr("href")),$(this).attr("href")==window.location.pathname&&$(this).parent().attr("class","selecionado")})}function menu(e){$("#nav-principal a").each(function(){e&&($(this).parent().removeClass(),$(this).attr("href")==e&&$(this).parent().attr("class","selecionado"))})}!function(e,t){"use strict";function n(t){e.fn.cycle.debug&&i(t)}function i(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function c(t,n,i){var c=e(t).data("cycle.opts");if(c){var s=!!t.cyclePause;s&&c.paused?c.paused(t,c,n,i):!s&&c.resumed&&c.resumed(t,c,n,i)}}function s(n,s,o){function l(t,n,c){if(!t&&n===!0){var s=e(c).data("cycle.opts");if(!s)return i("options not found, can not resume"),!1;c.cycleTimeout&&(clearTimeout(c.cycleTimeout),c.cycleTimeout=0),d(s.elements,s,1,!s.backwards)}}if(n.cycleStop===t&&(n.cycleStop=0),(s===t||null===s)&&(s={}),s.constructor==String){switch(s){case"destroy":case"stop":var a=e(n).data("cycle.opts");return a?(n.cycleStop++,n.cycleTimeout&&clearTimeout(n.cycleTimeout),n.cycleTimeout=0,a.elements&&e(a.elements).stop(),e(n).removeData("cycle.opts"),"destroy"==s&&r(n,a),!1):!1;case"toggle":return n.cyclePause=1===n.cyclePause?0:1,l(n.cyclePause,o,n),c(n),!1;case"pause":return n.cyclePause=1,c(n),!1;case"resume":return n.cyclePause=0,l(!1,o,n),c(n),!1;case"prev":case"next":return(a=e(n).data("cycle.opts"))?("string"==typeof o&&(a.oneTimeFx=o),e.fn.cycle[s](a),!1):(i('options not found, "prev/next" ignored'),!1);default:s={fx:s}}return s}if(s.constructor==Number){var f=s;return(s=e(n).data("cycle.opts"))?0>f||f>=s.elements.length?(i("invalid slide index: "+f),!1):(s.nextSlide=f,n.cycleTimeout&&(clearTimeout(n.cycleTimeout),n.cycleTimeout=0),"string"==typeof o&&(s.oneTimeFx=o),d(s.elements,s,1,f>=s.currSlide),!1):(i("options not found, can not advance slide"),!1)}return s}function o(t,n){if(!e.support.opacity&&n.cleartype&&t.style.filter)try{t.style.removeAttribute("filter")}catch(i){}}function r(t,n){n.next&&e(n.next).unbind(n.prevNextEvent),n.prev&&e(n.prev).unbind(n.prevNextEvent),(n.pager||n.pagerAnchorBuilder)&&e.each(n.pagerAnchors||[],function(){this.unbind().remove()}),n.pagerAnchors=null,e(t).unbind("mouseenter.cycle mouseleave.cycle"),n.destroy&&n.destroy(n)}function l(n,s,r,l,h){var g,x=e.extend({},e.fn.cycle.defaults,l||{},e.metadata?n.metadata():e.meta?n.data():{}),v=e.isFunction(n.data)?n.data(x.metaAttr):null;v&&(x=e.extend(x,v)),x.autostop&&(x.countdown=x.autostopCount||r.length);var w=n[0];if(n.data("cycle.opts",x),x.$cont=n,x.stopCount=w.cycleStop,x.elements=r,x.before=x.before?[x.before]:[],x.after=x.after?[x.after]:[],!e.support.opacity&&x.cleartype&&x.after.push(function(){o(this,x)}),x.continuous&&x.after.push(function(){d(r,x,0,!x.backwards)}),a(x),e.support.opacity||!x.cleartype||x.cleartypeNoBg||y(s),"static"==n.css("position")&&n.css("position","relative"),x.width&&n.width(x.width),x.height&&"auto"!=x.height&&n.height(x.height),x.startingSlide!==t?(x.startingSlide=parseInt(x.startingSlide,10),x.startingSlide>=r.length||x.startSlide<0?x.startingSlide=0:g=!0):x.startingSlide=x.backwards?r.length-1:0,x.random){x.randomMap=[];for(var S=0;S<r.length;S++)x.randomMap.push(S);if(x.randomMap.sort(function(){return Math.random()-.5}),g)for(var b=0;b<r.length;b++)x.startingSlide==x.randomMap[b]&&(x.randomIndex=b);else x.randomIndex=1,x.startingSlide=x.randomMap[1]}else x.startingSlide>=r.length&&(x.startingSlide=0);x.currSlide=x.startingSlide||0;var I=x.startingSlide;s.css({position:"absolute",top:0,left:0}).hide().each(function(t){var n;n=x.backwards?I?I>=t?r.length+(t-I):I-t:r.length-t:I?t>=I?r.length-(t-I):I-t:r.length-t,e(this).css("z-index",n)}),e(r[I]).css("opacity",1).show(),o(r[I],x),x.fit&&(x.aspect?s.each(function(){var t=e(this),n=x.aspect===!0?t.width()/t.height():x.aspect;x.width&&t.width()!=x.width&&(t.width(x.width),t.height(x.width/n)),x.height&&t.height()<x.height&&(t.height(x.height),t.width(x.height*n))}):(x.width&&s.width(x.width),x.height&&"auto"!=x.height&&s.height(x.height))),!x.center||x.fit&&!x.aspect||s.each(function(){var t=e(this);t.css({"margin-left":x.width?(x.width-t.width())/2+"px":0,"margin-top":x.height?(x.height-t.height())/2+"px":0})}),!x.center||x.fit||x.slideResize||s.each(function(){var t=e(this);t.css({"margin-left":x.width?(x.width-t.width())/2+"px":0,"margin-top":x.height?(x.height-t.height())/2+"px":0})});var B=(x.containerResize||x.containerResizeHeight)&&n.innerHeight()<1;if(B){for(var O=0,F=0,A=0;A<r.length;A++){var k=e(r[A]),T=k[0],H=k.outerWidth(),R=k.outerHeight();H||(H=T.offsetWidth||T.width||k.attr("width")),R||(R=T.offsetHeight||T.height||k.attr("height")),O=H>O?H:O,F=R>F?R:F}x.containerResize&&O>0&&F>0&&n.css({width:O+"px",height:F+"px"}),x.containerResizeHeight&&F>0&&n.css({height:F+"px"})}var P=!1;if(x.pause&&n.bind("mouseenter.cycle",function(){P=!0,this.cyclePause++,c(w,!0)}).bind("mouseleave.cycle",function(){P&&this.cyclePause--,c(w,!0)}),f(x)===!1)return!1;var W=!1;if(l.requeueAttempts=l.requeueAttempts||0,s.each(function(){var t=e(this);if(this.cycleH=x.fit&&x.height?x.height:t.height()||this.offsetHeight||this.height||t.attr("height")||0,this.cycleW=x.fit&&x.width?x.width:t.width()||this.offsetWidth||this.width||t.attr("width")||0,t.is("img")){var n=0===this.cycleH&&0===this.cycleW&&!this.complete;if(n){if(h.s&&x.requeueOnImageNotLoaded&&++l.requeueAttempts<100)return i(l.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH),setTimeout(function(){e(h.s,h.c).cycle(l)},x.requeueTimeout),W=!0,!1;i("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return!0}),W)return!1;if(x.cssBefore=x.cssBefore||{},x.cssAfter=x.cssAfter||{},x.cssFirst=x.cssFirst||{},x.animIn=x.animIn||{},x.animOut=x.animOut||{},s.not(":eq("+I+")").css(x.cssBefore),e(s[I]).css(x.cssFirst),x.timeout){x.timeout=parseInt(x.timeout,10),x.speed.constructor==String&&(x.speed=e.fx.speeds[x.speed]||parseInt(x.speed,10)),x.sync||(x.speed=x.speed/2);for(var C="none"==x.fx?0:"shuffle"==x.fx?500:250;x.timeout-x.speed<C;)x.timeout+=x.speed}if(x.easing&&(x.easeIn=x.easeOut=x.easing),x.speedIn||(x.speedIn=x.speed),x.speedOut||(x.speedOut=x.speed),x.slideCount=r.length,x.currSlide=x.lastSlide=I,x.random?(++x.randomIndex==r.length&&(x.randomIndex=0),x.nextSlide=x.randomMap[x.randomIndex]):x.nextSlide=x.backwards?0===x.startingSlide?r.length-1:x.startingSlide-1:x.startingSlide>=r.length-1?0:x.startingSlide+1,!x.multiFx){var z=e.fn.cycle.transitions[x.fx];if(e.isFunction(z))z(n,s,x);else if("custom"!=x.fx&&!x.multiFx)return i("unknown transition: "+x.fx,"; slideshow terminating"),!1}var $=s[I];return x.skipInitializationCallbacks||(x.before.length&&x.before[0].apply($,[$,$,x,!0]),x.after.length&&x.after[0].apply($,[$,$,x,!0])),x.next&&e(x.next).bind(x.prevNextEvent,function(){return p(x,1)}),x.prev&&e(x.prev).bind(x.prevNextEvent,function(){return p(x,0)}),(x.pager||x.pagerAnchorBuilder)&&m(r,x),u(x,r),x}function a(t){t.original={before:[],after:[]},t.original.cssBefore=e.extend({},t.cssBefore),t.original.cssAfter=e.extend({},t.cssAfter),t.original.animIn=e.extend({},t.animIn),t.original.animOut=e.extend({},t.animOut),e.each(t.before,function(){t.original.before.push(this)}),e.each(t.after,function(){t.original.after.push(this)})}function f(t){var c,s,o=e.fn.cycle.transitions;if(t.fx.indexOf(",")>0){for(t.multiFx=!0,t.fxs=t.fx.replace(/\s*/g,"").split(","),c=0;c<t.fxs.length;c++){var r=t.fxs[c];s=o[r],s&&o.hasOwnProperty(r)&&e.isFunction(s)||(i("discarding unknown transition: ",r),t.fxs.splice(c,1),c--)}if(!t.fxs.length)return i("No valid transitions named; slideshow terminating."),!1}else if("all"==t.fx){t.multiFx=!0,t.fxs=[];for(var l in o)o.hasOwnProperty(l)&&(s=o[l],o.hasOwnProperty(l)&&e.isFunction(s)&&t.fxs.push(l))}if(t.multiFx&&t.randomizeEffects){var a=Math.floor(20*Math.random())+30;for(c=0;a>c;c++){var f=Math.floor(Math.random()*t.fxs.length);t.fxs.push(t.fxs.splice(f,1)[0])}n("randomized fx sequence: ",t.fxs)}return!0}function u(t,n){t.addSlide=function(i,c){var s=e(i),o=s[0];t.autostopCount||t.countdown++,n[c?"unshift":"push"](o),t.els&&t.els[c?"unshift":"push"](o),t.slideCount=n.length,t.random&&(t.randomMap.push(t.slideCount-1),t.randomMap.sort(function(){return Math.random()-.5})),s.css("position","absolute"),s[c?"prependTo":"appendTo"](t.$cont),c&&(t.currSlide++,t.nextSlide++),e.support.opacity||!t.cleartype||t.cleartypeNoBg||y(s),t.fit&&t.width&&s.width(t.width),t.fit&&t.height&&"auto"!=t.height&&s.height(t.height),o.cycleH=t.fit&&t.height?t.height:s.height(),o.cycleW=t.fit&&t.width?t.width:s.width(),s.css(t.cssBefore),(t.pager||t.pagerAnchorBuilder)&&e.fn.cycle.createPagerAnchor(n.length-1,o,e(t.pager),n,t),e.isFunction(t.onAddSlide)?t.onAddSlide(s):s.hide()}}function d(i,c,s,o){function r(){{var e=0;c.timeout}c.timeout&&!c.continuous?(e=h(i[c.currSlide],i[c.nextSlide],c,o),"shuffle"==c.fx&&(e-=c.speedOut)):c.continuous&&l.cyclePause&&(e=10),e>0&&(l.cycleTimeout=setTimeout(function(){d(i,c,0,!c.backwards)},e))}var l=c.$cont[0],a=i[c.currSlide],f=i[c.nextSlide];if(s&&c.busy&&c.manualTrump&&(n("manualTrump in go(), stopping active transition"),e(i).stop(!0,!0),c.busy=0,clearTimeout(l.cycleTimeout)),c.busy)return n("transition active, ignoring new tx request"),void 0;if(l.cycleStop==c.stopCount&&(0!==l.cycleTimeout||s)){if(!s&&!l.cyclePause&&!c.bounce&&(c.autostop&&--c.countdown<=0||c.nowrap&&!c.random&&c.nextSlide<c.currSlide))return c.end&&c.end(c),void 0;var u=!1;if(!s&&l.cyclePause||c.nextSlide==c.currSlide)r();else{u=!0;var p=c.fx;a.cycleH=a.cycleH||e(a).height(),a.cycleW=a.cycleW||e(a).width(),f.cycleH=f.cycleH||e(f).height(),f.cycleW=f.cycleW||e(f).width(),c.multiFx&&(o&&(c.lastFx===t||++c.lastFx>=c.fxs.length)?c.lastFx=0:!o&&(c.lastFx===t||--c.lastFx<0)&&(c.lastFx=c.fxs.length-1),p=c.fxs[c.lastFx]),c.oneTimeFx&&(p=c.oneTimeFx,c.oneTimeFx=null),e.fn.cycle.resetState(c,p),c.before.length&&e.each(c.before,function(e,t){l.cycleStop==c.stopCount&&t.apply(f,[a,f,c,o])});var m=function(){c.busy=0,e.each(c.after,function(e,t){l.cycleStop==c.stopCount&&t.apply(f,[a,f,c,o])}),l.cycleStop||r()};n("tx firing("+p+"); currSlide: "+c.currSlide+"; nextSlide: "+c.nextSlide),c.busy=1,c.fxFn?c.fxFn(a,f,c,m,o,s&&c.fastOnEvent):e.isFunction(e.fn.cycle[c.fx])?e.fn.cycle[c.fx](a,f,c,m,o,s&&c.fastOnEvent):e.fn.cycle.custom(a,f,c,m,o,s&&c.fastOnEvent)}if(u||c.nextSlide==c.currSlide){var y;c.lastSlide=c.currSlide,c.random?(c.currSlide=c.nextSlide,++c.randomIndex==i.length&&(c.randomIndex=0,c.randomMap.sort(function(){return Math.random()-.5})),c.nextSlide=c.randomMap[c.randomIndex],c.nextSlide==c.currSlide&&(c.nextSlide=c.currSlide==c.slideCount-1?0:c.currSlide+1)):c.backwards?(y=c.nextSlide-1<0,y&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=1,c.currSlide=0):(c.nextSlide=y?i.length-1:c.nextSlide-1,c.currSlide=y?0:c.nextSlide+1)):(y=c.nextSlide+1==i.length,y&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=i.length-2,c.currSlide=i.length-1):(c.nextSlide=y?0:c.nextSlide+1,c.currSlide=y?i.length-1:c.nextSlide-1))}u&&c.pager&&c.updateActivePagerLink(c.pager,c.currSlide,c.activePagerClass)}}function h(e,t,i,c){if(i.timeoutFn){for(var s=i.timeoutFn.call(e,e,t,i,c);"none"!=i.fx&&s-i.speed<250;)s+=i.speed;if(n("calculated timeout: "+s+"; speed: "+i.speed),s!==!1)return s}return i.timeout}function p(t,n){var i=n?1:-1,c=t.elements,s=t.$cont[0],o=s.cycleTimeout;if(o&&(clearTimeout(o),s.cycleTimeout=0),t.random&&0>i)t.randomIndex--,-2==--t.randomIndex?t.randomIndex=c.length-2:-1==t.randomIndex&&(t.randomIndex=c.length-1),t.nextSlide=t.randomMap[t.randomIndex];else if(t.random)t.nextSlide=t.randomMap[t.randomIndex];else if(t.nextSlide=t.currSlide+i,t.nextSlide<0){if(t.nowrap)return!1;t.nextSlide=c.length-1}else if(t.nextSlide>=c.length){if(t.nowrap)return!1;t.nextSlide=0}var r=t.onPrevNextEvent||t.prevNextClick;return e.isFunction(r)&&r(i>0,t.nextSlide,c[t.nextSlide]),d(c,t,1,n),!1}function m(t,n){var i=e(n.pager);e.each(t,function(c,s){e.fn.cycle.createPagerAnchor(c,s,i,t,n)}),n.updateActivePagerLink(n.pager,n.startingSlide,n.activePagerClass)}function y(t){function i(e){return e=parseInt(e,10).toString(16),e.length<2?"0"+e:e}function c(t){for(;t&&"html"!=t.nodeName.toLowerCase();t=t.parentNode){var n=e.css(t,"background-color");if(n&&n.indexOf("rgb")>=0){var c=n.match(/\d+/g);return"#"+i(c[0])+i(c[1])+i(c[2])}if(n&&"transparent"!=n)return n}return"#ffffff"}n("applying clearType background-color hack"),t.each(function(){e(this).css("background-color",c(this))})}var g="3.0.3";e.expr[":"].paused=function(e){return e.cyclePause},e.fn.cycle=function(t,c){var o={s:this.selector,c:this.context};return 0===this.length&&"stop"!=t?!e.isReady&&o.s?(i("DOM not ready, queuing slideshow"),e(function(){e(o.s,o.c).cycle(t,c)}),this):(i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this):this.each(function(){var r=s(this,t,c);if(r!==!1){r.updateActivePagerLink=r.updateActivePagerLink||e.fn.cycle.updateActivePagerLink,this.cycleTimeout&&clearTimeout(this.cycleTimeout),this.cycleTimeout=this.cyclePause=0,this.cycleStop=0;var a=e(this),f=r.slideExpr?e(r.slideExpr,this):a.children(),u=f.get();if(u.length<2)return i("terminating; too few slides: "+u.length),void 0;var p=l(a,f,u,r,o);if(p!==!1){var m=p.continuous?10:h(u[p.currSlide],u[p.nextSlide],p,!p.backwards);m&&(m+=p.delay||0,10>m&&(m=10),n("first timeout: "+m),this.cycleTimeout=setTimeout(function(){d(u,p,0,!r.backwards)},m))}}})},e.fn.cycle.resetState=function(t,n){n=n||t.fx,t.before=[],t.after=[],t.cssBefore=e.extend({},t.original.cssBefore),t.cssAfter=e.extend({},t.original.cssAfter),t.animIn=e.extend({},t.original.animIn),t.animOut=e.extend({},t.original.animOut),t.fxFn=null,e.each(t.original.before,function(){t.before.push(this)}),e.each(t.original.after,function(){t.after.push(this)});var i=e.fn.cycle.transitions[n];e.isFunction(i)&&i(t.$cont,e(t.elements),t)},e.fn.cycle.updateActivePagerLink=function(t,n,i){e(t).each(function(){e(this).children().removeClass(i).eq(n).addClass(i)})},e.fn.cycle.next=function(e){p(e,1)},e.fn.cycle.prev=function(e){p(e,0)},e.fn.cycle.createPagerAnchor=function(t,i,s,o,r){var l;if(e.isFunction(r.pagerAnchorBuilder)?(l=r.pagerAnchorBuilder(t,i),n("pagerAnchorBuilder("+t+", el) returned: "+l)):l='<a href="#">'+(t+1)+"</a>",l){var a=e(l);if(0===a.parents("body").length){var f=[];s.length>1?(s.each(function(){var t=a.clone(!0);e(this).append(t),f.push(t[0])}),a=e(f)):a.appendTo(s)}r.pagerAnchors=r.pagerAnchors||[],r.pagerAnchors.push(a);var u=function(n){n.preventDefault(),r.nextSlide=t;var i=r.$cont[0],c=i.cycleTimeout;c&&(clearTimeout(c),i.cycleTimeout=0);var s=r.onPagerEvent||r.pagerClick;e.isFunction(s)&&s(r.nextSlide,o[r.nextSlide]),d(o,r,1,r.currSlide<t)};/mouseenter|mouseover/i.test(r.pagerEvent)?a.hover(u,function(){}):a.bind(r.pagerEvent,u),/^click/.test(r.pagerEvent)||r.allowPagerClickBubble||a.bind("click.cycle",function(){return!1});var h=r.$cont[0],p=!1;r.pauseOnPagerHover&&a.hover(function(){p=!0,h.cyclePause++,c(h,!0,!0)},function(){p&&h.cyclePause--,c(h,!0,!0)})}},e.fn.cycle.hopsFromLast=function(e,t){var n,i=e.lastSlide,c=e.currSlide;return n=t?c>i?c-i:e.slideCount-i:i>c?i-c:i+e.slideCount-c},e.fn.cycle.commonReset=function(t,n,i,c,s,o){e(i.elements).not(t).hide(),"undefined"==typeof i.cssBefore.opacity&&(i.cssBefore.opacity=1),i.cssBefore.display="block",i.slideResize&&c!==!1&&n.cycleW>0&&(i.cssBefore.width=n.cycleW),i.slideResize&&s!==!1&&n.cycleH>0&&(i.cssBefore.height=n.cycleH),i.cssAfter=i.cssAfter||{},i.cssAfter.display="none",e(t).css("zIndex",i.slideCount+(o===!0?1:0)),e(n).css("zIndex",i.slideCount+(o===!0?0:1))},e.fn.cycle.custom=function(t,n,i,c,s,o){var r=e(t),l=e(n),a=i.speedIn,f=i.speedOut,u=i.easeIn,d=i.easeOut,h=i.animInDelay,p=i.animOutDelay;l.css(i.cssBefore),o&&(a=f="number"==typeof o?o:1,u=d=null);var m=function(){l.delay(h).animate(i.animIn,a,u,function(){c()})};r.delay(p).animate(i.animOut,f,d,function(){r.css(i.cssAfter),i.sync||m()}),i.sync&&m()},e.fn.cycle.transitions={fade:function(t,n,i){n.not(":eq("+i.currSlide+")").css("opacity",0),i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.cssBefore.opacity=0}),i.animIn={opacity:1},i.animOut={opacity:0},i.cssBefore={top:0,left:0}}},e.fn.cycle.ver=function(){return g},e.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:!1,animIn:null,animInDelay:0,animOut:null,animOutDelay:0,aspect:!1,autostop:0,autostopCount:0,backwards:!1,before:null,center:null,cleartype:!e.support.opacity,cleartypeNoBg:!1,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:!0,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:!0,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:!1,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:t,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}}(jQuery),/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
function(e){"use strict";e.fn.cycle.transitions.none=function(t,n,i){i.fxFn=function(t,n,i,c){e(n).show(),e(t).hide(),c()}},e.fn.cycle.transitions.fadeout=function(t,n,i){n.not(":eq("+i.currSlide+")").css({display:"block",opacity:1}),i.before.push(function(t,n,i,c,s,o){e(t).css("zIndex",i.slideCount+(o!==!0?1:0)),e(n).css("zIndex",i.slideCount+(o!==!0?0:1))}),i.animIn.opacity=1,i.animOut.opacity=0,i.cssBefore.opacity=1,i.cssBefore.display="block",i.cssAfter.zIndex=0},e.fn.cycle.transitions.scrollUp=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.height();i.cssBefore.top=c,i.cssBefore.left=0,i.cssFirst.top=0,i.animIn.top=0,i.animOut.top=-c},e.fn.cycle.transitions.scrollDown=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.height();i.cssFirst.top=0,i.cssBefore.top=-c,i.cssBefore.left=0,i.animIn.top=0,i.animOut.top=c},e.fn.cycle.transitions.scrollLeft=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.width();i.cssFirst.left=0,i.cssBefore.left=c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=0-c},e.fn.cycle.transitions.scrollRight=function(t,n,i){t.css("overflow","hidden"),i.before.push(e.fn.cycle.commonReset);var c=t.width();i.cssFirst.left=0,i.cssBefore.left=-c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=c},e.fn.cycle.transitions.scrollHorz=function(t,n,i){t.css("overflow","hidden").width(),i.before.push(function(t,n,i,c){i.rev&&(c=!c),e.fn.cycle.commonReset(t,n,i),i.cssBefore.left=c?n.cycleW-1:1-n.cycleW,i.animOut.left=c?-t.cycleW:t.cycleW}),i.cssFirst.left=0,i.cssBefore.top=0,i.animIn.left=0,i.animOut.top=0},e.fn.cycle.transitions.scrollVert=function(t,n,i){t.css("overflow","hidden"),i.before.push(function(t,n,i,c){i.rev&&(c=!c),e.fn.cycle.commonReset(t,n,i),i.cssBefore.top=c?1-n.cycleH:n.cycleH-1,i.animOut.top=c?t.cycleH:-t.cycleH}),i.cssFirst.top=0,i.cssBefore.left=0,i.animIn.top=0,i.animOut.left=0},e.fn.cycle.transitions.slideX=function(t,n,i){i.before.push(function(t,n,i){e(i.elements).not(t).hide(),e.fn.cycle.commonReset(t,n,i,!1,!0),i.animIn.width=n.cycleW}),i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.width=0,i.animIn.width="show",i.animOut.width=0},e.fn.cycle.transitions.slideY=function(t,n,i){i.before.push(function(t,n,i){e(i.elements).not(t).hide(),e.fn.cycle.commonReset(t,n,i,!0,!1),i.animIn.height=n.cycleH}),i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.height=0,i.animIn.height="show",i.animOut.height=0},e.fn.cycle.transitions.shuffle=function(t,n,i){var c,s=t.css("overflow","visible").width();for(n.css({left:0,top:0}),i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0)}),i.speedAdjusted||(i.speed=i.speed/2,i.speedAdjusted=!0),i.random=0,i.shuffle=i.shuffle||{left:-s,top:15},i.els=[],c=0;c<n.length;c++)i.els.push(n[c]);for(c=0;c<i.currSlide;c++)i.els.push(i.els.shift());i.fxFn=function(t,n,i,c,s){i.rev&&(s=!s);var o=s?e(t):e(n);e(n).css(i.cssBefore);var r=i.slideCount;o.animate(i.shuffle,i.speedIn,i.easeIn,function(){for(var n=e.fn.cycle.hopsFromLast(i,s),l=0;n>l;l++)s?i.els.push(i.els.shift()):i.els.unshift(i.els.pop());if(s)for(var a=0,f=i.els.length;f>a;a++)e(i.els[a]).css("z-index",f-a+r);else{var u=e(t).css("z-index");o.css("z-index",parseInt(u,10)+1+r)}o.animate({left:0,top:0},i.speedOut,i.easeOut,function(){e(s?this:t).hide(),c&&c()})})},e.extend(i.cssBefore,{display:"block",opacity:1,top:0,left:0})},e.fn.cycle.transitions.turnUp=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.cssBefore.top=n.cycleH,i.animIn.height=n.cycleH,i.animOut.width=n.cycleW}),i.cssFirst.top=0,i.cssBefore.left=0,i.cssBefore.height=0,i.animIn.top=0,i.animOut.height=0},e.fn.cycle.transitions.turnDown=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssFirst.top=0,i.cssBefore.left=0,i.cssBefore.top=0,i.cssBefore.height=0,i.animOut.height=0},e.fn.cycle.transitions.turnLeft=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.cssBefore.left=n.cycleW,i.animIn.width=n.cycleW}),i.cssBefore.top=0,i.cssBefore.width=0,i.animIn.left=0,i.animOut.width=0},e.fn.cycle.transitions.turnRight=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.animIn.width=n.cycleW,i.animOut.left=t.cycleW}),e.extend(i.cssBefore,{top:0,left:0,width:0}),i.animIn.left=0,i.animOut.width=0},e.fn.cycle.transitions.zoom=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!1,!0),i.cssBefore.top=n.cycleH/2,i.cssBefore.left=n.cycleW/2,e.extend(i.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH}),e.extend(i.animOut,{width:0,height:0,top:t.cycleH/2,left:t.cycleW/2})}),i.cssFirst.top=0,i.cssFirst.left=0,i.cssBefore.width=0,i.cssBefore.height=0},e.fn.cycle.transitions.fadeZoom=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!1),i.cssBefore.left=n.cycleW/2,i.cssBefore.top=n.cycleH/2,e.extend(i.animIn,{top:0,left:0,width:n.cycleW,height:n.cycleH})}),i.cssBefore.width=0,i.cssBefore.height=0,i.animOut.opacity=0},e.fn.cycle.transitions.blindX=function(t,n,i){var c=t.css("overflow","hidden").width();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.width=n.cycleW,i.animOut.left=t.cycleW}),i.cssBefore.left=c,i.cssBefore.top=0,i.animIn.left=0,i.animOut.left=c},e.fn.cycle.transitions.blindY=function(t,n,i){var c=t.css("overflow","hidden").height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssBefore.top=c,i.cssBefore.left=0,i.animIn.top=0,i.animOut.top=c},e.fn.cycle.transitions.blindZ=function(t,n,i){var c=t.css("overflow","hidden").height(),s=t.width();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.animIn.height=n.cycleH,i.animOut.top=t.cycleH}),i.cssBefore.top=c,i.cssBefore.left=s,i.animIn.top=0,i.animIn.left=0,i.animOut.top=c,i.animOut.left=s},e.fn.cycle.transitions.growX=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0),i.cssBefore.left=this.cycleW/2,i.animIn.left=0,i.animIn.width=this.cycleW,i.animOut.left=0}),i.cssBefore.top=0,i.cssBefore.width=0},e.fn.cycle.transitions.growY=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1),i.cssBefore.top=this.cycleH/2,i.animIn.top=0,i.animIn.height=this.cycleH,i.animOut.top=0}),i.cssBefore.height=0,i.cssBefore.left=0},e.fn.cycle.transitions.curtainX=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!1,!0,!0),i.cssBefore.left=n.cycleW/2,i.animIn.left=0,i.animIn.width=this.cycleW,i.animOut.left=t.cycleW/2,i.animOut.width=0}),i.cssBefore.top=0,i.cssBefore.width=0},e.fn.cycle.transitions.curtainY=function(t,n,i){i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!1,!0),i.cssBefore.top=n.cycleH/2,i.animIn.top=0,i.animIn.height=n.cycleH,i.animOut.top=t.cycleH/2,i.animOut.height=0}),i.cssBefore.height=0,i.cssBefore.left=0},e.fn.cycle.transitions.cover=function(t,n,i){var c=i.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i),i.cssAfter.display="","right"==c?i.cssBefore.left=-s:"up"==c?i.cssBefore.top=o:"down"==c?i.cssBefore.top=-o:i.cssBefore.left=s}),i.animIn.left=0,i.animIn.top=0,i.cssBefore.top=0,i.cssBefore.left=0},e.fn.cycle.transitions.uncover=function(t,n,i){var c=i.direction||"left",s=t.css("overflow","hidden").width(),o=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0),"right"==c?i.animOut.left=s:"up"==c?i.animOut.top=-o:"down"==c?i.animOut.top=o:i.animOut.left=-s}),i.animIn.left=0,i.animIn.top=0,i.cssBefore.top=0,i.cssBefore.left=0},e.fn.cycle.transitions.toss=function(t,n,i){var c=t.css("overflow","visible").width(),s=t.height();i.before.push(function(t,n,i){e.fn.cycle.commonReset(t,n,i,!0,!0,!0),i.animOut.left||i.animOut.top?i.animOut.opacity=0:e.extend(i.animOut,{left:2*c,top:-s/2,opacity:0})}),i.cssBefore.left=0,i.cssBefore.top=0,i.animIn.left=0},e.fn.cycle.transitions.wipe=function(t,n,i){var c=t.css("overflow","hidden").width(),s=t.height();i.cssBefore=i.cssBefore||{};var o;if(i.clip)if(/l2r/.test(i.clip))o="rect(0px 0px "+s+"px 0px)";else if(/r2l/.test(i.clip))o="rect(0px "+c+"px "+s+"px "+c+"px)";else if(/t2b/.test(i.clip))o="rect(0px "+c+"px 0px 0px)";else if(/b2t/.test(i.clip))o="rect("+s+"px "+c+"px "+s+"px 0px)";else if(/zoom/.test(i.clip)){var r=parseInt(s/2,10),l=parseInt(c/2,10);o="rect("+r+"px "+l+"px "+r+"px "+l+"px)"}i.cssBefore.clip=i.cssBefore.clip||o||"rect(0px 0px 0px 0px)";var a=i.cssBefore.clip.match(/(\d+)/g),f=parseInt(a[0],10),u=parseInt(a[1],10),d=parseInt(a[2],10),h=parseInt(a[3],10);i.before.push(function(t,n,i){if(t!=n){var o=e(t),r=e(n);e.fn.cycle.commonReset(t,n,i,!0,!0,!1),i.cssAfter.display="block";var l=1,a=parseInt(i.speedIn/13,10)-1;!function p(){var e=f?f-parseInt(l*(f/a),10):0,t=h?h-parseInt(l*(h/a),10):0,n=s>d?d+parseInt(l*((s-d)/a||1),10):s,i=c>u?u+parseInt(l*((c-u)/a||1),10):c;r.css({clip:"rect("+e+"px "+i+"px "+n+"px "+t+"px)"}),l++<=a?setTimeout(p,13):o.css("display","none")}()}}),e.extend(i.cssBefore,{display:"block",opacity:1,top:0,left:0}),i.animIn={left:0},i.animOut={left:0}}}(jQuery),$(document).ready(function(){$(".slideshow").cycle({fx:"fade",speed:"slow",timeout:0,next:"#next2",prev:"#prev2"})}),menu(),$(document).scroll(function(){140<=parseInt($(this).scrollTop())?$("#nav-principal").css({position:"fixed",top:"-15px",background:"#FFF",width:"780px"}):$("#nav-principal").css({position:"relative",top:"0"})});var url=window.location,urlString=url.toString(),urlArray=urlString.split("/");menu(urlArray[3]),$(document).scroll(function(){140<=parseInt($(this).scrollTop())?$("#nav-principal").css({position:"fixed",top:"-15px",background:"#FFF",width:"780px"}):$("#nav-principal").css({position:"relative",top:"0"})});