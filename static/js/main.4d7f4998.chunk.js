(this.webpackJsonpsolitaire=this.webpackJsonpsolitaire||[]).push([[0],[,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(13),o=a.n(s),l=(a(20),a(21),a(1)),i=a(3),u=a(5),d=a(4),v=a(6),f=a(14),m=a(2),h=a.n(m);a(8),a(9),a(10),a(11);!function(e){e.S="Spades",e.H="Hearts",e.C="Clubs",e.D="Diamonds"}(n||(n={}));var p=n,k=(a(12),150),S=200,C="50px Calibri",b="30px Calibri",y=10,g=30,E=35,w="black",T="black",x="red",P="red",D="white",N="skyblue",O=40,j="darkgray",z=function(e){var t=.3*E;e.beginPath(),e.moveTo(0,t),e.bezierCurveTo(0,0,-g/2,0,-g/2,t),e.bezierCurveTo(-g/2,(E+t)/2,0,(E+t)/2,0,E),e.bezierCurveTo(0,(E+t)/2,g/2,(E+t)/2,g/2,t),e.bezierCurveTo(g/2,0,0,0,0,t),e.closePath(),e.fillStyle=x,e.fill()},H=function(e){var t=g/2+y,a=y;e.translate(t,a),z(e),e.translate(-t,-a);var n=k-(g/2+y),r=S-E/2;e.translate(n,r),e.scale(1,-1),z(e),e.scale(1,-1),e.translate(-n,-r)},I=function(e){var t=g/2,a=E/2,n=t/10,r=t/2;e.beginPath(),e.fillStyle=T,e.moveTo(t,a),e.arc(t-r+n,a,r,0,2*Math.PI),e.moveTo(t,a),e.arc(t+r-n,a,r,0,2*Math.PI),e.moveTo(t,a),e.arc(t,a-r+n,r,0,2*Math.PI),e.moveTo(t,a),e.lineTo(t-t/2,2*a),e.lineTo(t+t/2,2*a),e.fill(),e.closePath()},A=function(e){e.translate(y,y),I(e),e.translate(-y,-y);var t=k-g-y,a=S-E/2;e.translate(t,a),e.scale(1,-1),I(e),e.scale(1,-1),e.translate(-t,-a)},M=function(e){e.beginPath(),e.fillStyle=P,e.moveTo(g/2,0),e.lineTo(0,E/2),e.lineTo(g/2,E),e.lineTo(g,E/2),e.lineTo(g/2,0),e.fill(),e.closePath()},F=function(e){e.translate(y,y),M(e),e.translate(-y,-y);var t=k-g-y,a=S-E/2;e.translate(t,a),e.scale(1,-1),M(e),e.scale(1,-1),e.translate(-t,-a)},J=function(e){var t=.7*E,a=.3*g,n=.7*g;e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(0,t/2,-g/2,t/2,-g/2,t),e.bezierCurveTo(-g/2,1.3*t,0,1.3*t,0,t),e.bezierCurveTo(0,1.3*t,g/2,1.3*t,g/2,t),e.bezierCurveTo(g/2,t/2,0,t/2,0,0),e.closePath(),e.fill(),e.beginPath(),e.moveTo(0,t),e.quadraticCurveTo(0,t+a,-n/2,t+a),e.lineTo(n/2,t+a),e.quadraticCurveTo(0,t+a,0,t),e.closePath(),e.fillStyle=w,e.fill()},B=function(e){e.fillStyle=w;var t=g/2+y,a=y;e.translate(t,a),J(e),e.translate(-t,-a);var n=k-(g/2+y),r=S-E/2;e.translate(n,r),e.scale(1,-1),J(e),e.scale(1,-1),e.translate(-n,-r)},R=function(e){e.lineWidth=1;var t=S/O*2;e.beginPath(),e.strokeStyle="red";for(var a=0;a<O;++a)e.moveTo(0,a*t),e.lineTo(a*t,0);e.closePath(),e.stroke(),e.beginPath();for(var n=0;n<O;++n)e.moveTo(k-n*t,0),e.lineTo(k,n*t);e.closePath(),e.stroke()},W=function(e){e.fillStyle=j,e.fillRect(0,0,k,S)},q=function(e,t){1===t?e.fillText("A",0,0):t<11?e.fillText("".concat(t),0,0):11===t?e.fillText("J",0,0):12===t?e.fillText("Q",0,0):e.fillText("K",0,0)},U=function(e,t){switch(e.font=C,t.suit){case p.S:e.fillStyle=w;break;case p.C:e.fillStyle=T;break;case p.D:e.fillStyle=P;break;case p.H:e.fillStyle=x}e.textAlign="center",e.translate(k/2,S/2),q(e,t.value),e.translate(-k/2,-S/2);var a=k-2*y,n=3*y;e.translate(a,n),e.font=b,q(e,t.value),e.translate(-a,-n);var r=2*y,c=S-1.5*y;e.translate(r,c),e.font=b,q(e,t.value),e.translate(-r,-c)},G=function(e,t){e.clearRect(0,0,k,S),e.fillStyle=t?N:D,e.fillRect(0,0,k,S)},K=function(e){return c.a.createElement("canvas",{id:"canvas".concat(e.suit,"-").concat(e.value),className:"react-card ".concat(e.isShown?"":"no-click"),ref:"canvas",width:k,height:S})},Q=(a(22),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.renderCard()},a.componentDidUpdate=function(){a.renderCard()},a.render=function(){var e=a.props,t=e.card,n=e.onClick;return c.a.createElement("div",{className:"react-card-holder",onClick:function(){return n(t)}},K(t))},a.renderCard=function(){var e=a.props,t=e.card,n=e.isSelected,r=a.refs.canvas.getContext("2d");if(null!==r){if(G(r,n),!t.isShown)return void R(r);if(-1===t.value)return void W(r);switch(t.suit){case p.C:A(r);break;case p.D:F(r);break;case p.H:H(r);break;case p.S:B(r)}U(r,t)}},a}return Object(v.a)(t,e),t}(r.Component)),$=c.a.createContext([]),L=(a(23),function(e){var t=e.deck,a=e.dealt,n=e.onDeal,r=e.onCardClick,s=null;s=t.length>0?c.a.createElement(Q,{card:{suit:p.S,type:"card",isShown:!1,value:0},onClick:n}):c.a.createElement(Q,{card:{suit:p.S,type:"card",isShown:!0,value:-1},onClick:n});var o=[];return o=a.length>0?[c.a.createElement($.Consumer,null,(function(e){var t=a[a.length-1],n=1===e.length&&t.suit===e[0].suit&&t.value===e[0].value;return c.a.createElement(Q,{card:t,onClick:r,isSelected:n})}))]:[c.a.createElement(Q,{card:{suit:p.S,type:"card",isShown:!0,value:-1},onClick:function(){}})],c.a.createElement("div",{className:"react-deck"},c.a.createElement("div",{className:"deck-dealer"},s),c.a.createElement("div",{className:"deck-dealt"},o))}),V=(a(24),function(e,t){return function(a){var n=e.findIndex((function(e){return e.value===a.value&&e.suit===a.suit}));t(-1===n?void 0:n)}}),X=function(e){var t=e.column,a=e.onClick,n=t.cards,r=V(n,a),s=0===n.length?[c.a.createElement(Q,{key:"bedrock",card:{type:"card",value:-1,suit:p.S,isShown:!0},onClick:r})]:n.map((function(e){return c.a.createElement($.Consumer,{key:"".concat(e.suit," ").concat(e.value)},(function(t){return function(e,t){var a=-1!==e.findIndex((function(e){return e.suit===t.suit&&e.value===t.value}));return c.a.createElement(Q,{key:"".concat(t.suit," ").concat(t.value),card:t,onClick:r,isSelected:a})}(t,e)}))}));return c.a.createElement("div",{className:"react-column"},s)},Y=function(e){var t=e.source,a=e.onClick,n=0===t.cards.length?c.a.createElement(Q,{card:{type:"card",value:-1,suit:p.S,isShown:!0},onClick:function(){return a(t)}}):c.a.createElement($.Consumer,null,(function(e){var n=t.cards[t.cards.length-1],r=-1!==e.findIndex((function(e){return e.value===n.value&&e.suit===n.suit}));return c.a.createElement(Q,{card:t.cards[t.cards.length-1],onClick:function(){return a(t)},isSelected:r})}));return c.a.createElement("div",null,n)};a(25);function Z(e){for(var t=e.length,a=Object(f.a)(e);t;){var n=Math.floor(Math.random()*t--),r=a[t];a[t]=a[n],a[n]=r}return a}var _=[],ee=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).isFinished=function(){return a.state.sources.every((function(e){return e.cards.length>0&&13===e.cards[e.cards.length-1].value}))},a.pushHistory=function(){var e=a.state,t=e.deck,n=e.sources,r=e.cols,c={deck:{dealt:t.dealt.map((function(e){return Object(l.a)({},e)})),deck:t.deck.map((function(e){return Object(l.a)({},e)})),type:"deck"},sources:n.map((function(e){return{cards:e.cards.map((function(e){return Object(l.a)({},e)})),index:e.index,type:"suitSource"}})),cols:r.map((function(e){return{cards:e.cards.map((function(e){return Object(l.a)({},e)})),index:e.index,type:"column"}}))};_.push(c);var s=a.state.moves;a.setState({moves:s+1})},a.undo=function(){var e=a.state.selected,t=_.pop();t&&(e.cards=[],e.source=void 0,a.setState(Object(l.a)({},t,{selected:e})));var n=a.state.moves;a.setState({moves:n+1})},a.draw=function(){var e=a.state,t=e.selected,n=e.deck,r=e.cardsPerDeal;if(0===n.deck.length)for(var c=n.dealt.pop();void 0!==c;)c.isShown=!1,n.deck.push(c),c=n.dealt.pop();else if(1===r){var s=n.deck.pop();s.isShown=!0,n.dealt.push(s)}else for(var o=n.deck.length>3?3:n.deck.length,l=0;l<o;++l){var i=n.deck.pop();i.isShown=!0,n.dealt.push(i)}t.cards=[],t.source=void 0,a.setState({selected:t,deck:n})},a.changeDraw=function(){var e=a.state.cardsPerDeal;a.setState({cardsPerDeal:3===e?1:3})},a.onDeckClick=function(){var e=a.state,t=e.selected,n=e.deck;t.source?(t.cards=[],t.source=void 0):n.dealt.length>0?(t.cards=[n.dealt[n.dealt.length-1]],t.source=n):(t.cards=[],t.source=void 0),a.setState({selected:t})},a.onSuitClick=function(e){var t=a.state,n=t.selected,r=t.sources;if(void 0!==n.source){if(1===n.cards.length){var c=n.cards[0];a.canAppend(e,c)?(a.pushHistory(),a.finalizeSelection(),n=a.state.selected,r=a.state.sources,e.cards.push(c)):(n.source=void 0,n.cards=[])}}else e.cards.length>0&&(n.source=e,n.cards=[e.cards[e.cards.length-1]]);r[e.index]=e,a.setState({selected:n,sources:r})},a.onColumnClick=function(e,t){var n=a.state,r=n.selected,c=n.cols;if(void 0!==r.source)"column"===r.source.type?a.canAppend(e,r.cards[0])?(a.pushHistory(),r.cards.forEach((function(t){e.cards.push(t)})),a.finalizeSelection(),r=a.state.selected,c=a.state.cols):(r.cards=[],r.source=void 0):"deck"===r.source.type?a.canAppend(e,r.cards[0])&&(a.pushHistory(),e.cards.push(r.cards[0]),a.finalizeSelection(),r=a.state.selected,c=a.state.cols):"suitSource"===r.source.type&&a.canAppend(e,r.cards[0])&&(a.pushHistory(),e.cards.push(r.cards[0]),a.finalizeSelection(),r=a.state.selected,c=a.state.cols);else if(void 0!==t&&(r.cards=[],r.source=void 0,e.cards[t].isShown)){r.cards=[];for(var s=t;s<e.cards.length;++s)r.cards.push(e.cards[s]);r.source=e}a.setState({selected:r,cols:c})},a.canAppend=function(e,t){if("deck"===e.type)return!1;if("column"===e.type){if(0===e.cards.length)return 13===t.value;var a=e.cards[e.cards.length-1];if((a.suit===p.C||a.suit===p.S)&&(t.suit===p.H||t.suit===p.D)||(a.suit===p.H||a.suit===p.D)&&(t.suit===p.C||t.suit===p.S))return t.value===a.value-1}else if("suitSource"===e.type){if(0===e.cards.length)return 1===t.value;var n=e.cards[e.cards.length-1];return t.suit===n.suit&&t.value===n.value+1}return!1},a.finalizeSelection=function(){var e=a.state,t=e.selected,n=e.sources,r=e.deck,c=e.cols;void 0!==t.source&&("deck"===t.source.type?r.dealt.pop():"column"===t.source.type?(t.cards.forEach((function(){c[t.source.index].cards.pop()})),c[t.source.index].cards.length>0&&(c[t.source.index].cards[c[t.source.index].cards.length-1].isShown=!0)):"suitSource"===t.source.type&&n[t.source.index].cards.pop(),t.cards=[],t.source=void 0,a.setState({selected:t,deck:r,sources:n,cols:c}))},a.render=function(){var e=a.state,t=e.deck,n=e.cols,r=e.sources,s=e.selected,o=e.cardsPerDeal,l=e.moves,i=e.ticks,u=e.ticker,d=new Date(1e3*i).toISOString().substr(11,8),v=n.map((function(e){return c.a.createElement(X,{key:e.index,column:e,onClick:function(t){return a.onColumnClick(e,t)}})})),f=r.map((function(e){return c.a.createElement(Y,{key:e.index,source:e,onClick:a.onSuitClick})})),m=null;if(a.isFinished()){if(void 0!==h.a.getJSON("stats")){var p=h.a.getJSON("stats"),k=p.moves<l?p.moves:l,S=p.ticks<i?p.ticks:i;m=c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Congratulations! Finished in ",d," time with ",l," moves!"),c.a.createElement("h1",null,"Best: ",k," moves | ",new Date(1e3*S).toISOString().substr(11,8)," Time")),h.a.set("stats",{moves:k,ticks:S})}else m=c.a.createElement("h1",null,"Congratulations! Finished in ",d," time with ",l," moves!"),h.a.set("stats",{moves:l,ticks:i});window.clearInterval(u)}else m=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,l," ",1===l?"Move":"Moves"," Made"),c.a.createElement("p",null,d," Time Elapsed"));return c.a.createElement($.Provider,{value:s.cards},c.a.createElement("div",{className:"solitaire-board"},c.a.createElement("div",{className:"solitaire-header"},c.a.createElement("div",{className:"solitaire-stats"},m)),c.a.createElement("div",{className:"solitaire-dealer"},c.a.createElement("div",{className:"solitaire-deck"},c.a.createElement(L,{type:"deck",deck:t.deck,dealt:t.dealt,onDeal:a.draw,onCardClick:a.onDeckClick}),c.a.createElement("button",{type:"button",className:"change-deal",onClick:a.changeDraw},"Deal ",3===o?"1":"3"," per draw")),c.a.createElement("div",{className:"solitaire-source-mat"},c.a.createElement("div",{className:"solitaire-sources"},f),c.a.createElement("div",{className:"solitaire-buttons"},c.a.createElement("button",{type:"button",className:"solitaire-undo",onClick:a.undo},"Undo"),c.a.createElement("button",{type:"button",className:"solitaire-reset",onClick:function(){(a.isFinished()||window.confirm("Are you sure you would like to start a new game?"))&&window.location.reload()}},"New Game")))),c.a.createElement("div",{className:"solitaire-cols"},v)))};var n=Z(Z(function(){var e=[];return Object.values(p).forEach((function(t){for(var a=1;a<=13;++a){var n={type:"card",value:a,suit:t,isShown:!1};e.push(n)}})),e}())),r=function(e){for(var t=[],a=0;a<7;++a)t.push({type:"column",cards:[],index:a});for(var n=0;n++<7;)for(var r=n-1;r<7;++r)t[r].cards.push(e.pop());for(var c=0;c<7;++c)t[c].cards[c].isShown=!0;return t}(n),s={type:"deck",deck:n,dealt:[]},o=Object.keys(p).map((function(e,t){return{type:"suitSource",index:t,cards:[]}}));return a.state={deck:s,cols:r,sources:o,selected:{type:"selected",cards:[],source:void 0},cardsPerDeal:1,moves:0,ticks:0,ticker:window.setInterval((function(){var e=a.state.ticks;a.setState({ticks:e+1})}),1e3)},a}return Object(v.a)(t,e),t}(r.Component),te=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.4d7f4998.chunk.js.map