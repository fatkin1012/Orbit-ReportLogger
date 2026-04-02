(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`#plugin-report-logger .report-logger{--bg-top:#fef4e8;--bg-bottom:#f8fbff;--ink:#1f1f2e;--muted:#5f6b81;--panel:#fff;--line:#d8deeb;--brand:#0e7c7b;--brand-soft:#dbf2f1;--accent:#ef6f6c;--focus:#0a5f9b;color:var(--ink);background:radial-gradient(circle at 10% 10%, #ef6f6c33, transparent 35%), radial-gradient(circle at 90% 0%, #0e7c7b33, transparent 28%), linear-gradient(165deg, var(--bg-top) 0%, var(--bg-bottom) 62%);min-height:100%;padding:16px;font-family:IBM Plex Sans,Noto Sans TC,Trebuchet MS,sans-serif}#plugin-report-logger .report-logger *{box-sizing:border-box}#plugin-report-logger .rl-shell{grid-template-columns:minmax(250px,320px) 1fr;gap:14px;min-height:calc(100vh - 32px);display:grid}#plugin-report-logger .rl-panel{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:14px;box-shadow:0 10px 30px #1a28441f}#plugin-report-logger .rl-sidebar{flex-direction:column;gap:12px;display:flex}#plugin-report-logger .rl-sidebar-head{justify-content:space-between;align-items:center;gap:8px;display:flex}#plugin-report-logger .rl-sidebar-head-actions{align-items:center;gap:6px;display:inline-flex}#plugin-report-logger .rl-create-controls{align-items:center;gap:8px;margin-top:-2px;display:flex}#plugin-report-logger .rl-create-select{min-width:148px}#plugin-report-logger .rl-create-action{justify-content:center;align-items:center;width:44px;min-width:44px;height:44px;padding:0;font-size:22px;line-height:1;display:inline-flex}#plugin-report-logger .rl-title{letter-spacing:.2px;margin:0;font-size:20px}#plugin-report-logger .rl-search-wrap{flex-direction:column;gap:6px;display:flex}#plugin-report-logger .rl-doc-nav{flex:1;padding-right:3px;overflow:auto}#plugin-report-logger .rl-section-title{margin:0;font-size:17px}#plugin-report-logger .rl-list{flex-direction:column;gap:8px;display:flex}#plugin-report-logger .rl-item{background:#f8f9fd;border:1px solid #d7dcec;border-radius:10px;padding:10px;transition:transform .18s,border-color .18s,background-color .18s}#plugin-report-logger .rl-item:hover{border-color:#b9c7e5;transform:translateY(-1px)}#plugin-report-logger .rl-item-card{padding:10px 10px 38px;position:relative}#plugin-report-logger .rl-item-main{all:unset;cursor:pointer;width:100%;display:block}#plugin-report-logger .rl-item-delete{color:#8f2f2f;cursor:pointer;background:#fff2f2;border:1px solid #d9b8b8;border-radius:8px;padding:3px 8px;font-size:11px;position:absolute;bottom:8px;right:8px}#plugin-report-logger .rl-item-delete:hover{background:#ffe4e4}#plugin-report-logger .rl-item[data-active=true]{border-color:var(--brand);background:linear-gradient(150deg, var(--brand-soft), #f4fbfa)}#plugin-report-logger .rl-item-title{margin-bottom:4px;font-weight:600}#plugin-report-logger .rl-meta{color:var(--muted);font-size:12px;line-height:1.4}#plugin-report-logger .rl-workspace{flex-direction:column;display:flex}#plugin-report-logger .rl-workspace-head{justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-form-row{flex-wrap:wrap;gap:8px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-template-meta-row{margin-top:4px}#plugin-report-logger .rl-input,#plugin-report-logger .rl-select,#plugin-report-logger .rl-textarea{width:100%;font:inherit;color:inherit;background:#fff;border:1px solid #c6cfe4;border-radius:10px;padding:9px 10px}#plugin-report-logger .rl-input:focus,#plugin-report-logger .rl-select:focus,#plugin-report-logger .rl-textarea:focus,#plugin-report-logger .rl-button:focus-visible{outline:2px solid var(--focus);outline-offset:2px}#plugin-report-logger .rl-textarea{resize:vertical;min-height:320px;font-family:Cascadia Code,Consolas,monospace;font-size:13px;line-height:1.6}#plugin-report-logger .rl-preview{white-space:pre-wrap;word-break:break-word;background:#fbfcff;border:1px solid #dde3ef;border-radius:10px;min-height:320px;padding:12px;font-size:14px;line-height:1.7}#plugin-report-logger .rl-form-sheet{flex-direction:column;gap:16px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-form-section-title{color:#0e7c7b;border-bottom:2px solid var(--brand-soft);margin-top:12px;margin-bottom:8px;padding:8px 0;font-size:15px;font-weight:700}#plugin-report-logger .rl-form-item{background:#fafbfd;border:1px solid #d5dceb;border-radius:12px;overflow:hidden}#plugin-report-logger .rl-form-item-head{background:linear-gradient(90deg,#f0f4fb 0%,#f8fafe 100%);border-bottom:1px solid #e3e8f3;flex-wrap:wrap;align-items:center;gap:8px;padding:11px 12px;display:flex}#plugin-report-logger .rl-form-item-index{color:#0e7c7b;min-width:28px;font-size:14px;font-weight:700}#plugin-report-logger .rl-form-item-label{color:#27395b;flex:1;font-size:15px;font-weight:600}#plugin-report-logger .rl-image-button{min-width:74px;padding-inline:10px}#plugin-report-logger .rl-hidden-file-input{display:none}#plugin-report-logger .rl-template-draft-head{align-items:center}#plugin-report-logger .rl-template-kind{flex:0 0 88px;width:88px}#plugin-report-logger .rl-template-title-input{flex:1}#plugin-report-logger .rl-form-item-input{resize:vertical;width:100%;min-height:100px;font:inherit;color:inherit;background:#fff;border:0;border-radius:0;padding:12px;line-height:1.6;display:block}#plugin-report-logger .rl-template-value-input{min-height:92px}#plugin-report-logger .rl-image-preview-list{background:#fcfdff;border-top:1px dashed #d8dfec;flex-wrap:wrap;gap:8px;padding:10px 12px 12px;display:flex}#plugin-report-logger .rl-image-preview-item{margin:0}#plugin-report-logger .rl-image-preview-trigger{cursor:pointer;background:0 0;border:0;padding:0}#plugin-report-logger .rl-image-preview-thumb{object-fit:cover;background:#eef2fa;border:1px solid #d5dceb;border-radius:8px;width:86px;height:86px}#plugin-report-logger .rl-image-lightbox{z-index:1200;background:#0f1422b8;justify-content:center;align-items:center;padding:20px;display:flex;position:fixed;inset:0}#plugin-report-logger .rl-image-lightbox-panel{background:#0f1728;border:1px solid #d6dff24d;border-radius:12px;max-width:min(92vw,1100px);max-height:90vh;padding:14px;position:relative}#plugin-report-logger .rl-image-lightbox-close{color:#fff;cursor:pointer;background:#142038e6;border:1px solid #d1dcf580;border-radius:999px;width:36px;height:36px;position:absolute;top:8px;right:8px}#plugin-report-logger .rl-image-lightbox-img{border-radius:8px;max-width:min(88vw,1040px);max-height:calc(90vh - 28px);display:block}#plugin-report-logger .rl-template-kind-note{color:var(--muted);background:#fbfcff;border-top:1px dashed #e3e8f3;padding:12px;font-size:12px}#plugin-report-logger .rl-form-item-input:focus{outline:2px solid var(--focus);outline-offset:-2px;background:#fafbfd}#plugin-report-logger .rl-button{border:1px solid var(--brand);background:linear-gradient(140deg, #169997, var(--brand));color:#fff;cursor:pointer;font:inherit;border-radius:9px;padding:7px 12px;transition:filter .16s}#plugin-report-logger .rl-button:hover{filter:brightness(1.04)}#plugin-report-logger .rl-button.secondary{color:#1d2a44;background:#f2f5fb;border-color:#c4cbdd}#plugin-report-logger .rl-button.secondary[data-active=true]{border-color:var(--accent);color:#773835;background:#ffefee}#plugin-report-logger .rl-icon-button{justify-content:center;align-items:center;width:36px;min-width:36px;height:36px;padding:0;display:inline-flex}#plugin-report-logger .rl-icon{width:18px;height:18px}#plugin-report-logger .rl-warning{color:#704500;background:#fff7e6;border:1px solid #e4bb78;border-radius:10px;margin-bottom:10px;padding:9px}#plugin-report-logger .rl-empty-state{color:#465267;text-align:center;background:#fbfcff;border:1px dashed #c7cede;border-radius:10px;padding:16px}#plugin-report-logger .rl-footer{color:var(--muted);flex-wrap:wrap;gap:10px;margin-top:10px;font-size:12px;display:flex}@media (width<=980px){#plugin-report-logger .rl-shell{grid-template-columns:1fr;min-height:auto}#plugin-report-logger .rl-workspace-head{flex-direction:column}#plugin-report-logger .rl-template-grid-head,#plugin-report-logger .rl-template-grid-row{grid-template-columns:1fr}#plugin-report-logger .rl-template-grid-title{border-bottom:1px solid #e3e8f3;border-right:0}}
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
function j(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function M(...e) {
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
var me = (e, t) => {
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
}, he = o("$ZodError", me), ge = o("$ZodError", me, { Parent: Error });
function N(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function _e(e, t = (e) => e.message) {
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
var ve = (e) => (t, n, r, i) => {
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
}, P = (e) => async (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !0 }) : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => A(e, a, u())));
		throw ie(t, i?.callee), t;
	}
	return o.value;
}, ye = (e) => (t, n, r) => {
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
		error: new (e ?? he)(a.issues.map((e) => A(e, i, u())))
	} : {
		success: !0,
		data: a.value
	};
}, be = /* @__PURE__ */ ye(ge), xe = (e) => async (t, n, r) => {
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
}, Se = /* @__PURE__ */ xe(ge), Ce = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return ve(e)(t, n, i);
}, we = (e) => (t, n, r) => ve(e)(t, n, r), Te = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return P(e)(t, n, i);
}, Ee = (e) => async (t, n, r) => P(e)(t, n, r), F = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return ye(e)(t, n, i);
}, De = (e) => (t, n, r) => ye(e)(t, n, r), Oe = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return xe(e)(t, n, i);
}, ke = (e) => async (t, n, r) => xe(e)(t, n, r), Ae = /^[cC][^\s-]{8,}$/, je = /^[0-9a-z]+$/, Me = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Ne = /^[0-9a-vA-V]{20}$/, Pe = /^[A-Za-z0-9]{27}$/, Fe = /^[a-zA-Z0-9_-]{21}$/, Ie = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Le = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Re = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ze = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Be = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ve() {
	return new RegExp(Be, "u");
}
var He = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ue = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, We = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ge = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ke = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, qe = /^[A-Za-z0-9_-]*$/, Je = /^\+[1-9]\d{6,14}$/, Ye = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Xe = /* @__PURE__ */ RegExp(`^${Ye}$`);
function Ze(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Qe(e) {
	return RegExp(`^${Ze(e)}$`);
}
function $e(e) {
	let t = Ze({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${Ye}T(?:${r})$`);
}
var et = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, tt = /^-?\d+$/, nt = /^-?\d+(?:\.\d+)?$/, rt = /^(?:true|false)$/i, it = /^[^A-Z]*$/, at = /^[^a-z]*$/, I = /* @__PURE__ */ o("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), ot = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, st = /* @__PURE__ */ o("$ZodCheckLessThan", (e, t) => {
	I.init(e, t);
	let n = ot[typeof t.value];
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
}), ct = /* @__PURE__ */ o("$ZodCheckGreaterThan", (e, t) => {
	I.init(e, t);
	let n = ot[typeof t.value];
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
}), lt = /* @__PURE__ */ o("$ZodCheckMultipleOf", (e, t) => {
	I.init(e, t), e._zod.onattach.push((e) => {
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
}), ut = /* @__PURE__ */ o("$ZodCheckNumberFormat", (e, t) => {
	I.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = T[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = tt);
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
}), dt = /* @__PURE__ */ o("$ZodCheckMaxLength", (e, t) => {
	var n;
	I.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !ee(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = j(r);
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
}), ft = /* @__PURE__ */ o("$ZodCheckMinLength", (e, t) => {
	var n;
	I.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !ee(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = j(r);
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
}), pt = /* @__PURE__ */ o("$ZodCheckLengthEquals", (e, t) => {
	var n;
	I.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !ee(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = j(r), o = i > t.length;
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
}), mt = /* @__PURE__ */ o("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	I.init(e, t), e._zod.onattach.push((e) => {
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
}), ht = /* @__PURE__ */ o("$ZodCheckRegex", (e, t) => {
	mt.init(e, t), e._zod.check = (n) => {
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
}), gt = /* @__PURE__ */ o("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= it, mt.init(e, t);
}), _t = /* @__PURE__ */ o("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= at, mt.init(e, t);
}), vt = /* @__PURE__ */ o("$ZodCheckIncludes", (e, t) => {
	I.init(e, t);
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
}), yt = /* @__PURE__ */ o("$ZodCheckStartsWith", (e, t) => {
	I.init(e, t);
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
}), bt = /* @__PURE__ */ o("$ZodCheckEndsWith", (e, t) => {
	I.init(e, t);
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
}), xt = /* @__PURE__ */ o("$ZodCheckOverwrite", (e, t) => {
	I.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), St = class {
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
}, Ct = {
	major: 4,
	minor: 3,
	patch: 6
}, L = /* @__PURE__ */ o("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ct;
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
				let n = be(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return Se(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), wt = /* @__PURE__ */ o("$ZodString", (e, t) => {
	L.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? et(e._zod.bag), e._zod.parse = (n, r) => {
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
}), R = /* @__PURE__ */ o("$ZodStringFormat", (e, t) => {
	mt.init(e, t), wt.init(e, t);
}), Tt = /* @__PURE__ */ o("$ZodGUID", (e, t) => {
	t.pattern ??= Le, R.init(e, t);
}), Et = /* @__PURE__ */ o("$ZodUUID", (e, t) => {
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
		t.pattern ??= Re(e);
	} else t.pattern ??= Re();
	R.init(e, t);
}), Dt = /* @__PURE__ */ o("$ZodEmail", (e, t) => {
	t.pattern ??= ze, R.init(e, t);
}), Ot = /* @__PURE__ */ o("$ZodURL", (e, t) => {
	R.init(e, t), e._zod.check = (n) => {
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
}), kt = /* @__PURE__ */ o("$ZodEmoji", (e, t) => {
	t.pattern ??= Ve(), R.init(e, t);
}), At = /* @__PURE__ */ o("$ZodNanoID", (e, t) => {
	t.pattern ??= Fe, R.init(e, t);
}), jt = /* @__PURE__ */ o("$ZodCUID", (e, t) => {
	t.pattern ??= Ae, R.init(e, t);
}), Mt = /* @__PURE__ */ o("$ZodCUID2", (e, t) => {
	t.pattern ??= je, R.init(e, t);
}), Nt = /* @__PURE__ */ o("$ZodULID", (e, t) => {
	t.pattern ??= Me, R.init(e, t);
}), Pt = /* @__PURE__ */ o("$ZodXID", (e, t) => {
	t.pattern ??= Ne, R.init(e, t);
}), Ft = /* @__PURE__ */ o("$ZodKSUID", (e, t) => {
	t.pattern ??= Pe, R.init(e, t);
}), It = /* @__PURE__ */ o("$ZodISODateTime", (e, t) => {
	t.pattern ??= $e(t), R.init(e, t);
}), Lt = /* @__PURE__ */ o("$ZodISODate", (e, t) => {
	t.pattern ??= Xe, R.init(e, t);
}), Rt = /* @__PURE__ */ o("$ZodISOTime", (e, t) => {
	t.pattern ??= Qe(t), R.init(e, t);
}), zt = /* @__PURE__ */ o("$ZodISODuration", (e, t) => {
	t.pattern ??= Ie, R.init(e, t);
}), Bt = /* @__PURE__ */ o("$ZodIPv4", (e, t) => {
	t.pattern ??= He, R.init(e, t), e._zod.bag.format = "ipv4";
}), Vt = /* @__PURE__ */ o("$ZodIPv6", (e, t) => {
	t.pattern ??= Ue, R.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Ht = /* @__PURE__ */ o("$ZodCIDRv4", (e, t) => {
	t.pattern ??= We, R.init(e, t);
}), Ut = /* @__PURE__ */ o("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Ge, R.init(e, t), e._zod.check = (n) => {
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
function Wt(e) {
	if (e === "") return !0;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Gt = /* @__PURE__ */ o("$ZodBase64", (e, t) => {
	t.pattern ??= Ke, R.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Wt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Kt(e) {
	if (!qe.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Wt(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var qt = /* @__PURE__ */ o("$ZodBase64URL", (e, t) => {
	t.pattern ??= qe, R.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		Kt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Jt = /* @__PURE__ */ o("$ZodE164", (e, t) => {
	t.pattern ??= Je, R.init(e, t);
});
function Yt(e, t = null) {
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
var Xt = /* @__PURE__ */ o("$ZodJWT", (e, t) => {
	R.init(e, t), e._zod.check = (n) => {
		Yt(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zt = /* @__PURE__ */ o("$ZodNumber", (e, t) => {
	L.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? nt, e._zod.parse = (n, r) => {
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
}), Qt = /* @__PURE__ */ o("$ZodNumberFormat", (e, t) => {
	ut.init(e, t), Zt.init(e, t);
}), $t = /* @__PURE__ */ o("$ZodBoolean", (e, t) => {
	L.init(e, t), e._zod.pattern = rt, e._zod.parse = (n, r) => {
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
}), en = /* @__PURE__ */ o("$ZodUnknown", (e, t) => {
	L.init(e, t), e._zod.parse = (e) => e;
}), tn = /* @__PURE__ */ o("$ZodNever", (e, t) => {
	L.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function nn(e, t, n) {
	e.issues.length && t.issues.push(...O(n, e.issues)), t.value[n] = e.value;
}
var rn = /* @__PURE__ */ o("$ZodArray", (e, t) => {
	L.init(e, t), e._zod.parse = (n, r) => {
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
			s instanceof Promise ? a.push(s.then((t) => nn(t, n, e))) : nn(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function an(e, t, n, r, i) {
	if (e.issues.length) {
		if (i && !(n in r)) return;
		t.issues.push(...O(n, e.issues));
	}
	e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function on(e) {
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
function sn(e, t, n, r, i, a) {
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
		a instanceof Promise ? e.push(a.then((e) => an(e, n, i, t, u))) : an(a, n, i, t, u);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var cn = /* @__PURE__ */ o("$ZodObject", (e, t) => {
	if (L.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = p(() => on(t));
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
			i instanceof Promise ? c.push(i.then((n) => an(n, t, e, s, r))) : an(i, t, e, s, r);
		}
		return i ? sn(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), ln = /* @__PURE__ */ o("$ZodObjectJIT", (e, t) => {
	cn.init(e, t);
	let n = e._zod.parse, r = p(() => on(t)), i = (e) => {
		let t = new St([
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
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), l = a(l, f), u ? sn([], p, l, f, d, e) : l) : n(l, f) : (l.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), l);
	};
});
function un(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !D(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => A(e, r, u())))
	}), t);
}
var dn = /* @__PURE__ */ o("$ZodUnion", (e, t) => {
	L.init(e, t), g(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), g(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), g(e._zod, "values", () => {
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
		return o ? Promise.all(s).then((t) => un(t, i, e, a)) : un(s, i, e, a);
	};
}), fn = /* @__PURE__ */ o("$ZodIntersection", (e, t) => {
	L.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => mn(e, t, n)) : mn(e, i, a);
	};
});
function pn(e, t) {
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
			let r = pn(e[n], t[n]);
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
			let i = e[r], a = t[r], o = pn(i, a);
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
function mn(e, t, n) {
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
	let o = pn(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var hn = /* @__PURE__ */ o("$ZodEnum", (e, t) => {
	L.init(e, t);
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
}), gn = /* @__PURE__ */ o("$ZodLiteral", (e, t) => {
	if (L.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
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
}), _n = /* @__PURE__ */ o("$ZodTransform", (e, t) => {
	L.init(e, t), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new c(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new s();
		return n.value = i, n;
	};
});
function vn(e, t) {
	return e.issues.length && t === void 0 ? {
		issues: [],
		value: void 0
	} : e;
}
var yn = /* @__PURE__ */ o("$ZodOptional", (e, t) => {
	L.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", g(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${te(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((t) => vn(t, e.value)) : vn(r, e.value);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), bn = /* @__PURE__ */ o("$ZodExactOptional", (e, t) => {
	yn.init(e, t), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), xn = /* @__PURE__ */ o("$ZodNullable", (e, t) => {
	L.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${te(e.source)}|null)$`) : void 0;
	}), g(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Sn = /* @__PURE__ */ o("$ZodDefault", (e, t) => {
	L.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Cn(e, t)) : Cn(r, t);
	};
});
function Cn(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var wn = /* @__PURE__ */ o("$ZodPrefault", (e, t) => {
	L.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Tn = /* @__PURE__ */ o("$ZodNonOptional", (e, t) => {
	L.init(e, t), g(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => En(t, e)) : En(i, e);
	};
});
function En(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var Dn = /* @__PURE__ */ o("$ZodCatch", (e, t) => {
	L.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
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
}), On = /* @__PURE__ */ o("$ZodPipe", (e, t) => {
	L.init(e, t), g(e._zod, "values", () => t.in._zod.values), g(e._zod, "optin", () => t.in._zod.optin), g(e._zod, "optout", () => t.out._zod.optout), g(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => kn(e, t.in, n)) : kn(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => kn(e, t.out, n)) : kn(r, t.out, n);
	};
});
function kn(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var An = /* @__PURE__ */ o("$ZodReadonly", (e, t) => {
	L.init(e, t), g(e._zod, "propValues", () => t.innerType._zod.propValues), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "optin", () => t.innerType?._zod?.optin), g(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(jn) : jn(r);
	};
});
function jn(e) {
	return e.value = Object.freeze(e.value), e;
}
var Mn = /* @__PURE__ */ o("$ZodCustom", (e, t) => {
	I.init(e, t), L.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Nn(t, n, r, e));
		Nn(i, n, r, e);
	};
});
function Nn(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(M(e));
	}
}
//#endregion
//#region node_modules/zod/v4/core/registries.js
var Pn, Fn = class {
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
function In() {
	return new Fn();
}
(Pn = globalThis).__zod_globalRegistry ?? (Pn.__zod_globalRegistry = In());
var Ln = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function Rn(e, t) {
	return new e({
		type: "string",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function zn(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Bn(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
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
		version: "v4",
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
		version: "v6",
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
		version: "v7",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Gn(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Kn(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function qn(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Jn(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Yn(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Xn(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Zn(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Qn(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function $n(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function er(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function tr(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function nr(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function rr(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ir(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ar(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function or(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function sr(e, t) {
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
function cr(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function lr(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ur(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function dr(e, t) {
	return new e({
		type: "number",
		checks: [],
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fr(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function pr(e, t) {
	return new e({
		type: "boolean",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function mr(e) {
	return new e({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function hr(e, t) {
	return new e({
		type: "never",
		...w(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function gr(e, t) {
	return new st({
		check: "less_than",
		...w(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _r(e, t) {
	return new st({
		check: "less_than",
		...w(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function vr(e, t) {
	return new ct({
		check: "greater_than",
		...w(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function yr(e, t) {
	return new ct({
		check: "greater_than",
		...w(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function br(e, t) {
	return new lt({
		check: "multiple_of",
		...w(t),
		value: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function xr(e, t) {
	return new dt({
		check: "max_length",
		...w(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Sr(e, t) {
	return new ft({
		check: "min_length",
		...w(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Cr(e, t) {
	return new pt({
		check: "length_equals",
		...w(t),
		length: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function wr(e, t) {
	return new ht({
		check: "string_format",
		format: "regex",
		...w(t),
		pattern: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Tr(e) {
	return new gt({
		check: "string_format",
		format: "lowercase",
		...w(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Er(e) {
	return new _t({
		check: "string_format",
		format: "uppercase",
		...w(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Dr(e, t) {
	return new vt({
		check: "string_format",
		format: "includes",
		...w(t),
		includes: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Or(e, t) {
	return new yt({
		check: "string_format",
		format: "starts_with",
		...w(t),
		prefix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function kr(e, t) {
	return new bt({
		check: "string_format",
		format: "ends_with",
		...w(t),
		suffix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ar(e) {
	return new xt({
		check: "overwrite",
		tx: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function jr(e) {
	return /* @__PURE__ */ Ar((t) => t.normalize(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Mr() {
	return /* @__PURE__ */ Ar((e) => e.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function Nr() {
	return /* @__PURE__ */ Ar((e) => e.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Pr() {
	return /* @__PURE__ */ Ar((e) => e.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Fr() {
	return /* @__PURE__ */ Ar((e) => re(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Ir(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...w(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Lr(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...w(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Rr(e) {
	let t = /* @__PURE__ */ zr((n) => (n.addIssue = (e) => {
		if (typeof e == "string") n.issues.push(M(e, n.value, t._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= n.value, r.inst ??= t, r.continue ??= !t._zod.def.abort, n.issues.push(M(r));
		}
	}, e(n.value, n)));
	return t;
}
/* @__NO_SIDE_EFFECTS__ */
function zr(e, t) {
	let n = new I({
		check: "custom",
		...w(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
function Br(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Ln,
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
function z(e, t, n = {
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
		a && (o.ref ||= a, z(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && B(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && o.schema._prefault && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Vr(e, t) {
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
function Hr(e, t) {
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
					input: Wr(t, "input", e.processors),
					output: Wr(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function B(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return B(r.element, n);
	if (r.type === "set") return B(r.valueType, n);
	if (r.type === "lazy") return B(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return B(r.innerType, n);
	if (r.type === "intersection") return B(r.left, n) || B(r.right, n);
	if (r.type === "record" || r.type === "map") return B(r.keyType, n) || B(r.valueType, n);
	if (r.type === "pipe") return B(r.in, n) || B(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (B(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (B(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (B(e, n)) return !0;
		return !!(r.rest && B(r.rest, n));
	}
	return !1;
}
var Ur = (e, t = {}) => (n) => {
	let r = Br({
		...n,
		processors: t
	});
	return z(e, r), Vr(r, e), Hr(r, e);
}, Wr = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Br({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return z(e, o), Vr(o, e), Hr(o, e);
}, Gr = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Kr = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Gr[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, qr = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	typeof s == "string" && s.includes("int") ? i.type = "integer" : i.type = "number", typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u), typeof a == "number" && (i.minimum = a, typeof u == "number" && t.target !== "draft-04" && (u >= a ? delete i.minimum : delete i.exclusiveMinimum)), typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l), typeof o == "number" && (i.maximum = o, typeof l == "number" && t.target !== "draft-04" && (l <= o ? delete i.maximum : delete i.exclusiveMaximum)), typeof c == "number" && (i.multipleOf = c);
}, Jr = (e, t, n, r) => {
	n.type = "boolean";
}, Yr = (e, t, n, r) => {
	n.not = {};
}, Xr = (e, t, n, r) => {
	let i = e._zod.def, a = d(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Zr = (e, t, n, r) => {
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
}, Qr = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, $r = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, ei = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = z(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, ti = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = z(o[e], t, {
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
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = z(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, ni = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => z(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, ri = (e, t, n, r) => {
	let i = e._zod.def, a = z(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = z(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, ii = (e, t, n, r) => {
	let i = e._zod.def, a = z(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, ai = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, oi = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, si = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, ci = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, li = (e, t, n, r) => {
	let i = e._zod.def, a = t.io === "input" ? i.in._zod.def.type === "transform" ? i.out : i.in : i.out;
	z(a, t, r);
	let o = t.seen.get(e);
	o.ref = a;
}, ui = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, di = (e, t, n, r) => {
	let i = e._zod.def;
	z(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, fi = /* @__PURE__ */ o("ZodISODateTime", (e, t) => {
	It.init(e, t), W.init(e, t);
});
function pi(e) {
	return /* @__PURE__ */ sr(fi, e);
}
var mi = /* @__PURE__ */ o("ZodISODate", (e, t) => {
	Lt.init(e, t), W.init(e, t);
});
function hi(e) {
	return /* @__PURE__ */ cr(mi, e);
}
var gi = /* @__PURE__ */ o("ZodISOTime", (e, t) => {
	Rt.init(e, t), W.init(e, t);
});
function _i(e) {
	return /* @__PURE__ */ lr(gi, e);
}
var vi = /* @__PURE__ */ o("ZodISODuration", (e, t) => {
	zt.init(e, t), W.init(e, t);
});
function yi(e) {
	return /* @__PURE__ */ ur(vi, e);
}
//#endregion
//#region node_modules/zod/v4/classic/errors.js
var bi = (e, t) => {
	he.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => _e(e, t) },
		flatten: { value: (t) => N(e, t) },
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
o("ZodError", bi);
var V = o("ZodError", bi, { Parent: Error }), xi = /* @__PURE__ */ ve(V), Si = /* @__PURE__ */ P(V), Ci = /* @__PURE__ */ ye(V), wi = /* @__PURE__ */ xe(V), Ti = /* @__PURE__ */ Ce(V), Ei = /* @__PURE__ */ we(V), Di = /* @__PURE__ */ Te(V), Oi = /* @__PURE__ */ Ee(V), ki = /* @__PURE__ */ F(V), Ai = /* @__PURE__ */ De(V), ji = /* @__PURE__ */ Oe(V), Mi = /* @__PURE__ */ ke(V), H = /* @__PURE__ */ o("ZodType", (e, t) => (L.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Wr(e, "input"),
	output: Wr(e, "output")
} }), e.toJSONSchema = Ur(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(v(t, { checks: [...t.checks ?? [], ...n.map((e) => typeof e == "function" ? { _zod: {
	check: e,
	def: { check: "custom" },
	onattach: []
} } : e)] }), { parent: !0 }), e.with = e.check, e.clone = (t, n) => C(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.parse = (t, n) => xi(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Ci(e, t, n), e.parseAsync = async (t, n) => Si(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => wi(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Ti(e, t, n), e.decode = (t, n) => Ei(e, t, n), e.encodeAsync = async (t, n) => Di(e, t, n), e.decodeAsync = async (t, n) => Oi(e, t, n), e.safeEncode = (t, n) => ki(e, t, n), e.safeDecode = (t, n) => Ai(e, t, n), e.safeEncodeAsync = async (t, n) => ji(e, t, n), e.safeDecodeAsync = async (t, n) => Mi(e, t, n), e.refine = (t, n) => e.check(Ba(t, n)), e.superRefine = (t) => e.check(Va(t)), e.overwrite = (t) => e.check(/* @__PURE__ */ Ar(t)), e.optional = () => Sa(e), e.exactOptional = () => wa(e), e.nullable = () => Ea(e), e.nullish = () => Sa(Ea(e)), e.nonoptional = (t) => Ma(e, t), e.array = () => K(e), e.or = (t) => fa([e, t]), e.and = (t) => ma(e, t), e.transform = (t) => Ia(e, ba(t)), e.default = (t) => Oa(e, t), e.prefault = (t) => Aa(e, t), e.catch = (t) => Pa(e, t), e.pipe = (t) => Ia(e, t), e.readonly = () => Ra(e), e.describe = (t) => {
	let n = e.clone();
	return Ln.add(n, { description: t }), n;
}, Object.defineProperty(e, "description", {
	get() {
		return Ln.get(e)?.description;
	},
	configurable: !0
}), e.meta = (...t) => {
	if (t.length === 0) return Ln.get(e);
	let n = e.clone();
	return Ln.add(n, t[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (t) => t(e), e)), Ni = /* @__PURE__ */ o("_ZodString", (e, t) => {
	wt.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Kr(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...t) => e.check(/* @__PURE__ */ wr(...t)), e.includes = (...t) => e.check(/* @__PURE__ */ Dr(...t)), e.startsWith = (...t) => e.check(/* @__PURE__ */ Or(...t)), e.endsWith = (...t) => e.check(/* @__PURE__ */ kr(...t)), e.min = (...t) => e.check(/* @__PURE__ */ Sr(...t)), e.max = (...t) => e.check(/* @__PURE__ */ xr(...t)), e.length = (...t) => e.check(/* @__PURE__ */ Cr(...t)), e.nonempty = (...t) => e.check(/* @__PURE__ */ Sr(1, ...t)), e.lowercase = (t) => e.check(/* @__PURE__ */ Tr(t)), e.uppercase = (t) => e.check(/* @__PURE__ */ Er(t)), e.trim = () => e.check(/* @__PURE__ */ Mr()), e.normalize = (...t) => e.check(/* @__PURE__ */ jr(...t)), e.toLowerCase = () => e.check(/* @__PURE__ */ Nr()), e.toUpperCase = () => e.check(/* @__PURE__ */ Pr()), e.slugify = () => e.check(/* @__PURE__ */ Fr());
}), Pi = /* @__PURE__ */ o("ZodString", (e, t) => {
	wt.init(e, t), Ni.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ zn(Fi, t)), e.url = (t) => e.check(/* @__PURE__ */ Gn(Ri, t)), e.jwt = (t) => e.check(/* @__PURE__ */ or($i, t)), e.emoji = (t) => e.check(/* @__PURE__ */ Kn(zi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Bn(Ii, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Vn(Li, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ Hn(Li, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ Un(Li, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Wn(Li, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ qn(Bi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Bn(Ii, t)), e.cuid = (t) => e.check(/* @__PURE__ */ Jn(Vi, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ Yn(Hi, t)), e.ulid = (t) => e.check(/* @__PURE__ */ Xn(Ui, t)), e.base64 = (t) => e.check(/* @__PURE__ */ rr(Xi, t)), e.base64url = (t) => e.check(/* @__PURE__ */ ir(Zi, t)), e.xid = (t) => e.check(/* @__PURE__ */ Zn(Wi, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ Qn(Gi, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ $n(Ki, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ er(qi, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ tr(Ji, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ nr(Yi, t)), e.e164 = (t) => e.check(/* @__PURE__ */ ar(Qi, t)), e.datetime = (t) => e.check(pi(t)), e.date = (t) => e.check(hi(t)), e.time = (t) => e.check(_i(t)), e.duration = (t) => e.check(yi(t));
});
function U(e) {
	return /* @__PURE__ */ Rn(Pi, e);
}
var W = /* @__PURE__ */ o("ZodStringFormat", (e, t) => {
	R.init(e, t), Ni.init(e, t);
}), Fi = /* @__PURE__ */ o("ZodEmail", (e, t) => {
	Dt.init(e, t), W.init(e, t);
}), Ii = /* @__PURE__ */ o("ZodGUID", (e, t) => {
	Tt.init(e, t), W.init(e, t);
}), Li = /* @__PURE__ */ o("ZodUUID", (e, t) => {
	Et.init(e, t), W.init(e, t);
}), Ri = /* @__PURE__ */ o("ZodURL", (e, t) => {
	Ot.init(e, t), W.init(e, t);
}), zi = /* @__PURE__ */ o("ZodEmoji", (e, t) => {
	kt.init(e, t), W.init(e, t);
}), Bi = /* @__PURE__ */ o("ZodNanoID", (e, t) => {
	At.init(e, t), W.init(e, t);
}), Vi = /* @__PURE__ */ o("ZodCUID", (e, t) => {
	jt.init(e, t), W.init(e, t);
}), Hi = /* @__PURE__ */ o("ZodCUID2", (e, t) => {
	Mt.init(e, t), W.init(e, t);
}), Ui = /* @__PURE__ */ o("ZodULID", (e, t) => {
	Nt.init(e, t), W.init(e, t);
}), Wi = /* @__PURE__ */ o("ZodXID", (e, t) => {
	Pt.init(e, t), W.init(e, t);
}), Gi = /* @__PURE__ */ o("ZodKSUID", (e, t) => {
	Ft.init(e, t), W.init(e, t);
}), Ki = /* @__PURE__ */ o("ZodIPv4", (e, t) => {
	Bt.init(e, t), W.init(e, t);
}), qi = /* @__PURE__ */ o("ZodIPv6", (e, t) => {
	Vt.init(e, t), W.init(e, t);
}), Ji = /* @__PURE__ */ o("ZodCIDRv4", (e, t) => {
	Ht.init(e, t), W.init(e, t);
}), Yi = /* @__PURE__ */ o("ZodCIDRv6", (e, t) => {
	Ut.init(e, t), W.init(e, t);
}), Xi = /* @__PURE__ */ o("ZodBase64", (e, t) => {
	Gt.init(e, t), W.init(e, t);
}), Zi = /* @__PURE__ */ o("ZodBase64URL", (e, t) => {
	qt.init(e, t), W.init(e, t);
}), Qi = /* @__PURE__ */ o("ZodE164", (e, t) => {
	Jt.init(e, t), W.init(e, t);
}), $i = /* @__PURE__ */ o("ZodJWT", (e, t) => {
	Xt.init(e, t), W.init(e, t);
}), ea = /* @__PURE__ */ o("ZodNumber", (e, t) => {
	Zt.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => qr(e, t, n, r), e.gt = (t, n) => e.check(/* @__PURE__ */ vr(t, n)), e.gte = (t, n) => e.check(/* @__PURE__ */ yr(t, n)), e.min = (t, n) => e.check(/* @__PURE__ */ yr(t, n)), e.lt = (t, n) => e.check(/* @__PURE__ */ gr(t, n)), e.lte = (t, n) => e.check(/* @__PURE__ */ _r(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ _r(t, n)), e.int = (t) => e.check(na(t)), e.safe = (t) => e.check(na(t)), e.positive = (t) => e.check(/* @__PURE__ */ vr(0, t)), e.nonnegative = (t) => e.check(/* @__PURE__ */ yr(0, t)), e.negative = (t) => e.check(/* @__PURE__ */ gr(0, t)), e.nonpositive = (t) => e.check(/* @__PURE__ */ _r(0, t)), e.multipleOf = (t, n) => e.check(/* @__PURE__ */ br(t, n)), e.step = (t, n) => e.check(/* @__PURE__ */ br(t, n)), e.finite = () => e;
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function G(e) {
	return /* @__PURE__ */ dr(ea, e);
}
var ta = /* @__PURE__ */ o("ZodNumberFormat", (e, t) => {
	Qt.init(e, t), ea.init(e, t);
});
function na(e) {
	return /* @__PURE__ */ fr(ta, e);
}
var ra = /* @__PURE__ */ o("ZodBoolean", (e, t) => {
	$t.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Jr(e, t, n, r);
});
function ia(e) {
	return /* @__PURE__ */ pr(ra, e);
}
var aa = /* @__PURE__ */ o("ZodUnknown", (e, t) => {
	en.init(e, t), H.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function oa() {
	return /* @__PURE__ */ mr(aa);
}
var sa = /* @__PURE__ */ o("ZodNever", (e, t) => {
	tn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Yr(e, t, n, r);
});
function ca(e) {
	return /* @__PURE__ */ hr(sa, e);
}
var la = /* @__PURE__ */ o("ZodArray", (e, t) => {
	rn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ei(e, t, n, r), e.element = t.element, e.min = (t, n) => e.check(/* @__PURE__ */ Sr(t, n)), e.nonempty = (t) => e.check(/* @__PURE__ */ Sr(1, t)), e.max = (t, n) => e.check(/* @__PURE__ */ xr(t, n)), e.length = (t, n) => e.check(/* @__PURE__ */ Cr(t, n)), e.unwrap = () => e.element;
});
function K(e, t) {
	return /* @__PURE__ */ Ir(la, e, t);
}
var ua = /* @__PURE__ */ o("ZodObject", (e, t) => {
	ln.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ti(e, t, n, r), g(e, "shape", () => t.shape), e.keyof = () => ga(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({
		...e._zod.def,
		catchall: t
	}), e.passthrough = () => e.clone({
		...e._zod.def,
		catchall: oa()
	}), e.loose = () => e.clone({
		...e._zod.def,
		catchall: oa()
	}), e.strict = () => e.clone({
		...e._zod.def,
		catchall: ca()
	}), e.strip = () => e.clone({
		...e._zod.def,
		catchall: void 0
	}), e.extend = (t) => ue(e, t), e.safeExtend = (t) => de(e, t), e.merge = (t) => fe(e, t), e.pick = (t) => ce(e, t), e.omit = (t) => le(e, t), e.partial = (...t) => pe(xa, e, t[0]), e.required = (...t) => E(ja, e, t[0]);
});
function q(e, t) {
	return new ua({
		type: "object",
		shape: e ?? {},
		...w(t)
	});
}
var da = /* @__PURE__ */ o("ZodUnion", (e, t) => {
	dn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ni(e, t, n, r), e.options = t.options;
});
function fa(e, t) {
	return new da({
		type: "union",
		options: e,
		...w(t)
	});
}
var pa = /* @__PURE__ */ o("ZodIntersection", (e, t) => {
	fn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ri(e, t, n, r);
});
function ma(e, t) {
	return new pa({
		type: "intersection",
		left: e,
		right: t
	});
}
var ha = /* @__PURE__ */ o("ZodEnum", (e, t) => {
	hn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xr(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new ha({
			...t,
			checks: [],
			...w(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new ha({
			...t,
			checks: [],
			...w(r),
			entries: i
		});
	};
});
function ga(e, t) {
	return new ha({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...w(t)
	});
}
var _a = /* @__PURE__ */ o("ZodLiteral", (e, t) => {
	gn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Zr(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function va(e, t) {
	return new _a({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...w(t)
	});
}
var ya = /* @__PURE__ */ o("ZodTransform", (e, t) => {
	_n.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => $r(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new c(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(M(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(M(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function ba(e) {
	return new ya({
		type: "transform",
		transform: e
	});
}
var xa = /* @__PURE__ */ o("ZodOptional", (e, t) => {
	yn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => di(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Sa(e) {
	return new xa({
		type: "optional",
		innerType: e
	});
}
var Ca = /* @__PURE__ */ o("ZodExactOptional", (e, t) => {
	bn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => di(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function wa(e) {
	return new Ca({
		type: "optional",
		innerType: e
	});
}
var Ta = /* @__PURE__ */ o("ZodNullable", (e, t) => {
	xn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ii(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ea(e) {
	return new Ta({
		type: "nullable",
		innerType: e
	});
}
var Da = /* @__PURE__ */ o("ZodDefault", (e, t) => {
	Sn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => oi(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Oa(e, t) {
	return new Da({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : b(t);
		}
	});
}
var ka = /* @__PURE__ */ o("ZodPrefault", (e, t) => {
	wn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => si(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Aa(e, t) {
	return new ka({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : b(t);
		}
	});
}
var ja = /* @__PURE__ */ o("ZodNonOptional", (e, t) => {
	Tn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ai(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ma(e, t) {
	return new ja({
		type: "nonoptional",
		innerType: e,
		...w(t)
	});
}
var Na = /* @__PURE__ */ o("ZodCatch", (e, t) => {
	Dn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ci(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Pa(e, t) {
	return new Na({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var Fa = /* @__PURE__ */ o("ZodPipe", (e, t) => {
	On.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => li(e, t, n, r), e.in = t.in, e.out = t.out;
});
function Ia(e, t) {
	return new Fa({
		type: "pipe",
		in: e,
		out: t
	});
}
var La = /* @__PURE__ */ o("ZodReadonly", (e, t) => {
	An.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ui(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ra(e) {
	return new La({
		type: "readonly",
		innerType: e
	});
}
var za = /* @__PURE__ */ o("ZodCustom", (e, t) => {
	Mn.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qr(e, t, n, r);
});
function Ba(e, t = {}) {
	return /* @__PURE__ */ Lr(za, e, t);
}
function Va(e) {
	return /* @__PURE__ */ Rr(e);
}
//#endregion
//#region src/schemas.ts
var Ha = "tasks", J = "1.1.0", Y = "report-logger", Ua = "TASKBOARD_TASK_SELECTED", Wa = "TASKBOARD_TASK_UPDATED", Ga = "CASE_REPORT_LINK_CREATED", Ka = "CASE_REPORT_UPDATED", qa = "CASE_REPORT_TEMPLATE_IMPORTED", Ja = "TASK_COUNT_CHANGED", Ya = q({
	id: U().min(1),
	title: U().default("Untitled task"),
	status: U().optional(),
	assignee: U().optional(),
	updatedAt: G().optional()
}), Xa = q({
	id: U().min(1),
	type: ga([
		"created",
		"updated",
		"linked",
		"rebound",
		"conflict",
		"decision",
		"sync"
	]),
	message: U().min(1),
	at: G(),
	by: U().default("system")
}), Za = q({
	id: U().min(1),
	taskId: U().nullable().optional(),
	templateId: U().nullable().optional(),
	title: U().min(1),
	content: U().default(""),
	status: ga([
		"draft",
		"active",
		"blocked",
		"closed"
	]).default("draft"),
	tags: K(U()).default([]),
	timeline: K(Xa).default([]),
	updatedAt: G(),
	taskSnapshot: Ya.nullable().optional(),
	taskChanged: ia().optional()
}), Qa = q({
	taskId: U().min(1),
	reportId: U().min(1),
	linkedAt: G(),
	linkedBy: U().default("anonymous"),
	sourcePluginId: U().default(Y),
	orphaned: ia().default(!1),
	history: K(q({
		reportId: U().min(1),
		linkedAt: G(),
		linkedBy: U()
	})).default([])
}), $a = q({
	id: U().min(1),
	name: U().min(1),
	category: U().default("general"),
	content: U().min(1),
	createdAt: G(),
	updatedAt: G(),
	version: U().min(1)
}), eo = q({
	reportId: U().nullable().default(null),
	content: U().default(""),
	autosavePending: ia().default(!1),
	updatedAt: G().default(0)
}), to = q({
	lastSyncAt: G().default(0),
	sourcePlugin: U().default(""),
	lastError: U().default(""),
	retries: G().int().nonnegative().default(0)
}), no = q({
	version: va(J),
	upgrades: K(q({
		from: U(),
		to: U(),
		at: G()
	})).default([])
}), ro = q({
	version: va(J),
	taskReportLinks: K(Qa).default([]),
	reports: K(Za).default([]),
	templates: K($a).default([]),
	taskSnapshotCache: K(Ya).default([]),
	editorDraft: eo.default({
		reportId: null,
		content: "",
		autosavePending: !1,
		updatedAt: 0
	}),
	syncMeta: to.default({
		lastSyncAt: 0,
		sourcePlugin: "",
		lastError: "",
		retries: 0
	}),
	migrationMeta: no.default({
		version: J,
		upgrades: []
	})
}), io = q({ taskId: U().min(1) }), ao = q({ task: Ya }), oo = q({
	reportId: U().min(1),
	updatedAt: G(),
	sourcePluginId: U().default(Y)
}), so = q({
	taskId: U().min(1),
	reportId: U().min(1),
	sourcePluginId: U().default(Y)
}), co = q({
	templateId: U().min(1),
	name: U().min(1),
	sourcePluginId: U().default(Y)
}), lo = Date.now(), uo = [{
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
	createdAt: lo,
	updatedAt: lo,
	version: J
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
	createdAt: lo,
	updatedAt: lo,
	version: J
}];
function fo() {
	return {
		version: J,
		taskReportLinks: [],
		reports: [],
		templates: [...uo],
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
			version: J,
			upgrades: []
		}
	};
}
//#endregion
//#region src/utils.ts
function X(e) {
	let t = Math.random().toString(36).slice(2, 8);
	return `${e}-${Date.now()}-${t}`;
}
function Z(e, t = 120) {
	if (e == null) return "";
	let n = typeof e == "string" ? e : JSON.stringify(e);
	return n.length > t ? `${n.slice(0, t)}...` : n;
}
function po(e) {
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}
function mo(e) {
	return new Date(e).toLocaleString();
}
function ho(e, t) {
	let n = null, r = null, i = () => {
		r &&= (e(...r), null), n = null;
	};
	return ((...e) => {
		r = e, n === null && (n = window.setTimeout(i, t));
	});
}
//#endregion
//#region src/plugin.tsx
var Q = {
	taskboardTasks: "taskboard.tasks",
	reports: "caseLogger.reports",
	links: "caseLogger.taskReportLinks",
	templates: "caseLogger.templates"
}, go = "report-logger-user", $ = {
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
	templateImportStart: (e) => console.info("[report-logger] template import start", { name: Z(e, 40) }),
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
			let e = po(t);
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
	let t = fo(), n = vo(e);
	if ($.restorePayload(Z(n.value), n.extractedPath), Array.isArray(n.value)) {
		let e = n.value.map((e) => Za.safeParse(e)).filter((e) => e.success).map((e) => e.data);
		return {
			...t,
			reports: e,
			migrationMeta: {
				version: J,
				upgrades: [{
					from: "legacy-array",
					to: J,
					at: Date.now()
				}]
			}
		};
	}
	if (!n.value || typeof n.value != "object") return t;
	let r = n.value, i = r.reports ?? r[Q.reports] ?? r.tasks, a = r.taskReportLinks ?? r[Q.links], o = r.templates ?? r[Q.templates], s = r.taskSnapshotCache ?? r[Q.taskboardTasks], c = yo(i).map((e) => Za.safeParse(e)).filter((e) => e.success).map((e) => e.data), l = yo(a).map((e) => Qa.safeParse(e)).filter((e) => e.success).map((e) => e.data), u = yo(o).map((e) => $a.safeParse(e)).filter((e) => e.success).map((e) => e.data), d = yo(s).map((e) => Ya.safeParse(e)).filter((e) => e.success).map((e) => e.data), f = {
		...t,
		...r,
		reports: c,
		taskReportLinks: l,
		templates: u.length > 0 ? u : [...uo],
		taskSnapshotCache: d,
		migrationMeta: {
			version: J,
			upgrades: [{
				from: String(r.migrationMeta?.version ?? "unknown"),
				to: J,
				at: Date.now()
			}]
		}
	}, p = ro.safeParse(f);
	return p.success ? p.data : t;
}
async function xo(e, t) {
	let n = {
		pluginId: Y,
		version: J,
		timestamp: Date.now(),
		type: "PERSIST",
		payload: t
	};
	await e.storage.save(Ha, n, J);
	let r = _o(e);
	return r?.save ? (await Promise.all([
		r.save(Q.reports, Ha, t.reports, J),
		r.save(Q.links, Ha, t.taskReportLinks, J),
		r.save(Q.templates, Ha, t.templates, J)
	]), "indexeddb-bridge") : "storage";
}
async function So(e) {
	$.restoreStart();
	let t = bo(await e.storage.get(Ha)), n = _o(e);
	if (n?.get) try {
		return t.taskSnapshotCache = yo(await n.get(Q.taskboardTasks, Ha)).map((e) => Ya.safeParse(e)).filter((e) => e.success).map((e) => e.data), t.syncMeta.lastSyncAt = Date.now(), t.syncMeta.sourcePlugin = "taskboard", {
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
	let t = e.split("\n"), n = [], r = null, i = "", a = [], o = () => {
		r && (n.push({
			id: X("tpl-item"),
			kind: r,
			title: i,
			value: r === "##" ? "" : a.join("\n").trim()
		}), r = null, i = "", a = []);
	};
	for (let e of t) {
		if (e.startsWith("### ")) {
			o(), r = "###", i = e.slice(4).trim();
			continue;
		}
		if (e.startsWith("## ") && !e.startsWith("### ")) {
			o(), r = "##", i = e.slice(3).trim();
			continue;
		}
		if (e.startsWith("# ") && !e.startsWith("## ") && !e.startsWith("### ")) {
			o(), r = "#", i = e.slice(2).trim();
			continue;
		}
		r && r !== "##" && a.push(e);
	}
	return o(), n;
}
function Oo(e) {
	let t = wo(e).fields.find((e) => !e.section);
	return t ? t.value.split("\n").map((e) => e.trim()).find((e) => e.length > 0) ?? (t.title.trim() || null) : null;
}
function ko(e, t, n = "Case Report") {
	let r = Oo(t), i = [e.trim(), r?.trim() ?? ""].filter(Boolean);
	return i.length > 0 ? i.join(" - ") : n;
}
function Ao(e) {
	let t = [], n = /!\[([^\]]*)\]\(([^)]+)\)/g, r = n.exec(e);
	for (; r;) t.push({
		alt: r[1] || "image",
		src: r[2]
	}), r = n.exec(e);
	return t;
}
var jo = /!\[[^\]]*\]\([^)]+\)/g;
function Mo(e) {
	let t = 0;
	return e.replace(jo, () => (t += 1, `^圖片${t}^`));
}
function No(e, t) {
	let n = Array.from(e.matchAll(jo)).map((e) => e[0]);
	return n.length === 0 ? t : t.replace(/圖片(\d+)/g, (e, t) => {
		let r = Number(t) - 1;
		return Number.isNaN(r) || r < 0 || r >= n.length ? e : n[r];
	});
}
function Po(e, t) {
	let n = Array.from(e.matchAll(jo)).map((e, t) => ({
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
function Fo(e) {
	return wo(e).fields.map((e) => `${e.section ?? ""}::${e.title}`);
}
function Io(e, t) {
	let n = Fo(e);
	if (n.length === 0) return null;
	let r = null, i = 0;
	for (let e of t) {
		let t = Fo(e.content);
		if (t.length === 0) continue;
		let a = n.filter((e) => t.includes(e)).length / Math.max(n.length, t.length);
		a > i && (i = a, r = e.id);
	}
	return i >= .5 ? r : null;
}
function Lo(e, t, n, r) {
	let i = n ?? e.length, a = r ?? e.length;
	return `${e.slice(0, i)}${t}${e.slice(a)}`;
}
function Ro({ context: a }) {
	let [o, s] = i([]), [c, l] = i([]), [u, d] = i([]), [f, p] = i([]), [ee, te] = i(null), [m, h] = i(null), [g, _] = i(!1), [v, ne] = i("storage"), [re, ie] = i(""), [y, ae] = i("report"), [oe, b] = i("report"), [x, S] = i("edit"), [C, w] = i(""), [se, T] = i([]), [ce, le] = i("Untitled txt Template"), [ue, de] = i("general"), [fe, pe] = i([]), [E, D] = i(null), [O, k] = i(""), [A, j] = i(!1), [M, me] = i(""), [he, ge] = i([]), [N, _e] = i(null), [ve, P] = i(null), ye = r(!0), be = r("manual"), xe = r({}), Se = r(null), Ce = r(null), we = r(null), Te = r(null), Ee = n(() => f.find((e) => e.id === ee) ?? null, [f, ee]), F = n(() => o.find((e) => e.id === m) ?? null, [o, m]), De = n(() => {
		let e = re.trim().toLowerCase();
		return e ? o.filter((t) => {
			let n = t.title.toLowerCase(), r = t.content.toLowerCase();
			return n.includes(e) || r.includes(e);
		}) : o;
	}, [re, o]), Oe = n(() => wo(O).fields, [O]), ke = () => {
		le("Untitled txt Template"), de("general"), pe([]), D(null);
	}, Ae = () => {
		ke(), b("template");
	}, je = () => {
		pe((e) => [...e, {
			id: X("tpl-item"),
			kind: "###",
			title: "",
			value: ""
		}]);
	}, Me = (e, t) => {
		pe((n) => n.map((n) => n.id === e ? {
			...n,
			...t
		} : n));
	}, Ne = () => {
		let e = Eo(fe), t = Date.now(), n = ce.trim() || "Untitled txt Template", r = ue.trim() || "general";
		if (E) d((i) => i.map((i) => {
			if (i.id !== E) return i;
			let a = {
				...i,
				name: n,
				category: r,
				content: e,
				updatedAt: t,
				version: J
			};
			return $a.parse(a);
		})), a.eventBus.emit(qa, {
			templateId: E,
			name: n,
			sourcePluginId: Y
		});
		else {
			let i = {
				id: X("tpl"),
				name: n,
				category: r,
				content: e,
				createdAt: t,
				updatedAt: t,
				version: J
			}, o = $a.parse(i);
			d((e) => [o, ...e]), a.eventBus.emit(qa, {
				templateId: o.id,
				name: o.name,
				sourcePluginId: Y
			});
		}
		ke(), b("report");
	}, Pe = () => {
		ke(), b("report");
	}, Fe = (e) => {
		let t = u.find((t) => t.id === e);
		t && (le(t.name), de(t.category), pe(Do(t.content)), D(t.id), b("template"));
	}, Ie = (e) => {
		let t = u.find((t) => t.id === e);
		window.confirm(`Delete template "${t?.name ?? "Untitled Template"}"?`) && (d((t) => t.filter((t) => t.id !== e)), s((t) => t.map((t) => t.templateId === e ? {
			...t,
			templateId: null
		} : t)), C === e && w(""), E === e && ke());
	}, Le = () => {
		if (u.length === 0) {
			window.alert("No templates to export.");
			return;
		}
		let e = new Blob([JSON.stringify({
			format: "report-logger-template-bundle",
			version: J,
			exportedAt: Date.now(),
			templates: u
		}, null, 2)], { type: "application/json;charset=utf-8" }), t = URL.createObjectURL(e), n = document.createElement("a");
		n.href = t, n.download = `report-logger-templates-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, n.click(), URL.revokeObjectURL(t);
	}, Re = (e) => {
		if (!e || typeof e != "object") return null;
		let t = e, n = Date.now(), r = {
			id: typeof t.id == "string" && t.id.trim() ? t.id : X("tpl"),
			name: typeof t.name == "string" && t.name.trim() ? t.name : "Imported Template",
			category: typeof t.category == "string" && t.category.trim() ? t.category : "general",
			content: typeof t.content == "string" ? t.content : "",
			createdAt: typeof t.createdAt == "number" ? t.createdAt : n,
			updatedAt: typeof t.updatedAt == "number" ? t.updatedAt : n,
			version: typeof t.version == "string" && t.version.trim() ? t.version : J
		}, i = $a.safeParse(r);
		return i.success ? i.data : null;
	}, ze = async (e) => {
		let t = po(await e.text());
		if (t === null) {
			window.alert("Invalid template file: JSON parse failed.");
			return;
		}
		let n = [];
		if (Array.isArray(t)) n = t;
		else if (t && typeof t == "object") {
			let e = t;
			n = Array.isArray(e.templates) ? e.templates : [t];
		}
		let r = n.map((e) => Re(e)).filter((e) => e !== null);
		if (r.length === 0) {
			window.alert("No valid templates found in file.");
			return;
		}
		let i = [], o = 0;
		d((e) => {
			let t = new Set(e.map((e) => `${e.name}::${e.category}::${e.content}`)), n = /* @__PURE__ */ new Set();
			for (let e of r) {
				let r = `${e.name}::${e.category}::${e.content}`;
				if (t.has(r) || n.has(r)) {
					o += 1;
					continue;
				}
				n.add(r), i.push(e);
			}
			return i.length > 0 ? [...i, ...e] : e;
		});
		for (let e of i) a.eventBus.emit(qa, {
			templateId: e.id,
			name: e.name,
			sourcePluginId: Y
		});
		window.alert(i.length > 0 ? `Imported ${i.length} template(s). Skipped ${o} duplicate(s).` : `No new templates imported. Skipped ${o} duplicate(s).`);
	}, Be = () => {
		if (o.length === 0) {
			window.alert("No documents to export.");
			return;
		}
		let e = new Blob([JSON.stringify({
			format: "report-logger-document-bundle",
			version: J,
			exportedAt: Date.now(),
			reports: o
		}, null, 2)], { type: "application/json;charset=utf-8" }), t = URL.createObjectURL(e), n = document.createElement("a");
		n.href = t, n.download = `report-logger-documents-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, n.click(), URL.revokeObjectURL(t);
	}, Ve = (e) => {
		if (!e || typeof e != "object") return null;
		let t = Za.safeParse(e);
		if (t.success) return t.data;
		let n = e, r = Date.now(), i = typeof n.content == "string" ? n.content : "", a = Ya.safeParse(n.taskSnapshot), o = {
			id: typeof n.id == "string" && n.id.trim() ? n.id : X("report"),
			taskId: typeof n.taskId == "string" ? n.taskId : null,
			templateId: typeof n.templateId == "string" ? n.templateId : null,
			title: typeof n.title == "string" && n.title.trim() ? n.title : ko("imported", i, "Imported Document"),
			content: i,
			status: n.status === "active" || n.status === "blocked" || n.status === "closed" || n.status === "draft" ? n.status : "draft",
			tags: Array.isArray(n.tags) ? n.tags.filter((e) => typeof e == "string") : [],
			timeline: [],
			updatedAt: typeof n.updatedAt == "number" ? n.updatedAt : r,
			taskSnapshot: a.success ? a.data : null,
			taskChanged: typeof n.taskChanged == "boolean" ? n.taskChanged : !1
		}, s = Za.safeParse(o);
		return s.success ? s.data : null;
	}, He = async (e) => {
		let t = po(await e.text());
		if (t === null) {
			window.alert("Invalid document file: JSON parse failed.");
			return;
		}
		let n = [];
		if (Array.isArray(t)) n = t;
		else if (t && typeof t == "object") {
			let e = t;
			n = Array.isArray(e.reports) ? e.reports : [t];
		}
		let r = n.map((e) => Ve(e)).filter((e) => e !== null);
		if (r.length === 0) {
			window.alert("No valid documents found in file.");
			return;
		}
		let i = [], c = 0;
		s((e) => {
			let t = new Set(e.map((e) => e.id)), n = new Set(e.map((e) => `${e.title}::${e.content}`)), a = /* @__PURE__ */ new Set();
			for (let e of r) {
				let r = `${e.title}::${e.content}`;
				if (n.has(r) || a.has(r)) {
					c += 1;
					continue;
				}
				a.add(r);
				let o = t.has(e.id) ? {
					...e,
					id: X("report")
				} : e;
				i.push(o);
			}
			return i.length > 0 ? [...i, ...e] : e;
		}), i.length > 0 && !m && (h(i[0].id), k(i[0].content)), i.length > 0 && a.eventBus.emit(Ja, { count: o.length + i.length }), window.alert(i.length > 0 ? `Imported ${i.length} document(s). Skipped ${c} duplicate(s).` : `No new documents imported. Skipped ${c} duplicate(s).`);
	}, Ue = n(() => ho((e, t) => {
		s((n) => n.map((n) => {
			if (n.id !== t) return n;
			let r = Date.now();
			return {
				...n,
				content: e,
				updatedAt: r,
				timeline: [...n.timeline, {
					id: X("tl"),
					type: "updated",
					message: "Autosave",
					at: r,
					by: go
				}]
			};
		})), j(!1);
	}, 900), []);
	t(() => {
		let e = !0;
		return (async () => {
			try {
				let t = await So(a);
				if (!e) return;
				let n = ro.safeParse(t.payload), r = n.success ? n.data : fo();
				s(r.reports), l(r.taskReportLinks), d(r.templates), p(r.taskSnapshotCache), ne(t.source), r.reports.length > 0 && (h(r.reports[0].id), k(r.reports[0].content)), $.restoreSuccess(r.reports.length + r.taskReportLinks.length, t.source);
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
			k(""), T([]);
			return;
		}
		k(F?.content ?? ""), j(!1), T([]);
	}, [m]), t(() => {
		if (!g) return;
		if (ye.current) {
			ye.current = !1;
			return;
		}
		let e = {
			version: J,
			taskReportLinks: c,
			reports: o,
			templates: u,
			taskSnapshotCache: f,
			editorDraft: {
				reportId: m,
				content: O,
				autosavePending: A,
				updatedAt: Date.now()
			},
			syncMeta: {
				lastSyncAt: Date.now(),
				sourcePlugin: v,
				lastError: M,
				retries: 0
			},
			migrationMeta: {
				version: J,
				upgrades: []
			}
		};
		$.saveTriggered(o.length + c.length), xo(a, e).catch((e) => {
			me(String(e)), $.saveFailed(e);
		});
	}, [
		a,
		A,
		O,
		g,
		M,
		c,
		o,
		m,
		v,
		f,
		u
	]), t(() => {
		!g || !m || A && Ue(O, m);
	}, [
		A,
		O,
		g,
		m,
		Ue
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
		return t(Ua, (e) => {
			let t = io.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ua,
					preview: Z(e)
				});
				return;
			}
			te(t.data.taskId);
		}), t(Wa, (e) => {
			let t = ao.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Wa,
					preview: Z(e)
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
						id: X("tl"),
						type: "sync",
						message: "Task snapshot updated from TaskBoard",
						at: Date.now(),
						by: "taskboard"
					}]
				};
			}));
		}), t(Ka, (e) => {
			let t = oo.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ka,
					preview: Z(e)
				});
				return;
			}
			let n = o.find((e) => e.id === t.data.reportId);
			n && t.data.sourcePluginId !== "report-logger" && t.data.updatedAt > n.updatedAt && A && ($.conflictDetected(n.id), _e({
				reportId: n.id,
				externalUpdatedAt: t.data.updatedAt,
				localUpdatedAt: n.updatedAt
			}));
		}), t(Ga, (e) => {
			let t = so.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ga,
					preview: Z(e)
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
		}), t(qa, (e) => {
			co.safeParse(e).success || console.warn("[report-logger] rejected invalid event payload", {
				event: qa,
				preview: Z(e)
			});
		}), () => {
			for (let t of e) t();
		};
	}, [
		a.eventBus,
		A,
		o
	]);
	let We = (e) => {
		let t = Ee ?? null, n = e ? u.find((t) => t.id === e) : null, r = n ? Co(n.content, t, go) : {
			text: "",
			unresolved: []
		}, i = n ? ko(n.category, r.text) : t ? `Case Report - ${t.title}` : "Case Report";
		ge(r.unresolved);
		let c = X("report"), l = Date.now(), d = {
			id: c,
			taskId: t?.id ?? null,
			templateId: n?.id ?? null,
			title: i,
			content: r.text,
			status: "draft",
			tags: [],
			timeline: [{
				id: X("tl"),
				type: "created",
				message: "Report created",
				at: l,
				by: go
			}],
			updatedAt: l,
			taskSnapshot: t,
			taskChanged: !1
		};
		s((e) => [d, ...e]), h(c), b("report"), S("edit"), k(d.content), t && Ge(t.id, c), a.eventBus.emit(Ja, { count: o.length + 1 });
	}, Ge = (e, t) => {
		try {
			$.linkCreateStart(e, t), l((n) => {
				let r = n.find((t) => t.taskId === e), i = Date.now();
				if (!r) {
					let r = {
						taskId: e,
						reportId: t,
						linkedAt: i,
						linkedBy: go,
						sourcePluginId: Y,
						orphaned: !1,
						history: []
					};
					return [...n, r];
				}
				return n.map((n) => n.taskId === e ? {
					...n,
					reportId: t,
					linkedAt: i,
					linkedBy: go,
					orphaned: !1,
					history: [...n.history, {
						reportId: n.reportId,
						linkedAt: n.linkedAt,
						linkedBy: n.linkedBy
					}]
				} : n);
			}), a.eventBus.emit(Ga, {
				taskId: e,
				reportId: t,
				sourcePluginId: Y
			}), $.linkCreateSuccess(e, t);
		} catch (e) {
			$.linkCreateFailed(e);
		}
	}, Ke = (e) => {
		if (!F) return;
		let t = u.find((t) => t.id === e);
		if (!t || !window.confirm("Apply template and overwrite current report content?")) return;
		let n = Co(t.content, Ee, go), r = wo(n.text), i = ko(t.category, n.text, F.title);
		T(r.fields.map((e) => ({
			...e,
			id: X("field")
		}))), ge(n.unresolved), k(n.text), j(!0), s((e) => e.map((e) => e.id === F.id ? {
			...e,
			title: i,
			templateId: t.id
		} : e)), w(t.id);
	}, qe = () => {
		if (!F) return;
		S("edit"), b("report"), T(wo(F.content).fields.map((e) => ({
			...e,
			id: X("field")
		})));
		let e = F.templateId ?? Io(F.content, u);
		if (e) {
			w(e), F.templateId || s((t) => t.map((t) => t.id === F.id ? {
				...t,
				templateId: e
			} : t));
			return;
		}
		w("");
	}, Je = (e, t) => {
		T((n) => {
			let r = n.map((n) => n.id === e ? {
				...n,
				value: No(n.value, t)
			} : n), i = To(r);
			return k(i), j(!0), m && s((e) => e.map((e) => {
				if (e.id !== m) return e;
				let t = e.templateId ?? C ?? Io(e.content, u), n = t ? u.find((e) => e.id === t) : null;
				return n ? {
					...e,
					title: ko(n.category, i, e.title),
					templateId: e.templateId ?? n.id
				} : e;
			})), r;
		});
	}, Ye = (e) => {
		Se.current = e, Ce.current?.click();
	}, Xe = async (e, t, n, r) => {
		if (!t) return;
		let i = await new Promise((t, n) => {
			let r = new FileReader();
			r.onload = () => t(String(r.result ?? "")), r.onerror = () => n(r.error ?? /* @__PURE__ */ Error("Failed to read image file")), r.readAsDataURL(e);
		}), a = `![${e.name}](${i})`, o = xe.current[t];
		T((e) => {
			let i = e.map((e) => {
				if (e.id !== t) return e;
				let i = n === null ? null : Po(e.value, n), o = r === null ? null : Po(e.value, r);
				return {
					...e,
					value: Lo(e.value, a, i, o)
				};
			});
			return k(To(i)), j(!0), i;
		}), o && window.requestAnimationFrame(() => {
			let e = Math.min((n ?? o.value.length) + a.length, o.value.length + a.length);
			o.focus(), o.setSelectionRange(e, e);
		}), Se.current = null;
	}, Ze = async (e) => {
		let t = Se.current;
		if (!t) return;
		let n = xe.current[t];
		await Xe(e, t, n?.selectionStart ?? null, n?.selectionEnd ?? null);
	}, Qe = async (e, t) => {
		let n = Array.from(t.clipboardData?.files ?? []).find((e) => e.type.startsWith("image/"));
		n && (t.preventDefault(), await Xe(n, e, t.currentTarget.selectionStart, t.currentTarget.selectionEnd));
	}, $e = () => {
		if (!F) return;
		let e = new Blob([O], { type: "text/plain;charset=utf-8" }), t = URL.createObjectURL(e), n = document.createElement("a");
		n.href = t, n.download = `${F.title.replace(/\s+/g, "-").toLowerCase()}.txt`, n.click(), URL.revokeObjectURL(t);
	}, et = (e) => {
		!N || !F || (be.current = e, s((t) => t.map((t) => {
			if (t.id !== N.reportId) return t;
			let n = e === "local" ? "Conflict resolved: keep local draft" : e === "external" ? "Conflict resolved: accept external update" : "Conflict resolved: manual merge";
			return {
				...t,
				timeline: [...t.timeline, {
					id: X("tl"),
					type: "decision",
					message: n,
					at: Date.now(),
					by: go
				}],
				updatedAt: e === "external" ? N.externalUpdatedAt : t.updatedAt
			};
		})), _e(null));
	}, tt = (e) => {
		let t = o.find((t) => t.id === e);
		window.confirm(`Delete document \"${t?.title ?? "Untitled"}\"?`) && (s((t) => {
			let n = t.filter((t) => t.id !== e);
			if (m === e) {
				let e = n[0] ?? null;
				h(e?.id ?? null), k(e?.content ?? ""), T([]);
			}
			return n;
		}), l((t) => t.filter((t) => t.reportId !== e)), N?.reportId === e && _e(null), a.eventBus.emit(Ja, { count: Math.max(o.length - 1, 0) }));
	}, nt = c.find((e) => e.taskId === ee) ?? null;
	return /* @__PURE__ */ e.createElement("div", { className: "report-logger" }, /* @__PURE__ */ e.createElement("input", {
		ref: Te,
		className: "rl-hidden-file-input",
		type: "file",
		accept: "application/json,.json",
		onChange: async (e) => {
			let t = e.target.files?.[0];
			t && await He(t), e.currentTarget.value = "";
		}
	}), /* @__PURE__ */ e.createElement("input", {
		ref: we,
		className: "rl-hidden-file-input",
		type: "file",
		accept: "application/json,.json",
		onChange: async (e) => {
			let t = e.target.files?.[0];
			t && await ze(t), e.currentTarget.value = "";
		}
	}), /* @__PURE__ */ e.createElement("input", {
		ref: Ce,
		className: "rl-hidden-file-input",
		type: "file",
		accept: "image/*",
		onChange: async (e) => {
			let t = e.target.files?.[0];
			t && await Ze(t), e.currentTarget.value = "";
		}
	}), /* @__PURE__ */ e.createElement("div", { className: "rl-shell" }, /* @__PURE__ */ e.createElement("aside", { className: "rl-panel rl-sidebar" }, /* @__PURE__ */ e.createElement("div", { className: "rl-sidebar-head" }, /* @__PURE__ */ e.createElement("h1", { className: "rl-title" }, "Documents"), /* @__PURE__ */ e.createElement("div", { className: "rl-sidebar-head-actions" }, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary rl-icon-button",
		"aria-label": "Import documents",
		title: "Import documents",
		onClick: () => Te.current?.click()
	}, /* @__PURE__ */ e.createElement("svg", {
		className: "rl-icon",
		viewBox: "0 0 20 20",
		"aria-hidden": "true"
	}, /* @__PURE__ */ e.createElement("path", {
		d: "M10 2v8",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M6.5 7.5 10 11l3.5-3.5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M3 13.5h14v3.5H3z",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		strokeLinejoin: "round"
	}))), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary rl-icon-button",
		"aria-label": "Export all documents",
		title: "Export all documents",
		onClick: Be
	}, /* @__PURE__ */ e.createElement("svg", {
		className: "rl-icon",
		viewBox: "0 0 20 20",
		"aria-hidden": "true"
	}, /* @__PURE__ */ e.createElement("path", {
		d: "M10 10V2",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M6.5 5.5 10 2l3.5 3.5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M3 13.5h14v3.5H3z",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		strokeLinejoin: "round"
	}))))), /* @__PURE__ */ e.createElement("div", { className: "rl-create-controls" }, /* @__PURE__ */ e.createElement("select", {
		className: "rl-select rl-create-select",
		value: y,
		onChange: (e) => ae(e.target.value)
	}, /* @__PURE__ */ e.createElement("option", { value: "report" }, "Create Document"), /* @__PURE__ */ e.createElement("option", { value: "template" }, "Create Template")), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button rl-create-action",
		"aria-label": y === "template" ? "Create template" : "Create document",
		title: y === "template" ? "Create template" : "Create document",
		onClick: () => {
			if (y === "template") {
				Ae();
				return;
			}
			We();
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
	})), /* @__PURE__ */ e.createElement("div", { className: "rl-list rl-doc-nav" }, De.map((t) => /* @__PURE__ */ e.createElement("div", {
		key: t.id,
		className: "rl-item rl-item-card",
		"data-active": t.id === m
	}, /* @__PURE__ */ e.createElement("button", {
		className: "rl-item-main",
		onClick: () => {
			h(t.id), S("preview"), b("report"), w(t.templateId ?? ""), T([]);
		}
	}, /* @__PURE__ */ e.createElement("div", { className: "rl-item-title" }, t.title), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "Updated ", mo(t.updatedAt)), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, Z(t.content, 66))), /* @__PURE__ */ e.createElement("button", {
		className: "rl-item-delete",
		onClick: () => tt(t.id)
	}, "Delete"))), De.length === 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "No matching documents.") : null)), /* @__PURE__ */ e.createElement("section", { className: "rl-panel rl-workspace" }, oe === "template" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "rl-workspace-head" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h2", { className: "rl-section-title" }, E ? "Edit Template" : "Create Template"), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "Build a txt template by adding # / ## / ### items.")), /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary rl-icon-button",
		"aria-label": "Import template",
		title: "Import template",
		onClick: () => we.current?.click()
	}, /* @__PURE__ */ e.createElement("svg", {
		className: "rl-icon",
		viewBox: "0 0 20 20",
		"aria-hidden": "true"
	}, /* @__PURE__ */ e.createElement("path", {
		d: "M10 2v8",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M6.5 7.5 10 11l3.5-3.5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M3 13.5h14v3.5H3z",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		strokeLinejoin: "round"
	}))), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary rl-icon-button",
		"aria-label": "Export templates",
		title: "Export templates",
		onClick: Le
	}, /* @__PURE__ */ e.createElement("svg", {
		className: "rl-icon",
		viewBox: "0 0 20 20",
		"aria-hidden": "true"
	}, /* @__PURE__ */ e.createElement("path", {
		d: "M10 10V2",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M6.5 5.5 10 2l3.5 3.5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ e.createElement("path", {
		d: "M3 13.5h14v3.5H3z",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		strokeLinejoin: "round"
	}))), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: je
	}, "+ Add Item"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: Ne
	}, E ? "Update Template" : "Save Template"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: Pe
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
		onChange: (e) => Me(t.id, { kind: e.target.value })
	}, /* @__PURE__ */ e.createElement("option", { value: "#" }, "#"), /* @__PURE__ */ e.createElement("option", { value: "##" }, "##"), /* @__PURE__ */ e.createElement("option", { value: "###" }, "###")), /* @__PURE__ */ e.createElement("input", {
		className: "rl-input rl-template-title-input",
		value: t.title,
		onChange: (e) => Me(t.id, { title: e.target.value }),
		placeholder: t.kind === "##" ? "Section title" : "Field title"
	})), t.kind === "##" ? /* @__PURE__ */ e.createElement("div", { className: "rl-template-kind-note" }, "## is a section header only, no input field.") : /* @__PURE__ */ e.createElement("textarea", {
		className: "rl-form-item-input rl-template-value-input",
		value: t.value,
		onChange: (e) => Me(t.id, { value: e.target.value }),
		placeholder: t.kind === "#" ? "Title field content..." : "Item field content..."
	})))), /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-sheet",
		"aria-label": "Template manager"
	}, /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-head" }, /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-label" }, "Template Library")), u.length === 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "No templates available.") : u.map((t) => /* @__PURE__ */ e.createElement("div", {
		key: t.id,
		className: "rl-item rl-item-card",
		"data-active": E === t.id
	}, /* @__PURE__ */ e.createElement("button", {
		className: "rl-item-main",
		onClick: () => Fe(t.id)
	}, /* @__PURE__ */ e.createElement("div", { className: "rl-item-title" }, t.name), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, t.category), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "Updated ", mo(t.updatedAt))), /* @__PURE__ */ e.createElement("button", {
		className: "rl-item-delete",
		onClick: () => Ie(t.id)
	}, "Delete"))))) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "rl-workspace-head" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h2", { className: "rl-section-title" }, F?.title ?? "Select a document"), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, F ? `Updated ${mo(F.updatedAt)}` : "Pick one file from the left navigation.")), /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		"data-active": x === "edit",
		onClick: qe
	}, "Edit"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		"data-active": x === "preview",
		onClick: () => S("preview")
	}, "Browse"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: $e
	}, "Export"))), F?.taskChanged ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Task title changed in TaskBoard. Decide whether to sync report text.") : null, N ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Conflict detected for report ", N.reportId, ". Local: ", mo(N.localUpdatedAt), "; External:", " ", mo(N.externalUpdatedAt), /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-row",
		style: { marginTop: 8 }
	}, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => et("local")
	}, "Keep Local"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => et("external")
	}, "Accept External"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => et("manual")
	}, "Manual Merge"))) : null, F ? /* @__PURE__ */ e.createElement(e.Fragment, null, x === "edit" ? /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("select", {
		className: "rl-select",
		onChange: (e) => {
			let t = e.target.value;
			w(t), t && Ke(t);
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
			onClick: () => Ye(t.id)
		}, "Image")), /* @__PURE__ */ e.createElement("textarea", {
			id: `field-${t.id}`,
			className: "rl-form-item-input",
			ref: (e) => {
				xe.current[t.id] = e;
			},
			value: Mo(t.value),
			onChange: (e) => Je(t.id, e.target.value),
			onPaste: async (e) => {
				await Qe(t.id, e);
			},
			placeholder: `請填寫 ${t.title}...`
		}), Ao(t.value).length > 0 ? /* @__PURE__ */ e.createElement("div", {
			className: "rl-image-preview-list",
			"aria-label": "Image previews"
		}, Ao(t.value).map((n, r) => /* @__PURE__ */ e.createElement("figure", {
			key: `${t.id}-preview-${r}`,
			className: "rl-image-preview-item"
		}, /* @__PURE__ */ e.createElement("button", {
			type: "button",
			className: "rl-image-preview-trigger",
			onClick: () => P({
				src: n.src,
				alt: n.alt
			})
		}, /* @__PURE__ */ e.createElement("img", {
			src: n.src,
			alt: n.alt,
			className: "rl-image-preview-thumb"
		}))))) : null));
	})) : null, x === "preview" ? Oe.length > 0 ? /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-sheet",
		"aria-label": "Template form preview"
	}, Oe.map((t, n, r) => {
		let i = n > 0 ? r[n - 1].section : null, a = t.section && t.section !== i;
		return /* @__PURE__ */ e.createElement(e.Fragment, { key: `browse-field-${t.title}-${n}` }, a && /* @__PURE__ */ e.createElement("div", { className: "rl-form-section-title" }, t.section), /* @__PURE__ */ e.createElement("div", { className: "rl-form-item" }, /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-head" }, /* @__PURE__ */ e.createElement("span", { className: "rl-form-item-index" }, String(n + 1).padStart(2, "0"), "."), /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-label" }, t.title)), /* @__PURE__ */ e.createElement("textarea", {
			className: "rl-form-item-input",
			value: Mo(t.value),
			readOnly: !0,
			tabIndex: -1
		}), Ao(t.value).length > 0 ? /* @__PURE__ */ e.createElement("div", {
			className: "rl-image-preview-list",
			"aria-label": "Image previews"
		}, Ao(t.value).map((n, r) => /* @__PURE__ */ e.createElement("figure", {
			key: `browse-${t.title}-${r}`,
			className: "rl-image-preview-item"
		}, /* @__PURE__ */ e.createElement("button", {
			type: "button",
			className: "rl-image-preview-trigger",
			onClick: () => P({
				src: n.src,
				alt: n.alt
			})
		}, /* @__PURE__ */ e.createElement("img", {
			src: n.src,
			alt: n.alt,
			className: "rl-image-preview-thumb"
		}))))) : null));
	})) : /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "This document does not use the unified txt template format.") : null, he.length > 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Unresolved placeholders: ", he.join(", ")) : null, x === "edit" && se.length === 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "This document has no parsed fields yet. Choose a unified txt template with #, ##, and ### headings.") : null, /* @__PURE__ */ e.createElement("div", { className: "rl-footer" }, /* @__PURE__ */ e.createElement("span", null, "Selected report: ", F.id), /* @__PURE__ */ e.createElement("span", null, "Autosave: ", A ? "pending" : "synced"), /* @__PURE__ */ e.createElement("span", null, "Hydrated: ", g ? "yes" : "no", " / ", v), nt ? /* @__PURE__ */ e.createElement("span", null, "Linked: ", nt.reportId) : null)) : /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "Create a new document or choose one from the left.")))), ve ? /* @__PURE__ */ e.createElement("div", {
		className: "rl-image-lightbox",
		onClick: () => P(null)
	}, /* @__PURE__ */ e.createElement("div", {
		className: "rl-image-lightbox-panel",
		onClick: (e) => e.stopPropagation()
	}, /* @__PURE__ */ e.createElement("button", {
		type: "button",
		className: "rl-image-lightbox-close",
		onClick: () => P(null),
		"aria-label": "Close image preview"
	}, "x"), /* @__PURE__ */ e.createElement("img", {
		src: ve.src,
		alt: ve.alt,
		className: "rl-image-lightbox-img"
	}))) : null);
}
var zo = null, Bo = null, Vo = {
	id: Y,
	name: "Report Logger",
	version: J,
	mount(t, n) {
		Bo &&= (Bo.remove(), null);
		let r = `plugin-${Y}`, i = document.createElement("div");
		i.id = r, i.style.minHeight = "100%", t.appendChild(i), Bo = i, zo = a(i), zo.render(e.createElement(Ro, { context: n }));
	},
	unmount() {
		zo &&= (zo.unmount(), null), Bo &&= (Bo.innerHTML = "", Bo.remove(), null);
	}
};
//#endregion
export { Vo as default };
