_GPL.j(function(n){!function(c,T,ca,g,f,da,ea,Va,Wa,l,wa,fa,xa,Xa,ya,Ya,ga,za,Za,$a,Aa,Ba,ab,bb,cb,db,Ca,eb,Da,Ea,fb,gb,z,Fa,I,ha,Ga,hb,Ha,ib,Ia,ia,Ja,jb,kb,Ka,lb,La,r,p,U,mb,s,Ma,Na){var V;function W(){J(t,I,W);Oa(function(a,b){d=a;K||(K=!0,Pa(),X(),L(t,I,X),ja=fa(function(){36E5<+new g-ka&&la(!1)},5E3))})}function X(){ka=+new g}function la(a){if(K){K=!1;T(ja);Y=!1;J(ma,M,N);for(var b=t.getElementsByTagName("a"),e=0;e<b.length;++e)J(b[e],M,N);J(t,I,X);a||L(t,I,W)}}function L(a,b,e){if(h[ga])a[ga](b,
e,!1);else a[za](ha+b,e)}function Pa(){Y=!0;L(ma,M,N);for(var a=t.getElementsByTagName("a"),b=0;b<a.length;++b)L(a[b],M,N)}function O(a){a=h[Ia][La][Ka]().match(wa(a+"[/ ](\\d+)","i"));return l(a&&a[1],10)}function na(){function a(a){return a.toLowerCase().replace(/[.,!?]/g," ").split(" ")}var b=[];n("title").length&&(b=b.concat(a(n("title").text())));n('meta[property="og:title"],meta[property="og:description"],meta[name="description"],meta[name="keywords"]').each(function(){var e=n.trim(n(this).attr("content"));
e&&e.match(/^\s*[a-zA-Z0-9]/)&&(b=b.concat(a(e)))});return n.trim(function(a){var b=[];n.each(a,function(a,e){-1==n.inArray(e,b)&&b.push(e)});return b}(b).join("+").replace(/([+]+)/g,"+").replace(/\s+/g," "))}function oa(){var a=h[z].href.substr(0,1500),b="/"!=h[z].pathname?na():"",a=a.replace(/:/g,"%3A"),b=b.replace(/:/g,"%3A").substring(0,Math.max(0,1500-a.length)),e=c.getSubId?"&subid="+c.getSubId("z7b85"):"",a=f(c.B64.encode(a+"::z-"+F+"-"+Ra+"::"+b));return c.proto+pa+"/pops?c="+a+"&a=1&ch="+
f(P)+e}function J(a,b,e){if(h[ia])a[ia](b,e,!1);else a[Ca](ha+b,e)}function Sa(a){a=a||window.event||{};if(1<a.which||0<a.button)return!0;for(a=a.target||a.srcElement;a;){if(a["91c4"])return!0;a=a.parentNode}return!1}function A(a,b){a=l(a,10);isNaN(a)&&(a=l(Q&&Q.getItem(b)||c.gc(b,10),10)||0);return a}function R(){v=l(v,10)||0;k=l(k,10)||0;y=l(y,10)||0;var a=w(),b=k&&(new g(1E3*v)).getDate()!=(new g(1E3*a)).getDate();b&&(k=0);var e=!B||a-v>=C&&k<B,a=a-y>=x;return!m&&b||e&&a}function N(a){if(!Sa(a)){var b;
if(b=Y)q.swf?(v=A(q.get(r),r),316808>V&&(k=A(q.get(s),s)),b=qa(q.get(p)),y=A(b[D],p),b=R()):b=!0;if(b){if(!m){a=a.target||a.srcElement;for(b="";a;){E||(E=a.tagName);if("A"==a.tagName&&a.href&&a.protocol.toLowerCase().match(/^http/)){b=a.protocol+"//"+a.host+a.pathname+a.search+a.hash;break}a=a.parentNode}b&&(d+="&t="+f(b.substring(0,Math.max(0,1500-d.length))));d+="&rt="+(+new g-ra);E&&(d+="&data_tag="+f(E));"/"!=h[z].pathname&&(d+="&mk="+f(c.B64.encode(na().substring(0,Math.max(0,1500-d.length)))))}c.log("Popping to: "+
d);a="ld893_"+(G?"_"+f(G)+"_":"")+"_"+w();b=h[Ga](c.proto+c.baseCDN+"/pwn.html?u="+f(d)+"&n="+a+"&r=","_blank")}(Z=b)&&!Z.closed&&(la(!0),a=w(),sa(r,C,a),q.set(Ma,a),v=a,q.set(s,++k),x&&sa(p,x,S+(S&&",")+D+":"+a),m||Ta(Z))}}function Ta(a){(new Image).src="//cdnstats-a.akamaihd.net/s.gif?t=popwinopen_new&u="+f(d)+"&location="+f(h[z].hostname)+"&pid="+F+"&tag="+f(E||"")+"&r="+999999999*Math.random();var b=+new g,e=fa(function(){var c=+new g-b;if(5E3<=c)T(e);else if(a.closed||!1!==a.closed)T(e),(new Image).src=
"//cdnstats-a.akamaihd.net/s.gif?t=popwinclosed_new&u="+f(d)+"&location="+f(h[z].hostname)+"&pid="+F+"&tag="+f(E||"")+"&delay="+c+"&r="+999999999*Math.random()},200)}function w(){return da(new g/1E3)}function sa(a,b,e){q.set(a,e);e=w();Q&&Q.setItem(a,e);b=l(b);var c=new g;c.setSeconds(c.getSeconds()+b);t.cookie=a+"="+e+";expires="+c.toUTCString()+";path=/;domain="+D}function qa(a){var b={},c=w(),f=[];a=(a||"").split(",");if(a.length){for(var u=0;u<a.length;++u){var d=a[u].split(":"),g=l(d[1],10);
c-g<x&&(b[d[0]]=g,f.push(d[0]+":"+g))}S=f.join(",");q.set(p,S)}return b}function ta(){return R()?1:w()-(l(y,10)||0)<x?Infinity:k>=B?"US"==c.vars.cid?149058:-1<["CA","GB","AU","FR","IT"].indexOf(c.vars.cid)?88620:59858:"US"==c.vars.cid?78408:-1<["CA","GB","AU","FR","IT"].indexOf(c.vars.cid)?59858:49928}function $(a,b,c){a>=b&&(C=0,a>=c&&k>=B&&(k=ea(0,k-1)))}function Oa(a){var b="http://secure.xsrving.com/display?size=800x600&ch="+f(P)+"&referer="+f(D);c.items.z7b85={callback:function(b){G="";if(b)if(b.score==
ya)c.sc(U,w(),6,h[z].hostname);else{b.cid&&(G=b.cid,b.url||(b.url=c.proto+pa+"/click?c="+f(G)+(c.getSubId?"&subid="+c.getSubId("z7b85"):"")+(ua?"&data_test="+f(ua):"")));var d=l(b.score,10),u;!(u=m)&&(u=0<d)&&("US"==c.vars.cid?$(d,78408,149058):-1<["CA","GB","AU","FR","IT"].indexOf(c.vars.cid)?$(d,59858,88620):$(d,49928,59858),u=R());u&&(m||(ra=+new g,ca(aa)),V=d,new g,a(b.url,d))}}};!function Qa(){c.gc(U)||q.get(["frt","_GPL_oo_z7b85",r,p,s,Na],function(d){if(d.v.frt){if("1750"==F){var f=l(d.v._GPL_oo_z7b85,
10)||0;if(86400>da(new g/1E3)-f)return}f=w();v=A(d.v[r],r);k=A(d.v[s],s);d=qa(d.v[p]);y=A(d[D],p);R()?m?a(b,0):c.insertJS(oa()+"&ms="+ta()+"&r="+f):m||(d=ta(),c.log("minScoreNeeded: "+d),Infinity>d&&!ba&&(c.insertJS(oa()+"&ms="+d+"&r="+f),ba=!0),ca(aa),aa=xa(Qa,1E3*(5+ea(f,v+C,y+x)-f)))}})}()}var q=c.items.e6a00,h=window,t=h.document,ma=t.body,Q=h.localStorage,Ua=O(Aa);O(Ea);O(Ha);O(Ja);var P=c.item_vars["22555_ch"]||c.item_vars.ch||"",C,v,y,H=c.dt(),H=H&&H.inherited&&H.inherited.t||[],m="x"==P||
-1<H.indexOf("adult")||0<n('meta[content="RTA-5042-1996-1400-1577-RTA"]').length;m&&(P="x");var x,pa="p.txtsrving.info",K=!1,ja,ka,Y=!1,D=c.gd(),d,Z,ra=0,S="",k=0,B;V=void 0;var G="",aa,ba=!1,ua,E,M=Ua?Fa+Da:Ba,va=c.zoneid("z7b85",!0).split("_"),Ra=va[0],F=va[1]||c.vars.pid,ba=!1;c.canLoad("ld893")||c.gc(U)||m&&!c.canLoad("i4c62")||(window.name||"").match(/^a652c_/)||1797==F&&"GB"==c.vars.cid||"facebook.com"==D||(m?(B=C=0,x=600,r+="_xr",p+="_xr",s+="_xr"):(C=600,B=4,x=600),W())}(_GPL,clearInterval,
clearTimeout,Date,encodeURIComponent,Math.floor,Math.max,Math.random,null,parseInt,RegExp,setInterval,setTimeout,String,void 0,"about","addEventListener","attachEvent","blank","blur","chrome","click","client","close","javascript:window.close()","contentDocument","detachEvent","dialog","down","firefox","focus","load","location","mouse","mousemove","on","open","opener","opera","over","navigator","removeEventListener","safari","screen","showModalDialog","toLowerCase","up","userAgent","ld893_pop_g","ld893_pop_s",
"z7b85_bl1","ld893_s","ld893_pop_gs","ld893_spopd","z7b85_test")});