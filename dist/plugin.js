(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`#plugin-report-logger .report-logger{--bg-top:#fef4e8;--bg-bottom:#f8fbff;--ink:#1f1f2e;--muted:#5f6b81;--panel:#fff;--line:#d8deeb;--brand:#0e7c7b;--brand-soft:#dbf2f1;--accent:#ef6f6c;--focus:#0a5f9b;color:var(--ink);background:radial-gradient(circle at 10% 10%, #ef6f6c33, transparent 35%), radial-gradient(circle at 90% 0%, #0e7c7b33, transparent 28%), linear-gradient(165deg, var(--bg-top) 0%, var(--bg-bottom) 62%);min-height:100%;padding:16px;font-family:IBM Plex Sans,Noto Sans TC,Trebuchet MS,sans-serif}#plugin-report-logger .report-logger *{box-sizing:border-box}#plugin-report-logger .rl-shell{grid-template-columns:minmax(250px,320px) 1fr;gap:14px;min-height:calc(100vh - 32px);display:grid}#plugin-report-logger .rl-panel{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:14px;box-shadow:0 10px 30px #1a28441f}#plugin-report-logger .rl-sidebar{flex-direction:column;gap:12px;display:flex}#plugin-report-logger .rl-sidebar-head{justify-content:space-between;align-items:center;gap:8px;display:flex}#plugin-report-logger .rl-create-controls{align-items:center;gap:8px;margin-top:-2px;display:flex}#plugin-report-logger .rl-create-select{min-width:148px}#plugin-report-logger .rl-create-action{justify-content:center;align-items:center;width:44px;min-width:44px;height:44px;padding:0;font-size:22px;line-height:1;display:inline-flex}#plugin-report-logger .rl-title{letter-spacing:.2px;margin:0;font-size:20px}#plugin-report-logger .rl-search-wrap{flex-direction:column;gap:6px;display:flex}#plugin-report-logger .rl-doc-nav{flex:1;padding-right:3px;overflow:auto}#plugin-report-logger .rl-section-title{margin:0;font-size:17px}#plugin-report-logger .rl-list{flex-direction:column;gap:8px;display:flex}#plugin-report-logger .rl-item{background:#f8f9fd;border:1px solid #d7dcec;border-radius:10px;padding:10px;transition:transform .18s,border-color .18s,background-color .18s}#plugin-report-logger .rl-item:hover{border-color:#b9c7e5;transform:translateY(-1px)}#plugin-report-logger .rl-item-card{padding:10px 10px 38px;position:relative}#plugin-report-logger .rl-item-main{all:unset;cursor:pointer;width:100%;display:block}#plugin-report-logger .rl-item-delete{color:#8f2f2f;cursor:pointer;background:#fff2f2;border:1px solid #d9b8b8;border-radius:8px;padding:3px 8px;font-size:11px;position:absolute;bottom:8px;right:8px}#plugin-report-logger .rl-item-delete:hover{background:#ffe4e4}#plugin-report-logger .rl-item[data-active=true]{border-color:var(--brand);background:linear-gradient(150deg, var(--brand-soft), #f4fbfa)}#plugin-report-logger .rl-item-title{margin-bottom:4px;font-weight:600}#plugin-report-logger .rl-meta{color:var(--muted);font-size:12px;line-height:1.4}#plugin-report-logger .rl-workspace{flex-direction:column;display:flex}#plugin-report-logger .rl-workspace-head{justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-form-row{flex-wrap:wrap;gap:8px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-template-meta-row{margin-top:4px}#plugin-report-logger .rl-input,#plugin-report-logger .rl-select,#plugin-report-logger .rl-textarea{width:100%;font:inherit;color:inherit;background:#fff;border:1px solid #c6cfe4;border-radius:10px;padding:9px 10px}#plugin-report-logger .rl-input:focus,#plugin-report-logger .rl-select:focus,#plugin-report-logger .rl-textarea:focus,#plugin-report-logger .rl-button:focus-visible{outline:2px solid var(--focus);outline-offset:2px}#plugin-report-logger .rl-textarea{resize:vertical;min-height:320px;font-family:Cascadia Code,Consolas,monospace;font-size:13px;line-height:1.6}#plugin-report-logger .rl-preview{white-space:pre-wrap;word-break:break-word;background:#fbfcff;border:1px solid #dde3ef;border-radius:10px;min-height:320px;padding:12px;font-size:14px;line-height:1.7}#plugin-report-logger .rl-form-sheet{flex-direction:column;gap:16px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-form-section-title{color:#0e7c7b;border-bottom:2px solid var(--brand-soft);margin-top:12px;margin-bottom:8px;padding:8px 0;font-size:15px;font-weight:700}#plugin-report-logger .rl-form-item{background:#fafbfd;border:1px solid #d5dceb;border-radius:12px;overflow:hidden}#plugin-report-logger .rl-form-item-head{background:linear-gradient(90deg,#f0f4fb 0%,#f8fafe 100%);border-bottom:1px solid #e3e8f3;flex-wrap:wrap;align-items:center;gap:8px;padding:11px 12px;display:flex}#plugin-report-logger .rl-form-item-index{color:#0e7c7b;min-width:28px;font-size:14px;font-weight:700}#plugin-report-logger .rl-form-item-label{color:#27395b;flex:1;font-size:15px;font-weight:600}#plugin-report-logger .rl-image-button{min-width:74px;padding-inline:10px}#plugin-report-logger .rl-hidden-file-input{display:none}#plugin-report-logger .rl-template-draft-head{align-items:center}#plugin-report-logger .rl-template-kind{flex:0 0 88px;width:88px}#plugin-report-logger .rl-template-title-input{flex:1}#plugin-report-logger .rl-form-item-input{resize:vertical;width:100%;min-height:100px;font:inherit;color:inherit;background:#fff;border:0;border-radius:0;padding:12px;line-height:1.6;display:block}#plugin-report-logger .rl-template-value-input{min-height:92px}#plugin-report-logger .rl-image-preview-list{background:#fcfdff;border-top:1px dashed #d8dfec;flex-wrap:wrap;gap:8px;padding:10px 12px 12px;display:flex}#plugin-report-logger .rl-image-preview-item{margin:0}#plugin-report-logger .rl-image-preview-trigger{cursor:pointer;background:0 0;border:0;padding:0}#plugin-report-logger .rl-image-preview-thumb{object-fit:cover;background:#eef2fa;border:1px solid #d5dceb;border-radius:8px;width:86px;height:86px}#plugin-report-logger .rl-image-lightbox{z-index:1200;background:#0f1422b8;justify-content:center;align-items:center;padding:20px;display:flex;position:fixed;inset:0}#plugin-report-logger .rl-image-lightbox-panel{background:#0f1728;border:1px solid #d6dff24d;border-radius:12px;max-width:min(92vw,1100px);max-height:90vh;padding:14px;position:relative}#plugin-report-logger .rl-image-lightbox-close{color:#fff;cursor:pointer;background:#142038e6;border:1px solid #d1dcf580;border-radius:999px;width:36px;height:36px;position:absolute;top:8px;right:8px}#plugin-report-logger .rl-image-lightbox-img{border-radius:8px;max-width:min(88vw,1040px);max-height:calc(90vh - 28px);display:block}#plugin-report-logger .rl-template-kind-note{color:var(--muted);background:#fbfcff;border-top:1px dashed #e3e8f3;padding:12px;font-size:12px}#plugin-report-logger .rl-form-item-input:focus{outline:2px solid var(--focus);outline-offset:-2px;background:#fafbfd}#plugin-report-logger .rl-button{border:1px solid var(--brand);background:linear-gradient(140deg, #169997, var(--brand));color:#fff;cursor:pointer;font:inherit;border-radius:9px;padding:7px 12px;transition:filter .16s}#plugin-report-logger .rl-button:hover{filter:brightness(1.04)}#plugin-report-logger .rl-button.secondary{color:#1d2a44;background:#f2f5fb;border-color:#c4cbdd}#plugin-report-logger .rl-button.secondary[data-active=true]{border-color:var(--accent);color:#773835;background:#ffefee}#plugin-report-logger .rl-warning{color:#704500;background:#fff7e6;border:1px solid #e4bb78;border-radius:10px;margin-bottom:10px;padding:9px}#plugin-report-logger .rl-empty-state{color:#465267;text-align:center;background:#fbfcff;border:1px dashed #c7cede;border-radius:10px;padding:16px}#plugin-report-logger .rl-footer{color:var(--muted);flex-wrap:wrap;gap:10px;margin-top:10px;font-size:12px;display:flex}@media (width<=980px){#plugin-report-logger .rl-shell{grid-template-columns:1fr;min-height:auto}#plugin-report-logger .rl-workspace-head{flex-direction:column}#plugin-report-logger .rl-template-grid-head,#plugin-report-logger .rl-template-grid-row{grid-template-columns:1fr}#plugin-report-logger .rl-template-grid-title{border-bottom:1px solid #e3e8f3;border-right:0}}
/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();import e, { useEffect as t, useMemo as n, useRef as r, useState as i } from "react";
import { createRoot as a } from "react-dom/client";
Object.freeze({ status: "aborted" });
function o(e, t, n) {
	function r(n, r) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: r,
				constr: o,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, r);
		let i = o.prototype, a = Object.keys(i);
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	let i = n?.Parent ?? Object;
	class a extends i {}
	Object.defineProperty(a, "name", { value: e });
	function o(e) {
		var t;
		let i = n?.Parent ? new a() : this;
		r(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (let e of i._zod.deferred) e();
		return i;
	}
	return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (t) => n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
var s = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, c = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
}, l = {};
function u(e) {
	return e && Object.assign(l, e), l;
}
//#endregion
//#region node_modules/zod/v4/core/util.js
function d(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function f(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function p(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
		throw Error("cached value already set");
	} };
}
function ee(e) {
	return e == null;
}
function te(e) {
	let t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function m(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = t.toString(), i = (r.split(".")[1] || "").length;
	if (i === 0 && /\d?e-\d?/.test(r)) {
		let e = r.match(/\d?e-(\d?)/);
		e?.[1] && (i = Number.parseInt(e[1]));
	}
	let a = n > i ? n : i;
	return Number.parseInt(e.toFixed(a).replace(".", "")) % Number.parseInt(t.toFixed(a).replace(".", "")) / 10 ** a;
}
var h = Symbol("evaluating");
function g(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== h) return r === void 0 && (r = h, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function _(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function v(...e) {
	let t = {};
	for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
	return Object.defineProperties({}, t);
}
function ne(e) {
	return JSON.stringify(e);
}
function re(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var ie = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function y(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var ae = p(() => {
	if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function oe(e) {
	if (y(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(y(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function b(e) {
	return oe(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
var x = new Set([
	"string",
	"number",
	"symbol"
]);
function S(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function C(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function w(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function se(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
var T = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function ce(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return C(e, v(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return _(this, "shape", e), e;
		},
		checks: []
	}));
}
function le(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return C(e, v(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return _(this, "shape", r), r;
		},
		checks: []
	}));
}
function ue(e, t) {
	if (!oe(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return C(e, v(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return _(this, "shape", n), n;
	} }));
}
function de(e, t) {
	if (!oe(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return C(e, v(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return _(this, "shape", n), n;
	} }));
}
function fe(e, t) {
	return C(e, v(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return _(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: []
	}));
}
function pe(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return C(t, v(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t in n) {
				if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t in r) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return _(this, "shape", i), i;
		},
		checks: []
	}));
}
function E(e, t, n) {
	return C(t, v(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t in n) {
			if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t in r) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return _(this, "shape", i), i;
	} }));
}
function D(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function O(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function k(e) {
	return typeof e == "string" ? e : e?.message;
}
function A(e, t, n) {
	let r = {
		...e,
		path: e.path ?? []
	};
	return e.message || (r.message = k(e.inst?._zod.def?.error?.(e)) ?? k(t?.error?.(e)) ?? k(n.customError?.(e)) ?? k(n.localeError?.(e)) ?? "Invalid input"), delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function me(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function j(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
//#endregion
//#region node_modules/zod/v4/core/errors.js
var he = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, f, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, M = o("$ZodError", he), ge = o("$ZodError", he, { Parent: Error });
function _e(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function ve(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e) => {
		for (let i of e.issues) if (i.code === "invalid_union" && i.errors.length) i.errors.map((e) => r({ issues: e }));
		else if (i.code === "invalid_key") r({ issues: i.issues });
		else if (i.code === "invalid_element") r({ issues: i.issues });
		else if (i.path.length === 0) n._errors.push(t(i));
		else {
			let e = n, r = 0;
			for (; r < i.path.length;) {
				let n = i.path[r];
				r === i.path.length - 1 ? (e[n] = e[n] || { _errors: [] }, e[n]._errors.push(t(i))) : e[n] = e[n] || { _errors: [] }, e = e[n], r++;
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region node_modules/zod/v4/core/parse.js
var ye = (e) => (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !1 }) : { async: !1 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise) throw new s();
	if (o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => A(e, a, u())));
		throw ie(t, i?.callee), t;
	}
	return o.value;
}, be = (e) => async (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !0 }) : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => A(e, a, u())));
		throw ie(t, i?.callee), t;
	}
	return o.value;
}, N = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new s();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? M)(a.issues.map((e) => A(e, i, u())))
	} : {
		success: !0,
		data: a.value
	};
}, xe = /* @__PURE__ */ N(ge), Se = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { async: !0 }) : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => A(e, i, u())))
	} : {
		success: !0,
		data: a.value
	};
}, Ce = /* @__PURE__ */ Se(ge), P = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return ye(e)(t, n, i);
}, we = (e) => (t, n, r) => ye(e)(t, n, r), Te = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return be(e)(t, n, i);
}, Ee = (e) => async (t, n, r) => be(e)(t, n, r), De = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return N(e)(t, n, i);
}, Oe = (e) => (t, n, r) => N(e)(t, n, r), ke = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return Se(e)(t, n, i);
}, Ae = (e) => async (t, n, r) => Se(e)(t, n, r), je = /^[cC][^\s-]{8,}$/, Me = /^[0-9a-z]+$/, Ne = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Pe = /^[0-9a-vA-V]{20}$/, Fe = /^[A-Za-z0-9]{27}$/, Ie = /^[a-zA-Z0-9_-]{21}$/, Le = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Re = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ze = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Be = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ve = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function He() {
	return new RegExp(Ve, "u");
}
var Ue = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, We = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ge = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ke = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, qe = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Je = /^[A-Za-z0-9_-]*$/, Ye = /^\+[1-9]\d{6,14}$/, Xe = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ze = /* @__PURE__ */ RegExp(`^${Xe}$`);
function Qe(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function $e(e) {
	return RegExp(`^${Qe(e)}$`);
}
function et(e) {
	let t = Qe({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${Xe}T(?:${r})$`);
}
var tt = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, nt = /^-?\d+$/, rt = /^-?\d+(?:\.\d+)?$/, it = /^(?:true|false)$/i, at = /^[^A-Z]*$/, ot = /^[^a-z]*$/, F = /* @__PURE__ */ o("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), st = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, ct = /* @__PURE__ */ o("$ZodCheckLessThan", (e, t) => {
	F.init(e, t);
	let n = st[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
		t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), lt = /* @__PURE__ */ o("$ZodCheckGreaterThan", (e, t) => {
	F.init(e, t);
	let n = st[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
		t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), ut = /* @__PURE__ */ o("$ZodCheckMultipleOf", (e, t) => {
	F.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : m(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), dt = /* @__PURE__ */ o("$ZodCheckNumberFormat", (e, t) => {
	F.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = T[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = nt);
	}), e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), ft = /* @__PURE__ */ o("$ZodCheckMaxLength", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !ee(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = me(r);
		n.issues.push({
			origin: i,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), pt = /* @__PURE__ */ o("$ZodCheckMinLength", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !ee(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = me(r);
		n.issues.push({
			origin: i,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), mt = /* @__PURE__ */ o("$ZodCheckLengthEquals", (e, t) => {
	var n;
	F.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !ee(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = me(r), o = i > t.length;
		n.issues.push({
			origin: a,
			...o ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ht = /* @__PURE__ */ o("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	F.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), gt = /* @__PURE__ */ o("$ZodCheckRegex", (e, t) => {
	ht.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), _t = /* @__PURE__ */ o("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= at, ht.init(e, t);
}), vt = /* @__PURE__ */ o("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= ot, ht.init(e, t);
}), yt = /* @__PURE__ */ o("$ZodCheckIncludes", (e, t) => {
	F.init(e, t);
	let n = S(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
	t.pattern = r, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), bt = /* @__PURE__ */ o("$ZodCheckStartsWith", (e, t) => {
	F.init(e, t);
	let n = RegExp(`^${S(t.prefix)}.*`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), xt = /* @__PURE__ */ o("$ZodCheckEndsWith", (e, t) => {
	F.init(e, t);
	let n = RegExp(`.*${S(t.suffix)}$`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), St = /* @__PURE__ */ o("$ZodCheckOverwrite", (e, t) => {
	F.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), Ct = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), --this.indent;
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.args, n = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
		return new e(...t, n.join("\n"));
	}
}, wt = {
	major: 4,
	minor: 3,
	patch: 6
}, I = /* @__PURE__ */ o("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = wt;
	let r = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && r.unshift(e);
	for (let t of r) for (let n of t._zod.onattach) n(e);
	if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (e, t, n) => {
			let r = D(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (!a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, o = a._zod.check(e);
				if (o instanceof Promise && n?.async === !1) throw new s();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, e.issues.length !== t && (r ||= D(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= D(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (D(n)) return n.aborted = !0, n;
			let o = t(i, r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new s();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (i, a) => {
			if (a.skipChecks) return e._zod.parse(i, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: i.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
			}
			let o = e._zod.parse(i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new s();
				return o.then((e) => t(e, r, a));
			}
			return t(o, r, a);
		};
	}
	g(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = xe(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return Ce(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), Tt = /* @__PURE__ */ o("$ZodString", (e, t) => {
	I.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? tt(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), L = /* @__PURE__ */ o("$ZodStringFormat", (e, t) => {
	ht.init(e, t), Tt.init(e, t);
}), Et = /* @__PURE__ */ o("$ZodGUID", (e, t) => {
	t.pattern ??= Re, L.init(e, t);
}), Dt = /* @__PURE__ */ o("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= ze(e);
	} else t.pattern ??= ze();
	L.init(e, t);
}), Ot = /* @__PURE__ */ o("$ZodEmail", (e, t) => {
	t.pattern ??= Be, L.init(e, t);
}), kt = /* @__PURE__ */ o("$ZodURL", (e, t) => {
	L.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = new URL(r);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.normalize ? n.value = i.href : n.value = r;
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), At = /* @__PURE__ */ o("$ZodEmoji", (e, t) => {
	t.pattern ??= He(), L.init(e, t);
}), jt = /* @__PURE__ */ o("$ZodNanoID", (e, t) => {
	t.pattern ??= Ie, L.init(e, t);
}), Mt = /* @__PURE__ */ o("$ZodCUID", (e, t) => {
	t.pattern ??= je, L.init(e, t);
}), Nt = /* @__PURE__ */ o("$ZodCUID2", (e, t) => {
	t.pattern ??= Me, L.init(e, t);
}), Pt = /* @__PURE__ */ o("$ZodULID", (e, t) => {
	t.pattern ??= Ne, L.init(e, t);
}), Ft = /* @__PURE__ */ o("$ZodXID", (e, t) => {
	t.pattern ??= Pe, L.init(e, t);
}), It = /* @__PURE__ */ o("$ZodKSUID", (e, t) => {
	t.pattern ??= Fe, L.init(e, t);
}), Lt = /* @__PURE__ */ o("$ZodISODateTime", (e, t) => {
	t.pattern ??= et(t), L.init(e, t);
}), Rt = /* @__PURE__ */ o("$ZodISODate", (e, t) => {
	t.pattern ??= Ze, L.init(e, t);
}), zt = /* @__PURE__ */ o("$ZodISOTime", (e, t) => {
	t.pattern ??= $e(t), L.init(e, t);
}), Bt = /* @__PURE__ */ o("$ZodISODuration", (e, t) => {
	t.pattern ??= Le, L.init(e, t);
}), Vt = /* @__PURE__ */ o("$ZodIPv4", (e, t) => {
	t.pattern ??= Ue, L.init(e, t), e._zod.bag.format = "ipv4";
}), Ht = /* @__PURE__ */ o("$ZodIPv6", (e, t) => {
	t.pattern ??= We, L.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		try {
			new URL(`http://[${n.value}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Ut = /* @__PURE__ */ o("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Ge, L.init(e, t);
}), Wt = /* @__PURE__ */ o("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Ke, L.init(e, t), e._zod.check = (n) => {
		let r = n.value.split("/");
		try {
			if (r.length !== 2) throw Error();
			let [e, t] = r;
			if (!t) throw Error();
			let n = Number(t);
			if (`${n}` !== t || n < 0 || n > 128) throw Error();
			new URL(`http://[${e}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
});
function Gt(e) {
	if (e === "") return !0;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Kt = /* @__PURE__ */ o("$ZodBase64", (e, t) => {
	t.pattern ??= qe, L.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Gt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function qt(e) {
	if (!Je.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Gt(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Jt = /* @__PURE__ */ o("$ZodBase64URL", (e, t) => {
	t.pattern ??= Je, L.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		qt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Yt = /* @__PURE__ */ o("$ZodE164", (e, t) => {
	t.pattern ??= Ye, L.init(e, t);
});
function Xt(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var Zt = /* @__PURE__ */ o("$ZodJWT", (e, t) => {
	L.init(e, t), e._zod.check = (n) => {
		Xt(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Qt = /* @__PURE__ */ o("$ZodNumber", (e, t) => {
	I.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? rt, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), $t = /* @__PURE__ */ o("$ZodNumberFormat", (e, t) => {
	dt.init(e, t), Qt.init(e, t);
}), en = /* @__PURE__ */ o("$ZodBoolean", (e, t) => {
	I.init(e, t), e._zod.pattern = it, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), tn = /* @__PURE__ */ o("$ZodUnknown", (e, t) => {
	I.init(e, t), e._zod.parse = (e) => e;
}), nn = /* @__PURE__ */ o("$ZodNever", (e, t) => {
	I.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function rn(e, t, n) {
	e.issues.length && t.issues.push(...O(n, e.issues)), t.value[n] = e.value;
}
var an = /* @__PURE__ */ o("$ZodArray", (e, t) => {
	I.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!Array.isArray(i)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		n.value = Array(i.length);
		let a = [];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = t.element._zod.run({
				value: o,
				issues: []
			}, r);
			s instanceof Promise ? a.push(s.then((t) => rn(t, n, e))) : rn(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function on(e, t, n, r, i) {
	if (e.issues.length) {
		if (i && !(n in r)) return;
		t.issues.push(...O(n, e.issues));
	}
	e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function sn(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = se(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function cn(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optout === "optional";
	for (let i in t) {
		if (s.has(i)) continue;
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => on(e, n, i, t, u))) : on(a, n, i, t, u);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var ln = /* @__PURE__ */ o("$ZodObject", (e, t) => {
	if (I.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = p(() => sn(t));
	g(e._zod, "propValues", () => {
		let e = t.shape, n = {};
		for (let t in e) {
			let r = e[t]._zod;
			if (r.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (let e of r.values) n[t].add(e);
			}
		}
		return n;
	});
	let r = y, i = t.catchall, a;
	e._zod.parse = (t, o) => {
		a ??= n.value;
		let s = t.value;
		if (!r(s)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: s,
			inst: e
		}), t;
		t.value = {};
		let c = [], l = a.shape;
		for (let e of a.keys) {
			let n = l[e], r = n._zod.optout === "optional", i = n._zod.run({
				value: s[e],
				issues: []
			}, o);
			i instanceof Promise ? c.push(i.then((n) => on(n, t, e, s, r))) : on(i, t, e, s, r);
		}
		return i ? cn(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), un = /* @__PURE__ */ o("$ZodObjectJIT", (e, t) => {
	ln.init(e, t);
	let n = e._zod.parse, r = p(() => sn(t)), i = (e) => {
		let t = new Ct([
			"shape",
			"payload",
			"ctx"
		]), n = r.value, i = (e) => {
			let t = ne(e);
			return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
		};
		t.write("const input = payload.value;");
		let a = Object.create(null), o = 0;
		for (let e of n.keys) a[e] = `key_${o++}`;
		t.write("const newResult = {};");
		for (let r of n.keys) {
			let n = a[r], o = ne(r), s = e[r]?._zod?.optout === "optional";
			t.write(`const ${n} = ${i(r)};`), s ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `);
		}
		t.write("payload.value = newResult;"), t.write("return payload;");
		let s = t.compile();
		return (t, n) => s(e, t, n);
	}, a, o = y, s = !l.jitless, c = s && ae.value, u = t.catchall, d;
	e._zod.parse = (l, f) => {
		d ??= r.value;
		let p = l.value;
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), l = a(l, f), u ? cn([], p, l, f, d, e) : l) : n(l, f) : (l.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), l);
	};
});
function dn(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !D(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => A(e, r, u())))
	}), t);
}
var fn = /* @__PURE__ */ o("$ZodUnion", (e, t) => {
	I.init(e, t), g(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), g(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), g(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), g(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => te(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1, r = t.options[0]._zod.run;
	e._zod.parse = (i, a) => {
		if (n) return r(i, a);
		let o = !1, s = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: i.value,
				issues: []
			}, a);
			if (t instanceof Promise) s.push(t), o = !0;
			else {
				if (t.issues.length === 0) return t;
				s.push(t);
			}
		}
		return o ? Promise.all(s).then((t) => dn(t, i, e, a)) : dn(s, i, e, a);
	};
}), pn = /* @__PURE__ */ o("$ZodIntersection", (e, t) => {
	I.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => hn(e, t, n)) : hn(e, i, a);
	};
});
function mn(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (oe(e) && oe(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = mn(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = mn(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function hn(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i;
	for (let n of t.issues) if (n.code === "unrecognized_keys") {
		i ??= n;
		for (let e of n.keys) r.has(e) || r.set(e, {}), r.get(e).l = !0;
	} else e.issues.push(n);
	for (let t of n.issues) if (t.code === "unrecognized_keys") for (let e of t.keys) r.has(e) || r.set(e, {}), r.get(e).r = !0;
	else e.issues.push(t);
	let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (a.length && i && e.issues.push({
		...i,
		keys: a
	}), D(e)) return e;
	let o = mn(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var gn = /* @__PURE__ */ o("$ZodEnum", (e, t) => {
	I.init(e, t);
	let n = d(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => x.has(typeof e)).map((e) => typeof e == "string" ? S(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), _n = /* @__PURE__ */ o("$ZodLiteral", (e, t) => {
	if (I.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(`^(${t.values.map((e) => typeof e == "string" ? S(e) : e ? S(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), vn = /* @__PURE__ */ o("$ZodTransform", (e, t) => {
	I.init(e, t), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new c(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new s();
		return n.value = i, n;
	};
});
function yn(e, t) {
	return e.issues.length && t === void 0 ? {
		issues: [],
		value: void 0
	} : e;
}
var bn = /* @__PURE__ */ o("$ZodOptional", (e, t) => {
	I.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", g(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${te(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((t) => yn(t, e.value)) : yn(r, e.value);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), xn = /* @__PURE__ */ o("$ZodExactOptional", (e, t) => {
	bn.init(e, t), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Sn = /* @__PURE__ */ o("$ZodNullable", (e, t) => {
	I.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${te(e.source)}|null)$`) : void 0;
	}), g(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Cn = /* @__PURE__ */ o("$ZodDefault", (e, t) => {
	I.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => wn(e, t)) : wn(r, t);
	};
});
function wn(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Tn = /* @__PURE__ */ o("$ZodPrefault", (e, t) => {
	I.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), En = /* @__PURE__ */ o("$ZodNonOptional", (e, t) => {
	I.init(e, t), g(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Dn(t, e)) : Dn(i, e);
	};
});
function Dn(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var On = /* @__PURE__ */ o("$ZodCatch", (e, t) => {
	I.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => A(e, n, u())) },
			input: e.value
		}), e.issues = []), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => A(e, n, u())) },
			input: e.value
		}), e.issues = []), e);
	};
}), kn = /* @__PURE__ */ o("$ZodPipe", (e, t) => {
	I.init(e, t), g(e._zod, "values", () => t.in._zod.values), g(e._zod, "optin", () => t.in._zod.optin), g(e._zod, "optout", () => t.out._zod.optout), g(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => An(e, t.in, n)) : An(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => An(e, t.out, n)) : An(r, t.out, n);
	};
});
function An(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var jn = /* @__PURE__ */ o("$ZodReadonly", (e, t) => {
	I.init(e, t), g(e._zod, "propValues", () => t.innerType._zod.propValues), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "optin", () => t.innerType?._zod?.optin), g(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Mn) : Mn(r);
	};
});
function Mn(e) {
	return e.value = Object.freeze(e.value), e;
}
var Nn = /* @__PURE__ */ o("$ZodCustom", (e, t) => {
	F.init(e, t), I.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Pn(t, n, r, e));
		Pn(i, n, r, e);
	};
});
function Pn(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(j(e));
	}
}
//#endregion
//#region node_modules/zod/v4/core/registries.js
var Fn, In = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function Ln() {
	return new In();
}
(Fn = globalThis).__zod_globalRegistry ?? (Fn.__zod_globalRegistry = Ln());
var Rn = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function zn(e, t) {
	return new e({
		type: "string",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Bn(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vn(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Hn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Un(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Wn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Gn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Kn(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function qn(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Jn(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Yn(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Xn(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Zn(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Qn(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function $n(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function er(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function tr(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function nr(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function rr(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ir(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ar(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function or(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function sr(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function cr(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function lr(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ur(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function dr(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fr(e, t) {
	return new e({
		type: "number",
		checks: [],
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function pr(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function mr(e, t) {
	return new e({
		type: "boolean",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function hr(e) {
	return new e({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function gr(e, t) {
	return new e({
		type: "never",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _r(e, t) {
	return new ct({
		check: "less_than",
		...w(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function vr(e, t) {
	return new ct({
		check: "less_than",
		...w(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function yr(e, t) {
	return new lt({
		check: "greater_than",
		...w(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function br(e, t) {
	return new lt({
		check: "greater_than",
		...w(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function xr(e, t) {
	return new ut({
		check: "multiple_of",
		...w(t),
		value: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Sr(e, t) {
	return new ft({
		check: "max_length",
		...w(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Cr(e, t) {
	return new pt({
		check: "min_length",
		...w(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function wr(e, t) {
	return new mt({
		check: "length_equals",
		...w(t),
		length: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Tr(e, t) {
	return new gt({
		check: "string_format",
		format: "regex",
		...w(t),
		pattern: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Er(e) {
	return new _t({
		check: "string_format",
		format: "lowercase",
		...w(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Dr(e) {
	return new vt({
		check: "string_format",
		format: "uppercase",
		...w(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Or(e, t) {
	return new yt({
		check: "string_format",
		format: "includes",
		...w(t),
		includes: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function kr(e, t) {
	return new bt({
		check: "string_format",
		format: "starts_with",
		...w(t),
		prefix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ar(e, t) {
	return new xt({
		check: "string_format",
		format: "ends_with",
		...w(t),
		suffix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function jr(e) {
	return new St({
		check: "overwrite",
		tx: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Mr(e) {
	return /* @__PURE__ */ jr((t) => t.normalize(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Nr() {
	return /* @__PURE__ */ jr((e) => e.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function Pr() {
	return /* @__PURE__ */ jr((e) => e.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Fr() {
	return /* @__PURE__ */ jr((e) => e.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Ir() {
	return /* @__PURE__ */ jr((e) => re(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Lr(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...w(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Rr(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...w(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function zr(e) {
	let t = /* @__PURE__ */ Br((n) => (n.addIssue = (e) => {
		if (typeof e == "string") n.issues.push(j(e, n.value, t._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= n.value, r.inst ??= t, r.continue ??= !t._zod.def.abort, n.issues.push(j(r));
		}
	}, e(n.value, n)));
	return t;
}
/* @__NO_SIDE_EFFECTS__ */
function Br(e, t) {
	let n = new F({
		check: "custom",
		...w(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
function Vr(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Rn,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function R(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o);
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, R(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && z(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && o.schema._prefault && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Hr(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${a}`
			};
		}
		if (t[1] === n) return { ref: "#" };
		let i = `#/${r}/`, a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + a
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
}
function Ur(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Object.assign(i, s), Object.assign(i, a), t._zod.parent === o) for (let e in i) e === "$ref" || e === "allOf" || e in a || delete i[e];
			if (s.$ref && n.def) for (let e in i) e === "$ref" || e === "allOf" || e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e === "$ref" || e === "allOf" || e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	for (let t of [...e.seen.entries()].reverse()) r(t[0]);
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Object.assign(i, n.def ?? n.schema);
	let a = e.external?.defs ?? {};
	for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (a[e.defId] = e.def);
	}
	e.external || Object.keys(a).length > 0 && (e.target === "draft-2020-12" ? i.$defs = a : i.definitions = a);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Gr(t, "input", e.processors),
					output: Gr(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function z(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return z(r.element, n);
	if (r.type === "set") return z(r.valueType, n);
	if (r.type === "lazy") return z(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return z(r.innerType, n);
	if (r.type === "intersection") return z(r.left, n) || z(r.right, n);
	if (r.type === "record" || r.type === "map") return z(r.keyType, n) || z(r.valueType, n);
	if (r.type === "pipe") return z(r.in, n) || z(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (z(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (z(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (z(e, n)) return !0;
		return !!(r.rest && z(r.rest, n));
	}
	return !1;
}
var Wr = (e, t = {}) => (n) => {
	let r = Vr({
		...n,
		processors: t
	});
	return R(e, r), Hr(r, e), Ur(r, e);
}, Gr = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Vr({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return R(e, o), Hr(o, e), Ur(o, e);
}, Kr = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, qr = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Kr[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Jr = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	typeof s == "string" && s.includes("int") ? i.type = "integer" : i.type = "number", typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u), typeof a == "number" && (i.minimum = a, typeof u == "number" && t.target !== "draft-04" && (u >= a ? delete i.minimum : delete i.exclusiveMinimum)), typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l), typeof o == "number" && (i.maximum = o, typeof l == "number" && t.target !== "draft-04" && (l <= o ? delete i.maximum : delete i.exclusiveMaximum)), typeof c == "number" && (i.multipleOf = c);
}, Yr = (e, t, n, r) => {
	n.type = "boolean";
}, Xr = (e, t, n, r) => {
	n.not = {};
}, Zr = (e, t, n, r) => {
	let i = e._zod.def, a = d(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Qr = (e, t, n, r) => {
	let i = e._zod.def, a = [];
	for (let e of i.values) if (e === void 0) {
		if (t.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof e == "bigint") {
		if (t.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
		a.push(Number(e));
	} else a.push(e);
	if (a.length !== 0) if (a.length === 1) {
		let e = a[0];
		n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
	} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
}, $r = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, ei = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, ti = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = R(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, ni = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = R(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	});
	let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
		let n = a.shape[e]._zod;
		return t.io === "input" ? n.optin === void 0 : n.optout === void 0;
	}));
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = R(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, ri = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => R(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, ii = (e, t, n, r) => {
	let i = e._zod.def, a = R(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = R(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, ai = (e, t, n, r) => {
	let i = e._zod.def, a = R(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, oi = (e, t, n, r) => {
	let i = e._zod.def;
	R(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, si = (e, t, n, r) => {
	let i = e._zod.def;
	R(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, ci = (e, t, n, r) => {
	let i = e._zod.def;
	R(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, li = (e, t, n, r) => {
	let i = e._zod.def;
	R(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, ui = (e, t, n, r) => {
	let i = e._zod.def, a = t.io === "input" ? i.in._zod.def.type === "transform" ? i.out : i.in : i.out;
	R(a, t, r);
	let o = t.seen.get(e);
	o.ref = a;
}, di = (e, t, n, r) => {
	let i = e._zod.def;
	R(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, fi = (e, t, n, r) => {
	let i = e._zod.def;
	R(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, pi = /* @__PURE__ */ o("ZodISODateTime", (e, t) => {
	Lt.init(e, t), U.init(e, t);
});
function mi(e) {
	return /* @__PURE__ */ cr(pi, e);
}
var hi = /* @__PURE__ */ o("ZodISODate", (e, t) => {
	Rt.init(e, t), U.init(e, t);
});
function gi(e) {
	return /* @__PURE__ */ lr(hi, e);
}
var _i = /* @__PURE__ */ o("ZodISOTime", (e, t) => {
	zt.init(e, t), U.init(e, t);
});
function vi(e) {
	return /* @__PURE__ */ ur(_i, e);
}
var yi = /* @__PURE__ */ o("ZodISODuration", (e, t) => {
	Bt.init(e, t), U.init(e, t);
});
function bi(e) {
	return /* @__PURE__ */ dr(yi, e);
}
//#endregion
//#region node_modules/zod/v4/classic/errors.js
var xi = (e, t) => {
	M.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => ve(e, t) },
		flatten: { value: (t) => _e(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, f, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, f, 2);
		} },
		isEmpty: { get() {
			return e.issues.length === 0;
		} }
	});
};
o("ZodError", xi);
var B = o("ZodError", xi, { Parent: Error }), Si = /* @__PURE__ */ ye(B), Ci = /* @__PURE__ */ be(B), wi = /* @__PURE__ */ N(B), Ti = /* @__PURE__ */ Se(B), Ei = /* @__PURE__ */ P(B), Di = /* @__PURE__ */ we(B), Oi = /* @__PURE__ */ Te(B), ki = /* @__PURE__ */ Ee(B), Ai = /* @__PURE__ */ De(B), ji = /* @__PURE__ */ Oe(B), Mi = /* @__PURE__ */ ke(B), Ni = /* @__PURE__ */ Ae(B), V = /* @__PURE__ */ o("ZodType", (e, t) => (I.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Gr(e, "input"),
	output: Gr(e, "output")
} }), e.toJSONSchema = Wr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(v(t, { checks: [...t.checks ?? [], ...n.map((e) => typeof e == "function" ? { _zod: {
	check: e,
	def: { check: "custom" },
	onattach: []
} } : e)] }), { parent: !0 }), e.with = e.check, e.clone = (t, n) => C(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.parse = (t, n) => Si(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => wi(e, t, n), e.parseAsync = async (t, n) => Ci(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Ti(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Ei(e, t, n), e.decode = (t, n) => Di(e, t, n), e.encodeAsync = async (t, n) => Oi(e, t, n), e.decodeAsync = async (t, n) => ki(e, t, n), e.safeEncode = (t, n) => Ai(e, t, n), e.safeDecode = (t, n) => ji(e, t, n), e.safeEncodeAsync = async (t, n) => Mi(e, t, n), e.safeDecodeAsync = async (t, n) => Ni(e, t, n), e.refine = (t, n) => e.check(Va(t, n)), e.superRefine = (t) => e.check(Ha(t)), e.overwrite = (t) => e.check(/* @__PURE__ */ jr(t)), e.optional = () => Ca(e), e.exactOptional = () => Ta(e), e.nullable = () => Da(e), e.nullish = () => Ca(Da(e)), e.nonoptional = (t) => Na(e, t), e.array = () => G(e), e.or = (t) => pa([e, t]), e.and = (t) => ha(e, t), e.transform = (t) => La(e, xa(t)), e.default = (t) => ka(e, t), e.prefault = (t) => ja(e, t), e.catch = (t) => Fa(e, t), e.pipe = (t) => La(e, t), e.readonly = () => za(e), e.describe = (t) => {
	let n = e.clone();
	return Rn.add(n, { description: t }), n;
}, Object.defineProperty(e, "description", {
	get() {
		return Rn.get(e)?.description;
	},
	configurable: !0
}), e.meta = (...t) => {
	if (t.length === 0) return Rn.get(e);
	let n = e.clone();
	return Rn.add(n, t[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (t) => t(e), e)), Pi = /* @__PURE__ */ o("_ZodString", (e, t) => {
	Tt.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => qr(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...t) => e.check(/* @__PURE__ */ Tr(...t)), e.includes = (...t) => e.check(/* @__PURE__ */ Or(...t)), e.startsWith = (...t) => e.check(/* @__PURE__ */ kr(...t)), e.endsWith = (...t) => e.check(/* @__PURE__ */ Ar(...t)), e.min = (...t) => e.check(/* @__PURE__ */ Cr(...t)), e.max = (...t) => e.check(/* @__PURE__ */ Sr(...t)), e.length = (...t) => e.check(/* @__PURE__ */ wr(...t)), e.nonempty = (...t) => e.check(/* @__PURE__ */ Cr(1, ...t)), e.lowercase = (t) => e.check(/* @__PURE__ */ Er(t)), e.uppercase = (t) => e.check(/* @__PURE__ */ Dr(t)), e.trim = () => e.check(/* @__PURE__ */ Nr()), e.normalize = (...t) => e.check(/* @__PURE__ */ Mr(...t)), e.toLowerCase = () => e.check(/* @__PURE__ */ Pr()), e.toUpperCase = () => e.check(/* @__PURE__ */ Fr()), e.slugify = () => e.check(/* @__PURE__ */ Ir());
}), Fi = /* @__PURE__ */ o("ZodString", (e, t) => {
	Tt.init(e, t), Pi.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ Bn(Ii, t)), e.url = (t) => e.check(/* @__PURE__ */ Kn(zi, t)), e.jwt = (t) => e.check(/* @__PURE__ */ sr(ea, t)), e.emoji = (t) => e.check(/* @__PURE__ */ qn(Bi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Vn(Li, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Hn(Ri, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ Un(Ri, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ Wn(Ri, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Gn(Ri, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ Jn(Vi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Vn(Li, t)), e.cuid = (t) => e.check(/* @__PURE__ */ Yn(Hi, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ Xn(Ui, t)), e.ulid = (t) => e.check(/* @__PURE__ */ Zn(Wi, t)), e.base64 = (t) => e.check(/* @__PURE__ */ ir(Zi, t)), e.base64url = (t) => e.check(/* @__PURE__ */ ar(Qi, t)), e.xid = (t) => e.check(/* @__PURE__ */ Qn(Gi, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ $n(Ki, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ er(qi, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ tr(Ji, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ nr(Yi, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ rr(Xi, t)), e.e164 = (t) => e.check(/* @__PURE__ */ or($i, t)), e.datetime = (t) => e.check(mi(t)), e.date = (t) => e.check(gi(t)), e.time = (t) => e.check(vi(t)), e.duration = (t) => e.check(bi(t));
});
function H(e) {
	return /* @__PURE__ */ zn(Fi, e);
}
var U = /* @__PURE__ */ o("ZodStringFormat", (e, t) => {
	L.init(e, t), Pi.init(e, t);
}), Ii = /* @__PURE__ */ o("ZodEmail", (e, t) => {
	Ot.init(e, t), U.init(e, t);
}), Li = /* @__PURE__ */ o("ZodGUID", (e, t) => {
	Et.init(e, t), U.init(e, t);
}), Ri = /* @__PURE__ */ o("ZodUUID", (e, t) => {
	Dt.init(e, t), U.init(e, t);
}), zi = /* @__PURE__ */ o("ZodURL", (e, t) => {
	kt.init(e, t), U.init(e, t);
}), Bi = /* @__PURE__ */ o("ZodEmoji", (e, t) => {
	At.init(e, t), U.init(e, t);
}), Vi = /* @__PURE__ */ o("ZodNanoID", (e, t) => {
	jt.init(e, t), U.init(e, t);
}), Hi = /* @__PURE__ */ o("ZodCUID", (e, t) => {
	Mt.init(e, t), U.init(e, t);
}), Ui = /* @__PURE__ */ o("ZodCUID2", (e, t) => {
	Nt.init(e, t), U.init(e, t);
}), Wi = /* @__PURE__ */ o("ZodULID", (e, t) => {
	Pt.init(e, t), U.init(e, t);
}), Gi = /* @__PURE__ */ o("ZodXID", (e, t) => {
	Ft.init(e, t), U.init(e, t);
}), Ki = /* @__PURE__ */ o("ZodKSUID", (e, t) => {
	It.init(e, t), U.init(e, t);
}), qi = /* @__PURE__ */ o("ZodIPv4", (e, t) => {
	Vt.init(e, t), U.init(e, t);
}), Ji = /* @__PURE__ */ o("ZodIPv6", (e, t) => {
	Ht.init(e, t), U.init(e, t);
}), Yi = /* @__PURE__ */ o("ZodCIDRv4", (e, t) => {
	Ut.init(e, t), U.init(e, t);
}), Xi = /* @__PURE__ */ o("ZodCIDRv6", (e, t) => {
	Wt.init(e, t), U.init(e, t);
}), Zi = /* @__PURE__ */ o("ZodBase64", (e, t) => {
	Kt.init(e, t), U.init(e, t);
}), Qi = /* @__PURE__ */ o("ZodBase64URL", (e, t) => {
	Jt.init(e, t), U.init(e, t);
}), $i = /* @__PURE__ */ o("ZodE164", (e, t) => {
	Yt.init(e, t), U.init(e, t);
}), ea = /* @__PURE__ */ o("ZodJWT", (e, t) => {
	Zt.init(e, t), U.init(e, t);
}), ta = /* @__PURE__ */ o("ZodNumber", (e, t) => {
	Qt.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Jr(e, t, n, r), e.gt = (t, n) => e.check(/* @__PURE__ */ yr(t, n)), e.gte = (t, n) => e.check(/* @__PURE__ */ br(t, n)), e.min = (t, n) => e.check(/* @__PURE__ */ br(t, n)), e.lt = (t, n) => e.check(/* @__PURE__ */ _r(t, n)), e.lte = (t, n) => e.check(/* @__PURE__ */ vr(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ vr(t, n)), e.int = (t) => e.check(ra(t)), e.safe = (t) => e.check(ra(t)), e.positive = (t) => e.check(/* @__PURE__ */ yr(0, t)), e.nonnegative = (t) => e.check(/* @__PURE__ */ br(0, t)), e.negative = (t) => e.check(/* @__PURE__ */ _r(0, t)), e.nonpositive = (t) => e.check(/* @__PURE__ */ vr(0, t)), e.multipleOf = (t, n) => e.check(/* @__PURE__ */ xr(t, n)), e.step = (t, n) => e.check(/* @__PURE__ */ xr(t, n)), e.finite = () => e;
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function W(e) {
	return /* @__PURE__ */ fr(ta, e);
}
var na = /* @__PURE__ */ o("ZodNumberFormat", (e, t) => {
	$t.init(e, t), ta.init(e, t);
});
function ra(e) {
	return /* @__PURE__ */ pr(na, e);
}
var ia = /* @__PURE__ */ o("ZodBoolean", (e, t) => {
	en.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Yr(e, t, n, r);
});
function aa(e) {
	return /* @__PURE__ */ mr(ia, e);
}
var oa = /* @__PURE__ */ o("ZodUnknown", (e, t) => {
	tn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function sa() {
	return /* @__PURE__ */ hr(oa);
}
var ca = /* @__PURE__ */ o("ZodNever", (e, t) => {
	nn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xr(e, t, n, r);
});
function la(e) {
	return /* @__PURE__ */ gr(ca, e);
}
var ua = /* @__PURE__ */ o("ZodArray", (e, t) => {
	an.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ti(e, t, n, r), e.element = t.element, e.min = (t, n) => e.check(/* @__PURE__ */ Cr(t, n)), e.nonempty = (t) => e.check(/* @__PURE__ */ Cr(1, t)), e.max = (t, n) => e.check(/* @__PURE__ */ Sr(t, n)), e.length = (t, n) => e.check(/* @__PURE__ */ wr(t, n)), e.unwrap = () => e.element;
});
function G(e, t) {
	return /* @__PURE__ */ Lr(ua, e, t);
}
var da = /* @__PURE__ */ o("ZodObject", (e, t) => {
	un.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ni(e, t, n, r), g(e, "shape", () => t.shape), e.keyof = () => _a(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({
		...e._zod.def,
		catchall: t
	}), e.passthrough = () => e.clone({
		...e._zod.def,
		catchall: sa()
	}), e.loose = () => e.clone({
		...e._zod.def,
		catchall: sa()
	}), e.strict = () => e.clone({
		...e._zod.def,
		catchall: la()
	}), e.strip = () => e.clone({
		...e._zod.def,
		catchall: void 0
	}), e.extend = (t) => ue(e, t), e.safeExtend = (t) => de(e, t), e.merge = (t) => fe(e, t), e.pick = (t) => ce(e, t), e.omit = (t) => le(e, t), e.partial = (...t) => pe(Sa, e, t[0]), e.required = (...t) => E(Ma, e, t[0]);
});
function K(e, t) {
	return new da({
		type: "object",
		shape: e ?? {},
		...w(t)
	});
}
var fa = /* @__PURE__ */ o("ZodUnion", (e, t) => {
	fn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ri(e, t, n, r), e.options = t.options;
});
function pa(e, t) {
	return new fa({
		type: "union",
		options: e,
		...w(t)
	});
}
var ma = /* @__PURE__ */ o("ZodIntersection", (e, t) => {
	pn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ii(e, t, n, r);
});
function ha(e, t) {
	return new ma({
		type: "intersection",
		left: e,
		right: t
	});
}
var ga = /* @__PURE__ */ o("ZodEnum", (e, t) => {
	gn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Zr(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new ga({
			...t,
			checks: [],
			...w(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new ga({
			...t,
			checks: [],
			...w(r),
			entries: i
		});
	};
});
function _a(e, t) {
	return new ga({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...w(t)
	});
}
var va = /* @__PURE__ */ o("ZodLiteral", (e, t) => {
	_n.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qr(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function ya(e, t) {
	return new va({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...w(t)
	});
}
var ba = /* @__PURE__ */ o("ZodTransform", (e, t) => {
	vn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ei(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new c(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(j(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(j(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function xa(e) {
	return new ba({
		type: "transform",
		transform: e
	});
}
var Sa = /* @__PURE__ */ o("ZodOptional", (e, t) => {
	bn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => fi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ca(e) {
	return new Sa({
		type: "optional",
		innerType: e
	});
}
var wa = /* @__PURE__ */ o("ZodExactOptional", (e, t) => {
	xn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => fi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ta(e) {
	return new wa({
		type: "optional",
		innerType: e
	});
}
var Ea = /* @__PURE__ */ o("ZodNullable", (e, t) => {
	Sn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ai(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Da(e) {
	return new Ea({
		type: "nullable",
		innerType: e
	});
}
var Oa = /* @__PURE__ */ o("ZodDefault", (e, t) => {
	Cn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => si(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ka(e, t) {
	return new Oa({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : b(t);
		}
	});
}
var Aa = /* @__PURE__ */ o("ZodPrefault", (e, t) => {
	Tn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ci(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ja(e, t) {
	return new Aa({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : b(t);
		}
	});
}
var Ma = /* @__PURE__ */ o("ZodNonOptional", (e, t) => {
	En.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => oi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Na(e, t) {
	return new Ma({
		type: "nonoptional",
		innerType: e,
		...w(t)
	});
}
var Pa = /* @__PURE__ */ o("ZodCatch", (e, t) => {
	On.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => li(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Fa(e, t) {
	return new Pa({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var Ia = /* @__PURE__ */ o("ZodPipe", (e, t) => {
	kn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => ui(e, t, n, r), e.in = t.in, e.out = t.out;
});
function La(e, t) {
	return new Ia({
		type: "pipe",
		in: e,
		out: t
	});
}
var Ra = /* @__PURE__ */ o("ZodReadonly", (e, t) => {
	jn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => di(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function za(e) {
	return new Ra({
		type: "readonly",
		innerType: e
	});
}
var Ba = /* @__PURE__ */ o("ZodCustom", (e, t) => {
	Nn.init(e, t), V.init(e, t), e._zod.processJSONSchema = (t, n, r) => $r(e, t, n, r);
});
function Va(e, t = {}) {
	return /* @__PURE__ */ Rr(Ba, e, t);
}
function Ha(e) {
	return /* @__PURE__ */ zr(e);
}
//#endregion
//#region src/schemas.ts
var Ua = "tasks", q = "1.1.0", J = "report-logger", Wa = "TASKBOARD_TASK_SELECTED", Ga = "TASKBOARD_TASK_UPDATED", Ka = "CASE_REPORT_LINK_CREATED", qa = "CASE_REPORT_UPDATED", Ja = "CASE_REPORT_TEMPLATE_IMPORTED", Ya = "TASK_COUNT_CHANGED", Xa = K({
	id: H().min(1),
	title: H().default("Untitled task"),
	status: H().optional(),
	assignee: H().optional(),
	updatedAt: W().optional()
}), Za = K({
	id: H().min(1),
	type: _a([
		"created",
		"updated",
		"linked",
		"rebound",
		"conflict",
		"decision",
		"sync"
	]),
	message: H().min(1),
	at: W(),
	by: H().default("system")
}), Qa = K({
	id: H().min(1),
	taskId: H().nullable().optional(),
	templateId: H().nullable().optional(),
	title: H().min(1),
	content: H().default(""),
	status: _a([
		"draft",
		"active",
		"blocked",
		"closed"
	]).default("draft"),
	tags: G(H()).default([]),
	timeline: G(Za).default([]),
	updatedAt: W(),
	taskSnapshot: Xa.nullable().optional(),
	taskChanged: aa().optional()
}), $a = K({
	taskId: H().min(1),
	reportId: H().min(1),
	linkedAt: W(),
	linkedBy: H().default("anonymous"),
	sourcePluginId: H().default(J),
	orphaned: aa().default(!1),
	history: G(K({
		reportId: H().min(1),
		linkedAt: W(),
		linkedBy: H()
	})).default([])
}), eo = K({
	id: H().min(1),
	name: H().min(1),
	category: H().default("general"),
	content: H().min(1),
	createdAt: W(),
	updatedAt: W(),
	version: H().min(1)
}), to = K({
	reportId: H().nullable().default(null),
	content: H().default(""),
	autosavePending: aa().default(!1),
	updatedAt: W().default(0)
}), no = K({
	lastSyncAt: W().default(0),
	sourcePlugin: H().default(""),
	lastError: H().default(""),
	retries: W().int().nonnegative().default(0)
}), ro = K({
	version: ya(q),
	upgrades: G(K({
		from: H(),
		to: H(),
		at: W()
	})).default([])
}), io = K({
	version: ya(q),
	taskReportLinks: G($a).default([]),
	reports: G(Qa).default([]),
	templates: G(eo).default([]),
	taskSnapshotCache: G(Xa).default([]),
	editorDraft: to.default({
		reportId: null,
		content: "",
		autosavePending: !1,
		updatedAt: 0
	}),
	syncMeta: no.default({
		lastSyncAt: 0,
		sourcePlugin: "",
		lastError: "",
		retries: 0
	}),
	migrationMeta: ro.default({
		version: q,
		upgrades: []
	})
}), ao = K({ taskId: H().min(1) }), oo = K({ task: Xa }), so = K({
	reportId: H().min(1),
	updatedAt: W(),
	sourcePluginId: H().default(J)
}), co = K({
	taskId: H().min(1),
	reportId: H().min(1),
	sourcePluginId: H().default(J)
}), lo = K({
	templateId: H().min(1),
	name: H().min(1),
	sourcePluginId: H().default(J)
}), uo = Date.now(), fo = [{
	id: "tpl-daily-progress",
	name: "Daily Progress",
	category: "progress",
	content: [
		"# Case Report - {{task.title}}",
		"",
		"## Summary",
		"### What was completed",
		"",
		"### Current blockers",
		"",
		"## Next Steps",
		"### Priority action items",
		"",
		"### Timeline",
		""
	].join("\n"),
	createdAt: uo,
	updatedAt: uo,
	version: q
}, {
	id: "tpl-incident-investigation",
	name: "Incident Investigation",
	category: "incident",
	content: [
		"# Incident Report - {{task.title}}",
		"",
		"## Impact Assessment",
		"### Scope of impact",
		"",
		"### Severity level",
		"",
		"## Timeline",
		"### Initial detection (T0)",
		"",
		"### Resolution time (T1)",
		"",
		"## Root Cause Analysis",
		"### Root cause",
		"",
		"### Contributing factors",
		"",
		"## Recovery & Prevention",
		"### Recovery actions taken",
		"",
		"### Preventive measures",
		""
	].join("\n"),
	createdAt: uo,
	updatedAt: uo,
	version: q
}];
function po() {
	return {
		version: q,
		taskReportLinks: [],
		reports: [],
		templates: [...fo],
		taskSnapshotCache: [],
		editorDraft: {
			reportId: null,
			content: "",
			autosavePending: !1,
			updatedAt: 0
		},
		syncMeta: {
			lastSyncAt: 0,
			sourcePlugin: "",
			lastError: "",
			retries: 0
		},
		migrationMeta: {
			version: q,
			upgrades: []
		}
	};
}
//#endregion
//#region src/utils.ts
function Y(e) {
	let t = Math.random().toString(36).slice(2, 8);
	return `${e}-${Date.now()}-${t}`;
}
function X(e, t = 120) {
	if (e == null) return "";
	let n = typeof e == "string" ? e : JSON.stringify(e);
	return n.length > t ? `${n.slice(0, t)}...` : n;
}
function mo(e) {
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}
function ho(e) {
	return new Date(e).toLocaleString();
}
function go(e, t) {
	let n = null, r = null, i = () => {
		r &&= (e(...r), null), n = null;
	};
	return ((...e) => {
		r = e, n === null && (n = window.setTimeout(i, t));
	});
}
//#endregion
//#region src/plugin.tsx
var Z = {
	taskboardTasks: "taskboard.tasks",
	reports: "caseLogger.reports",
	links: "caseLogger.taskReportLinks",
	templates: "caseLogger.templates"
}, Q = "report-logger-user", $ = {
	restoreStart: () => console.info("[plugin] restore start"),
	restorePayload: (e, t) => console.info("[plugin] restore payload", {
		preview: e,
		extractedPath: t
	}),
	restoreSuccess: (e, t) => console.info("[plugin] restore success", {
		count: e,
		source: t
	}),
	restoreFailed: (e) => console.error("[plugin] restore failed", { error: e }),
	saveTriggered: (e) => console.info("[plugin] save triggered", { count: e }),
	saveFailed: (e) => console.error("[plugin] save failed", { error: e }),
	linkCreateStart: (e, t) => console.info("[report-logger] link create start", {
		taskId: e,
		reportId: t
	}),
	linkCreateSuccess: (e, t) => console.info("[report-logger] link create success", {
		taskId: e,
		reportId: t
	}),
	linkCreateFailed: (e) => console.error("[report-logger] link create failed", { error: e }),
	templateImportStart: (e) => console.info("[report-logger] template import start", { name: X(e, 40) }),
	templateImportSuccess: (e) => console.info("[report-logger] template import success", { templateId: e }),
	templateImportFailed: (e) => console.error("[report-logger] template import failed", { error: e }),
	taskSyncReceived: (e) => console.info("[report-logger] task sync received", { taskId: e }),
	conflictDetected: (e) => console.warn("[report-logger] conflict detected", { reportId: e })
};
function _o(e) {
	let t = e.runtimeConfig?.indexedDbBridge;
	return !t || typeof t != "object" ? null : t;
}
function vo(e) {
	let t = e, n = "root";
	for (let e = 0; e < 6; e += 1) {
		if (typeof t == "string") {
			let e = mo(t);
			if (e === null) break;
			t = e, n = `${n}.json`;
			continue;
		}
		if (t && typeof t == "object") {
			let e = t;
			if ("data" in e) {
				t = e.data, n = `${n}.data`;
				continue;
			}
			if ("value" in e) {
				t = e.value, n = `${n}.value`;
				continue;
			}
			if ("payload" in e) {
				t = e.payload, n = `${n}.payload`;
				continue;
			}
			break;
		}
		break;
	}
	return {
		value: t,
		extractedPath: n
	};
}
function yo(e) {
	let t = vo(e).value;
	if (Array.isArray(t)) return t;
	if (t && typeof t == "object") {
		let e = t;
		if (Array.isArray(e.tasks)) return e.tasks;
	}
	return [];
}
function bo(e) {
	let t = po(), n = vo(e);
	if ($.restorePayload(X(n.value), n.extractedPath), Array.isArray(n.value)) {
		let e = n.value.map((e) => Qa.safeParse(e)).filter((e) => e.success).map((e) => e.data);
		return {
			...t,
			reports: e,
			migrationMeta: {
				version: q,
				upgrades: [{
					from: "legacy-array",
					to: q,
					at: Date.now()
				}]
			}
		};
	}
	if (!n.value || typeof n.value != "object") return t;
	let r = n.value, i = r.reports ?? r[Z.reports] ?? r.tasks, a = r.taskReportLinks ?? r[Z.links], o = r.templates ?? r[Z.templates], s = r.taskSnapshotCache ?? r[Z.taskboardTasks], c = yo(i).map((e) => Qa.safeParse(e)).filter((e) => e.success).map((e) => e.data), l = yo(a).map((e) => $a.safeParse(e)).filter((e) => e.success).map((e) => e.data), u = yo(o).map((e) => eo.safeParse(e)).filter((e) => e.success).map((e) => e.data), d = yo(s).map((e) => Xa.safeParse(e)).filter((e) => e.success).map((e) => e.data), f = {
		...t,
		...r,
		reports: c,
		taskReportLinks: l,
		templates: u.length > 0 ? u : [...fo],
		taskSnapshotCache: d,
		migrationMeta: {
			version: q,
			upgrades: [{
				from: String(r.migrationMeta?.version ?? "unknown"),
				to: q,
				at: Date.now()
			}]
		}
	}, p = io.safeParse(f);
	return p.success ? p.data : t;
}
async function xo(e, t) {
	let n = {
		pluginId: J,
		version: q,
		timestamp: Date.now(),
		type: "PERSIST",
		payload: t
	};
	await e.storage.save(Ua, n, q);
	let r = _o(e);
	return r?.save ? (await Promise.all([
		r.save(Z.reports, Ua, t.reports, q),
		r.save(Z.links, Ua, t.taskReportLinks, q),
		r.save(Z.templates, Ua, t.templates, q)
	]), "indexeddb-bridge") : "storage";
}
async function So(e) {
	$.restoreStart();
	let t = bo(await e.storage.get(Ua)), n = _o(e);
	if (n?.get) try {
		return t.taskSnapshotCache = yo(await n.get(Z.taskboardTasks, Ua)).map((e) => Xa.safeParse(e)).filter((e) => e.success).map((e) => e.data), t.syncMeta.lastSyncAt = Date.now(), t.syncMeta.sourcePlugin = "taskboard", {
			payload: t,
			source: "indexeddb-bridge"
		};
	} catch (e) {
		t.syncMeta.lastError = String(e);
	}
	return {
		payload: t,
		source: "storage"
	};
}
function Co(e, t, n) {
	let r = {
		"{{task.title}}": t?.title ?? "",
		"{{task.id}}": t?.id ?? "",
		"{{today}}": (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		"{{author}}": n
	}, i = e;
	for (let [e, t] of Object.entries(r)) i = i.split(e).join(t);
	let a = Array.from(i.matchAll(/{{[^}]+}}/g)).map((e) => e[0]);
	return {
		text: i,
		unresolved: a
	};
}
function wo(e) {
	let t = e.split("\n"), n = [], r, i = null, a = [], o = () => {
		i && (n.push({
			title: i,
			value: a.join("\n").trim(),
			section: r
		}), i = null, a = []);
	};
	for (let e of t) {
		if (e.startsWith("# ") && !e.startsWith("## ") && !e.startsWith("### ")) {
			o(), i = e.slice(2).trim(), a = [];
			continue;
		}
		if (e.startsWith("## ") && !e.startsWith("### ")) {
			o(), r = e.slice(3).trim(), i = null;
			continue;
		}
		if (e.startsWith("### ")) {
			o(), i = e.slice(4).trim(), a = [];
			continue;
		}
		i && a.push(e);
	}
	return o(), { fields: n };
}
function To(e) {
	let t = [], n;
	for (let r of e) {
		r.section && r.section !== n && (n = r.section, t.push(`## ${r.section}`), t.push(""));
		let e = r.section ? "### " : "# ";
		t.push(`${e}${r.title}`), r.value.trim() && t.push(r.value.trim()), t.push("");
	}
	return t.join("\n").trim();
}
function Eo(e) {
	let t = [];
	for (let n of e) {
		if (t.push(`${n.kind} ${n.title.trim()}`.trim()), n.kind === "##") {
			t.push("");
			continue;
		}
		n.value.trim() && t.push(n.value.trim()), t.push("");
	}
	return t.join("\n").trim();
}
function Do(e) {
	let t = wo(e).fields.find((e) => !e.section);
	return t ? t.value.split("\n").map((e) => e.trim()).find((e) => e.length > 0) ?? (t.title.trim() || null) : null;
}
function Oo(e, t, n = "Case Report") {
	let r = Do(t), i = [e.trim(), r?.trim() ?? ""].filter(Boolean);
	return i.length > 0 ? i.join(" - ") : n;
}
function ko(e) {
	let t = [], n = /!\[([^\]]*)\]\(([^)]+)\)/g, r = n.exec(e);
	for (; r;) t.push({
		alt: r[1] || "image",
		src: r[2]
	}), r = n.exec(e);
	return t;
}
var Ao = /!\[[^\]]*\]\([^)]+\)/g;
function jo(e) {
	let t = 0;
	return e.replace(Ao, () => (t += 1, `^圖片${t}^`));
}
function Mo(e, t) {
	let n = Array.from(e.matchAll(Ao)).map((e) => e[0]);
	return n.length === 0 ? t : t.replace(/圖片(\d+)/g, (e, t) => {
		let r = Number(t) - 1;
		return Number.isNaN(r) || r < 0 || r >= n.length ? e : n[r];
	});
}
function No(e, t) {
	let n = Array.from(e.matchAll(Ao)).map((e, t) => ({
		start: e.index ?? 0,
		end: (e.index ?? 0) + e[0].length,
		display: `圖片${t + 1}`
	})), r = 0, i = 0;
	for (let e of n) {
		let n = e.start - r;
		if (t <= i + n) return r + (t - i);
		i += n;
		let a = e.display.length;
		if (t <= i + a) return e.end;
		i += a, r = e.end;
	}
	return r + (t - i);
}
function Po(e) {
	return wo(e).fields.map((e) => `${e.section ?? ""}::${e.title}`);
}
function Fo(e, t) {
	let n = Po(e);
	if (n.length === 0) return null;
	let r = null, i = 0;
	for (let e of t) {
		let t = Po(e.content);
		if (t.length === 0) continue;
		let a = n.filter((e) => t.includes(e)).length / Math.max(n.length, t.length);
		a > i && (i = a, r = e.id);
	}
	return i >= .5 ? r : null;
}
function Io(e, t, n, r) {
	let i = n ?? e.length, a = r ?? e.length;
	return `${e.slice(0, i)}${t}${e.slice(a)}`;
}
function Lo({ context: a }) {
	let [o, s] = i([]), [c, l] = i([]), [u, d] = i([]), [f, p] = i([]), [ee, te] = i(null), [m, h] = i(null), [g, _] = i(!1), [v, ne] = i("storage"), [re, ie] = i(""), [y, ae] = i("report"), [oe, b] = i("report"), [x, S] = i("edit"), [C, w] = i(""), [se, T] = i([]), [ce, le] = i("Untitled txt Template"), [ue, de] = i("general"), [fe, pe] = i([]), [E, D] = i(""), [O, k] = i(!1), [A, me] = i(""), [j, he] = i([]), [M, ge] = i(null), [_e, ve] = i(null), ye = r(!0), be = r("manual"), N = r({}), xe = r(null), Se = r(null), Ce = n(() => f.find((e) => e.id === ee) ?? null, [f, ee]), P = n(() => o.find((e) => e.id === m) ?? null, [o, m]), we = n(() => {
		let e = re.trim().toLowerCase();
		return e ? o.filter((t) => {
			let n = t.title.toLowerCase(), r = t.content.toLowerCase();
			return n.includes(e) || r.includes(e);
		}) : o;
	}, [re, o]), Te = n(() => wo(E).fields, [E]), Ee = () => {
		le("Untitled txt Template"), de("general"), pe([]);
	}, De = () => {
		Ee(), b("template");
	}, Oe = () => {
		pe((e) => [...e, {
			id: Y("tpl-item"),
			kind: "###",
			title: "",
			value: ""
		}]);
	}, ke = (e, t) => {
		pe((n) => n.map((n) => n.id === e ? {
			...n,
			...t
		} : n));
	}, Ae = () => {
		let e = Eo(fe), t = Date.now(), n = {
			id: Y("tpl"),
			name: ce.trim() || "Untitled txt Template",
			category: ue.trim() || "general",
			content: e,
			createdAt: t,
			updatedAt: t,
			version: q
		}, r = eo.parse(n);
		d((e) => [r, ...e]), a.eventBus.emit(Ja, {
			templateId: r.id,
			name: r.name,
			sourcePluginId: J
		}), Ee(), b("report");
	}, je = () => {
		Ee(), b("report");
	}, Me = n(() => go((e, t) => {
		s((n) => n.map((n) => {
			if (n.id !== t) return n;
			let r = Date.now();
			return {
				...n,
				content: e,
				updatedAt: r,
				timeline: [...n.timeline, {
					id: Y("tl"),
					type: "updated",
					message: "Autosave",
					at: r,
					by: Q
				}]
			};
		})), k(!1);
	}, 900), []);
	t(() => {
		let e = !0;
		return (async () => {
			try {
				let t = await So(a);
				if (!e) return;
				let n = io.safeParse(t.payload), r = n.success ? n.data : po();
				s(r.reports), l(r.taskReportLinks), d(r.templates), p(r.taskSnapshotCache), ne(t.source), r.reports.length > 0 && (h(r.reports[0].id), D(r.reports[0].content)), $.restoreSuccess(r.reports.length + r.taskReportLinks.length, t.source);
			} catch (e) {
				$.restoreFailed(e);
			} finally {
				e && _(!0);
			}
		})(), () => {
			e = !1;
		};
	}, [a]), t(() => {
		if (!m) {
			D(""), T([]);
			return;
		}
		D(P?.content ?? ""), k(!1), T([]);
	}, [m]), t(() => {
		if (!g) return;
		if (ye.current) {
			ye.current = !1;
			return;
		}
		let e = {
			version: q,
			taskReportLinks: c,
			reports: o,
			templates: u,
			taskSnapshotCache: f,
			editorDraft: {
				reportId: m,
				content: E,
				autosavePending: O,
				updatedAt: Date.now()
			},
			syncMeta: {
				lastSyncAt: Date.now(),
				sourcePlugin: v,
				lastError: A,
				retries: 0
			},
			migrationMeta: {
				version: q,
				upgrades: []
			}
		};
		$.saveTriggered(o.length + c.length), xo(a, e).catch((e) => {
			me(String(e)), $.saveFailed(e);
		});
	}, [
		a,
		O,
		E,
		g,
		A,
		c,
		o,
		m,
		v,
		f,
		u
	]), t(() => {
		!g || !m || O && Me(E, m);
	}, [
		O,
		E,
		g,
		m,
		Me
	]), t(() => {
		l((e) => {
			let t = new Set(f.map((e) => e.id));
			return e.map((e) => ({
				...e,
				orphaned: !t.has(e.taskId)
			}));
		});
	}, [f]), t(() => {
		let e = [], t = (t, n) => {
			let r = (e) => n(e), i = a.eventBus.on(t, r);
			if (typeof i == "function") {
				e.push(i);
				return;
			}
			e.push(() => {
				a.eventBus.off(t, r);
			});
		};
		return t(Wa, (e) => {
			let t = ao.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Wa,
					preview: X(e)
				});
				return;
			}
			te(t.data.taskId);
		}), t(Ga, (e) => {
			let t = oo.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ga,
					preview: X(e)
				});
				return;
			}
			let n = t.data.task;
			$.taskSyncReceived(n.id), p((e) => {
				let t = e.findIndex((e) => e.id === n.id);
				if (t < 0) return [...e, n];
				let r = [...e];
				return r[t] = n, r;
			}), s((e) => e.map((e) => {
				if (e.taskId !== n.id) return e;
				let t = e.taskSnapshot?.title && e.taskSnapshot.title !== n.title;
				return {
					...e,
					taskSnapshot: n,
					taskChanged: !!t,
					timeline: [...e.timeline, {
						id: Y("tl"),
						type: "sync",
						message: "Task snapshot updated from TaskBoard",
						at: Date.now(),
						by: "taskboard"
					}]
				};
			}));
		}), t(qa, (e) => {
			let t = so.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: qa,
					preview: X(e)
				});
				return;
			}
			let n = o.find((e) => e.id === t.data.reportId);
			n && t.data.sourcePluginId !== "report-logger" && t.data.updatedAt > n.updatedAt && O && ($.conflictDetected(n.id), ge({
				reportId: n.id,
				externalUpdatedAt: t.data.updatedAt,
				localUpdatedAt: n.updatedAt
			}));
		}), t(Ka, (e) => {
			let t = co.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ka,
					preview: X(e)
				});
				return;
			}
			t.data.sourcePluginId !== "report-logger" && l((e) => e.some((e) => e.taskId === t.data.taskId) ? e : [...e, {
				taskId: t.data.taskId,
				reportId: t.data.reportId,
				linkedAt: Date.now(),
				linkedBy: "external",
				sourcePluginId: t.data.sourcePluginId,
				orphaned: !1,
				history: []
			}]);
		}), t(Ja, (e) => {
			lo.safeParse(e).success || console.warn("[report-logger] rejected invalid event payload", {
				event: Ja,
				preview: X(e)
			});
		}), () => {
			for (let t of e) t();
		};
	}, [
		a.eventBus,
		O,
		o
	]);
	let Ne = (e) => {
		let t = Ce ?? null, n = e ? u.find((t) => t.id === e) : null, r = n ? Co(n.content, t, Q) : {
			text: "",
			unresolved: []
		}, i = n ? Oo(n.category, r.text) : t ? `Case Report - ${t.title}` : "Case Report";
		he(r.unresolved);
		let c = Y("report"), l = Date.now(), d = {
			id: c,
			taskId: t?.id ?? null,
			templateId: n?.id ?? null,
			title: i,
			content: r.text,
			status: "draft",
			tags: [],
			timeline: [{
				id: Y("tl"),
				type: "created",
				message: "Report created",
				at: l,
				by: Q
			}],
			updatedAt: l,
			taskSnapshot: t,
			taskChanged: !1
		};
		s((e) => [d, ...e]), h(c), b("report"), S("edit"), D(d.content), t && Pe(t.id, c), a.eventBus.emit(Ya, { count: o.length + 1 });
	}, Pe = (e, t) => {
		try {
			$.linkCreateStart(e, t), l((n) => {
				let r = n.find((t) => t.taskId === e), i = Date.now();
				if (!r) {
					let r = {
						taskId: e,
						reportId: t,
						linkedAt: i,
						linkedBy: Q,
						sourcePluginId: J,
						orphaned: !1,
						history: []
					};
					return [...n, r];
				}
				return n.map((n) => n.taskId === e ? {
					...n,
					reportId: t,
					linkedAt: i,
					linkedBy: Q,
					orphaned: !1,
					history: [...n.history, {
						reportId: n.reportId,
						linkedAt: n.linkedAt,
						linkedBy: n.linkedBy
					}]
				} : n);
			}), a.eventBus.emit(Ka, {
				taskId: e,
				reportId: t,
				sourcePluginId: J
			}), $.linkCreateSuccess(e, t);
		} catch (e) {
			$.linkCreateFailed(e);
		}
	}, Fe = (e) => {
		if (!P) return;
		let t = u.find((t) => t.id === e);
		if (!t || !window.confirm("Apply template and overwrite current report content?")) return;
		let n = Co(t.content, Ce, Q), r = wo(n.text), i = Oo(t.category, n.text, P.title);
		T(r.fields.map((e) => ({
			...e,
			id: Y("field")
		}))), he(n.unresolved), D(n.text), k(!0), s((e) => e.map((e) => e.id === P.id ? {
			...e,
			title: i,
			templateId: t.id
		} : e)), w(t.id);
	}, Ie = () => {
		if (!P) return;
		S("edit"), b("report"), T(wo(P.content).fields.map((e) => ({
			...e,
			id: Y("field")
		})));
		let e = P.templateId ?? Fo(P.content, u);
		if (e) {
			w(e), P.templateId || s((t) => t.map((t) => t.id === P.id ? {
				...t,
				templateId: e
			} : t));
			return;
		}
		w("");
	}, Le = (e, t) => {
		T((n) => {
			let r = n.map((n) => n.id === e ? {
				...n,
				value: Mo(n.value, t)
			} : n);
			return D(To(r)), k(!0), r;
		});
	}, Re = (e) => {
		xe.current = e, Se.current?.click();
	}, ze = async (e, t, n, r) => {
		if (!t) return;
		let i = await new Promise((t, n) => {
			let r = new FileReader();
			r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? /* @__PURE__ */ Error("Failed to read image file")), r.readAsDataURL(e);
		}), a = `![${e.name}](${i})`, o = N.current[t];
		T((e) => {
			let i = e.map((e) => {
				if (e.id !== t) return e;
				let i = n === null ? null : No(e.value, n), o = r === null ? null : No(e.value, r);
				return {
					...e,
					value: Io(e.value, a, i, o)
				};
			});
			return D(To(i)), k(!0), i;
		}), o && window.requestAnimationFrame(() => {
			let e = Math.min((n ?? o.value.length) + a.length, o.value.length + a.length);
			o.focus(), o.setSelectionRange(e, e);
		}), xe.current = null;
	}, Be = async (e) => {
		let t = xe.current;
		if (!t) return;
		let n = N.current[t];
		await ze(e, t, n?.selectionStart ?? null, n?.selectionEnd ?? null);
	}, Ve = async (e, t) => {
		let n = Array.from(t.clipboardData?.files ?? []).find((e) => e.type.startsWith("image/"));
		n && (t.preventDefault(), await ze(n, e, t.currentTarget.selectionStart, t.currentTarget.selectionEnd));
	}, He = () => {
		if (!P) return;
		let e = new Blob([E], { type: "text/plain;charset=utf-8" }), t = URL.createObjectURL(e), n = document.createElement("a");
		n.href = t, n.download = `${P.title.replace(/\s+/g, "-").toLowerCase()}.txt`, n.click(), URL.revokeObjectURL(t);
	}, Ue = (e) => {
		!M || !P || (be.current = e, s((t) => t.map((t) => {
			if (t.id !== M.reportId) return t;
			let n = e === "local" ? "Conflict resolved: keep local draft" : e === "external" ? "Conflict resolved: accept external update" : "Conflict resolved: manual merge";
			return {
				...t,
				timeline: [...t.timeline, {
					id: Y("tl"),
					type: "decision",
					message: n,
					at: Date.now(),
					by: Q
				}],
				updatedAt: e === "external" ? M.externalUpdatedAt : t.updatedAt
			};
		})), ge(null));
	}, We = (e) => {
		let t = o.find((t) => t.id === e);
		window.confirm(`Delete document \"${t?.title ?? "Untitled"}\"?`) && (s((t) => {
			let n = t.filter((t) => t.id !== e);
			if (m === e) {
				let e = n[0] ?? null;
				h(e?.id ?? null), D(e?.content ?? ""), T([]);
			}
			return n;
		}), l((t) => t.filter((t) => t.reportId !== e)), M?.reportId === e && ge(null), a.eventBus.emit(Ya, { count: Math.max(o.length - 1, 0) }));
	}, Ge = c.find((e) => e.taskId === ee) ?? null;
	return /* @__PURE__ */ e.createElement("div", { className: "report-logger" }, /* @__PURE__ */ e.createElement("input", {
		ref: Se,
		className: "rl-hidden-file-input",
		type: "file",
		accept: "image/*",
		onChange: async (e) => {
			let t = e.target.files?.[0];
			t && await Be(t), e.currentTarget.value = "";
		}
	}), /* @__PURE__ */ e.createElement("div", { className: "rl-shell" }, /* @__PURE__ */ e.createElement("aside", { className: "rl-panel rl-sidebar" }, /* @__PURE__ */ e.createElement("div", { className: "rl-sidebar-head" }, /* @__PURE__ */ e.createElement("h1", { className: "rl-title" }, "Documents")), /* @__PURE__ */ e.createElement("div", { className: "rl-create-controls" }, /* @__PURE__ */ e.createElement("select", {
		className: "rl-select rl-create-select",
		value: y,
		onChange: (e) => ae(e.target.value)
	}, /* @__PURE__ */ e.createElement("option", { value: "report" }, "Create Document"), /* @__PURE__ */ e.createElement("option", { value: "template" }, "Create Template")), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button rl-create-action",
		"aria-label": y === "template" ? "Create template" : "Create document",
		title: y === "template" ? "Create template" : "Create document",
		onClick: () => {
			if (y === "template") {
				De();
				return;
			}
			Ne();
		}
	}, "+")), /* @__PURE__ */ e.createElement("label", {
		className: "rl-search-wrap",
		htmlFor: "report-search"
	}, /* @__PURE__ */ e.createElement("span", { className: "rl-meta" }, "Search by title/content"), /* @__PURE__ */ e.createElement("input", {
		id: "report-search",
		className: "rl-input",
		value: re,
		onChange: (e) => ie(e.target.value),
		placeholder: "Find a document..."
	})), /* @__PURE__ */ e.createElement("div", { className: "rl-list rl-doc-nav" }, we.map((t) => /* @__PURE__ */ e.createElement("div", {
		key: t.id,
		className: "rl-item rl-item-card",
		"data-active": t.id === m
	}, /* @__PURE__ */ e.createElement("button", {
		className: "rl-item-main",
		onClick: () => {
			h(t.id), S("preview"), b("report"), w(t.templateId ?? ""), T([]);
		}
	}, /* @__PURE__ */ e.createElement("div", { className: "rl-item-title" }, t.title), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "Updated ", ho(t.updatedAt)), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, X(t.content, 66))), /* @__PURE__ */ e.createElement("button", {
		className: "rl-item-delete",
		onClick: () => We(t.id)
	}, "Delete"))), we.length === 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "No matching documents.") : null)), /* @__PURE__ */ e.createElement("section", { className: "rl-panel rl-workspace" }, oe === "template" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "rl-workspace-head" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h2", { className: "rl-section-title" }, "Create Template"), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "Build a txt template by adding # / ## / ### items.")), /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: Oe
	}, "+ Add Item"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: Ae
	}, "Save Template"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: je
	}, "Cancel"))), /* @__PURE__ */ e.createElement("div", { className: "rl-form-row rl-template-meta-row" }, /* @__PURE__ */ e.createElement("input", {
		className: "rl-input",
		value: ce,
		onChange: (e) => le(e.target.value),
		placeholder: "Template name"
	}), /* @__PURE__ */ e.createElement("input", {
		className: "rl-input",
		value: ue,
		onChange: (e) => de(e.target.value),
		placeholder: "Category"
	})), /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-sheet",
		"aria-label": "Template builder"
	}, fe.length === 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "Click + Add Item to create #, ##, or ### rows.") : fe.map((t, n) => /* @__PURE__ */ e.createElement("div", {
		key: t.id,
		className: "rl-form-item"
	}, /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-head rl-template-draft-head" }, /* @__PURE__ */ e.createElement("span", { className: "rl-form-item-index" }, String(n + 1).padStart(2, "0"), "."), /* @__PURE__ */ e.createElement("select", {
		className: "rl-select rl-template-kind",
		value: t.kind,
		onChange: (e) => ke(t.id, { kind: e.target.value })
	}, /* @__PURE__ */ e.createElement("option", { value: "#" }, "#"), /* @__PURE__ */ e.createElement("option", { value: "##" }, "##"), /* @__PURE__ */ e.createElement("option", { value: "###" }, "###")), /* @__PURE__ */ e.createElement("input", {
		className: "rl-input rl-template-title-input",
		value: t.title,
		onChange: (e) => ke(t.id, { title: e.target.value }),
		placeholder: t.kind === "##" ? "Section title" : "Field title"
	})), t.kind === "##" ? /* @__PURE__ */ e.createElement("div", { className: "rl-template-kind-note" }, "## is a section header only, no input field.") : /* @__PURE__ */ e.createElement("textarea", {
		className: "rl-form-item-input rl-template-value-input",
		value: t.value,
		onChange: (e) => ke(t.id, { value: e.target.value }),
		placeholder: t.kind === "#" ? "Title field content..." : "Item field content..."
	}))))) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "rl-workspace-head" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h2", { className: "rl-section-title" }, P?.title ?? "Select a document"), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, P ? `Updated ${ho(P.updatedAt)}` : "Pick one file from the left navigation.")), /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		"data-active": x === "edit",
		onClick: Ie
	}, "Edit"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		"data-active": x === "preview",
		onClick: () => S("preview")
	}, "Browse"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: He
	}, "Export"))), P?.taskChanged ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Task title changed in TaskBoard. Decide whether to sync report text.") : null, M ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Conflict detected for report ", M.reportId, ". Local: ", ho(M.localUpdatedAt), "; External:", " ", ho(M.externalUpdatedAt), /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-row",
		style: { marginTop: 8 }
	}, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => Ue("local")
	}, "Keep Local"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => Ue("external")
	}, "Accept External"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => Ue("manual")
	}, "Manual Merge"))) : null, P ? /* @__PURE__ */ e.createElement(e.Fragment, null, x === "edit" ? /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("select", {
		className: "rl-select",
		onChange: (e) => {
			let t = e.target.value;
			w(t), t && Fe(t);
		},
		value: C
	}, /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose txt template (overwrite current content)"), u.map((t) => /* @__PURE__ */ e.createElement("option", {
		key: t.id,
		value: t.id
	}, t.name, " [", t.category, "]")))) : null, x === "edit" && se.length > 0 ? /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-sheet",
		role: "form",
		"aria-label": "Template form fields"
	}, se.map((t, n, r) => {
		let i = n > 0 ? r[n - 1].section : null, a = t.section && t.section !== i;
		return /* @__PURE__ */ e.createElement(e.Fragment, { key: `form-field-${t.id}` }, a && /* @__PURE__ */ e.createElement("div", { className: "rl-form-section-title" }, t.section), /* @__PURE__ */ e.createElement("div", { className: "rl-form-item" }, /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-head" }, /* @__PURE__ */ e.createElement("span", { className: "rl-form-item-index" }, String(n + 1).padStart(2, "0"), "."), /* @__PURE__ */ e.createElement("label", {
			htmlFor: `field-${t.id}`,
			className: "rl-form-item-label"
		}, t.title), /* @__PURE__ */ e.createElement("button", {
			type: "button",
			className: "rl-button secondary rl-image-button",
			onClick: () => Re(t.id)
		}, "Image")), /* @__PURE__ */ e.createElement("textarea", {
			id: `field-${t.id}`,
			className: "rl-form-item-input",
			ref: (e) => {
				N.current[t.id] = e;
			},
			value: jo(t.value),
			onChange: (e) => Le(t.id, e.target.value),
			onPaste: async (e) => {
				await Ve(t.id, e);
			},
			placeholder: `請填寫 ${t.title}...`
		}), ko(t.value).length > 0 ? /* @__PURE__ */ e.createElement("div", {
			className: "rl-image-preview-list",
			"aria-label": "Image previews"
		}, ko(t.value).map((n, r) => /* @__PURE__ */ e.createElement("figure", {
			key: `${t.id}-preview-${r}`,
			className: "rl-image-preview-item"
		}, /* @__PURE__ */ e.createElement("button", {
			type: "button",
			className: "rl-image-preview-trigger",
			onClick: () => ve({
				src: n.src,
				alt: n.alt
			})
		}, /* @__PURE__ */ e.createElement("img", {
			src: n.src,
			alt: n.alt,
			className: "rl-image-preview-thumb"
		}))))) : null));
	})) : null, x === "preview" ? Te.length > 0 ? /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-sheet",
		"aria-label": "Template form preview"
	}, Te.map((t, n, r) => {
		let i = n > 0 ? r[n - 1].section : null, a = t.section && t.section !== i;
		return /* @__PURE__ */ e.createElement(e.Fragment, { key: `browse-field-${t.title}-${n}` }, a && /* @__PURE__ */ e.createElement("div", { className: "rl-form-section-title" }, t.section), /* @__PURE__ */ e.createElement("div", { className: "rl-form-item" }, /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-head" }, /* @__PURE__ */ e.createElement("span", { className: "rl-form-item-index" }, String(n + 1).padStart(2, "0"), "."), /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-label" }, t.title)), /* @__PURE__ */ e.createElement("textarea", {
			className: "rl-form-item-input",
			value: jo(t.value),
			readOnly: !0,
			tabIndex: -1
		}), ko(t.value).length > 0 ? /* @__PURE__ */ e.createElement("div", {
			className: "rl-image-preview-list",
			"aria-label": "Image previews"
		}, ko(t.value).map((n, r) => /* @__PURE__ */ e.createElement("figure", {
			key: `browse-${t.title}-${r}`,
			className: "rl-image-preview-item"
		}, /* @__PURE__ */ e.createElement("button", {
			type: "button",
			className: "rl-image-preview-trigger",
			onClick: () => ve({
				src: n.src,
				alt: n.alt
			})
		}, /* @__PURE__ */ e.createElement("img", {
			src: n.src,
			alt: n.alt,
			className: "rl-image-preview-thumb"
		}))))) : null));
	})) : /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "This document does not use the unified txt template format.") : null, j.length > 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Unresolved placeholders: ", j.join(", ")) : null, x === "edit" && se.length === 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "This document has no parsed fields yet. Choose a unified txt template with #, ##, and ### headings.") : null, /* @__PURE__ */ e.createElement("div", { className: "rl-footer" }, /* @__PURE__ */ e.createElement("span", null, "Selected report: ", P.id), /* @__PURE__ */ e.createElement("span", null, "Autosave: ", O ? "pending" : "synced"), /* @__PURE__ */ e.createElement("span", null, "Hydrated: ", g ? "yes" : "no", " / ", v), Ge ? /* @__PURE__ */ e.createElement("span", null, "Linked: ", Ge.reportId) : null)) : /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "Create a new document or choose one from the left.")))), _e ? /* @__PURE__ */ e.createElement("div", {
		className: "rl-image-lightbox",
		onClick: () => ve(null)
	}, /* @__PURE__ */ e.createElement("div", {
		className: "rl-image-lightbox-panel",
		onClick: (e) => e.stopPropagation()
	}, /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "rl-image-lightbox-close",
		onClick: () => ve(null),
		"aria-label": "Close image preview"
	}, "x"), /* @__PURE__ */ e.createElement("img", {
		src: _e.src,
		alt: _e.alt,
		className: "rl-image-lightbox-img"
	}))) : null);
}
var Ro = null, zo = null, Bo = {
	id: J,
	name: "Report Logger",
	version: q,
	mount(t, n) {
		zo &&= (zo.remove(), null);
		let r = `plugin-${J}`, i = document.createElement("div");
		i.id = r, i.style.minHeight = "100%", t.appendChild(i), zo = i, Ro = a(i), Ro.render(e.createElement(Lo, { context: n }));
	},
	unmount() {
		Ro &&= (Ro.unmount(), null), zo &&= (zo.innerHTML = "", zo.remove(), null);
	}
};
//#endregion
export { Bo as default };
