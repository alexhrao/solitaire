(this.webpackJsonpsolitaire=this.webpackJsonpsolitaire||[]).push([[0],[,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(12),o=a.n(s),l=(a(19),a(20),a(1)),i=a(2),u=a(4),d=a(3),v=a(5),f=a(13);a(7),a(8),a(9),a(10);!function(e){e.S="Spades",e.H="Hearts",e.C="Clubs",e.D="Diamonds"}(n||(n={}));var m=n,h=(a(11),150),p=200,k="50px Calibri",S="30px Calibri",C=10,y=20,b=25,E="black",g="black",w="red",T="red",x="white",N="skyblue",P=40,O="darkgray",j=function(e){var t=.3*b;e.beginPath(),e.moveTo(0,t),e.bezierCurveTo(0,0,-y/2,0,-y/2,t),e.bezierCurveTo(-y/2,(b+t)/2,0,(b+t)/2,0,b),e.bezierCurveTo(0,(b+t)/2,y/2,(b+t)/2,y/2,t),e.bezierCurveTo(y/2,0,0,0,0,t),e.closePath(),e.fillStyle=w,e.fill()},z=function(e){var t=y/2+C,a=C;e.translate(t,a),j(e),e.translate(-t,-a);var n=h-(y/2+C),c=p-b/2;e.translate(n,c),e.scale(1,-1),j(e),e.scale(1,-1),e.translate(-n,-c)},D=function(e){var t=y/2,a=b/2,n=t/10,c=t/2;e.beginPath(),e.fillStyle=g,e.moveTo(t,a),e.arc(t-c+n,a,c,0,2*Math.PI),e.moveTo(t,a),e.arc(t+c-n,a,c,0,2*Math.PI),e.moveTo(t,a),e.arc(t,a-c+n,c,0,2*Math.PI),e.moveTo(t,a),e.lineTo(t-t/2,2*a),e.lineTo(t+t/2,2*a),e.fill(),e.closePath()},H=function(e){e.translate(C,C),D(e),e.translate(-C,-C);var t=h-y-C,a=p-b/2;e.translate(t,a),e.scale(1,-1),D(e),e.scale(1,-1),e.translate(-t,-a)},I=function(e){e.beginPath(),e.fillStyle=T,e.moveTo(y/2,0),e.lineTo(0,b/2),e.lineTo(y/2,b),e.lineTo(y,b/2),e.lineTo(y/2,0),e.fill(),e.closePath()},A=function(e){e.translate(C,C),I(e),e.translate(-C,-C);var t=h-y-C,a=p-b/2;e.translate(t,a),e.scale(1,-1),I(e),e.scale(1,-1),e.translate(-t,-a)},M=function(e){var t=.7*b,a=.3*y,n=.7*y;e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(0,t/2,-y/2,t/2,-y/2,t),e.bezierCurveTo(-y/2,1.3*t,0,1.3*t,0,t),e.bezierCurveTo(0,1.3*t,y/2,1.3*t,y/2,t),e.bezierCurveTo(y/2,t/2,0,t/2,0,0),e.closePath(),e.fill(),e.beginPath(),e.moveTo(0,t),e.quadraticCurveTo(0,t+a,-n/2,t+a),e.lineTo(n/2,t+a),e.quadraticCurveTo(0,t+a,0,t),e.closePath(),e.fillStyle=E,e.fill()},F=function(e){e.fillStyle=E;var t=y/2+C,a=C;e.translate(t,a),M(e),e.translate(-t,-a);var n=h-(y/2+C),c=p-b/2;e.translate(n,c),e.scale(1,-1),M(e),e.scale(1,-1),e.translate(-n,-c)},J=function(e){e.lineWidth=1;var t=p/P*2;e.beginPath(),e.strokeStyle="red";for(var a=0;a<P;++a)e.moveTo(0,a*t),e.lineTo(a*t,0);e.closePath(),e.stroke(),e.beginPath();for(var n=0;n<P;++n)e.moveTo(h-n*t,0),e.lineTo(h,n*t);e.closePath(),e.stroke()},R=function(e){e.fillStyle=O,e.fillRect(0,0,h,p)},W=function(e,t){1===t?e.fillText("A",0,0):t<11?e.fillText("".concat(t),0,0):11===t?e.fillText("J",0,0):12===t?e.fillText("Q",0,0):e.fillText("K",0,0)},q=function(e,t){switch(e.font=k,t.suit){case m.S:e.fillStyle=E;break;case m.C:e.fillStyle=g;break;case m.D:e.fillStyle=T;break;case m.H:e.fillStyle=w}e.textAlign="center",e.translate(h/2,p/2),W(e,t.value),e.translate(-h/2,-p/2);var a=h-2*C,n=3*C;e.translate(a,n),e.font=S,W(e,t.value),e.translate(-a,-n);var c=2*C,r=p-1.5*C;e.translate(c,r),e.font=S,W(e,t.value),e.translate(-c,-r)},B=function(e,t){e.clearRect(0,0,h,p),e.fillStyle=t?N:x,e.fillRect(0,0,h,p)},U=function(e){return r.a.createElement("canvas",{id:"canvas".concat(e.suit,"-").concat(e.value),className:"react-card ".concat(e.isShown?"":"no-click"),ref:"canvas",width:h,height:p})},G=(a(21),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.renderCard()},a.componentDidUpdate=function(){a.renderCard()},a.render=function(){var e=a.props,t=e.card,n=e.onClick;return r.a.createElement("div",{className:"react-card-holder",onClick:function(){return n(t)}},U(t))},a.renderCard=function(){var e=a.props,t=e.card,n=e.isSelected,c=a.refs.canvas.getContext("2d");if(null!==c){if(B(c,n),!t.isShown)return void J(c);if(-1===t.value)return void R(c);switch(t.suit){case m.C:H(c);break;case m.D:A(c);break;case m.H:z(c);break;case m.S:F(c)}q(c,t)}},a}return Object(v.a)(t,e),t}(c.Component)),K=r.a.createContext([]),Q=(a(22),function(e){var t=e.deck,a=e.dealt,n=e.onDeal,c=e.onCardClick,s=null;s=t.length>0?r.a.createElement(G,{card:{suit:m.S,type:"card",isShown:!1,value:0},onClick:n}):r.a.createElement(G,{card:{suit:m.S,type:"card",isShown:!0,value:-1},onClick:n});var o=null;return o=a.length>0?r.a.createElement(K.Consumer,null,(function(e){var t=a[a.length-1],n=1===e.length&&t.suit===e[0].suit&&t.value===e[0].value;return r.a.createElement(G,{card:t,onClick:c,isSelected:n})})):r.a.createElement(G,{card:{suit:m.S,type:"card",isShown:!0,value:-1},onClick:function(){}}),r.a.createElement("div",{className:"react-deck"},r.a.createElement("div",{className:"deck-dealer"},s),r.a.createElement("div",{className:"deck-dealt"},o))}),$=(a(23),function(e,t){return function(a){var n=e.findIndex((function(e){return e.value===a.value&&e.suit===a.suit}));t(-1===n?void 0:n)}}),L=function(e){var t=e.column,a=e.onClick,n=t.cards,c=$(n,a),s=0===n.length?[r.a.createElement(G,{key:"bedrock",card:{type:"card",value:-1,suit:m.S,isShown:!0},onClick:c})]:n.map((function(e){return r.a.createElement(K.Consumer,{key:"".concat(e.suit," ").concat(e.value)},(function(t){return function(e,t){var a=-1!==e.findIndex((function(e){return e.suit===t.suit&&e.value===t.value}));return r.a.createElement(G,{key:"".concat(t.suit," ").concat(t.value),card:t,onClick:c,isSelected:a})}(t,e)}))}));return r.a.createElement("div",{className:"react-column"},s)},V=function(e){var t=e.source,a=e.onClick,n=0===t.cards.length?r.a.createElement(G,{card:{type:"card",value:-1,suit:m.S,isShown:!0},onClick:function(){return a(t)}}):r.a.createElement(K.Consumer,null,(function(e){var n=t.cards[t.cards.length-1],c=-1!==e.findIndex((function(e){return e.value===n.value&&e.suit===n.suit}));return r.a.createElement(G,{card:t.cards[t.cards.length-1],onClick:function(){return a(t)},isSelected:c})}));return r.a.createElement("div",null,n)};a(24);function X(e){for(var t=e.length,a=Object(f.a)(e);t;){var n=Math.floor(Math.random()*t--),c=a[t];a[t]=a[n],a[n]=c}return a}var Y=[],Z=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).isFinished=function(){return a.state.sources.every((function(e){return e.cards.length>0&&13===e.cards[e.cards.length-1].value}))},a.pushHistory=function(){var e=a.state,t=e.deck,n=e.sources,c=e.cols,r={deck:{dealt:t.dealt.map((function(e){return Object(l.a)({},e)})),deck:t.deck.map((function(e){return Object(l.a)({},e)})),type:"deck"},sources:n.map((function(e){return{cards:e.cards.map((function(e){return Object(l.a)({},e)})),index:e.index,type:"suitSource"}})),cols:c.map((function(e){return{cards:e.cards.map((function(e){return Object(l.a)({},e)})),index:e.index,type:"column"}}))};Y.push(r);var s=a.state.moves;a.setState({moves:s+1})},a.undo=function(){var e=a.state.selected,t=Y.pop();t&&(e.cards=[],e.source=void 0,a.setState(Object(l.a)({},t,{selected:e})));var n=a.state.moves;a.setState({moves:n+1})},a.draw=function(){var e=a.state,t=e.selected,n=e.deck;if(0===n.deck.length)for(var c=n.dealt.pop();void 0!==c;)c.isShown=!1,n.deck.push(c),c=n.dealt.pop();else{var r=n.deck.pop();r.isShown=!0,n.dealt.push(r)}t.cards=[],t.source=void 0,a.setState({selected:t,deck:n})},a.onDeckClick=function(){var e=a.state,t=e.selected,n=e.deck;n.dealt.length>0?(t.cards=[n.dealt[n.dealt.length-1]],t.source=n):(t.cards=[],t.source=void 0),a.setState({selected:t})},a.onSuitClick=function(e){var t=a.state,n=t.selected,c=t.sources;if(void 0!==n.source){if(1===n.cards.length){var r=n.cards[0];a.canAppend(e,r)?(a.pushHistory(),a.finalizeSelection(),n=a.state.selected,c=a.state.sources,e.cards.push(r)):(n.source=void 0,n.cards=[])}}else e.cards.length>0&&(n.source=e,n.cards=[e.cards[e.cards.length-1]]);c[e.index]=e,a.setState({selected:n,sources:c})},a.onColumnClick=function(e,t){var n=a.state,c=n.selected,r=n.cols;if(void 0!==c.source)"column"===c.source.type?a.canAppend(e,c.cards[0])?(a.pushHistory(),c.cards.forEach((function(t){e.cards.push(t)})),a.finalizeSelection(),c=a.state.selected,r=a.state.cols):(c.cards=[],c.source=void 0):"deck"===c.source.type?a.canAppend(e,c.cards[0])&&(a.pushHistory(),e.cards.push(c.cards[0]),a.finalizeSelection(),c=a.state.selected,r=a.state.cols):"suitSource"===c.source.type&&a.canAppend(e,c.cards[0])&&(a.pushHistory(),e.cards.push(c.cards[0]),a.finalizeSelection(),c=a.state.selected,r=a.state.cols);else if(void 0!==t){c.cards=[];for(var s=t;s<e.cards.length;++s)c.cards.push(e.cards[s]);c.source=e}a.setState({selected:c,cols:r})},a.canAppend=function(e,t){if("deck"===e.type)return!1;if("column"===e.type){if(0===e.cards.length)return 13===t.value;var a=e.cards[e.cards.length-1];if((a.suit===m.C||a.suit===m.S)&&(t.suit===m.H||t.suit===m.D)||(a.suit===m.H||a.suit===m.D)&&(t.suit===m.C||t.suit===m.S))return t.value===a.value-1}else if("suitSource"===e.type){if(0===e.cards.length)return 1===t.value;var n=e.cards[e.cards.length-1];return t.suit===n.suit&&t.value===n.value+1}return!1},a.finalizeSelection=function(){var e=a.state,t=e.selected,n=e.sources,c=e.deck,r=e.cols;void 0!==t.source&&("deck"===t.source.type?c.dealt.pop():"column"===t.source.type?(t.cards.forEach((function(){r[t.source.index].cards.pop()})),r[t.source.index].cards.length>0&&(r[t.source.index].cards[r[t.source.index].cards.length-1].isShown=!0)):"suitSource"===t.source.type&&n[t.source.index].cards.pop(),t.cards=[],t.source=void 0,a.setState({selected:t,deck:c,sources:n,cols:r}))},a.render=function(){var e=a.state,t=e.deck,n=e.cols,c=e.sources,s=e.selected,o=e.moves,l=e.ticks,i=e.ticker,u=new Date(1e3*l).toISOString().substr(11,8),d=n.map((function(e){return r.a.createElement(L,{key:e.index,column:e,onClick:function(t){return a.onColumnClick(e,t)}})})),v=c.map((function(e){return r.a.createElement(V,{key:e.index,source:e,onClick:a.onSuitClick})})),f=null;return a.isFinished()?(f=r.a.createElement("h1",null,"Congratulations! Finished in ",u," time with ",o," moves!"),window.clearInterval(i)):f=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,o," ",1===o?"Move":"Moves"," Made"),r.a.createElement("p",null,u," Time Elapsed")),r.a.createElement(K.Provider,{value:s.cards},r.a.createElement("div",{className:"solitaire-board"},r.a.createElement("div",{className:"solitaire-header"},r.a.createElement("div",{className:"solitaire-stats"},f)),r.a.createElement("div",{className:"solitaire-dealer"},r.a.createElement("div",{className:"solitaire-deck"},r.a.createElement(Q,{type:"deck",deck:t.deck,dealt:t.dealt,onDeal:a.draw,onCardClick:a.onDeckClick})),r.a.createElement("div",{className:"solitaire-source-mat"},r.a.createElement("div",{className:"solitaire-sources"},v),r.a.createElement("div",{className:"solitaire-buttons"},r.a.createElement("button",{type:"button",className:"solitaire-reset",onClick:function(){(a.isFinished()||window.confirm("Are you sure you would like to start a new game?"))&&window.location.reload()}},"New Game"),r.a.createElement("button",{type:"button",className:"solitaire-undo",onClick:a.undo},"Undo")))),r.a.createElement("div",{className:"solitaire-cols"},d)))};var n=X(X(function(){var e=[];return Object.values(m).forEach((function(t){for(var a=1;a<=13;++a){var n={type:"card",value:a,suit:t,isShown:!1};e.push(n)}})),e}())),c=function(e){for(var t=[],a=0;a<7;++a)t.push({type:"column",cards:[],index:a});for(var n=0;n++<7;)for(var c=n-1;c<7;++c)t[c].cards.push(e.pop());for(var r=0;r<7;++r)t[r].cards[r].isShown=!0;return t}(n),s={type:"deck",deck:n,dealt:[]},o=Object.keys(m).map((function(e,t){return{type:"suitSource",index:t,cards:[]}}));return a.state={deck:s,cols:c,sources:o,selected:{type:"selected",cards:[],source:void 0},moves:0,ticks:0,ticker:window.setInterval((function(){var e=a.state.ticks;a.setState({ticks:e+1})}),1e3)},a}return Object(v.a)(t,e),t}(c.Component),_=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.7b33005a.chunk.js.map