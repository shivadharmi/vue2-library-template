import { defineComponent as v } from "vue";
const h = v({
  name: "ImageComponent",
  props: {
    msg: {
      type: String,
      default: "Hello"
    }
  }
});
function c(t, o, s, d, i, a, _, p) {
  var e = typeof t == "function" ? t.options : t;
  o && (e.render = o, e.staticRenderFns = s, e._compiled = !0), d && (e.functional = !0), a && (e._scopeId = "data-v-" + a);
  var r;
  if (_ ? (r = function(n) {
    n = n || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), i && i.call(this, n), n && n._registeredComponents && n._registeredComponents.add(_);
  }, e._ssrRegister = r) : i && (r = p ? function() {
    i.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), r)
    if (e.functional) {
      e._injectStyles = r;
      var u = e.render;
      e.render = function(m, l) {
        return r.call(l), u(m, l);
      };
    } else {
      var f = e.beforeCreate;
      e.beforeCreate = f ? [].concat(f, r) : [r];
    }
  return {
    exports: t,
    options: e
  };
}
var C = function() {
  var o = this, s = o._self._c;
  return o._self._setupProxy, s("div", [s("h1", [o._v(o._s(o.msg))])]);
}, g = [], R = /* @__PURE__ */ c(
  h,
  C,
  g,
  !1,
  null,
  null,
  null,
  null
);
const T = R.exports;
export {
  T as Image
};
