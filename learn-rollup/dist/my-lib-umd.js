!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){function e(e){this.data=e}return e.prototype.changeData=function(){this.data.a=100},e}(),t={a:1,b:2},n=new e(t),a=new e(t);n.changeData(),console.log(n.data),console.log(a.data)}));