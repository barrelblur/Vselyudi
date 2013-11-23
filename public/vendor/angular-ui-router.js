﻿/**
 * State-based routing for AngularJS
 * @version v0.2.0
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(r,t,e){"use strict";function n(r,t){return P(new(P(function(){},{prototype:r})),t)}function a(r){return y(arguments,function(t){t!==r&&y(t,function(t,e){r.hasOwnProperty(e)||(r[e]=t)})}),r}function o(r,t){var e=[];for(var n in r.path)if(""!==r.path[n]){if(!t.path[n])break;e.push(r.path[n])}return e}function i(r,t,e,n){var a,i=o(e,n),u={},s=[];for(var l in i)if(i[l].params&&i[l].params.length){a=i[l].params;for(var c in a)s.indexOf(a[c])>=0||(s.push(a[c]),u[a[c]]=r[a[c]])}return P({},u,t)}function u(r,t){var n=1,o=2,i={},u=[],s=i,l=P(r.when(i),{$$promises:i,$$values:i});this.study=function(i){function c(r,e){if(v[e]!==o){if(p.push(e),v[e]===n)throw p.splice(0,p.indexOf(e)),Error("Cyclic dependency: "+p.join(" -> "));if(v[e]=n,b(r))h.push(e,[function(){return t.get(e)}],u);else{var a=t.annotate(r);y(a,function(r){r!==e&&i.hasOwnProperty(r)&&c(i[r],r)}),h.push(e,r,a)}p.pop(),v[e]=o}}function f(r){return E(r)&&r.then&&r.$$promises}if(!E(i))throw Error("'invocables' must be an object");var h=[],p=[],v={};return y(i,c),i=p=v=null,function(n,o,i){function u(){--w||(b||a(d,o.$$values),$.$$values=d,$.$$promises=!0,v.resolve(d))}function c(r){$.$$failure=r,v.reject(r)}function p(e,a,o){function s(r){f.reject(r),c(r)}function l(){if(!g($.$$failure))try{f.resolve(t.invoke(a,i,d)),f.promise.then(function(r){d[e]=r,u()},s)}catch(r){s(r)}}var f=r.defer(),h=0;o.forEach(function(r){m.hasOwnProperty(r)&&!n.hasOwnProperty(r)&&(h++,m[r].then(function(t){d[r]=t,--h||l()},s))}),h||l(),m[e]=f.promise}if(f(n)&&i===e&&(i=o,o=n,n=null),n){if(!E(n))throw Error("'locals' must be an object")}else n=s;if(o){if(!f(o))throw Error("'parent' must be a promise returned by $resolve.resolve()")}else o=l;var v=r.defer(),$=v.promise,m=$.$$promises={},d=P({},n),w=1+h.length/3,b=!1;if(g(o.$$failure))return c(o.$$failure),$;o.$$values?(b=a(d,o.$$values),u()):(P(m,o.$$promises),o.then(u,c));for(var x=0,y=h.length;y>x;x+=3)n.hasOwnProperty(h[x])?u():p(h[x],h[x+1],h[x+2]);return $}},this.resolve=function(r,t,e,n){return this.study(r)(t,e,n)}}function s(r,t,e){this.fromConfig=function(r,t,e){return g(r.template)?this.fromString(r.template,t):g(r.templateUrl)?this.fromUrl(r.templateUrl,t):g(r.templateProvider)?this.fromProvider(r.templateProvider,t,e):null},this.fromString=function(r,t){return w(r)?r(t):r},this.fromUrl=function(e,n){return w(e)&&(e=e(n)),null==e?null:r.get(e,{cache:t}).then(function(r){return r.data})},this.fromProvider=function(r,t,n){return e.invoke(r,null,n||{params:t})}}function l(r){function t(t){if(!/^\w+(-+\w+)*$/.test(t))throw Error("Invalid parameter name '"+t+"' in pattern '"+r+"'");if(o[t])throw Error("Duplicate parameter name '"+t+"' in pattern '"+r+"'");o[t]=!0,l.push(t)}function e(r){return r.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var n,a=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,o={},i="^",u=0,s=this.segments=[],l=this.params=[];this.source=r;for(var c,f,h;(n=a.exec(r))&&(c=n[2]||n[3],f=n[4]||("*"==n[1]?".*":"[^/]*"),h=r.substring(u,n.index),!(h.indexOf("?")>=0));)i+=e(h)+"("+f+")",t(c),s.push(h),u=a.lastIndex;h=r.substring(u);var p=h.indexOf("?");if(p>=0){var v=this.sourceSearch=h.substring(p);h=h.substring(0,p),this.sourcePath=r.substring(0,u+p),y(v.substring(1).split(/[&?]/),t)}else this.sourcePath=r,this.sourceSearch="";i+=e(h)+"$",s.push(h),this.regexp=RegExp(i),this.prefix=s[0]}function c(){this.compile=function(r){return new l(r)},this.isMatcher=function(r){return E(r)&&w(r.exec)&&w(r.format)&&w(r.concat)},this.$get=function(){return this}}function f(r){function t(r){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(r.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function e(r,t){return r.replace(/\$(\$|\d{1,2})/,function(r,e){return t["$"===e?0:Number(e)]})}function n(r,t,e){if(!e)return!1;var n=r.invoke(t,t,{$match:e});return g(n)?n:!0}var a=[],o=null;this.rule=function(r){if(!w(r))throw Error("'rule' must be a function");return a.push(r),this},this.otherwise=function(r){if(b(r)){var t=r;r=function(){return t}}else if(!w(r))throw Error("'rule' must be a function");return o=r,this},this.when=function(a,o){var i,u=b(o);if(b(a)&&(a=r.compile(a)),!u&&!w(o)&&!x(o))throw Error("invalid 'handler' in when()");var s={matcher:function(t,e){return u&&(i=r.compile(e),e=["$match",function(r){return i.format(r)}]),P(function(r,a){return n(r,e,t.exec(a.path(),a.search()))},{prefix:b(t.prefix)?t.prefix:""})},regex:function(r,a){if(r.global||r.sticky)throw Error("when() RegExp must not be global or sticky");return u&&(i=a,a=["$match",function(r){return e(i,r)}]),P(function(t,e){return n(t,a,r.exec(e.path()))},{prefix:t(r)})}},l={matcher:r.isMatcher(a),regex:a instanceof RegExp};for(var c in l)if(l[c])return this.rule(s[c](a,o));throw Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(r,t,e){function n(){function t(t){var n=t(e,r);return n?(b(n)&&r.replace().url(n),!0):!1}var n,i=a.length;for(n=0;i>n;n++)if(t(a[n]))return;o&&t(o)}return t.$on("$locationChangeSuccess",n),{}}]}function h(r,a,o){function u(r,t){var n=b(r),a=n?r:r.name,o=0===a.indexOf(".")||0===a.indexOf("^");if(o){if(!t)throw Error("No reference point given for path '"+a+"'");for(var i=a.split("."),u=0,s=i.length,l=t;s>u;u++)if(""!==i[u]||0!==u){if("^"!==i[u])break;if(!l.parent)throw Error("Path '"+a+"' not valid for state '"+t.name+"'");l=l.parent}else l=t;i=i.slice(u).join("."),a=l.name+(l.name&&i?".":"")+i}var c=m[a];return!c||!n&&(n||c!==r&&c.self!==r)?e:c}function s(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var e=t.name;if(!b(e)||e.indexOf("@")>=0)throw Error("State must have a valid name");if(m[e])throw Error("State '"+e+"'' is already defined");for(var a in d)t[a]=d[a](t);return m[e]=t,!t["abstract"]&&t.url&&r.when(t.url,["$match","$stateParams",function(r,e){$.$current.navigable==t&&h(r,e)||$.transitionTo(t,r,!1)}]),t}function l(r,t){return E(r)?t=r:t.name=r,s(t),this}function c(r,t,a,s,l,c,m){function d(r,e,n,o,i){var u=n?e:p(r.params,e),s={$stateParams:u};i.resolve=l.resolve(r.resolve,s,i.resolve,r);var c=[i.resolve.then(function(r){i.globals=r})];return o&&c.push(o),y(r.views,function(t,e){var n=t.resolve&&t.resolve!==r.resolve?t.resolve:{};n.$template=[function(){return a.load(e,{view:t,locals:s,params:u,notify:!1})||""}],c.push(l.resolve(n,s,i.resolve,r).then(function(n){n.$$controller=t.controller,n.$$state=r,i[e]=n}))}),t.all(c).then(function(){return i})}var w=t.reject(Error("transition superseded")),b=t.reject(Error("transition prevented"));return v.locals={resolve:null,globals:{$stateParams:{}}},$={params:{},current:v.self,$current:v,transition:null},$.go=function(r,t,e){return this.transitionTo(r,t,P({inherit:!0,relative:$.$current},e))},$.transitionTo=function(e,a,o){g(o)||(o=o===!0||o===!1?{location:o}:{}),a=a||{},o=P({location:!0,inherit:!1,relative:null},o);var l=u(e,o.relative);if(!g(l))throw Error("No such state "+l);if(l["abstract"])throw Error("Cannot transition to abstract state '"+e+"'");o.inherit&&(a=i(c,a||{},$.$current,l)),e=l;var p,E,x=e.path,y=$.$current,C=$.params,S=y.path,O=v.locals,k=[];for(p=0,E=x[p];E&&E===S[p]&&h(a,C,E.ownParams);p++,E=x[p])O=k[p]=E.locals;if(e===y&&O===y.locals)return $.transition=null,t.when($.current);a=f(e.params,a||{});var R=r.$broadcast("$stateChangeStart",e.self,a,y.self,C);if(R.defaultPrevented)return b;for(var I=t.when(O),M=p;x.length>M;M++,E=x[M])O=k[M]=n(O),I=d(E,a,E===e,I,O);var U=$.transition=I.then(function(){var t,n,i;if($.transition!==U)return w;for(t=S.length-1;t>=p;t--)i=S[t],i.self.onExit&&s.invoke(i.self.onExit,i.self,i.locals.globals),i.locals=null;for(t=p;x.length>t;t++)n=x[t],n.locals=k[t],n.self.onEnter&&s.invoke(n.self.onEnter,n.self,n.locals.globals);$.$current=e,$.current=e.self,$.params=a,j($.params,c),$.transition=null;var u=e.navigable;return o.location&&u&&m.url(u.url.format(u.locals.globals.$stateParams)),r.$broadcast("$stateChangeSuccess",e.self,a,y.self,C),$.current},function(n){return $.transition!==U?w:($.transition=null,r.$broadcast("$stateChangeError",e.self,a,y.self,C,n),t.reject(n))});return U},$.is=function(r){var t=u(r);return g(t)?$.$current===t:e},$.includes=function(r){var t=u(r);return g(t)?g($.$current.includes[t.name]):e},$.href=function(r,t,e){e=P({lossy:!0,inherit:!1,relative:$.$current},e||{});var n=u(r,e.relative);if(!g(n))return null;t=i(c,t||{},$.$current,n);var a=n&&e.lossy?n.navigable:n,s=a&&a.url?a.url.format(f(n.params,t||{})):null;return!o.html5Mode()&&s?"#"+s:s},$.get=function(r){var t=u(r);return t&&t.self?t.self:null},$}function f(r,t){var e={};return y(r,function(r){var n=t[r];e[r]=null!=n?n+"":null}),e}function h(r,t,e){if(!e){e=[];for(var n in r)e.push(n)}for(var a=0;e.length>a;a++){var o=e[a];if(r[o]!=t[o])return!1}return!0}function p(r,t){var e={};return y(r,function(r){e[r]=t[r]}),e}var v,$,m={},d={parent:function(r){if(g(r.parent)&&r.parent)return u(r.parent);var t=/^(.+)\.[^.]+$/.exec(r.name);return t?u(t[1]):v},data:function(r){return r.parent&&r.parent.data&&(r.data=r.self.data=t.extend({},r.parent.data,r.data)),r.data},url:function(r){var t=r.url;if(b(t))return"^"==t.charAt(0)?a.compile(t.substring(1)):(r.parent.navigable||v).url.concat(t);if(a.isMatcher(t)||null==t)return t;throw Error("Invalid url '"+t+"' in state '"+r+"'")},navigable:function(r){return r.url?r:r.parent?r.parent.navigable:null},params:function(r){if(!r.params)return r.url?r.url.parameters():r.parent.params;if(!x(r.params))throw Error("Invalid params in state '"+r+"'");if(r.url)throw Error("Both params and url specicified in state '"+r+"'");return r.params},views:function(r){var t={};return y(g(r.views)?r.views:{"":r},function(e,n){0>n.indexOf("@")&&(n+="@"+r.parent.name),t[n]=e}),t},ownParams:function(r){if(!r.parent)return r.params;var t={};y(r.params,function(r){t[r]=!0}),y(r.parent.params,function(e){if(!t[e])throw Error("Missing required parameter '"+e+"' in state '"+r.name+"'");t[e]=!1});var e=[];return y(t,function(r,t){r&&e.push(t)}),e},path:function(r){return r.parent?r.parent.path.concat(r):[]},includes:function(r){var t=r.parent?P({},r.parent.includes):{};return t[r.name]=!0,t}};v=s({name:"",url:"^",views:null,"abstract":!0}),v.navigable=null,this.state=l,this.$get=c,c.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter"]}function p(){function r(r,t){return{load:function(e,n){var a,o={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return n=P(o,n),n.view&&(a=t.fromConfig(n.view,n.params,n.locals)),a&&n.notify&&r.$broadcast("$viewContentLoading",n),a}}}this.$get=r,r.$inject=["$rootScope","$templateFactory"]}function v(r,e,n,a,o){var i;try{i=a.get("$animator")}catch(u){}var s=!1,l={restrict:"ECA",terminal:!0,transclude:!0,compile:function(a,u,c){return function(a,u,f){function h(t){var i=r.$current&&r.$current.locals[$];if(i!==v){var s=w(d&&t);if(s.remove(u),p&&(p.$destroy(),p=null),!i)return v=null,E.state=null,s.restore(c(a),u);v=i,E.state=i.$$state;var l=e(s.populate(i.$template,u));if(p=a.$new(),i.$$controller){i.$scope=p;var f=n(i.$$controller,i);u.children().data("$ngControllerController",f)}l(p),p.$emit("$viewContentLoaded"),m&&p.$eval(m),o()}}var p,v,$=f[l.name]||f.name||"",m=f.onload||"",d=g(i)&&i(a,f),w=function(r){return{"true":{remove:function(r){d.leave(r.contents(),r)},restore:function(r,t){d.enter(r,t)},populate:function(r,e){var n=t.element("<div></div>").html(r).contents();return d.enter(n,e),n}},"false":{remove:function(r){r.html("")},restore:function(r,t){t.append(r)},populate:function(r,t){return t.html(r),t.contents()}}}[""+r]};u.append(c(a));var b=u.parent().inheritedData("$uiView");0>$.indexOf("@")&&($=$+"@"+(b?b.state.name:""));var E={name:$,state:null};u.data("$uiView",E);var x=function(){if(!s){s=!0;try{h(!0)}catch(r){throw s=!1,r}s=!1}};a.$on("$stateChangeSuccess",x),a.$on("$viewContentLoading",x),h(!1)}}};return l}function $(r){var t=r.match(/^([^(]+?)\s*(\((.*)\))?$/);if(!t||4!==t.length)throw Error("Invalid state ref '"+r+"'");return{state:t[1],paramExpr:t[3]||null}}function m(r){return{restrict:"A",link:function(t,n,a){var o=$(a.uiSref),i=null,u=r.$current,s="FORM"===n[0].nodeName,l=s?"action":"href",c=!0,f=n.parent().inheritedData("$uiView");f&&f.state&&f.state.name&&(u=f.state);var h=function(t){if(t&&(i=t),c){var a=r.href(o.state,i,{relative:u});return a?(n[0][l]=a,e):(c=!1,!1)}};o.paramExpr&&(t.$watch(o.paramExpr,function(r,t){r!==t&&h(r)},!0),i=t.$eval(o.paramExpr)),h(),s||n.bind("click",function(e){1!=e.which||e.ctrlKey||e.metaKey||e.shiftKey||(r.go(o.state,i,{relative:u}),t.$apply(),e.preventDefault())})}}}function d(r,t){function a(r){this.locals=r.locals.globals,this.params=this.locals.$stateParams}function o(){this.locals=null,this.params=null}function i(e,i){if(null!=i.redirectTo){var u,l=i.redirectTo;if(b(l))u=l;else{if(!w(l))throw Error("Invalid 'redirectTo' in when()");u=function(r,t){return l(r,t.path(),t.search())}}t.when(e,u)}else r.state(n(i,{parent:null,name:"route:"+encodeURIComponent(e),url:e,onEnter:a,onExit:o}));return s.push(i),this}function u(r,t,n){function a(r){return""!==r.name?r:e}var o={routes:s,params:n,current:e};return t.$on("$stateChangeStart",function(r,e,n,o){t.$broadcast("$routeChangeStart",a(e),a(o))}),t.$on("$stateChangeSuccess",function(r,e,n,i){o.current=a(e),t.$broadcast("$routeChangeSuccess",a(e),a(i)),j(n,o.params)}),t.$on("$stateChangeError",function(r,e,n,o,i,u){t.$broadcast("$routeChangeError",a(e),a(o),u)}),o}var s=[];a.$inject=["$$state"],this.when=i,this.$get=u,u.$inject=["$state","$rootScope","$routeParams"]}var g=t.isDefined,w=t.isFunction,b=t.isString,E=t.isObject,x=t.isArray,y=t.forEach,P=t.extend,j=t.copy;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),u.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",u),s.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",s),l.prototype.concat=function(r){return new l(this.sourcePath+r+this.sourceSearch)},l.prototype.toString=function(){return this.source},l.prototype.exec=function(r,t){var e=this.regexp.exec(r);if(!e)return null;var n,a=this.params,o=a.length,i=this.segments.length-1,u={};if(i!==e.length-1)throw Error("Unbalanced capture group in route '"+this.source+"'");for(n=0;i>n;n++)u[a[n]]=e[n+1];for(;o>n;n++)u[a[n]]=t[a[n]];return u},l.prototype.parameters=function(){return this.params},l.prototype.format=function(r){var t=this.segments,e=this.params;if(!r)return t.join("");var n,a,o,i=t.length-1,u=e.length,s=t[0];for(n=0;i>n;n++)o=r[e[n]],null!=o&&(s+=encodeURIComponent(o)),s+=t[n+1];for(;u>n;n++)o=r[e[n]],null!=o&&(s+=(a?"&":"?")+e[n]+"="+encodeURIComponent(o),a=!0);return s},t.module("ui.router.util").provider("$urlMatcherFactory",c),f.$inject=["$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",f),h.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],t.module("ui.router.state").value("$stateParams",{}).provider("$state",h),p.$inject=[],t.module("ui.router.state").provider("$view",p),v.$inject=["$state","$compile","$controller","$injector","$anchorScroll"],t.module("ui.router.state").directive("uiView",v),m.$inject=["$state"],t.module("ui.router.state").directive("uiSref",m),d.$inject=["$stateProvider","$urlRouterProvider"],t.module("ui.router.compat").provider("$route",d).directive("ngView",v)})(window,window.angular);