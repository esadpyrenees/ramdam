// ESA PYRÉNÉES


//
var esa_e = document.createElement("div"),
	esa_s = document.createElement("div"),
	esa_a = document.createElement("div"),
	esa_pyrenees = document.createElement("div"),
	esa_body = document.getElementsByTagName("body")[0];
esa_e.innerHTML = "&Eacute;";
esa_s.innerHTML = "S";
esa_a.innerHTML = "A";
esa_pyrenees.innerHTML = "P<br>y<br>r<br>&eacute;<br>n<br>&eacute;<br>e<br>s";

esa_e.id = "esa-e";
esa_s.id = "esa-s";
esa_a.id = "esa-a";
esa_pyrenees.id = "esa-p";

esa_body.appendChild(esa_e);
esa_body.appendChild(esa_s);
esa_body.appendChild(esa_a);
esa_body.appendChild(esa_pyrenees);

var css = "#esa-e,#esa-s,#esa-a,#esa-p{text-transform:uppercase;font-family:"+ document.esa_id_options['family']+";font-size:"+ document.esa_id_options['size']+"; color:"+ document.esa_id_options['color']+";font-weight:700}#esa-e{position:fixed!important;left:33%;top:10px;z-index:500}#esa-s{position:fixed!important;left:10px;top:50%;height:15px;margin-top:-7px;z-index:500}#esa-a{position:fixed!important;left:33%;bottom:-10px;margin-left:-10px;-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-o-transform:rotate(270deg);transform:rotate(270deg);-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0;z-index:500}#esa-p{text-align:center;position:fixed!important;right:20px;left:auto;top:50%;margin-top:-70px;width:20px;height:140px;z-index:500;line-height:1.1}";

var htmlDiv = document.createElement('div');
htmlDiv.innerHTML = '<p>-</p><style>' + css + '</style>';
document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[1]);