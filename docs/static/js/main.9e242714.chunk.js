(this["webpackJsonpfcc-random-quote-machine"]=this["webpackJsonpfcc-random-quote-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(7),i=a.n(r),l=(a(13),a(14),a(1)),s=a(2),u=a(3),h=a(5),c=a(4),d=[{text:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela"},{text:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{text:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma \u2013 which is living with the results of other people's thinking.",author:"Steve Jobs"},{text:"If life were predictable it would cease to be life, and be without flavor.",author:"Eleanor Roosevelt"},{text:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",author:"Oprah Winfrey"},{text:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",author:"James Cameron"},{text:"When you reach the end of your rope, tie a knot in it and hang on.",author:"Franklin D. Roosevelt"},{text:"In the end, it's not the years in your life that count. It's the life in your years.",author:"Abraham Lincoln"},{text:"Be yourself; everyone else is already taken.",author:"Oscar Wilde"},{text:"A fashion is nothing but an induced epidemic.",author:"George Bernard Shaw"},{text:"Progress is impossible without change, and those who cannot change their minds cannot change anything.",author:"George Bernard Shaw"},{text:"Live as if you were to die tomorrow. Learn as if you were to live forever.",author:"Mahatma Gandhi"},{text:"We must not allow other people\u2019s limited perceptions to define us.",author:"Virginia Satir"},{text:"If you cannot do great things, do small things in a great way.",author:"Napoleon Hill"},{text:"Wise men speak because they have something to say; fools because they have to say something.",author:"Plato"},{text:"I want to feel what I feel. What's mine. Even if it's not happiness, whatever that means. Because you're all you've got.",author:"Toni Morrison"},{text:"I think we are well-advised to keep on nodding terms with the people we used to be, whether we find them attractive company or not. Otherwise they turn up unannounced and surprise us...",author:"Joan Didion"},{text:"When the going gets weird, the weird turn pro.",author:"Hunter S. Thompson"},{text:"The world breaks everyone, and afterward, some are strong at the broken places.",author:"Ernest Hemingway"},{text:"In a murderous time the heart breaks and breaks and lives by breaking.",author:"Stanley Kunitz"},{text:"You may say I lost everything, but I still had my Be-Dazzler.",author:"Lady Gaga"}],m=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("button",{onClick:this.props.onClick},"New Quote")}}]),a}(n.a.Component),y=["#282C34","#628395","#6B5B95","#7b8896","#699F7B","#433E3F","#445A87","#2F4F4F","#191970","#483D8B"],f=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).state={quote:"",color:"#282C34"},o.handleClick=o.handleClick.bind(Object(u.a)(o)),o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.applyBackgroundColor()}},{key:"componentDidUpdate",value:function(e,t){this.applyBackgroundColor()}},{key:"randomIndex",value:function(){return Math.floor(Math.random()*d.length)}},{key:"handleClick",value:function(){this.setState({quote:d[this.randomIndex()].text})}},{key:"applyBackgroundColor",value:function(){var e=document.querySelector("body").style.background;console.log(e);var t=y[Math.floor(Math.random()*y.length)];document.body.style.background=t,document.getElementById("quote-box").style.color=t,document.querySelector("button").style.background=t}},{key:"render",value:function(){var e=this.randomIndex(),t=d[e].text,a=d[e].author;return n.a.createElement("div",{id:"quote-box"},n.a.createElement("p",{id:"text"},n.a.createElement("i",{className:"fas fa-quote-left"})," ",t," ",n.a.createElement("i",{className:"fas fa-quote-right"})),n.a.createElement("p",{id:"author"},"- ",a),n.a.createElement("div",{id:"button"},n.a.createElement("div",{id:"social-links"},n.a.createElement("a",{id:"tweet-quote",className:"twitter-share-button",href:"https://twitter.com/intent/tweet?text="+t+" -"+a,"data-size":"large",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-twitter-square"}))),n.a.createElement(m,{onClick:this.handleClick,id:"new-quote"})))}}]),a}(n.a.Component);var g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9e242714.chunk.js.map