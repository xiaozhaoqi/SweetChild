(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{b0A1:function(t,e,n){"use strict";var a=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("+L6B");var o=a(n("2/Rp")),u=a(n("lwsE")),i=a(n("W8MJ")),l=a(n("a1gu")),s=a(n("Nsbk")),f=a(n("7W2i")),c=a(n("q1tI")),d=a(n("mOP9")),h=function(t){function e(t){var n;return(0,u.default)(this,e),n=(0,l.default)(this,(0,s.default)(e).call(this,t)),n.state={text:""},n}return(0,f.default)(e,t),(0,i.default)(e,[{key:"handleText",value:function(t){this.setState({text:t.target.value})}},{key:"push",value:function(){fetch("https://api.github.com/repos/xiaozhaoqi/xiaozhaoqi.github.io/contents/test1/"+Math.random()+".md?access_token=15ee6307bfd0967e2f4e13b49c004ff11abfdf86",{method:"PUT",body:JSON.stringify({message:"this is an AutoPush article",content:btoa(this.state.text)})}).then(function(t){return t.json()}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(o.default,{type:"primary",onClick:this.push.bind(this)},"\u53d1\u5e03"),c.default.createElement(d.default,{to:"/"},"\u8fd4\u56de"),c.default.createElement("textarea",{onChange:this.handleText.bind(this)}))}}]),e}(c.default.Component);e.default=h}}]);