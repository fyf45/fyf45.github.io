var e={version:"0.2.5",hostname:"http://wutaimountain.cn",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},darkmode:!1,auto_scroll:!0,js:{valine:"gh/amehime/MiniValine@4.2.2-beta10/dist/MiniValine.min.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0.12.0/dist/contrib/copy-tex.min.js",fancybox:"combine/npm/jquery@3.5.1/dist/jquery.min.js,npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js,npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0.12.0/dist/katex.min.css",mermaid:"css/mermaid.css",fancybox:"combine/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css,npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.min.css"},loader:{start:!0,"switch":!0},search:{appID:"Y2EXP37BWR",apiKey:"19596f1f9d71f38f37b9d3b355a0466c",indexName:"fyf",hits:{per_page:10}},valine:{appId:"WD6DvfTLJDukc19J8kOzkxHD-gzGzoHsz",appKey:"2R2F0Qkii0XjFIeDOxwyAMww",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"en",visitor:!0,NoRecordIP:!1,serverURLs:"https://wd6dvftl.lc-cn-n1-shared.com",powerMode:!0,tagMeta:{visitor:"新朋友",master:"主人",friend:"小伙伴",investor:"榜一大哥"},tagColor:{master:"var(--color-orange)",friend:"var(--color-aqua)",investor:"var(--color-pink)"},tagMember:{master:null,friend:null,investor:null}},quicklink:{timeout:3e3,priority:!0},audio:[{title:"列表1",list:["https://music.163.com/#/playlist?id=2943811283","https://music.163.com/#/playlist?id=2297706586"]},{title:"列表2",list:["https://music.163.com/#/playlist?id=2031842656"]}],fireworks:["rgba(255,182,185,.9)","rgba(250,227,217,.9)","rgba(187,222,214,.9)","rgba(138,198,209,.9)"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},n=function(){return u("main > .inner").offsetHeight},a=function(e,t,n){var a;n?t():((a=document.createElement("script")).onload=a.onreadystatechange=function(e,n){!n&&a.readyState&&!/loaded|complete/.test(a.readyState)||(a.onload=a.onreadystatechange=null,a=void 0,!n&&t&&setTimeout(t,0))},a.src=e,document.head.appendChild(a))},i=function(t,n){n=e[t][n];return-1<n.indexOf("npm")||-1<n.indexOf("gh")||-1<n.indexOf("combine")?"//cdn.jsdelivr.net/"+n:-1<n.indexOf("http")?n:g+n},s=function(e,t,n){LOCAL[e]&&a(i("js",e),t||function(){window[e]=!0},n||window[e])},r=function(e,t){window["css"+e]||LOCAL[e]&&(document.head.createChild("link",{rel:"stylesheet",href:i("css",e)}),window["css"+e]=!0)},o=function(e){var t=e.text||e.textContent||e.innerHTML||"",n=e.parentNode;n.removeChild(e);var a=document.createElement("script");e.id&&(a.id=e.id),e.className&&(a.className=e.className),e.type&&(a.type=e.type),e.src&&(a.src=e.src,a.async=!1),void 0!==e.dataset.pjax&&(a.dataset.pjax=""),""!==t&&a.appendChild(document.createTextNode(t)),n.appendChild(a)},c=function(e,t,n){e={targets:"number"==typeof t?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||("number"==typeof e?e:e?e.top()+document.documentElement.scrollTop-q:0),complete:function(){n&&n()}};anime(e)},l=function(e,t,n){var a={},i="none";switch(t){case 0:a={opacity:[1,0]};break;case 1:a={opacity:[0,1]},i="block";break;case"bounceUpIn":a={begin:function(t){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},i="block";break;case"shrinkIn":a={begin:function(t){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},i="block";break;case"slideRightIn":a={begin:function(t){e.display("block")},translateX:[100,0],opacity:[0,1]},i="block";break;case"slideRightOut":a={translateX:[0,100],opacity:[1,0]};break;default:i=(a=t).display}anime(Object.assign({targets:e,duration:200,easing:"linear"},a)).finished.then(function(){e.display(i),n&&n()})},d={get:function(e){return localStorage.getItem(e)},set:function(e,t){return localStorage.setItem(e,t),t},del:function(e){localStorage.removeItem(e)}},u=function(e,t){return t=t||document,0===e.indexOf("#")?t.getElementById(e.replace("#","")):t.querySelector(e)};u.all=function(e,t){return(t=t||document).querySelectorAll(e)},u.each=function(e,t,n){return u.all(e,n).forEach(t)},Object.assign(HTMLElement.prototype,{createChild:function(e,t,n){var a=document.createElement(e);switch(Object.assign(a,t),n){case"after":this.insertAfter(a);break;case"replace":this.innerHTML="";default:this.appendChild(a)}return a},wrap:function(e){var t=document.createElement("div");Object.assign(t,e),this.parentNode.insertBefore(t,this),this.parentNode.removeChild(this),t.appendChild(this)},height:function(e){return e&&(this.style.height="number"==typeof e?e+"rem":e),this.getBoundingClientRect().height},width:function(e){return e&&(this.style.width="number"==typeof e?e+"rem":e),this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){return null===t?this.removeAttribute(e):t?(this.setAttribute(e,t),this):this.getAttribute(e)},insertAfter:function(e){var t=this.parentNode;t.lastChild==this?t.appendChild(e):t.insertBefore(e,this.nextSibling)},display:function(e){return null==e?this.style.display:(this.style.display=e,this)},child:function(e){return u(e,this)},find:function(e){return u.all(e,this)},_class:function(e,t,n){var t=t.indexOf(" ")?t.split(" "):[t],a=this;t.forEach(function(t){"toggle"==e?a.classList.toggle(t,n):a.classList[e](t)})},addClass:function(e){return this._class("add",e),this},removeClass:function(e){return this._class("remove",e),this},toggleClass:function(e,t){return this._class("toggle",e,t),this},hasClass:function(e){return this.classList.contains(e)}});var h=null;const p=/mobile/i.test(window.navigator.userAgent),m=function(e,t){var n={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause":function(t){i.paused?e.player.play():e.player.pause()},music:function(e){s.el.hasClass("show")?s.hide():(s.el.addClass("show"),r.scroll().title())}}},a={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(n){var a=new RegExp(n[0]).exec(e);null!==a&&(t=[n[1],n[2],a[1]])}),t},fetch:function(e){var t=[];return new Promise(function(n,i){e.forEach(function(e){var i,s,r=a.parse(e);r[0]?(i=JSON.stringify(r),(s=d.get(i))?(t.push.apply(t,JSON.parse(s)),n(t)):fetch("https://api.i-meto.com/meting/api?server="+r[0]+"&type="+r[1]+"&id="+r[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){d.set(i,JSON.stringify(e)),t.push.apply(t,e),n(t)}).catch(function(e){})):(t.push(e),n(t))})})},secondToTime:function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),e=Math.floor(e-3600*t-60*n);return(0<t?[t,n,e]:[n,e]).map(function(e){return isNaN(e)?"00":e<10?"0"+e:""+e}).join(":")},nameMap:{dragStart:p?"touchstart":"mousedown",dragMove:p?"touchmove":"mousemove",dragEnd:p?"touchend":"mouseup"}},i=null;e.player={_id:a.random(999999),group:!0,load:function(e){var t,n="";for(t in e&&0<e.length?this.options.rawList!==e&&(this.options.rawList=e,r.clear()):(n="none",this.pause()),y.el)y.el[t].display(n);return this},fetch:function(){var e=this;return new Promise(function(t,n){var i;0<r.data.length?t():e.options.rawList&&(i=[],e.options.rawList.forEach(function(t,n){i.push(new Promise(function(i,s){var o=n,c=t.list?(e.group=!0,t.list):(o=0,e.group=!1,[t]);a.fetch(c).then(function(e){r.add(o,e),i()})}))}),Promise.all(i).then(function(){t(!0)}))}).then(function(t){t&&(r.create(),v.create(),e.mode())})},mode:function(){var e=r.data.length;if(e&&r.errnum!=e){function t(){var t=a.random(e);r.index!==t?r.index=t:i()}var n="next"==v.step?1:-1,i=function(){var t=r.index+n;(e<t||t<0)&&(t="next"==v.step?0:e-1),r.index=t};switch(this.options.mode){case"random":t();break;case"order":i();break;case"loop":v.step&&i(),-1==r.index&&t()}this.init()}},"switch":function(e){"number"==typeof e&&e!=r.index&&r.current()&&!r.current().error&&(r.index=e,this.init())},init:function(){var e,t=r.current();t&&!t.error?(e=!1,i.paused||(e=!0,this.stop()),i.attr("src",t.url),i.attr("title",t.name+" - "+t.artist),this.volume(d.get("_PlayerVolume")||"0.7"),this.muted(d.get("_PlayerMuted")),m.create(),"audio"==this.options.type&&l.create(),1==e&&this.play()):this.mode()},play:function(){h&&h.player.pause(),r.current().error?this.mode():i.play().then(function(){r.scroll()}).catch(function(e){})},pause:function(){i.pause(),document.title=f},stop:function(){i.pause(),i.currentTime=0,document.title=f},seek:function(e){e=Math.max(e,0),e=Math.min(e,i.duration),i.currentTime=e,m.update(e/i.duration)},muted:function(e){"muted"==e?(i.muted=e,d.set("_PlayerMuted",e),v.update(0)):(d.del("_PlayerMuted"),i.muted=!1,v.update(i.volume))},volume:function(e){isNaN(e)||(v.update(e),d.set("_PlayerVolume",e),i.volume=e)},mini:function(){s.hide()}};var s={el:null,create:function(){this.el||(this.el=e.createChild("div",{className:"player-info",innerHTML:("audio"==e.player.options.type?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),l.el=this.el.child(".preview"),r.el=this.el.child(".playlist"),v.el=this.el.child(".controller"))},hide:function(){var e=this.el;e.addClass("hide"),window.setTimeout(function(){e.removeClass("show hide")},300)}},r={el:null,data:[],index:-1,errnum:0,add:function(e,t){var n=this;t.forEach(function(t,a){t.group=e,t.name=t.name||t.title||"Meida name",t.artist=t.artist||t.author||"Anonymous",t.cover=t.cover||t.pic,t.type=t.type||"normal",n.data.push(t)})},clear:function(){this.data=[],this.el.innerHTML="",-1!==this.index&&(this.index=-1,e.player.fetch())},create:function(){var t=this.el;this.data.map(function(n,a){if(!n.el){var s="list-"+e.player._id+"-"+n.group,o=u("#"+s);return o||(o=t.createChild("div",{id:s,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"}),e.player.group&&o.attr("data-title",e.player.options.rawList[n.group].title).attr("data-id",e.player._id)),n.el=o.child("ol").createChild("li",{title:n.name+" - "+n.artist,innerHTML:'<span class="info"><span>'+n.name+"</span><span>"+n.artist+"</span></span>",onclick:function(t){var n=t.currentTarget;r.index===a&&m.el?i.paused?e.player.play():e.player.seek(i.duration*m.percent(t,n)):(e.player.switch(a),e.player.play())}}),n}}),pe()},current:function(){return this.data[this.index]},scroll:function(){var e=this.current(),t=this.el.child("li.active");t&&t.removeClass("active");var n=this.el.child(".tab.active");return n&&n.removeClass("active"),(t=this.el.find(".nav li")[e.group])&&t.addClass("active"),(n=this.el.find(".tab")[e.group])&&n.addClass("active"),c(e.el,e.el.offsetTop),this},title:function(){var e;i.paused||(e=this.current(),document.title="Now Playing..."+e.name+" - "+e.artist+" | "+f)},error:function(){var e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},o={el:null,data:null,index:0,create:function(e){function t(t){var i;n===r.index&&(a.data=a.parse(t),i="",a.data.forEach(function(e,t){i+="<p"+(0===t?' class="current"':"")+">"+e[1]+"</p>"}),a.el=e.createChild("div",{className:"inner",innerHTML:i},"replace"),a.index=0)}var n=r.index,a=this,i=r.current().lrc;i.startsWith("http")?this.fetch(i,t):t(i)},update:function(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0]))for(var t,n=0;n<this.data.length;n++)e>=this.data[n][0]&&(!this.data[n+1]||e<this.data[n+1][0])&&(this.index=n,t=-(this.index-1),this.el.style.transform="translateY("+t+"rem)",this.el.style.webkitTransform="translateY("+t+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[n].addClass("current"))},parse:function(e){if(e){const t=(e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["})).split("\n");for(var n=[],a=t.length,i=0;i<a;i++){var s=t[i].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),r=t[i].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s)for(var o=s.length,c=0;c<o;c++){var l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[c]),d=60*l[1],u=parseInt(l[2]),l=l[4]?parseInt(l[4])/(2===(l[4]+"").length?100:1e3):0;n.push([d+u+l,r])}}return(n=n.filter(function(e){return e[1]})).sort(function(e,t){return e[0]-t[0]}),n}return[]},fetch:function(e,t){fetch(e).then(function(e){return e.text()}).then(function(e){t(e)}).catch(function(e){})}},l={el:null,create:function(){var t=r.current();this.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur" /></div></div><div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+'</span><div class="lrc"></div></div>',this.el.child(".cover").addEventListener("click",e.player.options.events["play-pause"]),o.create(this.el.child(".lrc"))}},m={el:null,bar:null,create:function(){var e=r.current().el;e&&(this.el&&(this.el.parentNode.removeClass("current").removeEventListener(a.nameMap.dragStart,this.drag),this.el.remove()),this.el=e.createChild("div",{className:"progress"}),this.el.attr("data-dtime",a.secondToTime(0)),this.bar=this.el.createChild("div",{className:"bar"}),e.addClass("current"),e.addEventListener(a.nameMap.dragStart,this.drag),r.scroll())},update:function(e){this.bar.width(Math.floor(100*e)+"%"),this.el.attr("data-ptime",a.secondToTime(e*i.duration))},seeking:function(e){e?this.el.addClass("seeking"):this.el.removeClass("seeking")},percent:function(e,t){t=((e.clientX||e.changedTouches[0].clientX)-t.left())/t.width(),t=Math.max(t,0);return Math.min(t,1)},drag:function(t){t.preventDefault();var n=r.current().el,s=function(e){e.preventDefault();e=m.percent(e,n);m.update(e),o.update(e*i.duration)},c=function(t){t.preventDefault(),n.removeEventListener(a.nameMap.dragEnd,c),n.removeEventListener(a.nameMap.dragMove,s);t=m.percent(t,n);m.update(t),e.player.seek(t*i.duration),i.disableTimeupdate=!1,m.seeking(!1)};i.disableTimeupdate=!0,m.seeking(!0),n.addEventListener(a.nameMap.dragMove,s),n.addEventListener(a.nameMap.dragEnd,c)}},v={el:null,btns:{},step:"next",create:function(){var t;e.player.options.controls&&(t=this,e.player.options.controls.forEach(function(n){if(!t.btns[n]){var s={onclick:function(a){(t.events[n]?t:e.player.options).events[n](a)}};switch(n){case"volume":s.className=" "+(i.muted?"off":"on"),s.innerHTML='<div class="bar"></div>',s["on"+a.nameMap.dragStart]=t.events.volume,s.onclick=null;break;case"mode":s.className=" "+e.player.options.mode;break;default:s.className=""}s.className=n+s.className+" btn",t.btns[n]=t.el.createChild("div",s)}}),t.btns.volume.bar=t.btns.volume.child(".bar"))},events:{mode:function(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}v.btns.mode.className="mode "+e.player.options.mode+" btn",d.set("_PlayerMode",e.player.options.mode)},volume:function(t){t.preventDefault();var n=t.currentTarget,s=!1,r=function(t){t.preventDefault(),e.player.volume(v.percent(t,n)),s=!0},o=function(t){t.preventDefault(),n.removeEventListener(a.nameMap.dragEnd,o),n.removeEventListener(a.nameMap.dragMove,r),s?(e.player.muted(),e.player.volume(v.percent(t,n))):i.muted?(e.player.muted(),e.player.volume(i.volume)):(e.player.muted("muted"),v.update(0))};n.addEventListener(a.nameMap.dragMove,r),n.addEventListener(a.nameMap.dragEnd,o)},backward:function(t){v.step="prev",e.player.mode()},forward:function(t){v.step="next",e.player.mode()}},update:function(e){v.btns.volume.className="volume "+(!i.muted&&0<e?"on":"off")+" btn",v.btns.volume.bar.width(Math.floor(100*e)+"%")},percent:function(e,t){t=((e.clientX||e.changedTouches[0].clientX)-t.left())/t.width(),t=Math.max(t,0);return Math.min(t,1)}},g={onerror:function(){r.error(),e.player.mode()},ondurationchange:function(){1!==i.duration&&m.el.attr("data-dtime",a.secondToTime(i.duration))},onloadedmetadata:function(){e.player.seek(0),m.el.attr("data-dtime",a.secondToTime(i.duration))},onplay:function(){e.parentNode.addClass("playing"),$(this.attr("title")),h=e},onpause:function(){e.parentNode.removeClass("playing"),h=null},ontimeupdate:function(){this.disableTimeupdate||(m.update(this.currentTime/this.duration),o.update(this.currentTime))},onended:function(t){e.player.mode(),e.player.play()}},y={el:{},create:function(){var t;e.player.options.btns&&(t=this,e.player.options.btns.forEach(function(n){t.el[n]||(t.el[n]=e.createChild("div",{className:n+" btn",onclick:function(t){e.player.fetch().then(function(){e.player.options.events[n](t)})}}))}))}};return t=t,e.player.created||(e.player.options=Object.assign(n,t),e.player.options.mode=d.get("_PlayerMode")||e.player.options.mode,y.create(),i=e.createChild(e.player.options.type,g),s.create(),e.parentNode.addClass(e.player.options.type),e.player.created=!0),e};var f,v,g=0<e.statics.indexOf("//")?e.statics:e.root,y={x:"undefined",y:"undefined"},b=0;const w=document.getElementsByTagName("body")[0],C=document.documentElement,x=u("#container"),k=u("#loading"),L=u("#nav"),E=u("#header"),T=L.child(".toggle"),M=u("#quick"),N=u("#sidebar"),O=u("#brand");var j,I,H,A,q,S,R,D,P=u("#tool"),_=u("#search"),z=window.innerHeight,W=window.innerWidth,B=0,Y=window.location.href;const F=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}}),X={timer:null,lock:!1,show:function(){clearTimeout(this.timer),document.body.removeClass("loaded"),k.attr("style","display:block"),X.lock=!1},hide:function(t){e.loader.start||(t=-1),this.timer=setTimeout(this.vanish,t||3e3)},vanish:function(){X.lock||(e.loader.start&&l(k,0),document.body.addClass("loaded"),X.lock=!0)}},U=function(e){var t=u(".theme .ic");"dark"==e?(C.attr("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(C.attr("data-theme",null),t.removeClass("i-moon"),t.addClass("i-sun"))},G=function(e){"dark"==C.attr("data-theme")&&(e="#222"),u('meta[name="theme-color"]').attr("content",e)},J=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){e.matches?U("dark"):U()});var t=d.get("theme");t?U(t):e.darkmode&&U("dark"),u(".theme").addEventListener("click",function(e){var t,e=e.currentTarget.child(".ic"),n=w.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),a=function(){l(n,{delay:2500,opacity:0},function(){w.removeChild(n)})};t=e.hasClass("i-sun")?function(){n.addClass("dark"),U("dark"),d.set("theme","dark"),a()}:(n.addClass("dark"),function(){n.removeClass("dark"),U(),d.set("theme","light"),a()}),l(n,1,function(){setTimeout(t,210)})})},V=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":u('[rel="icon"]').attr("href",g+e.favicon.hidden),document.title=LOCAL.favicon.hide,e.loader.switch&&X.show(),clearTimeout(v);break;case"visible":u('[rel="icon"]').attr("href",g+e.favicon.normal),document.title=LOCAL.favicon.show,e.loader.switch&&X.hide(1e3),v=setTimeout(function(){document.title=f},2e3)}})},$=function(e){var t;e&&(t=w.createChild("div",{innerHTML:e,className:"tip"}),setTimeout(function(){t.addClass("hide"),setTimeout(function(){w.removeChild(t)},300)},3e3))},Q=function(e){q=L.height(),S=E.height(),R=S+u("#waves").height(),W!=window.innerWidth&&ne(null,1),z=window.innerHeight,W=window.innerWidth,N.child(".panels").height(z+"px")},K=function(e){var t=window.innerHeight,a=n(),i=t<a?a-t:document.body.scrollHeight-t,a=window.pageYOffset>S,t=0<window.pageYOffset;a?G("#FFF"):G("#222"),L.toggleClass("show",a),P.toggleClass("affix",t),O.toggleClass("affix",t),N.toggleClass("affix",window.pageYOffset>R&&991<document.body.offsetWidth),void 0===y.y&&(y.y=window.pageYOffset),(b=y.y-window.pageYOffset)<0?(L.removeClass("up"),L.toggleClass("down",a)):0<b&&(L.removeClass("down"),L.toggleClass("up",a)),y.y=window.pageYOffset;i=Math.round(Math.min(100*window.pageYOffset/i,100))+"%";I.child("span").innerText=i,u(".percent").width(i)},Z=function(){e.auto_scroll&&d.set(Y,y.y)},ee=function(t){var n=window.location.hash,a=null;B?d.del(Y):((a=n?u(decodeURI(n)):e.auto_scroll?parseInt(d.get(Y)):0)&&(c(a),B=1),t&&n&&!B&&(c(a),B=1))},te=function(e,t){var n=w.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:!0,value:e});const a=document.getSelection();var i=0<a.rangeCount&&a.getRangeAt(0);n.select(),n.setSelectionRange(0,e.length),n.readOnly=!1;e=document.execCommand("copy");t&&t(e),n.blur(),i&&(a.removeAllRanges(),a.addRange(i)),w.removeChild(n)},ne=function(e,t){N.hasClass("on")?(N.removeClass("on"),T.removeClass("close"),t?N.style="":l(N,"slideRightOut")):t?N.style="":l(N,"slideRightIn",function(){N.addClass("on"),T.addClass("close")})},ae=function(){var e=N.child(".inner");N.find(".panel");N.child(".tab")&&e.removeChild(N.child(".tab"));var t=document.createElement("ul"),n="active";t.className="tab",["contents","related","overview"].forEach(function(e){var a,i,s,r=N.child(".panel."+e);r.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1?"contents"==e&&A.display("none"):("contents"==e&&A.display(""),a=document.createElement("li"),i=document.createElement("span"),s=document.createTextNode(r.attr("data-title")),i.appendChild(s),a.appendChild(i),a.addClass(e+" item"),n?(r.addClass(n),a.addClass(n)):r.removeClass("active"),a.addEventListener("click",function(e){var t=event.currentTarget;t.hasClass("active")||(N.find(".tab .item").forEach(function(e){e.removeClass("active")}),N.find(".panel").forEach(function(e){e.removeClass("active")}),N.child(".panel."+t.className.replace(" item","")).addClass("active"),t.addClass("active"))}),t.appendChild(a),n="")}),1<t.childNodes.length?(e.insertBefore(t,e.childNodes[0]),N.child(".panels").style.paddingTop=""):N.child(".panels").style.paddingTop=".625rem"},ie=function(){var t,n,a,i,s,r=u.all(".contents li");r.length<1||(n=Array.prototype.slice.call(r)||[],t=null,n=n.map(function(n,a){var s=n.child("a.toc-link"),r=u(decodeURI(s.attr("href")));if(r){function o(e){e.preventDefault();e=u(decodeURI(e.currentTarget.attr("href")));t=a,c(e,null,function(){i(a),t=null})}n=r.child("a.anchor");return s.addEventListener("click",o),n&&n.addEventListener("click",function(t){o(t),te(e.hostname+"/"+LOCAL.path+t.currentTarget.attr("href"))}),r}}),a=N.child(".contents.panel"),i=function(e,t){var i=r[e];if(i&&!i.hasClass("current")){u.each(".toc .active",function(e){e&&e.removeClass("active current")}),n.forEach(function(e){e&&e.removeClass("active")}),i.addClass("active current"),n[e]&&n[e].addClass("active");for(var s,o=i.parentNode;!o.matches(".contents");)o.matches("li")&&(o.addClass("active"),(s=u(o.child("a.toc-link").attr("href")))&&s.addClass("active")),o=o.parentNode;"none"!=getComputedStyle(N).display&&a.hasClass("active")&&c(a,i.offsetTop-a.offsetHeight/4)}},window.IntersectionObserver&&(s=new IntersectionObserver(function(e,a){e=function(e){var t=0,a=e[t];if(0<a.boundingClientRect.top)return 0===(t=n.indexOf(a.target))?0:t-1;for(;t<e.length;t++){if(!(e[t].boundingClientRect.top<=0))return n.indexOf(a.target);a=e[t]}return n.indexOf(a.target)}(e)+(b<0?1:0);null===t&&i(e)},{rootMargin:"0px 0px -100% 0px",threshold:0}),n.forEach(function(e){e&&s.observe(e)})))},se=function(){c(0)},re=function(){c(parseInt(x.height()))},oe=function(){c(u("#comments"))},ce=function(){u.each(".menu .item:not(.title)",function(t){var n,a,i=t.child("a[href]"),s=t.parentNode.parentNode;i&&(n=i.pathname===location.pathname||i.pathname===location.pathname.replace("index.html",""),a=!e.root.startsWith(i.pathname)&&location.pathname.startsWith(i.pathname),a=i.hostname===location.hostname&&(n||a),t.toggleClass("active",a),t.parentNode.child(".active")&&s.hasClass("dropdown")?s.removeClass("active").addClass("expand"):s.removeClass("expand"))})},le=function(){var e;u(".index.wrap")&&(window.IntersectionObserver?(e=new IntersectionObserver(function(t){t.forEach(function(t){t.target.hasClass("show")?e.unobserve(t.target):(t.isIntersecting||0<t.intersectionRatio)&&(t.target.addClass("show"),e.unobserve(t.target))})},{root:null,threshold:[.3]}),u.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)}),u(".index.wrap .item:first-child").addClass("show")):u.each(".index.wrap article.item, .index.wrap section.item",function(e){!1===e.hasClass("show")&&e.addClass("show")}),u.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){u(".cards .item.active")&&u(".cards .item.active").removeClass("active"),e.addClass("active")})}),["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})}))},de=function(){u.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join("")),t.rel="noopener external nofollow noreferrer",t.target="_blank",t.className=e.className,t.title=e.title||e.innerText,t.innerHTML=e.innerHTML,e.dataset.backgroundImage&&(t.dataset.backgroundImage=e.dataset.backgroundImage),e.parentNode.replaceChild(t,e)})},ue=function(e){u(e+" .md img")&&(r("fancybox"),s("fancybox",function(){var t=jQuery.noConflict();u.each(e+" p.gallery",function(e){var t=document.createElement("div");t.className="gallery",t.attr("data-height",e.attr("data-height")||220),t.innerHTML=e.innerHTML.replace(/<br>/g,""),e.parentNode.insertBefore(t,e),e.remove()}),u.each(e+" .md img:not(.emoji):not(.vemoji)",function(e){var n,a=t(e),i="image-info";a.is("a img")||(n=a.attr("data-src")||a.attr("src"),a.data("safe-src",n),n=a.wrap('<a class="fancybox" href="'+n+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a"),a.is(".gallery img")?i="jg-caption":n.attr("data-fancybox","default").attr("rel","default")),(a=e.attr("title"))&&(n.attr("data-caption",a),n=document.createElement("span"),a=document.createTextNode(a),n.appendChild(a),n.addClass(i),e.insertAfter(n))}),u.each(e+" div.gallery",function(e,n){t(e).justifiedGallery({rowHeight:t(e).data("height")||120,rel:"gallery-"+n}).on("jg.complete",function(){t(this).find("a").each(function(e,t){t.attr("data-fancybox","gallery-"+n)})})}),t.fancybox.defaults.hash=!1,t(e+" .fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},window.jQuery))},he=function(){me(),u(".md")&&(ue(".post.block"),u(".post.block").oncopy=function(e){if($(LOCAL.copyright),LOCAL.nocopy)e.preventDefault();else{var t=u("#copyright");if(30<window.getSelection().toString().length&&t){e.preventDefault();var n="# "+t.child(".author").innerText,a="# "+t.child(".link").innerText,i="# "+t.child(".license").innerText,t=n+"<br>"+a+"<br>"+i+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>"),i=n+"\n"+a+"\n"+i+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData)e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",i);else if(window.clipboardData)return window.clipboardData.setData("text",i)}}},u.each("li ruby",function(e){var t=e.parentNode;(t="LI"!=e.parentNode.tagName?e.parentNode.parentNode:t).addClass("ruby")}),u.each("ol[start]",function(e){e.style.counterReset="counter "+parseInt(e.attr("start")-1)}),u.each(".md table",function(e){e.wrap({className:"table-container"})}),u.each(".highlight > .table-container",function(e){e.className="code-container"}),u.each("figure.highlight",function(e){var t=e.child(".code-container"),n=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var a=e.child(".copy-btn");LOCAL.nocopy?a.remove():(a.addEventListener("click",function(e){var n=e.currentTarget,a="",i="";t.find("pre").forEach(function(e){i+=a+e.innerText,a="\n"}),te(i,function(e){n.child(".ic").className=e?"ic i-check":"ic i-times",n.blur(),$(LOCAL.copyright)})}),a.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)})),e.child(".breakline-btn").addEventListener("click",function(t){t=t.currentTarget;e.hasClass("breakline")?(e.removeClass("breakline"),t.child(".ic").className="ic i-align-left"):(e.addClass("breakline"),t.child(".ic").className="ic i-align-justify")});function i(t){t.currentTarget,e.hasClass("fullscreen")?(d(),o&&o(),c(e)):(e.addClass("fullscreen"),w.addClass("fullscreen"),l.child(".ic").className="ic i-compress",r&&r())}var s,r,o,l=e.child(".fullscreen-btn"),d=function(){e.removeClass("fullscreen"),e.scrollTop=0,w.removeClass("fullscreen"),l.child(".ic").className="ic i-expand"};l.addEventListener("click",i),n&&n.addEventListener("click",i),t&&15<t.find("tr").length&&(t.style.maxHeight="300px",t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>'),s=t.child(".show-btn"),r=function(){t.style.maxHeight="",s.addClass("open")},o=function(){t.style.maxHeight="300px",s.removeClass("open")},s.addEventListener("click",function(e){s.hasClass("open")?(d(),o(),c(t)):r()}))}),u.each("pre.mermaid > svg",function(e){e.style.maxWidth=""}),u.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=u("#qr");"inline-flex"===t.display()?l(t,0):l(t,1,function(){t.display("inline-flex")})})}),u.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){e.hasClass("correct")?(e.toggleClass("right"),e.parentNode.parentNode.addClass("show")):e.toggleClass("wrong")})}),u.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})}),u.each(".quiz > p:first-child",function(e){var t=e.parentNode,n="choice";(t.hasClass("true")||t.hasClass("false"))&&(n="true_false"),t.hasClass("multi")&&(n="multiple"),t.hasClass("fill")&&(n="gap_fill"),t.hasClass("essay")&&(n="essay"),e.attr("data-type",LOCAL.quiz[n])}),u.each(".quiz .mistake",function(e){e.attr("data-type",LOCAL.quiz.mistake)}),u.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(5*Math.random())]}),u.each(".md div.player",function(e){m(e,{type:e.attr("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(e.attr("data-src"))).fetch()}))},pe=function(){var e;u.each("div.tab",function(t,n){var a,i,s;t.attr("data-ready")||(a=t.attr("data-id"),s=t.attr("data-title"),i=u("#"+a),e=!i&&((i=document.createElement("div")).className="tabs",i.id=a,i.innerHTML='<div class="show-btn"></div>',i.child(".show-btn").addEventListener("click",function(e){c(i)}),t.parentNode.insertBefore(i,t),!0),s=(i.child(".nav ul")||i.createChild("div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul")).createChild("li",{innerHTML:s}),e&&(s.addClass("active"),t.addClass("active")),s.addEventListener("click",function(e){e=e.currentTarget;
i.find(".active").forEach(function(e){e.removeClass("active")}),t.addClass("active"),e.addClass("active")}),i.appendChild(t),t.attr("data-ready",!0))})},me=function(){var e=u("#comments");e?(H.display(""),window.IntersectionObserver?new IntersectionObserver(function(e,t){e=e[0];r("valine"),(e.isIntersecting||0<e.intersectionRatio)&&(l(u("#comments"),"bounceUpIn"),t.disconnect())}).observe(e):r("valine")):H.display("none")},fe=function(t){if(null!==e.search){_=_||w.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'});var n=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){u(".search-input").value&&e.search()}});n.on("render",function(){t.refresh(u("#search-hits"))}),n.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){return LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var n=t.categories?"<span>"+t.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+e.root+t.path+'">'+n+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:!1,showFirst:!1,showLast:!1,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]),n.start(),u.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden",l(_,"shrinkIn",function(){u(".search-input").focus()})})});const a=function(){document.body.style.overflow="",l(_,0)};_.addEventListener("click",function(e){e.target===_&&a()}),u(".close-btn").addEventListener("click",a),window.addEventListener("pjax:success",a),window.addEventListener("keyup",function(e){"Escape"===e.key&&a()})}},ve=function(){u.each(".overview .menu > .item",function(e){L.child(".menu").appendChild(e.cloneNode(!0))}),k.addEventListener("click",X.vanish),T.addEventListener("click",ne),u(".dimmer").addEventListener("click",ne),M.child(".down").addEventListener("click",re),M.child(".up").addEventListener("click",se),P=P||E.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'}),j=P.child(".player"),I=P.child(".back-to-top"),H=P.child(".chat"),A=P.child(".contents"),I.addEventListener("click",se),H.addEventListener("click",oe),A.addEventListener("click",ne),m(j),u("main").addEventListener("click",function(){j.player.mini()})},ge=function(){Z(),N.hasClass("on")&&l(N,function(){N.removeClass("on"),T.removeClass("close")}),u("#main").innerHTML="",u("#main").appendChild(k.lastChild.cloneNode(!0)),c(0)},ye=function(t){B=0,Y=window.location.href,r("katex"),s("copy_tex"),r("mermaid"),s("chart"),s("valine",function(){var t=Object.assign({},e.valine);(t=Object.assign(t,LOCAL.valine||{})).el="#comments",t.pathname=LOCAL.path,t.pjax=D,t.lazyload=F,new MiniValine(t),setTimeout(function(){ee(1),ue(".v")},1e3)},window.MiniValine),t||u.each("script[data-pjax]",o),f=document.title,Q(),ce(),ae(),ie(),de(),he(),pe(),j.player.load(LOCAL.audio||e.audio||{}),X.hide(),setTimeout(function(){ee()},500),le(),F.observe()},be=function(){ve(),D=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:!1,cacheBust:!1}),e.quicklink.ignores=LOCAL.ignores,quicklink.listen(e.quicklink),V(),J(),fe(D),window.addEventListener("scroll",K),window.addEventListener("resize",Q),window.addEventListener("pjax:send",ge),window.addEventListener("pjax:success",ye),window.addEventListener("beforeunload",function(){Z()}),ye(1)};window.addEventListener("DOMContentLoaded",be),console.log("%c Theme.Shoka v"+e.version+" %c https://shoka.lostyu.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");var we=document.createElement("canvas");we.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999",document.body.appendChild(we);var Ce=we.getContext("2d"),xe=30,ke=0,Le=0,Ee="click",Te=e.fireworks;function Me(){we.width=2*window.innerWidth,we.height=2*window.innerHeight,we.style.width=window.innerWidth+"px",we.style.height=window.innerHeight+"px",we.getContext("2d").scale(2,2)}function Ne(e){ke=e.clientX||e.touches&&e.touches[0].clientX,Le=e.clientY||e.touches&&e.touches[0].clientY}function Oe(e){var t=anime.random(0,360)*Math.PI/180,n=anime.random(50,180),n=[-1,1][anime.random(0,1)]*n;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function je(e,t){var n={};return n.x=e,n.y=t,n.color=Te[anime.random(0,Te.length-1)],n.radius=anime.random(16,32),n.endPos=Oe(n),n.draw=function(){Ce.beginPath(),Ce.arc(n.x,n.y,n.radius,0,2*Math.PI,!0),Ce.fillStyle=n.color,Ce.fill()},n}function Ie(e,t){var n={};return n.x=e,n.y=t,n.color="#FFF",n.radius=.1,n.alpha=.5,n.lineWidth=6,n.draw=function(){Ce.globalAlpha=n.alpha,Ce.beginPath(),Ce.arc(n.x,n.y,n.radius,0,2*Math.PI,!0),Ce.lineWidth=n.lineWidth,Ce.strokeStyle=n.color,Ce.stroke(),Ce.globalAlpha=1},n}function He(e){for(var t=0;t<e.animatables.length;t++)e.animatables[t].target.draw()}function Ae(e,t){for(var n=Ie(e,t),a=[],i=0;i<xe;i++)a.push(je(e,t));anime.timeline().add({targets:a,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:He}).add({targets:n,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:He},0)}var qe=anime({duration:1/0,update:function(){Ce.clearRect(0,0,we.width,we.height)}});document.addEventListener(Ee,function(e){qe.play(),Ne(e),Ae(ke,Le)},!1),Me(),window.addEventListener("resize",Me,!1);