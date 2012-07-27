/*
*
*  Golden Gridlet (1.01) 	<http://goldengridsystem.com/>
*  by Joni Korpi 			<http://jonikorpi.com/>
*  licensed under MIT 		<http://opensource.org/licenses/mit-license.php>
*	
*/

var guideColor = 'rgb(255,195,0)';
var guideInnerColor = 'rgba(255,255,255, 0.91)';
var guideOpacity = '0.618';

var switchColor = 'rgb(0,0,0)';
var switchOpacity = '0.618';

var baseFontSize = 16;
var baselineGridHeight = (24 / baseFontSize)+'em';

var eightColBreakpoint = ((720-1) / baseFontSize)+'em';
var sixteenColBreakpoint = ((1872-1) / baseFontSize)+'em';

/*
*  Note that the script might not work as expected if 
*  the <body> element of your page has a set width and 
*  position: relative;, because the guides are appended 
*  inside <body>, but positioned in relation to <html>.
*
*  Also note that the baseline grid doesn't really align
*  up anymore after zooming the baseline grid in or out,
*  because of rounding errors.
*/


/*!
  * Ender: open module JavaScript framework
  * copyright Dustin Diaz & Jacob Thornton 2011 (@ded @fat)
  * https://ender.no.de
  * License MIT
  * Build: ender -b jeesh
  */
!function(a){function d(a,b){return c(a,b)}function c(a,e,f){d._select&&(typeof a=="string"||a.nodeName||a.length&&"item"in a||a==window)?(f=d._select(a,e),f.selector=a):f=isFinite(a.length)?a:[a];return b(f,c)}function b(a,b){for(var c in b)c!="noConflict"&&c!="_VERSION"&&(a[c]=b[c]);return a}b(d,{_VERSION:"0.2.4",ender:function(a,e){b(e?c:d,a)},fn:a.$&&a.$.fn||{}}),b(c,{forEach:function(a,b,c){for(c=0,l=this.length;c<l;++c)c in this&&a.call(b||this[c],this[c],c,this);return this},$:d});var e=a.$;d.noConflict=function(){a.$=e;return this},typeof module!="undefined"&&module.exports&&(module.exports=d),a.ender=a.$=d}(this),!function(a){function F(a){var b=a.relatedTarget;if(!b)return b==null;return b!=this&&b.prefix!="xul"&&!/document/.test(this.toString())&&!p(this,b)}var b=1,c={},d={},e=/over|out/,f=/[^\.]*(?=\..*)\.|.*/,g=/\..*/,h="addEventListener",i="attachEvent",j="removeEventListener",k="detachEvent",l=a.document||{},m=l.documentElement||{},n=m[h],o=n?h:i,p=function(a,b){var c=b.parentNode;while(c!=null){if(c==a)return!0;c=c.parentNode}},q=function(a,c){return a.__uid=c||a.__uid||b++},r=function(a){var b=q(a);return c[b]=c[b]||{}},s=n?function(a,b,c,d){a[d?h:j](b,c,!1)}:function(a,b,c,d,e){e&&d&&(a["_on"+e]=a["_on"+e]||0),a[d?i:k]("on"+b,c)},t=function(b,c,d){return function(e){e=D(e||((this.ownerDocument||this.document||this).parentWindow||a).event);return c.apply(b,[e].concat(d))}},u=function(a,b,c,d,e){return function(f){(d?d.call(this,f):n?!0:f&&f.propertyName=="_on"+c||!f)&&b.apply(a,[f].concat(e))}},v=function(a,b,c,e){var h=b.replace(g,""),i=r(a),j=i[h]||(i[h]={}),k=q(c,b.replace(f,""));if(j[k])return a;var l=G[h];l&&(c=l.condition?u(a,c,h,l.condition):c,h=l.base||h);var m=E[h];c=m?t(a,c,e):u(a,c,h,!1,e),m=n||m;if(h=="unload"){var p=c;c=function(){w(a,h,c)&&p()}}a[o]&&s(a,m?h:"propertychange",c,!0,!m&&h),j[k]=c,c.__uid=k;return h=="unload"?a:d[q(a)]=a},w=function(a,b,c){var d,e,h,i,j=r(a),k=b.replace(g,"");if(!j||!j[k])return a;e=b.replace(f,""),h=e?e.split("."):[c.__uid];for(i=h.length;i--;){d=h[i],c=j[k][d],delete j[k][d];if(a[o]){k=G[k]?G[k].base:k;var l=n||E[k];s(a,l?k:"propertychange",c,!1,!l&&k)}}return a},x=function(a,b,c){return function(d){var e=typeof a=="string"?c(a,this):a;for(var f=d.target;f&&f!=this;f=f.parentNode)for(var g=e.length;g--;)if(e[g]==f)return b.apply(f,arguments)}},y=function(a,b,c,d,e){if(typeof b=="object"&&!c)for(var f in b)b.hasOwnProperty(f)&&y(a,f,b[f]);else{var g=typeof c=="string",h=(g?c:b).split(" ");c=g?x(b,d,e):c;for(var i=h.length;i--;)v(a,h[i],c,Array.prototype.slice.call(arguments,g?4:3))}return a},z=function(a,b,c){var d,e,h,i,j=typeof b=="string",k=j&&b.replace(f,""),l=w,m=r(a);if(j&&/\s/.test(b)){b=b.split(" "),i=b.length-1;while(z(a,b[i])&&i--);return a}h=j?b.replace(g,""):b;if(!m||j&&!m[h])return a;if(typeof c=="function")l(a,h,c);else if(k)l(a,b);else{l=h?l:z,e=j&&h,h=h?c||m[h]||h:m;for(d in h)h.hasOwnProperty(d)&&l(a,e||d,h[d])}return a},A=function(a,b,c){var d,e,h,i=b.split(" ");for(h=i.length;h--;){b=i[h].replace(g,"");var j=E[b],k=i[h].replace(f,""),l=r(a)[b];if(k){k=k.split(".");for(e=k.length;e--;)l[k[e]]&&l[k[e]].apply(a,c)}else if(!c&&a[o])B(j,b,a);else for(e in l)l.hasOwnProperty(e)&&l[e].apply(a,c)}return a},B=n?function(b,c,d){evt=document.createEvent(b?"HTMLEvents":"UIEvents"),evt[b?"initEvent":"initUIEvent"](c,!0,!0,a,1),d.dispatchEvent(evt)}:function(a,b,c){a?c.fireEvent("on"+b,document.createEventObject()):c["_on"+b]++},C=function(a,b,c){var d=r(b),e,f;e=c?d[c]:d;for(f in e)e.hasOwnProperty(f)&&(c?y:C)(a,c||b,c?e[f]:f);return a},D=function(a){var b={};if(!a)return b;var c=a.type,d=a.target||a.srcElement;b.preventDefault=D.preventDefault(a),b.stopPropagation=D.stopPropagation(a),b.target=d&&d.nodeType==3?d.parentNode:d;if(~c.indexOf("key"))b.keyCode=a.which||a.keyCode;else if(/click|mouse|menu/i.test(c)){b.rightClick=a.which==3||a.button==2,b.pos={x:0,y:0};if(a.pageX||a.pageY)b.clientX=a.pageX,b.clientY=a.pageY;else if(a.clientX||a.clientY)b.clientX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,b.clientY=a.clientY+documen

var ender = $.noConflict();

function setHeights() {
	if (!ender('body').hasClass('ggs-hidden')) {
/* Which one is taller, <body> or <html>? */
		if (ender('body').offset().height > ender('html').offset().height) {
			var largerHeight = ender('body').offset().height;
		}
		else {
			var largerHeight = ender('html').offset().height;
		}

/* Give guides the new height */
		ender('.ggs-guide').each(function() {
			ender(this).css('height', largerHeight);
		});

/* Calculate the amount of lines needed and append them */
		var lines = Math.floor(largerHeight/24);
		ender('#ggs-baseline-container').empty();
		for (i=0; i<=lines; i++) {
			ender('#ggs-baseline-container').append('<div class="ggs-line"></div>');
		}

/* Set the baseline container to the same height as the guides, so there's no overflow */
		ender('#ggs-baseline-container').css('height', largerHeight);
	}
}

ender.domReady(function () {
	
/* 	Add control classes and switch element */
	ender('body').addClass('ggs-hidden ggs-animated').append('<div id="ggs-switch"><div class="ggs-switchBar"></div><div class="ggs-switchBar"></div><div class="ggs-switchBar"></div></div>');

/*  Create CSS */
    var styles = '\
        html{height:100%;position:relative;}\
        #ggs-switch{position:fixed;top:0;right:0;z-index:9500; cursor:pointer; width: 24px; padding: 18px 18px 14px; opacity:'+switchOpacity+'; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transition: all 0.145s ease-out; -moz-transition: all 0.145s ease-out; -ms-transition: all 0.145s ease-out; transition: all 0.145s ease-out;}\
        .ggs-switchBar {background: '+switchColor+'; height: 4px; margin-bottom: 4px;}\
        .ggs-animated #ggs-switch {-webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); transform: rotate(0deg);}\
        .ggs-guide{position:absolute;top:0;z-index:9000;height:100%;margin-left:-0.75em;border:solid '+guideColor+';border-width:0 0.75em;background:'+guideColor+';opacity:'+guideOpacity+'; -webkit-transition: all 0.235s ease-out; -moz-transition: all 0.235s ease-out; -ms-transition: all 0.235s ease-out; transition: all 0.235s ease-out;}\
        .ggs-animated .ggs-guide {-webkit-transform: scale(0, 1); -moz-transform: scale(0, 1); -ms-transform: scale(0, 1); transform: scale(0, 1); opacity: 0;}\
        .ggs-animated #ggs-baseline-container {opacity: 0;}\
        .ggs-hidden .ggs-guide, .ggs-hidden #ggs-baseline-container {display: none;}\
        .ggs-0{left:0;}\
        .ggs-1{left:11.11111111111111%;}\
        .ggs-2{left:16.666666666666664%;}\
        .ggs-3{left:22.22222222222222%;}\
        .ggs-4{left:27.77777777777778%;}\
        .ggs-5{left:33.33333333333333%;}\
        .ggs-6{left:38.888888888888886%;}\
        .ggs-7{left:44.44444444444444%;}\
        .ggs-8{left:50%;}\
        .ggs-9{left:55.55555555555556%;}\
        .ggs-10{left:61.11111111111111%;}\
        .ggs-11{left:66.66666666666666%;}\
        .ggs-12{left:72.22222222222221%;}\
        .ggs-13{left:77.77777777777777%;}\
        .ggs-14{left:83.33333333333333%;}\
        .ggs-15{left:88.88888888888889%;}\
        .ggs-16{right:0;}\
        .ggs-0,.ggs-16{width:5.555555555555555%;padding-right:0.75em;border:0;margin:0;}\
        .ggs-guide div{background:'+guideInnerColor+';width:2px;height:100%;position:absolute;left:-1px;top:0;}\
        .ggs-0 div{left:auto;right:0.75em;}\
        .ggs-16 div{left:0.75em;}\
        #ggs-baseline-container {opacity: '+guideOpacity+'; position: absolute; left:0; top:0; z-index: 8000; width: 100%; height: 100%; -webkit-transition: opacity 0.235s ease-out; -moz-transition: opacity 0.235s ease-out; -ms-transition: opacity 0.235s ease-out; transition: opacity 0.235s ease-out; overflow-y: hidden;}\
        .ggs-line {border-top: 1px dotted '+guideColor+'; height: '+baselineGridHeight+'; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -o-box-sizing: border-box; box-sizing: border-box;}\
        @media screen and (max-width: '+(eightColBreakpoint)+'){.ggs-2,.ggs-6,.ggs-10,.ggs-14{display:none;}}\
        @media screen and (max-width: '+(sixteenColBreakpoint)+'){.ggs-1,.ggs-3,.ggs-5,.ggs-7,.ggs-9,.ggs-11,.ggs-13,.ggs-15{display:none;}}\
    ';	

/* 	Create guides */
	for (i=0; i<=16; i++) {
		ender('body').append(ender('<div class="ggs-guide ggs-'+i+'"><div></div></div>'));
	};
	ender('body').append(ender('<div id="ggs-baseline-container"></div>'));
	
/* 	Append CSS */
	(function(d,u) {
		if(d.createStyleSheet) {
			d.createStyleSheet( u );
		} 
		else {
			var css=d.createElement('style');
			css.setAttribute("type","text/css");
			css.appendChild(document.createTextNode(u));
			d.getElementsByTagName("head")[0].appendChild(css);
		}
	}(document, styles))
	
/* 	Resize guides when window size changes */
	ender(window).on('resize', setHeights);
	
/* 	Add listeners for switch element */
	ender('#ggs-switch').click(function(){
		if (ender('body').hasClass('ggs-hidden')) {
			ender('body').removeClass('ggs-hidden');
			setHeights();
			setTimeout(
				function () {
					ender('body').removeClass('ggs-animated');
				},
				20
			);
		}
		else {
			ender('body').addClass('ggs-animated');
			setTimeout(
				function () {
					ender('body').addClass('ggs-hidden');
				},
				300
			);
		}
	});
	
});
