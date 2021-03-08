(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(12),i=n.n(r),s=n(4),o=n.n(s),u=n(6),l=n(3),d=n(8),p=(n(18),n(7)),b=n(5),j=n(0),h=function(e){var t=e.currentSong,n=e.setIsPlaying,c=e.isPlaying,a=e.audioRef,r=e.setSongInfo,i=e.songInfo,s=e.songs,d=e.setCurrentSong,h=e.setSongs,f=function(e){var t=s.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));h(t)},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.findIndex((function(e){return e.id===t.id})),"skip-forward"!==n){e.next=5;break}return e.next=4,d(s[(r+1)%s.length]);case 4:f(s[(r+1)%s.length]);case 5:if("skip-back"!==n){e.next=15;break}if((r-1)%s.length!==-1){e.next=12;break}return e.next=9,d(s[s.length-1]);case 9:return f(s[s.length-1]),c&&a.current.play(),e.abrupt("return");case 12:return e.next=14,d(s[(r-1)%s.length]);case 14:f(s[(r-1)%s.length]);case 15:c&&a.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:g(i.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(j.jsx)("input",{min:0,max:i.duration,value:i.currentTime,type:"range",onChange:function(e){a.current.currentTime=e.target.value,r(Object(l.a)(Object(l.a)({},i),{},{currentTime:e.target.value}))}}),Object(j.jsx)("div",{style:O,className:"animate-track"})]}),Object(j.jsx)("p",{children:i.duration?g(i.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(p.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(j.jsx)(p.a,{onClick:function(e){c?(a.current.pause(),n(!1)):(a.current.play(),n(!0))},className:"play",size:"2x",icon:c?b.d:b.e}),Object(j.jsx)(p.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},f=function(e){var t=e.currentSong;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{alt:t.name,src:t.cover}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,n=(e.songs,e.setCurrentSong),c=e.audioRef,a=e.isPlaying,r=e.currentSong,i=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:a&&c.current.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:i,className:"library-song ".concat(t.id===r.id?"selected":""," "),children:[Object(j.jsx)("img",{alt:t.name,src:t.cover}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,a=e.isPlaying,r=e.currentSong,i=e.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(j.jsx)(g,{song:e,songs:t,setCurrentSong:n,audioRef:c,isPlaying:a,currentSong:r},e.id)}))})]})},O=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Music Player"}),Object(j.jsxs)("button",{onClick:function(){return n(!t)},children:[Object(j.jsx)("span",{children:"Library"}),Object(j.jsx)(p.a,{icon:b.c})]})]})},v=n(27);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(v.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(v.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(v.a)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(x()),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(a[0]),s=Object(d.a)(i,2),p=s[0],b=s[1],g=Object(c.useState)(!1),v=Object(d.a)(g,2),y=v[0],S=v[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(d.a)(k,2),C=w[0],N=w[1],P=Object(c.useState)(!1),I=Object(d.a)(P,2),M=I[0],T=I[1],A=function(e){var t=e.target.currentTime,n=e.target.duration,c=Math.round(t),a=Math.round(n),r=Math.round(c/a*100);N(Object(l.a)(Object(l.a)({},C),{},{currentTime:t,duration:n,animationPercentage:r}))},R=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.findIndex((function(e){return e.id===p.id})),t.next=3,b(a[(n+1)%a.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(M?"library-active":""),children:[Object(j.jsx)(O,{libraryStatus:M,setLibraryStatus:T}),Object(j.jsx)(f,{currentSong:p}),Object(j.jsx)(h,{songInfo:C,setSongInfo:N,audioRef:e,setIsPlaying:S,isPlaying:y,currentSong:p,songs:a,setCurrentSong:b,setSongs:r}),Object(j.jsx)(m,{audioRef:e,songs:a,setCurrentSong:b,isPlaying:y,currentSong:p,libraryStatus:M}),Object(j.jsx)("audio",{onEnded:R,onTimeUpdate:A,onLoadedMetadata:A,ref:e,src:p.audio})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.70008128.chunk.js.map