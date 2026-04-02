(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`#plugin-report-logger .report-logger{--bg-top:#fef4e8;--bg-bottom:#f8fbff;--ink:#1f1f2e;--muted:#5f6b81;--panel:#fff;--line:#d8deeb;--brand:#0e7c7b;--brand-soft:#dbf2f1;--accent:#ef6f6c;--focus:#0a5f9b;color:var(--ink);background:radial-gradient(circle at 10% 10%, #ef6f6c33, transparent 35%), radial-gradient(circle at 90% 0%, #0e7c7b33, transparent 28%), linear-gradient(165deg, var(--bg-top) 0%, var(--bg-bottom) 62%);min-height:100%;padding:16px;font-family:IBM Plex Sans,Noto Sans TC,Trebuchet MS,sans-serif}#plugin-report-logger .report-logger *{box-sizing:border-box}#plugin-report-logger .rl-shell{grid-template-columns:minmax(250px,320px) 1fr;gap:14px;min-height:calc(100vh - 32px);display:grid}#plugin-report-logger .rl-panel{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:14px;box-shadow:0 10px 30px #1a28441f}#plugin-report-logger .rl-sidebar{flex-direction:column;gap:12px;display:flex}#plugin-report-logger .rl-sidebar-head{justify-content:space-between;align-items:center;gap:8px;display:flex}#plugin-report-logger .rl-title{letter-spacing:.2px;margin:0;font-size:20px}#plugin-report-logger .rl-search-wrap{flex-direction:column;gap:6px;display:flex}#plugin-report-logger .rl-doc-nav{flex:1;padding-right:3px;overflow:auto}#plugin-report-logger .rl-section-title{margin:0;font-size:17px}#plugin-report-logger .rl-list{flex-direction:column;gap:8px;display:flex}#plugin-report-logger .rl-item{cursor:pointer;text-align:left;background:#f8f9fd;border:1px solid #d7dcec;border-radius:10px;padding:10px;transition:transform .18s,border-color .18s,background-color .18s}#plugin-report-logger .rl-item:hover{border-color:#b9c7e5;transform:translateY(-1px)}#plugin-report-logger .rl-item[data-active=true]{border-color:var(--brand);background:linear-gradient(150deg, var(--brand-soft), #f4fbfa)}#plugin-report-logger .rl-item-title{margin-bottom:4px;font-weight:600}#plugin-report-logger .rl-meta{color:var(--muted);font-size:12px;line-height:1.4}#plugin-report-logger .rl-workspace{flex-direction:column;display:flex}#plugin-report-logger .rl-workspace-head{justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-form-row{flex-wrap:wrap;gap:8px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-input,#plugin-report-logger .rl-select,#plugin-report-logger .rl-textarea{width:100%;font:inherit;color:inherit;background:#fff;border:1px solid #c6cfe4;border-radius:10px;padding:9px 10px}#plugin-report-logger .rl-input:focus,#plugin-report-logger .rl-select:focus,#plugin-report-logger .rl-textarea:focus,#plugin-report-logger .rl-button:focus-visible{outline:2px solid var(--focus);outline-offset:2px}#plugin-report-logger .rl-textarea{resize:vertical;min-height:320px;font-family:Cascadia Code,Consolas,monospace;font-size:13px;line-height:1.6}#plugin-report-logger .rl-preview{white-space:pre-wrap;word-break:break-word;background:#fbfcff;border:1px solid #dde3ef;border-radius:10px;min-height:320px;padding:12px;font-size:14px;line-height:1.7}#plugin-report-logger .rl-form-sheet{flex-direction:column;gap:16px;margin-bottom:10px;display:flex}#plugin-report-logger .rl-form-section-title{color:#0e7c7b;border-bottom:2px solid var(--brand-soft);margin-top:12px;margin-bottom:8px;padding:8px 0;font-size:15px;font-weight:700}#plugin-report-logger .rl-form-item{background:#fafbfd;border:1px solid #d5dceb;border-radius:12px;overflow:hidden}#plugin-report-logger .rl-form-item-head{background:linear-gradient(90deg,#f0f4fb 0%,#f8fafe 100%);border-bottom:1px solid #e3e8f3;align-items:center;gap:8px;padding:11px 12px;display:flex}#plugin-report-logger .rl-form-item-index{color:#0e7c7b;min-width:28px;font-size:14px;font-weight:700}#plugin-report-logger .rl-form-item-label{color:#27395b;font-size:15px;font-weight:600}#plugin-report-logger .rl-form-item-input{resize:vertical;width:100%;min-height:100px;font:inherit;color:inherit;background:#fff;border:0;border-radius:0;padding:12px;line-height:1.6;display:block}#plugin-report-logger .rl-form-item-input:focus{outline:2px solid var(--focus);outline-offset:-2px;background:#fafbfd}#plugin-report-logger .rl-button{border:1px solid var(--brand);background:linear-gradient(140deg, #169997, var(--brand));color:#fff;cursor:pointer;font:inherit;border-radius:9px;padding:7px 12px;transition:filter .16s}#plugin-report-logger .rl-button:hover{filter:brightness(1.04)}#plugin-report-logger .rl-button.secondary{color:#1d2a44;background:#f2f5fb;border-color:#c4cbdd}#plugin-report-logger .rl-button.secondary[data-active=true]{border-color:var(--accent);color:#773835;background:#ffefee}#plugin-report-logger .rl-warning{color:#704500;background:#fff7e6;border:1px solid #e4bb78;border-radius:10px;margin-bottom:10px;padding:9px}#plugin-report-logger .rl-empty-state{color:#465267;text-align:center;background:#fbfcff;border:1px dashed #c7cede;border-radius:10px;padding:16px}#plugin-report-logger .rl-footer{color:var(--muted);flex-wrap:wrap;gap:10px;margin-top:10px;font-size:12px;display:flex}@media (width<=980px){#plugin-report-logger .rl-shell{grid-template-columns:1fr;min-height:auto}#plugin-report-logger .rl-workspace-head{flex-direction:column}#plugin-report-logger .rl-template-grid-head,#plugin-report-logger .rl-template-grid-row{grid-template-columns:1fr}#plugin-report-logger .rl-template-grid-title{border-bottom:1px solid #e3e8f3;border-right:0}}
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
function m(e) {
	return e == null;
}
function ee(e) {
	let t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function h(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = t.toString(), i = (r.split(".")[1] || "").length;
	if (i === 0 && /\d?e-\d?/.test(r)) {
		let e = r.match(/\d?e-(\d?)/);
		e?.[1] && (i = Number.parseInt(e[1]));
	}
	let a = n > i ? n : i;
	return Number.parseInt(e.toFixed(a).replace(".", "")) % Number.parseInt(t.toFixed(a).replace(".", "")) / 10 ** a;
}
var te = Symbol("evaluating");
function g(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== te) return r === void 0 && (r = te, r = n()), r;
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
function b(e) {
	if (y(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(y(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function oe(e) {
	return b(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
var se = new Set([
	"string",
	"number",
	"symbol"
]);
function x(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function S(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function C(e) {
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
function w(e) {
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
	return S(e, v(e._zod.def, {
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
	return S(e, v(e._zod.def, {
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
	if (!b(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return S(e, v(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return _(this, "shape", n), n;
	} }));
}
function de(e, t) {
	if (!b(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return S(e, v(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return _(this, "shape", n), n;
	} }));
}
function E(e, t) {
	return S(e, v(e._zod.def, {
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
function fe(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return S(t, v(t._zod.def, {
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
function pe(e, t, n) {
	return S(t, v(t._zod.def, { get shape() {
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
function me(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function O(e) {
	return typeof e == "string" ? e : e?.message;
}
function k(e, t, n) {
	let r = {
		...e,
		path: e.path ?? []
	};
	return e.message || (r.message = O(e.inst?._zod.def?.error?.(e)) ?? O(t?.error?.(e)) ?? O(n.customError?.(e)) ?? O(n.localeError?.(e)) ?? "Invalid input"), delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function he(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function A(...e) {
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
var ge = (e, t) => {
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
}, _e = o("$ZodError", ge), ve = o("$ZodError", ge, { Parent: Error });
function ye(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function be(e, t = (e) => e.message) {
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
var xe = (e) => (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !1 }) : { async: !1 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise) throw new s();
	if (o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => k(e, a, u())));
		throw ie(t, i?.callee), t;
	}
	return o.value;
}, Se = (e) => async (t, n, r, i) => {
	let a = r ? Object.assign(r, { async: !0 }) : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => k(e, a, u())));
		throw ie(t, i?.callee), t;
	}
	return o.value;
}, Ce = (e) => (t, n, r) => {
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
		error: new (e ?? _e)(a.issues.map((e) => k(e, i, u())))
	} : {
		success: !0,
		data: a.value
	};
}, we = /* @__PURE__ */ Ce(ve), Te = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { async: !0 }) : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => k(e, i, u())))
	} : {
		success: !0,
		data: a.value
	};
}, Ee = /* @__PURE__ */ Te(ve), De = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return xe(e)(t, n, i);
}, Oe = (e) => (t, n, r) => xe(e)(t, n, r), ke = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return Se(e)(t, n, i);
}, Ae = (e) => async (t, n, r) => Se(e)(t, n, r), je = (e) => (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return Ce(e)(t, n, i);
}, Me = (e) => (t, n, r) => Ce(e)(t, n, r), Ne = (e) => async (t, n, r) => {
	let i = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
	return Te(e)(t, n, i);
}, Pe = (e) => async (t, n, r) => Te(e)(t, n, r), Fe = /^[cC][^\s-]{8,}$/, Ie = /^[0-9a-z]+$/, Le = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Re = /^[0-9a-vA-V]{20}$/, ze = /^[A-Za-z0-9]{27}$/, Be = /^[a-zA-Z0-9_-]{21}$/, Ve = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, He = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ue = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, We = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ge = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ke() {
	return new RegExp(Ge, "u");
}
var qe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Je = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ye = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Xe = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ze = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qe = /^[A-Za-z0-9_-]*$/, $e = /^\+[1-9]\d{6,14}$/, et = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", tt = /* @__PURE__ */ RegExp(`^${et}$`);
function nt(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function rt(e) {
	return RegExp(`^${nt(e)}$`);
}
function it(e) {
	let t = nt({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${et}T(?:${r})$`);
}
var at = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, ot = /^-?\d+$/, st = /^-?\d+(?:\.\d+)?$/, ct = /^(?:true|false)$/i, lt = /^[^A-Z]*$/, ut = /^[^a-z]*$/, j = /* @__PURE__ */ o("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), dt = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, ft = /* @__PURE__ */ o("$ZodCheckLessThan", (e, t) => {
	j.init(e, t);
	let n = dt[typeof t.value];
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
}), pt = /* @__PURE__ */ o("$ZodCheckGreaterThan", (e, t) => {
	j.init(e, t);
	let n = dt[typeof t.value];
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
}), mt = /* @__PURE__ */ o("$ZodCheckMultipleOf", (e, t) => {
	j.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : h(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ht = /* @__PURE__ */ o("$ZodCheckNumberFormat", (e, t) => {
	j.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = T[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = ot);
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
}), gt = /* @__PURE__ */ o("$ZodCheckMaxLength", (e, t) => {
	var n;
	j.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !m(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = he(r);
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
}), _t = /* @__PURE__ */ o("$ZodCheckMinLength", (e, t) => {
	var n;
	j.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !m(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = he(r);
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
}), vt = /* @__PURE__ */ o("$ZodCheckLengthEquals", (e, t) => {
	var n;
	j.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !m(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = he(r), o = i > t.length;
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
}), yt = /* @__PURE__ */ o("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	j.init(e, t), e._zod.onattach.push((e) => {
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
}), bt = /* @__PURE__ */ o("$ZodCheckRegex", (e, t) => {
	yt.init(e, t), e._zod.check = (n) => {
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
}), xt = /* @__PURE__ */ o("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= lt, yt.init(e, t);
}), St = /* @__PURE__ */ o("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= ut, yt.init(e, t);
}), Ct = /* @__PURE__ */ o("$ZodCheckIncludes", (e, t) => {
	j.init(e, t);
	let n = x(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
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
}), wt = /* @__PURE__ */ o("$ZodCheckStartsWith", (e, t) => {
	j.init(e, t);
	let n = RegExp(`^${x(t.prefix)}.*`);
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
}), Tt = /* @__PURE__ */ o("$ZodCheckEndsWith", (e, t) => {
	j.init(e, t);
	let n = RegExp(`.*${x(t.suffix)}$`);
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
}), Et = /* @__PURE__ */ o("$ZodCheckOverwrite", (e, t) => {
	j.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), Dt = class {
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
}, Ot = {
	major: 4,
	minor: 3,
	patch: 6
}, M = /* @__PURE__ */ o("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ot;
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
				let n = we(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return Ee(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), kt = /* @__PURE__ */ o("$ZodString", (e, t) => {
	M.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? at(e._zod.bag), e._zod.parse = (n, r) => {
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
}), N = /* @__PURE__ */ o("$ZodStringFormat", (e, t) => {
	yt.init(e, t), kt.init(e, t);
}), At = /* @__PURE__ */ o("$ZodGUID", (e, t) => {
	t.pattern ??= He, N.init(e, t);
}), jt = /* @__PURE__ */ o("$ZodUUID", (e, t) => {
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
		t.pattern ??= Ue(e);
	} else t.pattern ??= Ue();
	N.init(e, t);
}), Mt = /* @__PURE__ */ o("$ZodEmail", (e, t) => {
	t.pattern ??= We, N.init(e, t);
}), Nt = /* @__PURE__ */ o("$ZodURL", (e, t) => {
	N.init(e, t), e._zod.check = (n) => {
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
}), Pt = /* @__PURE__ */ o("$ZodEmoji", (e, t) => {
	t.pattern ??= Ke(), N.init(e, t);
}), Ft = /* @__PURE__ */ o("$ZodNanoID", (e, t) => {
	t.pattern ??= Be, N.init(e, t);
}), It = /* @__PURE__ */ o("$ZodCUID", (e, t) => {
	t.pattern ??= Fe, N.init(e, t);
}), Lt = /* @__PURE__ */ o("$ZodCUID2", (e, t) => {
	t.pattern ??= Ie, N.init(e, t);
}), Rt = /* @__PURE__ */ o("$ZodULID", (e, t) => {
	t.pattern ??= Le, N.init(e, t);
}), zt = /* @__PURE__ */ o("$ZodXID", (e, t) => {
	t.pattern ??= Re, N.init(e, t);
}), Bt = /* @__PURE__ */ o("$ZodKSUID", (e, t) => {
	t.pattern ??= ze, N.init(e, t);
}), Vt = /* @__PURE__ */ o("$ZodISODateTime", (e, t) => {
	t.pattern ??= it(t), N.init(e, t);
}), Ht = /* @__PURE__ */ o("$ZodISODate", (e, t) => {
	t.pattern ??= tt, N.init(e, t);
}), Ut = /* @__PURE__ */ o("$ZodISOTime", (e, t) => {
	t.pattern ??= rt(t), N.init(e, t);
}), Wt = /* @__PURE__ */ o("$ZodISODuration", (e, t) => {
	t.pattern ??= Ve, N.init(e, t);
}), Gt = /* @__PURE__ */ o("$ZodIPv4", (e, t) => {
	t.pattern ??= qe, N.init(e, t), e._zod.bag.format = "ipv4";
}), Kt = /* @__PURE__ */ o("$ZodIPv6", (e, t) => {
	t.pattern ??= Je, N.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), qt = /* @__PURE__ */ o("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Ye, N.init(e, t);
}), Jt = /* @__PURE__ */ o("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Xe, N.init(e, t), e._zod.check = (n) => {
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
function Yt(e) {
	if (e === "") return !0;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Xt = /* @__PURE__ */ o("$ZodBase64", (e, t) => {
	t.pattern ??= Ze, N.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Yt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Zt(e) {
	if (!Qe.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Yt(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Qt = /* @__PURE__ */ o("$ZodBase64URL", (e, t) => {
	t.pattern ??= Qe, N.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		Zt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), $t = /* @__PURE__ */ o("$ZodE164", (e, t) => {
	t.pattern ??= $e, N.init(e, t);
});
function en(e, t = null) {
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
var tn = /* @__PURE__ */ o("$ZodJWT", (e, t) => {
	N.init(e, t), e._zod.check = (n) => {
		en(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), nn = /* @__PURE__ */ o("$ZodNumber", (e, t) => {
	M.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? st, e._zod.parse = (n, r) => {
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
}), rn = /* @__PURE__ */ o("$ZodNumberFormat", (e, t) => {
	ht.init(e, t), nn.init(e, t);
}), an = /* @__PURE__ */ o("$ZodBoolean", (e, t) => {
	M.init(e, t), e._zod.pattern = ct, e._zod.parse = (n, r) => {
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
}), on = /* @__PURE__ */ o("$ZodUnknown", (e, t) => {
	M.init(e, t), e._zod.parse = (e) => e;
}), sn = /* @__PURE__ */ o("$ZodNever", (e, t) => {
	M.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function cn(e, t, n) {
	e.issues.length && t.issues.push(...me(n, e.issues)), t.value[n] = e.value;
}
var ln = /* @__PURE__ */ o("$ZodArray", (e, t) => {
	M.init(e, t), e._zod.parse = (n, r) => {
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
			s instanceof Promise ? a.push(s.then((t) => cn(t, n, e))) : cn(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function un(e, t, n, r, i) {
	if (e.issues.length) {
		if (i && !(n in r)) return;
		t.issues.push(...me(n, e.issues));
	}
	e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function dn(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = w(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function fn(e, t, n, r, i, a) {
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
		a instanceof Promise ? e.push(a.then((e) => un(e, n, i, t, u))) : un(a, n, i, t, u);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var pn = /* @__PURE__ */ o("$ZodObject", (e, t) => {
	if (M.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = p(() => dn(t));
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
			i instanceof Promise ? c.push(i.then((n) => un(n, t, e, s, r))) : un(i, t, e, s, r);
		}
		return i ? fn(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), mn = /* @__PURE__ */ o("$ZodObjectJIT", (e, t) => {
	pn.init(e, t);
	let n = e._zod.parse, r = p(() => dn(t)), i = (e) => {
		let t = new Dt([
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
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), l = a(l, f), u ? fn([], p, l, f, d, e) : l) : n(l, f) : (l.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), l);
	};
});
function hn(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !D(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => k(e, r, u())))
	}), t);
}
var gn = /* @__PURE__ */ o("$ZodUnion", (e, t) => {
	M.init(e, t), g(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), g(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), g(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), g(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => ee(e.source)).join("|")})$`);
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
		return o ? Promise.all(s).then((t) => hn(t, i, e, a)) : hn(s, i, e, a);
	};
}), _n = /* @__PURE__ */ o("$ZodIntersection", (e, t) => {
	M.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => yn(e, t, n)) : yn(e, i, a);
	};
});
function vn(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (b(e) && b(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = vn(e[n], t[n]);
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
			let i = e[r], a = t[r], o = vn(i, a);
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
function yn(e, t, n) {
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
	let o = vn(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var bn = /* @__PURE__ */ o("$ZodEnum", (e, t) => {
	M.init(e, t);
	let n = d(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => se.has(typeof e)).map((e) => typeof e == "string" ? x(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), xn = /* @__PURE__ */ o("$ZodLiteral", (e, t) => {
	if (M.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(`^(${t.values.map((e) => typeof e == "string" ? x(e) : e ? x(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), Sn = /* @__PURE__ */ o("$ZodTransform", (e, t) => {
	M.init(e, t), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new c(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new s();
		return n.value = i, n;
	};
});
function Cn(e, t) {
	return e.issues.length && t === void 0 ? {
		issues: [],
		value: void 0
	} : e;
}
var wn = /* @__PURE__ */ o("$ZodOptional", (e, t) => {
	M.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", g(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ee(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((t) => Cn(t, e.value)) : Cn(r, e.value);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), Tn = /* @__PURE__ */ o("$ZodExactOptional", (e, t) => {
	wn.init(e, t), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), En = /* @__PURE__ */ o("$ZodNullable", (e, t) => {
	M.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ee(e.source)}|null)$`) : void 0;
	}), g(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Dn = /* @__PURE__ */ o("$ZodDefault", (e, t) => {
	M.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => On(e, t)) : On(r, t);
	};
});
function On(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var kn = /* @__PURE__ */ o("$ZodPrefault", (e, t) => {
	M.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), An = /* @__PURE__ */ o("$ZodNonOptional", (e, t) => {
	M.init(e, t), g(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => jn(t, e)) : jn(i, e);
	};
});
function jn(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var Mn = /* @__PURE__ */ o("$ZodCatch", (e, t) => {
	M.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => k(e, n, u())) },
			input: e.value
		}), e.issues = []), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => k(e, n, u())) },
			input: e.value
		}), e.issues = []), e);
	};
}), Nn = /* @__PURE__ */ o("$ZodPipe", (e, t) => {
	M.init(e, t), g(e._zod, "values", () => t.in._zod.values), g(e._zod, "optin", () => t.in._zod.optin), g(e._zod, "optout", () => t.out._zod.optout), g(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Pn(e, t.in, n)) : Pn(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Pn(e, t.out, n)) : Pn(r, t.out, n);
	};
});
function Pn(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Fn = /* @__PURE__ */ o("$ZodReadonly", (e, t) => {
	M.init(e, t), g(e._zod, "propValues", () => t.innerType._zod.propValues), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "optin", () => t.innerType?._zod?.optin), g(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(In) : In(r);
	};
});
function In(e) {
	return e.value = Object.freeze(e.value), e;
}
var Ln = /* @__PURE__ */ o("$ZodCustom", (e, t) => {
	j.init(e, t), M.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Rn(t, n, r, e));
		Rn(i, n, r, e);
	};
});
function Rn(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(A(e));
	}
}
//#endregion
//#region node_modules/zod/v4/core/registries.js
var zn, Bn = class {
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
function Vn() {
	return new Bn();
}
(zn = globalThis).__zod_globalRegistry ?? (zn.__zod_globalRegistry = Vn());
var Hn = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function Un(e, t) {
	return new e({
		type: "string",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Wn(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Gn(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Kn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function qn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Jn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Yn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Xn(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Zn(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Qn(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function $n(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function er(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function tr(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function nr(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function rr(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ir(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ar(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function or(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function sr(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function cr(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function lr(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ur(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function dr(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fr(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function pr(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function mr(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function hr(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function gr(e, t) {
	return new e({
		type: "number",
		checks: [],
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _r(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function vr(e, t) {
	return new e({
		type: "boolean",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function yr(e) {
	return new e({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function br(e, t) {
	return new e({
		type: "never",
		...C(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function xr(e, t) {
	return new ft({
		check: "less_than",
		...C(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Sr(e, t) {
	return new ft({
		check: "less_than",
		...C(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Cr(e, t) {
	return new pt({
		check: "greater_than",
		...C(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function wr(e, t) {
	return new pt({
		check: "greater_than",
		...C(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Tr(e, t) {
	return new mt({
		check: "multiple_of",
		...C(t),
		value: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Er(e, t) {
	return new gt({
		check: "max_length",
		...C(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Dr(e, t) {
	return new _t({
		check: "min_length",
		...C(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Or(e, t) {
	return new vt({
		check: "length_equals",
		...C(t),
		length: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function kr(e, t) {
	return new bt({
		check: "string_format",
		format: "regex",
		...C(t),
		pattern: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ar(e) {
	return new xt({
		check: "string_format",
		format: "lowercase",
		...C(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function jr(e) {
	return new St({
		check: "string_format",
		format: "uppercase",
		...C(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Mr(e, t) {
	return new Ct({
		check: "string_format",
		format: "includes",
		...C(t),
		includes: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Nr(e, t) {
	return new wt({
		check: "string_format",
		format: "starts_with",
		...C(t),
		prefix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Pr(e, t) {
	return new Tt({
		check: "string_format",
		format: "ends_with",
		...C(t),
		suffix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function P(e) {
	return new Et({
		check: "overwrite",
		tx: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Fr(e) {
	return /* @__PURE__ */ P((t) => t.normalize(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Ir() {
	return /* @__PURE__ */ P((e) => e.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function Lr() {
	return /* @__PURE__ */ P((e) => e.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Rr() {
	return /* @__PURE__ */ P((e) => e.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function zr() {
	return /* @__PURE__ */ P((e) => re(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Br(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...C(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vr(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...C(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Hr(e) {
	let t = /* @__PURE__ */ Ur((n) => (n.addIssue = (e) => {
		if (typeof e == "string") n.issues.push(A(e, n.value, t._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= n.value, r.inst ??= t, r.continue ??= !t._zod.def.abort, n.issues.push(A(r));
		}
	}, e(n.value, n)));
	return t;
}
/* @__NO_SIDE_EFFECTS__ */
function Ur(e, t) {
	let n = new j({
		check: "custom",
		...C(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
function Wr(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Hn,
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
function F(e, t, n = {
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
		a && (o.ref ||= a, F(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && I(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && o.schema._prefault && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Gr(e, t) {
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
function Kr(e, t) {
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
					input: Jr(t, "input", e.processors),
					output: Jr(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function I(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return I(r.element, n);
	if (r.type === "set") return I(r.valueType, n);
	if (r.type === "lazy") return I(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return I(r.innerType, n);
	if (r.type === "intersection") return I(r.left, n) || I(r.right, n);
	if (r.type === "record" || r.type === "map") return I(r.keyType, n) || I(r.valueType, n);
	if (r.type === "pipe") return I(r.in, n) || I(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (I(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (I(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (I(e, n)) return !0;
		return !!(r.rest && I(r.rest, n));
	}
	return !1;
}
var qr = (e, t = {}) => (n) => {
	let r = Wr({
		...n,
		processors: t
	});
	return F(e, r), Gr(r, e), Kr(r, e);
}, Jr = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Wr({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return F(e, o), Gr(o, e), Kr(o, e);
}, Yr = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Xr = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Yr[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Zr = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	typeof s == "string" && s.includes("int") ? i.type = "integer" : i.type = "number", typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u), typeof a == "number" && (i.minimum = a, typeof u == "number" && t.target !== "draft-04" && (u >= a ? delete i.minimum : delete i.exclusiveMinimum)), typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l), typeof o == "number" && (i.maximum = o, typeof l == "number" && t.target !== "draft-04" && (l <= o ? delete i.maximum : delete i.exclusiveMaximum)), typeof c == "number" && (i.multipleOf = c);
}, Qr = (e, t, n, r) => {
	n.type = "boolean";
}, $r = (e, t, n, r) => {
	n.not = {};
}, ei = (e, t, n, r) => {
	let i = e._zod.def, a = d(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, ti = (e, t, n, r) => {
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
}, ni = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, ri = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, ii = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = F(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, ai = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = F(o[e], t, {
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
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = F(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, oi = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => F(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, si = (e, t, n, r) => {
	let i = e._zod.def, a = F(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = F(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, ci = (e, t, n, r) => {
	let i = e._zod.def, a = F(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, li = (e, t, n, r) => {
	let i = e._zod.def;
	F(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, ui = (e, t, n, r) => {
	let i = e._zod.def;
	F(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, di = (e, t, n, r) => {
	let i = e._zod.def;
	F(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, fi = (e, t, n, r) => {
	let i = e._zod.def;
	F(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, pi = (e, t, n, r) => {
	let i = e._zod.def, a = t.io === "input" ? i.in._zod.def.type === "transform" ? i.out : i.in : i.out;
	F(a, t, r);
	let o = t.seen.get(e);
	o.ref = a;
}, mi = (e, t, n, r) => {
	let i = e._zod.def;
	F(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, hi = (e, t, n, r) => {
	let i = e._zod.def;
	F(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, gi = /* @__PURE__ */ o("ZodISODateTime", (e, t) => {
	Vt.init(e, t), B.init(e, t);
});
function _i(e) {
	return /* @__PURE__ */ fr(gi, e);
}
var vi = /* @__PURE__ */ o("ZodISODate", (e, t) => {
	Ht.init(e, t), B.init(e, t);
});
function yi(e) {
	return /* @__PURE__ */ pr(vi, e);
}
var bi = /* @__PURE__ */ o("ZodISOTime", (e, t) => {
	Ut.init(e, t), B.init(e, t);
});
function xi(e) {
	return /* @__PURE__ */ mr(bi, e);
}
var Si = /* @__PURE__ */ o("ZodISODuration", (e, t) => {
	Wt.init(e, t), B.init(e, t);
});
function Ci(e) {
	return /* @__PURE__ */ hr(Si, e);
}
//#endregion
//#region node_modules/zod/v4/classic/errors.js
var wi = (e, t) => {
	_e.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => be(e, t) },
		flatten: { value: (t) => ye(e, t) },
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
o("ZodError", wi);
var L = o("ZodError", wi, { Parent: Error }), Ti = /* @__PURE__ */ xe(L), Ei = /* @__PURE__ */ Se(L), Di = /* @__PURE__ */ Ce(L), Oi = /* @__PURE__ */ Te(L), ki = /* @__PURE__ */ De(L), Ai = /* @__PURE__ */ Oe(L), ji = /* @__PURE__ */ ke(L), Mi = /* @__PURE__ */ Ae(L), Ni = /* @__PURE__ */ je(L), Pi = /* @__PURE__ */ Me(L), Fi = /* @__PURE__ */ Ne(L), Ii = /* @__PURE__ */ Pe(L), R = /* @__PURE__ */ o("ZodType", (e, t) => (M.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Jr(e, "input"),
	output: Jr(e, "output")
} }), e.toJSONSchema = qr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(v(t, { checks: [...t.checks ?? [], ...n.map((e) => typeof e == "function" ? { _zod: {
	check: e,
	def: { check: "custom" },
	onattach: []
} } : e)] }), { parent: !0 }), e.with = e.check, e.clone = (t, n) => S(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.parse = (t, n) => Ti(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Di(e, t, n), e.parseAsync = async (t, n) => Ei(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Oi(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => ki(e, t, n), e.decode = (t, n) => Ai(e, t, n), e.encodeAsync = async (t, n) => ji(e, t, n), e.decodeAsync = async (t, n) => Mi(e, t, n), e.safeEncode = (t, n) => Ni(e, t, n), e.safeDecode = (t, n) => Pi(e, t, n), e.safeEncodeAsync = async (t, n) => Fi(e, t, n), e.safeDecodeAsync = async (t, n) => Ii(e, t, n), e.refine = (t, n) => e.check(Wa(t, n)), e.superRefine = (t) => e.check(Ga(t)), e.overwrite = (t) => e.check(/* @__PURE__ */ P(t)), e.optional = () => Ea(e), e.exactOptional = () => Oa(e), e.nullable = () => Aa(e), e.nullish = () => Ea(Aa(e)), e.nonoptional = (t) => Ia(e, t), e.array = () => H(e), e.or = (t) => ga([e, t]), e.and = (t) => va(e, t), e.transform = (t) => Ba(e, wa(t)), e.default = (t) => Ma(e, t), e.prefault = (t) => Pa(e, t), e.catch = (t) => Ra(e, t), e.pipe = (t) => Ba(e, t), e.readonly = () => Ha(e), e.describe = (t) => {
	let n = e.clone();
	return Hn.add(n, { description: t }), n;
}, Object.defineProperty(e, "description", {
	get() {
		return Hn.get(e)?.description;
	},
	configurable: !0
}), e.meta = (...t) => {
	if (t.length === 0) return Hn.get(e);
	let n = e.clone();
	return Hn.add(n, t[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (t) => t(e), e)), Li = /* @__PURE__ */ o("_ZodString", (e, t) => {
	kt.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xr(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...t) => e.check(/* @__PURE__ */ kr(...t)), e.includes = (...t) => e.check(/* @__PURE__ */ Mr(...t)), e.startsWith = (...t) => e.check(/* @__PURE__ */ Nr(...t)), e.endsWith = (...t) => e.check(/* @__PURE__ */ Pr(...t)), e.min = (...t) => e.check(/* @__PURE__ */ Dr(...t)), e.max = (...t) => e.check(/* @__PURE__ */ Er(...t)), e.length = (...t) => e.check(/* @__PURE__ */ Or(...t)), e.nonempty = (...t) => e.check(/* @__PURE__ */ Dr(1, ...t)), e.lowercase = (t) => e.check(/* @__PURE__ */ Ar(t)), e.uppercase = (t) => e.check(/* @__PURE__ */ jr(t)), e.trim = () => e.check(/* @__PURE__ */ Ir()), e.normalize = (...t) => e.check(/* @__PURE__ */ Fr(...t)), e.toLowerCase = () => e.check(/* @__PURE__ */ Lr()), e.toUpperCase = () => e.check(/* @__PURE__ */ Rr()), e.slugify = () => e.check(/* @__PURE__ */ zr());
}), Ri = /* @__PURE__ */ o("ZodString", (e, t) => {
	kt.init(e, t), Li.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ Wn(zi, t)), e.url = (t) => e.check(/* @__PURE__ */ Xn(Hi, t)), e.jwt = (t) => e.check(/* @__PURE__ */ dr(ra, t)), e.emoji = (t) => e.check(/* @__PURE__ */ Zn(Ui, t)), e.guid = (t) => e.check(/* @__PURE__ */ Gn(Bi, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Kn(Vi, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ qn(Vi, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ Jn(Vi, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Yn(Vi, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ Qn(Wi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Gn(Bi, t)), e.cuid = (t) => e.check(/* @__PURE__ */ $n(Gi, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ er(Ki, t)), e.ulid = (t) => e.check(/* @__PURE__ */ tr(qi, t)), e.base64 = (t) => e.check(/* @__PURE__ */ cr(ea, t)), e.base64url = (t) => e.check(/* @__PURE__ */ lr(ta, t)), e.xid = (t) => e.check(/* @__PURE__ */ nr(Ji, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ rr(Yi, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ ir(Xi, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ ar(Zi, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ or(Qi, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ sr($i, t)), e.e164 = (t) => e.check(/* @__PURE__ */ ur(na, t)), e.datetime = (t) => e.check(_i(t)), e.date = (t) => e.check(yi(t)), e.time = (t) => e.check(xi(t)), e.duration = (t) => e.check(Ci(t));
});
function z(e) {
	return /* @__PURE__ */ Un(Ri, e);
}
var B = /* @__PURE__ */ o("ZodStringFormat", (e, t) => {
	N.init(e, t), Li.init(e, t);
}), zi = /* @__PURE__ */ o("ZodEmail", (e, t) => {
	Mt.init(e, t), B.init(e, t);
}), Bi = /* @__PURE__ */ o("ZodGUID", (e, t) => {
	At.init(e, t), B.init(e, t);
}), Vi = /* @__PURE__ */ o("ZodUUID", (e, t) => {
	jt.init(e, t), B.init(e, t);
}), Hi = /* @__PURE__ */ o("ZodURL", (e, t) => {
	Nt.init(e, t), B.init(e, t);
}), Ui = /* @__PURE__ */ o("ZodEmoji", (e, t) => {
	Pt.init(e, t), B.init(e, t);
}), Wi = /* @__PURE__ */ o("ZodNanoID", (e, t) => {
	Ft.init(e, t), B.init(e, t);
}), Gi = /* @__PURE__ */ o("ZodCUID", (e, t) => {
	It.init(e, t), B.init(e, t);
}), Ki = /* @__PURE__ */ o("ZodCUID2", (e, t) => {
	Lt.init(e, t), B.init(e, t);
}), qi = /* @__PURE__ */ o("ZodULID", (e, t) => {
	Rt.init(e, t), B.init(e, t);
}), Ji = /* @__PURE__ */ o("ZodXID", (e, t) => {
	zt.init(e, t), B.init(e, t);
}), Yi = /* @__PURE__ */ o("ZodKSUID", (e, t) => {
	Bt.init(e, t), B.init(e, t);
}), Xi = /* @__PURE__ */ o("ZodIPv4", (e, t) => {
	Gt.init(e, t), B.init(e, t);
}), Zi = /* @__PURE__ */ o("ZodIPv6", (e, t) => {
	Kt.init(e, t), B.init(e, t);
}), Qi = /* @__PURE__ */ o("ZodCIDRv4", (e, t) => {
	qt.init(e, t), B.init(e, t);
}), $i = /* @__PURE__ */ o("ZodCIDRv6", (e, t) => {
	Jt.init(e, t), B.init(e, t);
}), ea = /* @__PURE__ */ o("ZodBase64", (e, t) => {
	Xt.init(e, t), B.init(e, t);
}), ta = /* @__PURE__ */ o("ZodBase64URL", (e, t) => {
	Qt.init(e, t), B.init(e, t);
}), na = /* @__PURE__ */ o("ZodE164", (e, t) => {
	$t.init(e, t), B.init(e, t);
}), ra = /* @__PURE__ */ o("ZodJWT", (e, t) => {
	tn.init(e, t), B.init(e, t);
}), ia = /* @__PURE__ */ o("ZodNumber", (e, t) => {
	nn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => Zr(e, t, n, r), e.gt = (t, n) => e.check(/* @__PURE__ */ Cr(t, n)), e.gte = (t, n) => e.check(/* @__PURE__ */ wr(t, n)), e.min = (t, n) => e.check(/* @__PURE__ */ wr(t, n)), e.lt = (t, n) => e.check(/* @__PURE__ */ xr(t, n)), e.lte = (t, n) => e.check(/* @__PURE__ */ Sr(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ Sr(t, n)), e.int = (t) => e.check(oa(t)), e.safe = (t) => e.check(oa(t)), e.positive = (t) => e.check(/* @__PURE__ */ Cr(0, t)), e.nonnegative = (t) => e.check(/* @__PURE__ */ wr(0, t)), e.negative = (t) => e.check(/* @__PURE__ */ xr(0, t)), e.nonpositive = (t) => e.check(/* @__PURE__ */ Sr(0, t)), e.multipleOf = (t, n) => e.check(/* @__PURE__ */ Tr(t, n)), e.step = (t, n) => e.check(/* @__PURE__ */ Tr(t, n)), e.finite = () => e;
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function V(e) {
	return /* @__PURE__ */ gr(ia, e);
}
var aa = /* @__PURE__ */ o("ZodNumberFormat", (e, t) => {
	rn.init(e, t), ia.init(e, t);
});
function oa(e) {
	return /* @__PURE__ */ _r(aa, e);
}
var sa = /* @__PURE__ */ o("ZodBoolean", (e, t) => {
	an.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qr(e, t, n, r);
});
function ca(e) {
	return /* @__PURE__ */ vr(sa, e);
}
var la = /* @__PURE__ */ o("ZodUnknown", (e, t) => {
	on.init(e, t), R.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function ua() {
	return /* @__PURE__ */ yr(la);
}
var da = /* @__PURE__ */ o("ZodNever", (e, t) => {
	sn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => $r(e, t, n, r);
});
function fa(e) {
	return /* @__PURE__ */ br(da, e);
}
var pa = /* @__PURE__ */ o("ZodArray", (e, t) => {
	ln.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ii(e, t, n, r), e.element = t.element, e.min = (t, n) => e.check(/* @__PURE__ */ Dr(t, n)), e.nonempty = (t) => e.check(/* @__PURE__ */ Dr(1, t)), e.max = (t, n) => e.check(/* @__PURE__ */ Er(t, n)), e.length = (t, n) => e.check(/* @__PURE__ */ Or(t, n)), e.unwrap = () => e.element;
});
function H(e, t) {
	return /* @__PURE__ */ Br(pa, e, t);
}
var ma = /* @__PURE__ */ o("ZodObject", (e, t) => {
	mn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ai(e, t, n, r), g(e, "shape", () => t.shape), e.keyof = () => ba(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({
		...e._zod.def,
		catchall: t
	}), e.passthrough = () => e.clone({
		...e._zod.def,
		catchall: ua()
	}), e.loose = () => e.clone({
		...e._zod.def,
		catchall: ua()
	}), e.strict = () => e.clone({
		...e._zod.def,
		catchall: fa()
	}), e.strip = () => e.clone({
		...e._zod.def,
		catchall: void 0
	}), e.extend = (t) => ue(e, t), e.safeExtend = (t) => de(e, t), e.merge = (t) => E(e, t), e.pick = (t) => ce(e, t), e.omit = (t) => le(e, t), e.partial = (...t) => fe(Ta, e, t[0]), e.required = (...t) => pe(Fa, e, t[0]);
});
function U(e, t) {
	return new ma({
		type: "object",
		shape: e ?? {},
		...C(t)
	});
}
var ha = /* @__PURE__ */ o("ZodUnion", (e, t) => {
	gn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => oi(e, t, n, r), e.options = t.options;
});
function ga(e, t) {
	return new ha({
		type: "union",
		options: e,
		...C(t)
	});
}
var _a = /* @__PURE__ */ o("ZodIntersection", (e, t) => {
	_n.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => si(e, t, n, r);
});
function va(e, t) {
	return new _a({
		type: "intersection",
		left: e,
		right: t
	});
}
var ya = /* @__PURE__ */ o("ZodEnum", (e, t) => {
	bn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ei(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new ya({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new ya({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	};
});
function ba(e, t) {
	return new ya({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...C(t)
	});
}
var xa = /* @__PURE__ */ o("ZodLiteral", (e, t) => {
	xn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ti(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function Sa(e, t) {
	return new xa({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...C(t)
	});
}
var Ca = /* @__PURE__ */ o("ZodTransform", (e, t) => {
	Sn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ri(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new c(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(A(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(A(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function wa(e) {
	return new Ca({
		type: "transform",
		transform: e
	});
}
var Ta = /* @__PURE__ */ o("ZodOptional", (e, t) => {
	wn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => hi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ea(e) {
	return new Ta({
		type: "optional",
		innerType: e
	});
}
var Da = /* @__PURE__ */ o("ZodExactOptional", (e, t) => {
	Tn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => hi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Oa(e) {
	return new Da({
		type: "optional",
		innerType: e
	});
}
var ka = /* @__PURE__ */ o("ZodNullable", (e, t) => {
	En.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ci(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Aa(e) {
	return new ka({
		type: "nullable",
		innerType: e
	});
}
var ja = /* @__PURE__ */ o("ZodDefault", (e, t) => {
	Dn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ui(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ma(e, t) {
	return new ja({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : oe(t);
		}
	});
}
var Na = /* @__PURE__ */ o("ZodPrefault", (e, t) => {
	kn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => di(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Pa(e, t) {
	return new Na({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : oe(t);
		}
	});
}
var Fa = /* @__PURE__ */ o("ZodNonOptional", (e, t) => {
	An.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => li(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ia(e, t) {
	return new Fa({
		type: "nonoptional",
		innerType: e,
		...C(t)
	});
}
var La = /* @__PURE__ */ o("ZodCatch", (e, t) => {
	Mn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => fi(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Ra(e, t) {
	return new La({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var za = /* @__PURE__ */ o("ZodPipe", (e, t) => {
	Nn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => pi(e, t, n, r), e.in = t.in, e.out = t.out;
});
function Ba(e, t) {
	return new za({
		type: "pipe",
		in: e,
		out: t
	});
}
var Va = /* @__PURE__ */ o("ZodReadonly", (e, t) => {
	Fn.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => mi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ha(e) {
	return new Va({
		type: "readonly",
		innerType: e
	});
}
var Ua = /* @__PURE__ */ o("ZodCustom", (e, t) => {
	Ln.init(e, t), R.init(e, t), e._zod.processJSONSchema = (t, n, r) => ni(e, t, n, r);
});
function Wa(e, t = {}) {
	return /* @__PURE__ */ Vr(Ua, e, t);
}
function Ga(e) {
	return /* @__PURE__ */ Hr(e);
}
//#endregion
//#region src/schemas.ts
var W = "tasks", G = "1.1.0", K = "report-logger", Ka = "TASKBOARD_TASK_SELECTED", qa = "TASKBOARD_TASK_UPDATED", Ja = "CASE_REPORT_LINK_CREATED", Ya = "CASE_REPORT_UPDATED", Xa = "CASE_REPORT_TEMPLATE_IMPORTED", Za = "TASK_COUNT_CHANGED", q = U({
	id: z().min(1),
	title: z().default("Untitled task"),
	status: z().optional(),
	assignee: z().optional(),
	updatedAt: V().optional()
}), Qa = U({
	id: z().min(1),
	type: ba([
		"created",
		"updated",
		"linked",
		"rebound",
		"conflict",
		"decision",
		"sync"
	]),
	message: z().min(1),
	at: V(),
	by: z().default("system")
}), $a = U({
	id: z().min(1),
	taskId: z().nullable().optional(),
	title: z().min(1),
	content: z().default(""),
	status: ba([
		"draft",
		"active",
		"blocked",
		"closed"
	]).default("draft"),
	tags: H(z()).default([]),
	timeline: H(Qa).default([]),
	updatedAt: V(),
	taskSnapshot: q.nullable().optional(),
	taskChanged: ca().optional()
}), eo = U({
	taskId: z().min(1),
	reportId: z().min(1),
	linkedAt: V(),
	linkedBy: z().default("anonymous"),
	sourcePluginId: z().default(K),
	orphaned: ca().default(!1),
	history: H(U({
		reportId: z().min(1),
		linkedAt: V(),
		linkedBy: z()
	})).default([])
}), to = U({
	id: z().min(1),
	name: z().min(1),
	category: z().default("general"),
	content: z().min(1),
	createdAt: V(),
	updatedAt: V(),
	version: z().min(1)
}), no = U({
	reportId: z().nullable().default(null),
	content: z().default(""),
	autosavePending: ca().default(!1),
	updatedAt: V().default(0)
}), ro = U({
	lastSyncAt: V().default(0),
	sourcePlugin: z().default(""),
	lastError: z().default(""),
	retries: V().int().nonnegative().default(0)
}), io = U({
	version: Sa(G),
	upgrades: H(U({
		from: z(),
		to: z(),
		at: V()
	})).default([])
}), ao = U({
	version: Sa(G),
	taskReportLinks: H(eo).default([]),
	reports: H($a).default([]),
	templates: H(to).default([]),
	taskSnapshotCache: H(q).default([]),
	editorDraft: no.default({
		reportId: null,
		content: "",
		autosavePending: !1,
		updatedAt: 0
	}),
	syncMeta: ro.default({
		lastSyncAt: 0,
		sourcePlugin: "",
		lastError: "",
		retries: 0
	}),
	migrationMeta: io.default({
		version: G,
		upgrades: []
	})
}), oo = U({ taskId: z().min(1) }), so = U({ task: q }), co = U({
	reportId: z().min(1),
	updatedAt: V(),
	sourcePluginId: z().default(K)
}), lo = U({
	taskId: z().min(1),
	reportId: z().min(1),
	sourcePluginId: z().default(K)
}), uo = U({
	templateId: z().min(1),
	name: z().min(1),
	sourcePluginId: z().default(K)
}), fo = Date.now(), po = [{
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
	createdAt: fo,
	updatedAt: fo,
	version: G
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
	createdAt: fo,
	updatedAt: fo,
	version: G
}];
function mo() {
	return {
		version: G,
		taskReportLinks: [],
		reports: [],
		templates: [...po],
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
			version: G,
			upgrades: []
		}
	};
}
//#endregion
//#region src/utils.ts
function J(e) {
	let t = Math.random().toString(36).slice(2, 8);
	return `${e}-${Date.now()}-${t}`;
}
function Y(e, t = 120) {
	if (e == null) return "";
	let n = typeof e == "string" ? e : JSON.stringify(e);
	return n.length > t ? `${n.slice(0, t)}...` : n;
}
function ho(e) {
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}
function go(e) {
	return new Date(e).toLocaleString();
}
function _o(e, t) {
	let n = null, r = null, i = () => {
		r &&= (e(...r), null), n = null;
	};
	return ((...e) => {
		r = e, n === null && (n = window.setTimeout(i, t));
	});
}
//#endregion
//#region src/plugin.tsx
var X = {
	taskboardTasks: "taskboard.tasks",
	reports: "caseLogger.reports",
	links: "caseLogger.taskReportLinks",
	templates: "caseLogger.templates"
}, Z = "report-logger-user", Q = {
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
	templateImportStart: (e) => console.info("[report-logger] template import start", { name: Y(e, 40) }),
	templateImportSuccess: (e) => console.info("[report-logger] template import success", { templateId: e }),
	templateImportFailed: (e) => console.error("[report-logger] template import failed", { error: e }),
	taskSyncReceived: (e) => console.info("[report-logger] task sync received", { taskId: e }),
	conflictDetected: (e) => console.warn("[report-logger] conflict detected", { reportId: e })
};
function vo(e) {
	let t = e.runtimeConfig?.indexedDbBridge;
	return !t || typeof t != "object" ? null : t;
}
function yo(e) {
	let t = e, n = "root";
	for (let e = 0; e < 6; e += 1) {
		if (typeof t == "string") {
			let e = ho(t);
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
function bo(e) {
	let t = yo(e).value;
	if (Array.isArray(t)) return t;
	if (t && typeof t == "object") {
		let e = t;
		if (Array.isArray(e.tasks)) return e.tasks;
	}
	return [];
}
function xo(e) {
	let t = mo(), n = yo(e);
	if (Q.restorePayload(Y(n.value), n.extractedPath), Array.isArray(n.value)) {
		let e = n.value.map((e) => $a.safeParse(e)).filter((e) => e.success).map((e) => e.data);
		return {
			...t,
			reports: e,
			migrationMeta: {
				version: G,
				upgrades: [{
					from: "legacy-array",
					to: G,
					at: Date.now()
				}]
			}
		};
	}
	if (!n.value || typeof n.value != "object") return t;
	let r = n.value, i = r.reports ?? r[X.reports] ?? r.tasks, a = r.taskReportLinks ?? r[X.links], o = r.templates ?? r[X.templates], s = r.taskSnapshotCache ?? r[X.taskboardTasks], c = bo(i).map((e) => $a.safeParse(e)).filter((e) => e.success).map((e) => e.data), l = bo(a).map((e) => eo.safeParse(e)).filter((e) => e.success).map((e) => e.data), u = bo(o).map((e) => to.safeParse(e)).filter((e) => e.success).map((e) => e.data), d = bo(s).map((e) => q.safeParse(e)).filter((e) => e.success).map((e) => e.data), f = {
		...t,
		...r,
		reports: c,
		taskReportLinks: l,
		templates: u.length > 0 ? u : [...po],
		taskSnapshotCache: d,
		migrationMeta: {
			version: G,
			upgrades: [{
				from: String(r.migrationMeta?.version ?? "unknown"),
				to: G,
				at: Date.now()
			}]
		}
	}, p = ao.safeParse(f);
	return p.success ? p.data : t;
}
async function So(e, t) {
	let n = {
		pluginId: K,
		version: G,
		timestamp: Date.now(),
		type: "PERSIST",
		payload: t
	};
	await e.storage.save(W, n, G);
	let r = vo(e);
	return r?.save ? (await Promise.all([
		r.save(X.reports, W, t.reports, G),
		r.save(X.links, W, t.taskReportLinks, G),
		r.save(X.templates, W, t.templates, G)
	]), "indexeddb-bridge") : "storage";
}
async function Co(e) {
	Q.restoreStart();
	let t = xo(await e.storage.get(W)), n = vo(e);
	if (n?.get) try {
		return t.taskSnapshotCache = bo(await n.get(X.taskboardTasks, W)).map((e) => q.safeParse(e)).filter((e) => e.success).map((e) => e.data), t.syncMeta.lastSyncAt = Date.now(), t.syncMeta.sourcePlugin = "taskboard", {
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
function wo(e, t, n) {
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
function To(e) {
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
function Eo(e) {
	let t = [], n;
	for (let r of e) {
		r.section && r.section !== n && (n = r.section, t.push(`## ${r.section}`), t.push(""));
		let e = r.section ? "### " : "# ";
		t.push(`${e}${r.title}`), r.value.trim() && t.push(r.value.trim()), t.push("");
	}
	return t.join("\n").trim();
}
function Do({ context: a }) {
	let [o, s] = i([]), [c, l] = i([]), [u, d] = i([]), [f, p] = i([]), [m, ee] = i(null), [h, te] = i(null), [g, _] = i(!1), [v, ne] = i("storage"), [re, ie] = i(""), [y, ae] = i("edit"), [b, oe] = i(""), [se, x] = i([]), [S, C] = i(""), [w, T] = i(!1), [ce, le] = i(""), [ue, de] = i([]), [E, fe] = i(null), pe = r(!0), D = r("manual"), me = n(() => f.find((e) => e.id === m) ?? null, [f, m]), O = n(() => o.find((e) => e.id === h) ?? null, [o, h]), k = n(() => {
		let e = re.trim().toLowerCase();
		return e ? o.filter((t) => {
			let n = t.title.toLowerCase(), r = t.content.toLowerCase();
			return n.includes(e) || r.includes(e);
		}) : o;
	}, [re, o]), he = n(() => _o((e, t) => {
		s((n) => n.map((n) => {
			if (n.id !== t) return n;
			let r = Date.now();
			return {
				...n,
				content: e,
				updatedAt: r,
				timeline: [...n.timeline, {
					id: J("tl"),
					type: "updated",
					message: "Autosave",
					at: r,
					by: Z
				}]
			};
		})), T(!1);
	}, 900), []);
	t(() => {
		let e = !0;
		return (async () => {
			try {
				let t = await Co(a);
				if (!e) return;
				let n = ao.safeParse(t.payload), r = n.success ? n.data : mo();
				s(r.reports), l(r.taskReportLinks), d(r.templates), p(r.taskSnapshotCache), ne(t.source), r.reports.length > 0 && (te(r.reports[0].id), C(r.reports[0].content)), Q.restoreSuccess(r.reports.length + r.taskReportLinks.length, t.source);
			} catch (e) {
				Q.restoreFailed(e);
			} finally {
				e && _(!0);
			}
		})(), () => {
			e = !1;
		};
	}, [a]), t(() => {
		if (!h) {
			C(""), x([]);
			return;
		}
		C(O?.content ?? ""), T(!1), x([]);
	}, [h]), t(() => {
		if (!g) return;
		if (pe.current) {
			pe.current = !1;
			return;
		}
		let e = {
			version: G,
			taskReportLinks: c,
			reports: o,
			templates: u,
			taskSnapshotCache: f,
			editorDraft: {
				reportId: h,
				content: S,
				autosavePending: w,
				updatedAt: Date.now()
			},
			syncMeta: {
				lastSyncAt: Date.now(),
				sourcePlugin: v,
				lastError: ce,
				retries: 0
			},
			migrationMeta: {
				version: G,
				upgrades: []
			}
		};
		Q.saveTriggered(o.length + c.length), So(a, e).catch((e) => {
			le(String(e)), Q.saveFailed(e);
		});
	}, [
		a,
		w,
		S,
		g,
		ce,
		c,
		o,
		h,
		v,
		f,
		u
	]), t(() => {
		!g || !h || w && he(S, h);
	}, [
		w,
		S,
		g,
		h,
		he
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
		return t(Ka, (e) => {
			let t = oo.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ka,
					preview: Y(e)
				});
				return;
			}
			ee(t.data.taskId);
		}), t(qa, (e) => {
			let t = so.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: qa,
					preview: Y(e)
				});
				return;
			}
			let n = t.data.task;
			Q.taskSyncReceived(n.id), p((e) => {
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
						id: J("tl"),
						type: "sync",
						message: "Task snapshot updated from TaskBoard",
						at: Date.now(),
						by: "taskboard"
					}]
				};
			}));
		}), t(Ya, (e) => {
			let t = co.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ya,
					preview: Y(e)
				});
				return;
			}
			let n = o.find((e) => e.id === t.data.reportId);
			n && t.data.sourcePluginId !== "report-logger" && t.data.updatedAt > n.updatedAt && w && (Q.conflictDetected(n.id), fe({
				reportId: n.id,
				externalUpdatedAt: t.data.updatedAt,
				localUpdatedAt: n.updatedAt
			}));
		}), t(Ja, (e) => {
			let t = lo.safeParse(e);
			if (!t.success) {
				console.warn("[report-logger] rejected invalid event payload", {
					event: Ja,
					preview: Y(e)
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
		}), t(Xa, (e) => {
			uo.safeParse(e).success || console.warn("[report-logger] rejected invalid event payload", {
				event: Xa,
				preview: Y(e)
			});
		}), () => {
			for (let t of e) t();
		};
	}, [
		a.eventBus,
		w,
		o
	]);
	let A = (e) => {
		let t = me ?? null, n = e ? u.find((t) => t.id === e) : null, r = n ? wo(n.content, t, Z) : {
			text: "",
			unresolved: []
		};
		de(r.unresolved);
		let i = J("report"), c = Date.now(), l = {
			id: i,
			taskId: t?.id ?? null,
			title: t ? `Case Report - ${t.title}` : "Case Report",
			content: r.text,
			status: "draft",
			tags: [],
			timeline: [{
				id: J("tl"),
				type: "created",
				message: "Report created",
				at: c,
				by: Z
			}],
			updatedAt: c,
			taskSnapshot: t,
			taskChanged: !1
		};
		s((e) => [l, ...e]), te(i), C(l.content), t && ge(t.id, i), a.eventBus.emit(Za, { count: o.length + 1 });
	}, ge = (e, t) => {
		try {
			Q.linkCreateStart(e, t), l((n) => {
				let r = n.find((t) => t.taskId === e), i = Date.now();
				if (!r) {
					let r = {
						taskId: e,
						reportId: t,
						linkedAt: i,
						linkedBy: Z,
						sourcePluginId: K,
						orphaned: !1,
						history: []
					};
					return [...n, r];
				}
				return n.map((n) => n.taskId === e ? {
					...n,
					reportId: t,
					linkedAt: i,
					linkedBy: Z,
					orphaned: !1,
					history: [...n.history, {
						reportId: n.reportId,
						linkedAt: n.linkedAt,
						linkedBy: n.linkedBy
					}]
				} : n);
			}), a.eventBus.emit(Ja, {
				taskId: e,
				reportId: t,
				sourcePluginId: K
			}), Q.linkCreateSuccess(e, t);
		} catch (e) {
			Q.linkCreateFailed(e);
		}
	}, _e = (e) => {
		if (!O) return;
		let t = u.find((t) => t.id === e);
		if (!t || !window.confirm("Apply template and overwrite current report content?")) return;
		let n = wo(t.content, me, Z);
		x(To(n.text).fields.map((e) => ({
			...e,
			id: J("field")
		}))), de(n.unresolved), C(n.text), T(!0);
	}, ve = (e, t) => {
		x((n) => {
			let r = n.map((n) => n.id === e ? {
				...n,
				value: t
			} : n);
			return C(Eo(r)), T(!0), r;
		});
	}, ye = () => {
		if (!O) return;
		let e = new Blob([S], { type: "text/markdown;charset=utf-8" }), t = URL.createObjectURL(e), n = document.createElement("a");
		n.href = t, n.download = `${O.title.replace(/\s+/g, "-").toLowerCase()}.md`, n.click(), URL.revokeObjectURL(t);
	}, be = (e) => {
		!E || !O || (D.current = e, s((t) => t.map((t) => {
			if (t.id !== E.reportId) return t;
			let n = e === "local" ? "Conflict resolved: keep local draft" : e === "external" ? "Conflict resolved: accept external update" : "Conflict resolved: manual merge";
			return {
				...t,
				timeline: [...t.timeline, {
					id: J("tl"),
					type: "decision",
					message: n,
					at: Date.now(),
					by: Z
				}],
				updatedAt: e === "external" ? E.externalUpdatedAt : t.updatedAt
			};
		})), fe(null));
	}, xe = c.find((e) => e.taskId === m) ?? null;
	return /* @__PURE__ */ e.createElement("div", { className: "report-logger" }, /* @__PURE__ */ e.createElement("div", { className: "rl-shell" }, /* @__PURE__ */ e.createElement("aside", { className: "rl-panel rl-sidebar" }, /* @__PURE__ */ e.createElement("div", { className: "rl-sidebar-head" }, /* @__PURE__ */ e.createElement("h1", { className: "rl-title" }, "Documents"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button",
		onClick: () => A()
	}, "Create")), /* @__PURE__ */ e.createElement("label", {
		className: "rl-search-wrap",
		htmlFor: "report-search"
	}, /* @__PURE__ */ e.createElement("span", { className: "rl-meta" }, "Search by title/content"), /* @__PURE__ */ e.createElement("input", {
		id: "report-search",
		className: "rl-input",
		value: re,
		onChange: (e) => ie(e.target.value),
		placeholder: "Find a document..."
	})), /* @__PURE__ */ e.createElement("div", { className: "rl-list rl-doc-nav" }, k.map((t) => /* @__PURE__ */ e.createElement("button", {
		key: t.id,
		className: "rl-item",
		"data-active": t.id === h,
		onClick: () => {
			te(t.id), ae("edit");
		}
	}, /* @__PURE__ */ e.createElement("div", { className: "rl-item-title" }, t.title), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "Updated ", go(t.updatedAt)), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, Y(t.content, 66)))), k.length === 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, "No matching documents.") : null)), /* @__PURE__ */ e.createElement("section", { className: "rl-panel rl-workspace" }, /* @__PURE__ */ e.createElement("div", { className: "rl-workspace-head" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h2", { className: "rl-section-title" }, O?.title ?? "Select a document"), /* @__PURE__ */ e.createElement("div", { className: "rl-meta" }, O ? `Updated ${go(O.updatedAt)}` : "Pick one file from the left navigation.")), /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		"data-active": y === "edit",
		onClick: () => ae("edit")
	}, "Edit"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		"data-active": y === "preview",
		onClick: () => ae("preview")
	}, "Browse"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: ye
	}, "Export"))), O?.taskChanged ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Task title changed in TaskBoard. Decide whether to sync report text.") : null, E ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Conflict detected for report ", E.reportId, ". Local: ", go(E.localUpdatedAt), "; External:", " ", go(E.externalUpdatedAt), /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-row",
		style: { marginTop: 8 }
	}, /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => be("local")
	}, "Keep Local"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => be("external")
	}, "Accept External"), /* @__PURE__ */ e.createElement("button", {
		className: "rl-button secondary",
		onClick: () => be("manual")
	}, "Manual Merge"))) : null, O ? /* @__PURE__ */ e.createElement(e.Fragment, null, y === "edit" ? /* @__PURE__ */ e.createElement("div", { className: "rl-form-row" }, /* @__PURE__ */ e.createElement("select", {
		className: "rl-select",
		onChange: (e) => {
			let t = e.target.value;
			oe(t), t && (_e(t), oe(""));
		},
		value: b
	}, /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose template (overwrite current content)"), u.map((t) => /* @__PURE__ */ e.createElement("option", {
		key: t.id,
		value: t.id
	}, t.name, " [", t.category, "]")))) : null, y === "edit" && se.length > 0 ? /* @__PURE__ */ e.createElement("div", {
		className: "rl-form-sheet",
		role: "form",
		"aria-label": "Template form fields"
	}, se.map((t, n, r) => {
		let i = n > 0 ? r[n - 1].section : null, a = t.section && t.section !== i;
		return /* @__PURE__ */ e.createElement(e.Fragment, { key: `form-field-${t.id}` }, a && /* @__PURE__ */ e.createElement("div", { className: "rl-form-section-title" }, t.section), /* @__PURE__ */ e.createElement("div", { className: "rl-form-item" }, /* @__PURE__ */ e.createElement("div", { className: "rl-form-item-head" }, /* @__PURE__ */ e.createElement("span", { className: "rl-form-item-index" }, String(n + 1).padStart(2, "0"), "."), /* @__PURE__ */ e.createElement("label", {
			htmlFor: `field-${t.id}`,
			className: "rl-form-item-label"
		}, t.title)), /* @__PURE__ */ e.createElement("textarea", {
			id: `field-${t.id}`,
			className: "rl-form-item-input",
			value: t.value,
			onChange: (e) => ve(t.id, e.target.value),
			placeholder: `請填寫 ${t.title}...`
		})));
	})) : null, ue.length > 0 ? /* @__PURE__ */ e.createElement("div", { className: "rl-warning" }, "Unresolved placeholders: ", ue.join(", ")) : null, y === "edit" && se.length === 0 ? /* @__PURE__ */ e.createElement("textarea", {
		className: "rl-textarea",
		value: S,
		onChange: (e) => {
			C(e.target.value), T(!0);
		},
		placeholder: "Write report progress in markdown..."
	}) : /* @__PURE__ */ e.createElement("article", { className: "rl-preview" }, S || "No content yet."), /* @__PURE__ */ e.createElement("div", { className: "rl-footer" }, /* @__PURE__ */ e.createElement("span", null, "Selected report: ", O.id), /* @__PURE__ */ e.createElement("span", null, "Autosave: ", w ? "pending" : "synced"), /* @__PURE__ */ e.createElement("span", null, "Hydrated: ", g ? "yes" : "no", " / ", v), xe ? /* @__PURE__ */ e.createElement("span", null, "Linked: ", xe.reportId) : null)) : /* @__PURE__ */ e.createElement("div", { className: "rl-empty-state" }, "Create a new document or choose one from the left."))));
}
var Oo = null, $ = null, ko = {
	id: K,
	name: "Report Logger",
	version: G,
	mount(t, n) {
		$ &&= ($.remove(), null);
		let r = `plugin-${K}`, i = document.createElement("div");
		i.id = r, i.style.minHeight = "100%", t.appendChild(i), $ = i, Oo = a(i), Oo.render(e.createElement(Do, { context: n }));
	},
	unmount() {
		Oo &&= (Oo.unmount(), null), $ &&= ($.innerHTML = "", $.remove(), null);
	}
};
//#endregion
export { ko as default };
