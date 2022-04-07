(()=>{"use strict";var t={913:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ratio=void 0,e.ratio=2},489:function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(365),a=i(685),l=function(t){function e(e){var i=t.call(this,e)||this;return i.name="input",i.borderBottomColor="#333",i.borderBottomWidth=2,i.borderLeftColor="#333",i.borderLeftWidth=2,i.borderRightColor="#333",i.borderRightWidth=2,i.borderTopColor="#333",i.borderTopWidth=2,i.value="",i.label=new a.default({text:"",lineHeight:e.height,textAlign:"right"}),i.append(i.label),i.on("touchstart",(function(){var t,e=this;document.getElementById("input-dom")?t=document.getElementById("input-dom"):((t=document.createElement("input")).id="input-dom",t.style.position="fixed",t.style.zIndex="2",t.style.boxSizing="border-box",t.addEventListener("blur",(function(){this.style.display="none",e.value=this.value,e.label.attr("text",this.value)})),document.body.append(t)),t.value=this.value,t.style.left=this.pageX/2+"px",t.style.top=this.pageY/2+"px",t.style.display="block",t.style.width="".concat(this.width/2,"px"),t.style.height="".concat(this.height/2,"px"),t.style.borderLeftColor=this.borderLeftColor,t.style.borderRightColor=this.borderRightColor,t.style.borderTopColor=this.borderTopColor,t.style.borderBottomColor=this.borderBottomColor,t.style.borderLeftWidth="".concat(this.borderLeftWidth/2,"px"),t.style.borderRightWidth="".concat(this.borderRightWidth/2,"px"),t.style.borderTopWidth="".concat(this.borderTopWidth/2,"px"),t.style.borderTopWidth="".concat(this.borderTopWidth/2,"px"),t.style.outline="none",t.focus()})),i}return o(e,t),e}(n.default);e.default=l},685:function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(365),a=i(913),l=function(t){function e(e){var i=t.call(this,{width:0,height:0})||this;return i.name="label",i.text=e.text,i.color=e.color,i.stroke=void 0!==e.stroke&&e.stroke,i.lineHeight=e.lineHeight?e.lineHeight*a.ratio:16*a.ratio,i.fontFamily=e.fontFamily||"Arial",i.fontSize=e.fontSize?e.fontSize*a.ratio:14*a.ratio,i.bold=void 0!==e.bold&&e.bold,i.textAlign=e.textAlign||"center",i.underLine=void 0===e.underLine?null:e.underLine,i}return o(e,t),e.prototype.attr=function(t,e){this[t]=e,this.parent.canvas=void 0},e.width=0,e.height=0,e}(n.default);e.default=l},757:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.list=[]}return t.prototype.use=function(t){var e=this;return new Promise((function(i,r){if(e.list.find((function(e){return e.src===t})))i(e.list.find((function(e){return e.src===t})).img);else{var o=document.createElement("img");o.src=t,o.onload=function(){e.list.push({src:t,img:o}),i(e.list.find((function(e){return e.src===t})).img)},o.onerror=function(t){r(t)},o.onabort=function(t){r(t)}}}))},t}();e.default=new i},557:function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},a=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(o,n){function a(t){try{h(r.next(t))}catch(t){n(t)}}function l(t){try{h(r.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,l)}h((r=r.apply(t,e||[])).next())}))},l=this&&this.__generator||function(t,e){var i,r,o,n,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(n){return function(l){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(o=2&n[0]?r.return:n[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,n[1])).done)return o;switch(r=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,r=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){a.label=n[1];break}if(6===n[0]&&a.label<o[1]){a.label=o[1],o=n;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(n);break}o[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],r=0}finally{i=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,l])}}},h=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var r,o=0,n=e.length;o<n;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0});var s=i(365),c=i(757),d=i(913),u=function(t){function e(e){var i=t.call(this,{width:e.offsetWidth,height:e.offsetHeight})||this;return i.eventConsed=!0,i.eventColorMap=[],i.currentEventColor="#000000",i.viewArea={clipX:0,clipY:0,clipWidth:i.width,clipHeight:i.height},i.target=e,i.createCanvas(),i.frame.call(i),i}return o(e,t),e.prototype.createCanvas=function(){var t=this;this.ghostCanvas=document.createElement("canvas"),this.ghostCtx=this.ghostCanvas.getContext("2d"),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ghostCanvas.width=this.canvas.width=this.width,this.ghostCanvas.height=this.canvas.height=this.height,this.canvas.style.height="100%",this.canvas.style.width="100%",this.ghostCanvas.style.height="100%",this.ghostCanvas.style.width="100%",this.target.append(this.canvas),this.canvas.addEventListener("touchstart",(function(e){if(t.eventConsed){t.eventConsed=!1,e.preventDefault();var i=document.getElementById("input-dom");i&&i.blur();var r=e.targetTouches[0],o=r.pageX,n=r.pageY;t.eventType="touchstart",t.eventX=o*d.ratio,t.eventY=n*d.ratio,t.eventObj=e;var a=t._eventMap.touchstart;if(t._eventMap.touchstart)for(var l=0;l<a.length;l++)a[l].call(t,e)}}),!1),this.canvas.addEventListener("touchmove",(function(e){if(t.eventConsed){t.eventConsed=!1,e.preventDefault();var i=e.targetTouches[0],r=i.pageX,o=i.pageY;t.eventType="touchmove",t.eventX=r*d.ratio,t.eventY=o*d.ratio,t.eventObj=e;var n=t._eventMap.touchmove;if(t._eventMap.touchmove)for(var a=0;a<n.length;a++)n[a].call(t,e)}}),!1),this.canvas.addEventListener("touchcancel",(function(e){var i=t._eventMap.touchcancel;if(t._eventMap.touchcancel)for(var r=0;r<i.length;r++)i[r].call(t,e);t.eventColorMap.forEach((function(t,i){var r=t.trigger._eventMap.touchcancel;if(t.trigger._eventMap.touchcancel)for(var o=0;o<r.length;o++)r[o].call(t.trigger,e)}))}),!1),this.canvas.addEventListener("touchend",(function(e){var i=t._eventMap.touchend;if(t._eventMap.touchend)for(var r=0;r<i.length;r++)i[r].call(t,e);t.eventColorMap.forEach((function(t,i){var r=t.trigger._eventMap.touchend;if(t.trigger._eventMap.touchend)for(var o=0;o<r.length;o++)r[o].call(t.trigger,e)}))}),!1)},e.prototype.frame=function(){return a(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return this.ctx.clearRect(0,0,this.width,this.height),this.currentEventColor="#000000",this.eventColorMap=[],[4,this.deep(this.children)];case 1:return t.sent(),this.eventConsed=!0,this.eventObj=null,this.eventX=null,this.eventY=null,requestAnimationFrame(this.frame.bind(this)),[2]}}))}))},e.prototype.deep=function(t){var e,i;return a(this,void 0,void 0,(function(){var r,o,a,s,c,d,u,p,v,f,g,b,y,w,m,x,_,C,A;return l(this,(function(l){switch(l.label){case 0:(r=h([],t,!0)).sort((function(t,e){return t.zIndex-e.zIndex})),o=0,l.label=1;case 1:return o<r.length?(a=r[o],s=a.width,c=a.height,d=a.name,a._eventMap,a.id,a.zIndex,a.visible&&"label"!==d?(Object.keys(a._eventMap).length&&(a.eventLock=!1,a.eventColor=this.currentEventColor,this.eventColorMap.push({color:this.currentEventColor,trigger:a}),this.eventColorUp()),u="fixed"===a.position?a.x:((null===(e=a.parent)||void 0===e?void 0:e.pageX)||0)+(a.x||0),p="fixed"===a.position?a.y:((null===(i=a.parent)||void 0===i?void 0:i.pageY)||0)+(a.y||0),a.pageX=u,a.pageY=p,v=a.overflowX,f=a.overflowY,g=a.parent,b=g.overflowX,y=g.overflowY,w=void 0,m=void 0,x=void 0,_=void 0,"hidden"===b?"hidden"===v?u+s<g.viewArea.clipX||u>g.viewArea.clipX+g.viewArea.clipWidth?(w=g.viewArea.clipWidth||this.width,m=g.viewArea.clipX||0):u>g.viewArea.clipX?(m=u,w=g.viewArea.clipWidth+g.viewArea.clipX>u+s?s:g.viewArea.clipWidth):(m=g.viewArea.clipX,w=g.viewArea.clipWidth+g.viewArea.clipX>u+s?s:g.viewArea.clipWidth):(w=g.viewArea.clipWidth,m=g.viewArea.clipX):"hidden"===v?(w=s,m=u):(m=Math.min(u,g.viewArea.clipX),w=g.viewArea.clipX+g.viewArea.clipWidth>u+s?g.viewArea.clipWidth:g.viewArea.clipWidth+(u+s-m)),"hidden"===y?"hidden"===f?p+c<g.viewArea.clipY||p>g.viewArea.clipY+g.viewArea.clipHeight?(x=g.viewArea.clipHeight||this.height,_=g.viewArea.clipY||0):p>g.viewArea.clipY?(_=p,x=g.viewArea.clipHeight+g.viewArea.clipY>p+c?c:g.viewArea.clipHeight):(_=g.viewArea.clipY,x=g.viewArea.clipHeight+g.viewArea.clipY>p+c?c:g.viewArea.clipHeight):(x=g.viewArea.clipHeight,_=g.viewArea.clipY):"hidden"===f?(x=c,_=p):(_=Math.min(p,g.viewArea.clipY),x=g.viewArea.clipY+g.viewArea.clipHeight>p+c?g.viewArea.clipHeight:g.viewArea.clipHeight+(p+c-_)),a.viewArea={clipX:m,clipY:_,clipWidth:w,clipHeight:x},this.ghostCtx.save(),this.ghostCtx.rect(m,_,w,x),this.ghostCtx.fillStyle=a.eventColor||"#ffffff",this.ghostCtx.fillRect(u,p,s,c),this.ghostCtx.restore(),!1===a.eventLock&&this.eventObj&&(a.eventLock=this.eventResolve(a)),"sprite"!==d&&"scrollbar_ves"!==d&&"input"!==d?[3,10]:u>this.width||u+s<0?[3,8]:[3,2]):[2]):[3,11];case 2:return p>this.height||p+c<0?[3,8]:[3,3];case 3:return a.canvas?[3,8]:(a.canvas=document.createElement("canvas"),a.canvas.width=s,a.canvas.height=c,a.ctx=a.canvas.getContext("2d"),[4,this.drawBg(n(n({},a),{x:0,y:0}),a.ctx)]);case 4:if(l.sent(),this.drawBorder(n(n({},a),{x:0,y:0}),a.ctx),!(C=a.children.filter((function(t){return"label"===t.name}))).length)return[3,8];A=0,l.label=5;case 5:return A<C.length?[4,this.drawLabel(n(n({},C[A]),{x:0,y:0}),a.ctx)]:[3,8];case 6:l.sent(),l.label=7;case 7:return A++,[3,5];case 8:return a.canvas&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(g.viewArea.clipX,g.viewArea.clipY,g.viewArea.clipWidth,g.viewArea.clipHeight),this.ctx.closePath(),this.ctx.clip(),this.ctx.drawImage(a.canvas,u,p,s,c),this.ctx.restore()),a.children?[4,this.deep(a.children)]:[3,10];case 9:l.sent(),l.label=10;case 10:return o++,[3,1];case 11:return[2]}}))}))},e.prototype.eventColorUp=function(){var t=this.currentEventColor.replace("#",""),e=parseInt(t.substring(0,2),16),i=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16);r<255?r++:(r=0,i<255?i++:(i=0,e<255&&e++));var o=e.toString(16),n=i.toString(16),a=r.toString(16),l="#".concat(e>15?o:"0"+o).concat(i>15?n:"0"+n).concat(r>15?a:"0"+a);this.currentEventColor=l},e.prototype.eventResolve=function(t){if(this.eventX&&this.eventY){var e=this.ghostCtx.getImageData(this.eventX,this.eventY,1,1).data,i=e[0],r=e[1],o=e[2],n=i.toString(16),a=r.toString(16),l=o.toString(16),h="#".concat(i>15?n:"0"+n).concat(r>15?a:"0"+a).concat(o>15?l:"0"+l);if(t.eventColor===h){var s=t._eventMap[this.eventType];if(t._eventMap[this.eventType])for(var c=0;c<s.length;c++)s[c].call(t,this.eventObj);return!0}}return!1},e.prototype.drawLabel=function(t,e){return a(this,void 0,void 0,(function(){var i,r,o,n,a,h,s,c,d,u,p,v,f,g,b,y,w,m,x,_,C,A,T,W,O,M,j,P;return l(this,(function(l){if(i=t.text,r=t.color,o=t.x,n=t.y,a=t.parent,h=t.textAlign,s=t.stroke,c=t.lineHeight,d=t.fontSize,u=t.fontFamily,p=t.underLine,v=t.bold,f=a.width,a.height,g=a.borderLeftWidth,b=a.borderLeftColor,y=a.borderRightColor,w=a.borderRightWidth,m=a.borderTopColor,x=a.borderTopWidth,a.borderBottomColor,a.borderBottomWidth,e.strokeStyle=r||"#000",e.textBaseline="top",e.textAlign="left",e.font="".concat(v?"bold":""," ").concat(d,"px ").concat(u),_=e.measureText(i).width,b&&g&&(o+=g,f-=g),y&&w&&(f-=w),m&&x&&(n+=x),e.fillStyle=r||"#000",_<=f)"center"===h?o+=(f-_)/2:(h="left")?o=0:o+=f-_,s?e.strokeText(i,o,n+(c-d)/2,f):e.fillText(i,o,n+(c-d)/2,f),p&&(P=d/14,e.beginPath(),e.moveTo(o,n+c-P),e.lineTo(o+_,n+c-P),e.closePath(),e.strokeStyle=p,e.stroke());else for(C=i.split(""),A="",T=0;C.length||A;)W=C[0],(O=e.measureText(A+W).width)>f||!C.length?(M=e.measureText(A).width,j=o,"center"===h?j+=(f-M)/2:"right"===h&&(j+=f-M),s?e.strokeText(A,j,n+T+(c-d)/2,f):e.fillText(A,j,n+T+(c-d)/2,f),p&&(P=d/14,e.beginPath(),e.moveTo(j,n+T+(c-d)/2+c-P),e.lineTo(j+O,n+T+(c-d)/2+c-P),e.closePath(),e.strokeStyle=p,e.stroke()),A="",T+=c):A+=C.shift();return e.fillStyle=null,[2]}))}))},e.prototype.drawBg=function(t,e){return a(this,void 0,void 0,(function(){var i,r,o,n,a,h,s,d,u,p,v,f,g,b,y;return l(this,(function(l){switch(l.label){case 0:return i=t.bgImage,r=t.bgColor,o=t.width,n=t.height,a=t.x,h=t.y,s=t.borderLeftWidth,d=t.borderLeftColor,u=t.borderRightColor,p=t.borderRightWidth,v=t.borderTopColor,f=t.borderTopWidth,g=t.borderBottomColor,b=t.borderBottomWidth,s&&d&&(a+=s,o-=s),f&&v&&(h+=f,n-=f),p&&u&&(o-=p),g&&b&&(n-=b),i?[4,c.default.use(i)]:[3,2];case 1:return y=l.sent(),e.drawImage(y,a,h,o,n),[3,3];case 2:r&&(e.fillStyle=r,e.beginPath(),e.fillRect(a,h,o,n),e.fillStyle=null,e.closePath()),l.label=3;case 3:return[2]}}))}))},e.prototype.drawBorder=function(t,e){var i=t.width,r=t.height,o=t.borderLeftWidth,n=t.borderLeftColor,a=t.borderRightColor,l=t.borderRightWidth,h=t.borderTopColor,s=t.borderTopWidth,c=t.borderBottomColor,d=t.borderBottomWidth,u=t.x,p=t.y;o&&n&&(e.beginPath(),e.moveTo(u,p),e.lineTo(u+o,s&&h?p+s:p),e.lineTo(u+o,d&&c?p+(r-d):p+r),e.lineTo(u,p+r),e.closePath(),e.fillStyle=n,e.fill(),e.fillStyle=null),s&&h&&(e.beginPath(),e.moveTo(u,p),e.lineTo(n&&o?u+o:u,p+s),e.lineTo(a&&l?u+(i-l):u+i,p+s),e.lineTo(u+i,p),e.closePath(),e.fillStyle=h,e.fill(),e.fillStyle=null),l&&a&&(e.beginPath(),e.moveTo(u+i,p),e.lineTo(u+(i-l),s&&h?s+p:p),e.lineTo(u+(i-l),c&&d?p+(r-d):p+r),e.lineTo(u+i,p+r),e.closePath(),e.fillStyle=a,e.fill(),e.fillStyle=null),d&&c&&(e.beginPath(),e.moveTo(u,p+r),e.lineTo(n&&o?u+o:u,p+(r-d)),e.lineTo(a&&l?u+(i-l):u+i,p+(r-d)),e.lineTo(u+i,p+r),e.closePath(),e.fillStyle=c,e.fill(),e.fillStyle=null)},e}(s.default);e.default=u},434:function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=i(913),a=i(365),l=function(t){function e(e){var i=t.call(this,e)||this,r=i;i.contentWidth=void 0===e.contentWidth?i.width:e.contentWidth*n.ratio,i.contentHeight=void 0===e.contentHeight?i.height:e.contentHeight*n.ratio;var o,l,h,s,c,d,u=new a.default({width:i.contentWidth,height:i.contentHeight});if(u.name="scrollbar_ves",i.children)for(var p=i.children.reverse().length,v=0;v<p;v++)u.append(i.children[0]);i.append(u);var f=function(t){var e=t.targetTouches[0];h=e.clientX*n.ratio,s=e.clientY*n.ratio;var i=c+h-o,a=d+s-l;i>0||r.contentWidth<r.width?u.x=0:i<r.width-r.contentWidth?u.x=r.width-r.contentWidth:u.x=i,a>0||r.contentHeight<r.height?u.y=0:a<r.height-r.contentHeight?u.y=r.height-r.contentHeight:u.y=a};return i.on("touchstart",(function(t){var e=t.targetTouches[0];o=e.clientX*n.ratio,l=e.clientY*n.ratio,this.root.on("touchmove",f),c=u.x,d=u.y})),i.on("touchend",(function(){this.root.off("touchmove",f)})),i}return o(e,t),e}(a.default);e.default=l},365:function(t,e,i){var r=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var r,o=0,n=e.length;o<n;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0});var o=i(757),n=i(913),a=function(){function t(t){var e=this;this.name="sprite",this._eventMap={},this.pageX=0,this.pageY=0,this.children=[],this.x=(t.x||0)*n.ratio,this.y=(t.y||0)*n.ratio,this.width=(t.width||0)*n.ratio,this.height=(t.height||0)*n.ratio,this.bgColor=t.bgColor||"transparent",this.bgImage=t.bgImage||null,this.overflowX=t.overflowX||"hidden",this.overflowY=t.overflowY||"hidden",this.borderLeftColor=t.borderLeftColor||null,this.borderLeftWidth=(t.borderLeftWidth||0)*n.ratio,this.borderTopColor=t.borderTopColor||null,this.id=t.id||null,this.borderTopWidth=(t.borderTopWidth||0)*n.ratio,this.borderRightColor=t.borderRightColor||null,this.borderRightWidth=(t.borderRightWidth||0)*n.ratio,this.borderBottomColor=t.borderBottomColor||null,this.borderBottomWidth=(t.borderBottomWidth||0)*n.ratio,this.visible=void 0===t.visible||t.visible,this.zIndex=t.zIndex||0,this.position=t.position||"absolute";var i=t.className;i?Array.isArray(i)?this.className=r([],i.map((function(t){return t.trim()})).filter((function(t){return t})),!0):i.trim()?this.className=[i.trim()]:this.className=[]:this.className=[],this.bgImage&&o.default.use(this.bgImage);var a=t.children,l=Object.prototype.toString.call(a);if(Array.isArray(a))for(var h=0;h<a.length;h++){var s=a[h],c=Object.prototype.toString.call(s);if("[object Object]"===c)this.append(s);else if("[object Function]"===c){var d=s();Array.isArray(d)?d.forEach((function(t){e.append(t)})):this.append(d)}}else"[object Object]"===l&&this.append(a)}return Object.defineProperty(t.prototype,"root",{get:function(){var t;return this.parent?null===(t=this.parent)||void 0===t?void 0:t.root:this},enumerable:!1,configurable:!0}),t.prototype.append=function(t){t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t)},t.prototype.remove=function(t){this.children.splice(this.children.indexOf(t),1)},t.prototype.on=function(t,e){this._eventMap[t]||(this._eventMap[t]=[]),this._eventMap[t].push(e)},t.prototype.off=function(t,e){var i=this._eventMap?this._eventMap[t]:null;i&&i.includes(e)&&i.splice(i.indexOf(e))},t.prototype.getElementById=function(t){if(this.id===t)return this;for(var e=0;e<this.children.length;e++)if(this.children[e].getElementById(t))return this.children[e].getElementById(t);return null},t.prototype.getElementsByClassName=function(t){t=t.trim();var e=[];this.className.includes(t)&&e.push(this);for(var i=0;i<this.children.length;i++)this.children[i].getElementsByClassName(t)&&e.push.apply(e,this.children[i].getElementsByClassName(t));return e.length?e:null},t.prototype.attr=function(t,e){this[t]=e,this.canvas=void 0},t}();e.default=a}},e={};function i(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,i),n.exports}i(557).default,i(365).default,i(685).default,i(434).default,i(489).default})();