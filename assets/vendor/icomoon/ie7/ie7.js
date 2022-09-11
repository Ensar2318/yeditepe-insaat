/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-big-right': '&#xe90d;',
		'icon-house': '&#xe900;',
		'icon-stair': '&#xe901;',
		'icon-opened-door': '&#xe902;',
		'icon-letter': '&#xe903;',
		'icon-mesure': '&#xe904;',
		'icon-image': '&#xe905;',
		'icon-pin': '&#xe906;',
		'icon-phone': '&#xe907;',
		'icon-print': '&#xe908;',
		'icon-left-long': '&#xe909;',
		'icon-Path3662': '&#xe90f;',
		'icon-play': '&#xe90a;',
		'icon-chevron-right': '&#xe90b;',
		'icon-chevron-left': '&#xe90c;',
		'icon-facebook': '&#xea90;',
		'icon-instagram': '&#xea92;',
		'icon-twitter': '&#xea96;',
		'icon-youtube': '&#xea9d;',
		'icon-linkedin': '&#xeaca;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
