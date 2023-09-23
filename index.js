!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define([], t)
		: "object" == typeof exports
		? (exports.supabase = t())
		: (e.supabase = t());
})(self, () =>
	(() => {
		var e,
			t,
			r = {
				982: (e, t, r) => {
					"use strict";
					r.r(t),
						r.d(t, {
							FunctionsClient: () => a,
							FunctionsError: () => s,
							FunctionsFetchError: () => i,
							FunctionsHttpError: () => o,
							FunctionsRelayError: () => n,
						});
					class s extends Error {
						constructor(e, t = "FunctionsError", r) {
							super(e), (super.name = t), (this.context = r);
						}
					}
					class i extends s {
						constructor(e) {
							super(
								"Failed to send a request to the Edge Function",
								"FunctionsFetchError",
								e
							);
						}
					}
					class n extends s {
						constructor(e) {
							super(
								"Relay Error invoking the Edge Function",
								"FunctionsRelayError",
								e
							);
						}
					}
					class o extends s {
						constructor(e) {
							super(
								"Edge Function returned a non-2xx status code",
								"FunctionsHttpError",
								e
							);
						}
					}
					class a {
						constructor(e, { headers: t = {}, customFetch: s } = {}) {
							(this.url = e),
								(this.headers = t),
								(this.fetch = ((e) => {
									let t;
									return (
										(t =
											e ||
											("undefined" == typeof fetch
												? (...e) => {
														return (
															(t = void 0),
															(s = void 0),
															(n = function* () {
																return yield (yield Promise.resolve().then(
																	r.t.bind(r, 98, 23)
																)).fetch(...e);
															}),
															new ((i = void 0) || (i = Promise))(function (
																e,
																r
															) {
																function o(e) {
																	try {
																		h(n.next(e));
																	} catch (e) {
																		r(e);
																	}
																}
																function a(e) {
																	try {
																		h(n.throw(e));
																	} catch (e) {
																		r(e);
																	}
																}
																function h(t) {
																	var r;
																	t.done
																		? e(t.value)
																		: ((r = t.value),
																		  r instanceof i
																				? r
																				: new i(function (e) {
																						e(r);
																				  })).then(o, a);
																}
																h((n = n.apply(t, s || [])).next());
															})
														);
														var t, s, i, n;
												  }
												: fetch)),
										(...e) => t(...e)
									);
								})(s));
						}
						setAuth(e) {
							this.headers.Authorization = `Bearer ${e}`;
						}
						invoke(e, t = {}) {
							var r, s, a, h, l;
							return (
								(s = this),
								(a = void 0),
								(l = function* () {
									try {
										const { headers: s, method: a, body: h } = t;
										let l,
											c = {};
										h &&
											((s &&
												!Object.prototype.hasOwnProperty.call(
													s,
													"Content-Type"
												)) ||
												!s) &&
											(("undefined" != typeof Blob && h instanceof Blob) ||
											h instanceof ArrayBuffer
												? ((c["Content-Type"] = "application/octet-stream"),
												  (l = h))
												: "string" == typeof h
												? ((c["Content-Type"] = "text/plain"), (l = h))
												: "undefined" != typeof FormData &&
												  h instanceof FormData
												? (l = h)
												: ((c["Content-Type"] = "application/json"),
												  (l = JSON.stringify(h))));
										const u = yield this.fetch(`${this.url}/${e}`, {
												method: a || "POST",
												headers: Object.assign(
													Object.assign(Object.assign({}, c), this.headers),
													s
												),
												body: l,
											}).catch((e) => {
												throw new i(e);
											}),
											d = u.headers.get("x-relay-error");
										if (d && "true" === d) throw new n(u);
										if (!u.ok) throw new o(u);
										let f,
											p = (
												null !== (r = u.headers.get("Content-Type")) &&
												void 0 !== r
													? r
													: "text/plain"
											)
												.split(";")[0]
												.trim();
										return (
											(f =
												"application/json" === p
													? yield u.json()
													: "application/octet-stream" === p
													? yield u.blob()
													: "multipart/form-data" === p
													? yield u.formData()
													: yield u.text()),
											{ data: f, error: null }
										);
									} catch (e) {
										return { data: null, error: e };
									}
								}),
								new ((h = void 0) || (h = Promise))(function (e, t) {
									function r(e) {
										try {
											n(l.next(e));
										} catch (e) {
											t(e);
										}
									}
									function i(e) {
										try {
											n(l.throw(e));
										} catch (e) {
											t(e);
										}
									}
									function n(t) {
										var s;
										t.done
											? e(t.value)
											: ((s = t.value),
											  s instanceof h
													? s
													: new h(function (e) {
															e(s);
													  })).then(r, i);
									}
									n((l = l.apply(s, a || [])).next());
								})
							);
						}
					}
				},
				165: (e, t, r) => {
					"use strict";
					r.r(t),
						r.d(t, {
							AuthApiError: () => b,
							AuthError: () => m,
							AuthImplicitGrantRedirectError: () => O,
							AuthInvalidCredentialsError: () => T,
							AuthPKCEGrantCodeExchangeError: () => j,
							AuthRetryableFetchError: () => P,
							AuthSessionMissingError: () => S,
							AuthUnknownError: () => w,
							CustomAuthError: () => E,
							GoTrueAdminApi: () => L,
							GoTrueClient: () => J,
							isAuthApiError: () => _,
							isAuthError: () => g,
						});
					var s = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					const i = () => "undefined" != typeof document,
						n = { tested: !1, writable: !1 },
						o = () => {
							if (!i()) return !1;
							try {
								if ("object" != typeof globalThis.localStorage) return !1;
							} catch (e) {
								return !1;
							}
							if (n.tested) return n.writable;
							const e = `lswt-${Math.random()}${Math.random()}`;
							try {
								globalThis.localStorage.setItem(e, e),
									globalThis.localStorage.removeItem(e),
									(n.tested = !0),
									(n.writable = !0);
							} catch (e) {
								(n.tested = !0), (n.writable = !1);
							}
							return n.writable;
						};
					function a(e, t) {
						var r;
						t ||
							(t =
								(null ===
									(r =
										null === window || void 0 === window
											? void 0
											: window.location) || void 0 === r
									? void 0
									: r.href) || ""),
							(e = e.replace(/[\[\]]/g, "\\$&"));
						const s = new RegExp("[?&#]" + e + "(=([^&#]*)|&|#|$)").exec(t);
						return s
							? s[2]
								? decodeURIComponent(s[2].replace(/\+/g, " "))
								: ""
							: null;
					}
					const h = (e) => {
							let t;
							return (
								(t =
									e ||
									("undefined" == typeof fetch
										? (...e) =>
												s(void 0, void 0, void 0, function* () {
													return yield (yield Promise.resolve().then(
														r.t.bind(r, 98, 23)
													)).fetch(...e);
												})
										: fetch)),
								(...e) => t(...e)
							);
						},
						l = (e, t, r) =>
							s(void 0, void 0, void 0, function* () {
								yield e.setItem(t, JSON.stringify(r));
							}),
						c = (e, t) =>
							s(void 0, void 0, void 0, function* () {
								const r = yield e.getItem(t);
								if (!r) return null;
								try {
									return JSON.parse(r);
								} catch (e) {
									return r;
								}
							}),
						u = (e, t) =>
							s(void 0, void 0, void 0, function* () {
								yield e.removeItem(t);
							});
					class d {
						constructor() {
							this.promise = new d.promiseConstructor((e, t) => {
								(this.resolve = e), (this.reject = t);
							});
						}
					}
					function f(e) {
						const t = e.split(".");
						if (3 !== t.length)
							throw new Error("JWT is not valid: not a JWT structure");
						if (
							!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
								t[1]
							)
						)
							throw new Error(
								"JWT is not valid: payload is not in base64url format"
							);
						const r = t[1];
						return JSON.parse(
							(function (e) {
								const t =
									"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
								let r,
									s,
									i,
									n,
									o,
									a,
									h,
									l = "",
									c = 0;
								for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
									(n = t.indexOf(e.charAt(c++))),
										(o = t.indexOf(e.charAt(c++))),
										(a = t.indexOf(e.charAt(c++))),
										(h = t.indexOf(e.charAt(c++))),
										(r = (n << 2) | (o >> 4)),
										(s = ((15 & o) << 4) | (a >> 2)),
										(i = ((3 & a) << 6) | h),
										(l += String.fromCharCode(r)),
										64 != a && 0 != s && (l += String.fromCharCode(s)),
										64 != h && 0 != i && (l += String.fromCharCode(i));
								return l;
							})(r)
						);
					}
					function p(e) {
						return ("0" + e.toString(16)).substr(-2);
					}
					function v() {
						const e = new Uint32Array(56);
						if ("undefined" == typeof crypto)
							throw new Error(
								"PKCE is not supported on devices without WebCrypto API support, please add polyfills"
							);
						return crypto.getRandomValues(e), Array.from(e, p).join("");
					}
					function y(e) {
						return s(this, void 0, void 0, function* () {
							const t = yield (function (e) {
								return s(this, void 0, void 0, function* () {
									const t = new TextEncoder().encode(e);
									if ("undefined" == typeof crypto)
										throw new Error(
											"PKCE is not supported on devices without WebCrypto API support, please add polyfills"
										);
									const r = yield crypto.subtle.digest("SHA-256", t),
										s = new Uint8Array(r);
									return Array.from(s)
										.map((e) => String.fromCharCode(e))
										.join("");
								});
							})(e);
							return btoa(t)
								.replace(/\+/g, "-")
								.replace(/\//g, "_")
								.replace(/=+$/, "");
						});
					}
					d.promiseConstructor = Promise;
					class m extends Error {
						constructor(e, t) {
							super(e),
								(this.__isAuthError = !0),
								(this.name = "AuthError"),
								(this.status = t);
						}
					}
					function g(e) {
						return "object" == typeof e && null !== e && "__isAuthError" in e;
					}
					class b extends m {
						constructor(e, t) {
							super(e, t), (this.name = "AuthApiError"), (this.status = t);
						}
						toJSON() {
							return {
								name: this.name,
								message: this.message,
								status: this.status,
							};
						}
					}
					function _(e) {
						return g(e) && "AuthApiError" === e.name;
					}
					class w extends m {
						constructor(e, t) {
							super(e),
								(this.name = "AuthUnknownError"),
								(this.originalError = t);
						}
					}
					class E extends m {
						constructor(e, t, r) {
							super(e), (this.name = t), (this.status = r);
						}
						toJSON() {
							return {
								name: this.name,
								message: this.message,
								status: this.status,
							};
						}
					}
					class S extends E {
						constructor() {
							super("Auth session missing!", "AuthSessionMissingError", 400);
						}
					}
					class T extends E {
						constructor(e) {
							super(e, "AuthInvalidCredentialsError", 400);
						}
					}
					class O extends E {
						constructor(e, t = null) {
							super(e, "AuthImplicitGrantRedirectError", 500),
								(this.details = null),
								(this.details = t);
						}
						toJSON() {
							return {
								name: this.name,
								message: this.message,
								status: this.status,
								details: this.details,
							};
						}
					}
					class j extends E {
						constructor(e, t = null) {
							super(e, "AuthPKCEGrantCodeExchangeError", 500),
								(this.details = null),
								(this.details = t);
						}
						toJSON() {
							return {
								name: this.name,
								message: this.message,
								status: this.status,
								details: this.details,
							};
						}
					}
					class P extends E {
						constructor(e, t) {
							super(e, "AuthRetryableFetchError", t);
						}
					}
					var k = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					const x = (e) =>
						e.msg ||
						e.message ||
						e.error_description ||
						e.error ||
						JSON.stringify(e);
					function C(e, t, r, s) {
						var i;
						return k(this, void 0, void 0, function* () {
							const n = Object.assign({}, null == s ? void 0 : s.headers);
							(null == s ? void 0 : s.jwt) &&
								(n.Authorization = `Bearer ${s.jwt}`);
							const o =
								null !== (i = null == s ? void 0 : s.query) && void 0 !== i
									? i
									: {};
							(null == s ? void 0 : s.redirectTo) &&
								(o.redirect_to = s.redirectTo);
							const a = Object.keys(o).length
									? "?" + new URLSearchParams(o).toString()
									: "",
								h = yield (function (e, t, r, s, i, n) {
									return k(this, void 0, void 0, function* () {
										return new Promise((o, a) => {
											e(
												r,
												((e, t, r, s) => {
													const i = {
														method: e,
														headers: (null == t ? void 0 : t.headers) || {},
													};
													return "GET" === e
														? i
														: ((i.headers = Object.assign(
																{
																	"Content-Type":
																		"application/json;charset=UTF-8",
																},
																null == t ? void 0 : t.headers
														  )),
														  (i.body = JSON.stringify(s)),
														  Object.assign(Object.assign({}, i), r));
												})(t, s, i, n)
											)
												.then((e) => {
													if (!e.ok) throw e;
													return (null == s ? void 0 : s.noResolveJson)
														? e
														: e.json();
												})
												.then((e) => o(e))
												.catch((e) =>
													((e, t) =>
														k(void 0, void 0, void 0, function* () {
															var r;
															"object" == typeof (r = e) &&
															null !== r &&
															"status" in r &&
															"ok" in r &&
															"json" in r &&
															"function" == typeof r.json
																? [502, 503, 504].includes(e.status)
																	? t(new P(x(e), e.status))
																	: e
																			.json()
																			.then((r) => {
																				t(new b(x(r), e.status || 500));
																			})
																			.catch((e) => {
																				t(new w(x(e), e));
																			})
																: t(new P(x(e), 0));
														}))(e, a)
												);
										});
									});
								})(
									e,
									t,
									r + a,
									{
										headers: n,
										noResolveJson: null == s ? void 0 : s.noResolveJson,
									},
									{},
									null == s ? void 0 : s.body
								);
							return (null == s ? void 0 : s.xform)
								? null == s
									? void 0
									: s.xform(h)
								: { data: Object.assign({}, h), error: null };
						});
					}
					function A(e) {
						var t;
						let r = null;
						var s;
						return (
							(function (e) {
								return e.access_token && e.refresh_token && e.expires_in;
							})(e) &&
								((r = Object.assign({}, e)),
								(r.expires_at =
									((s = e.expires_in), Math.round(Date.now() / 1e3) + s))),
							{
								data: {
									session: r,
									user: null !== (t = e.user) && void 0 !== t ? t : e,
								},
								error: null,
							}
						);
					}
					function $(e) {
						var t;
						return {
							data: { user: null !== (t = e.user) && void 0 !== t ? t : e },
							error: null,
						};
					}
					function R(e) {
						return { data: e, error: null };
					}
					function I(e) {
						const {
								action_link: t,
								email_otp: r,
								hashed_token: s,
								redirect_to: i,
								verification_type: n,
							} = e,
							o = (function (e, t) {
								var r = {};
								for (var s in e)
									Object.prototype.hasOwnProperty.call(e, s) &&
										t.indexOf(s) < 0 &&
										(r[s] = e[s]);
								if (
									null != e &&
									"function" == typeof Object.getOwnPropertySymbols
								) {
									var i = 0;
									for (s = Object.getOwnPropertySymbols(e); i < s.length; i++)
										t.indexOf(s[i]) < 0 &&
											Object.prototype.propertyIsEnumerable.call(e, s[i]) &&
											(r[s[i]] = e[s[i]]);
								}
								return r;
							})(e, [
								"action_link",
								"email_otp",
								"hashed_token",
								"redirect_to",
								"verification_type",
							]);
						return {
							data: {
								properties: {
									action_link: t,
									email_otp: r,
									hashed_token: s,
									redirect_to: i,
									verification_type: n,
								},
								user: Object.assign({}, o),
							},
							error: null,
						};
					}
					function U(e) {
						return e;
					}
					var D = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					class L {
						constructor({ url: e = "", headers: t = {}, fetch: r }) {
							(this.url = e),
								(this.headers = t),
								(this.fetch = h(r)),
								(this.mfa = {
									listFactors: this._listFactors.bind(this),
									deleteFactor: this._deleteFactor.bind(this),
								});
						}
						signOut(e) {
							return D(this, void 0, void 0, function* () {
								try {
									return (
										yield C(this.fetch, "POST", `${this.url}/logout`, {
											headers: this.headers,
											jwt: e,
											noResolveJson: !0,
										}),
										{ data: null, error: null }
									);
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						inviteUserByEmail(e, t = {}) {
							return D(this, void 0, void 0, function* () {
								try {
									return yield C(this.fetch, "POST", `${this.url}/invite`, {
										body: { email: e, data: t.data },
										headers: this.headers,
										redirectTo: t.redirectTo,
										xform: $,
									});
								} catch (e) {
									if (g(e)) return { data: { user: null }, error: e };
									throw e;
								}
							});
						}
						generateLink(e) {
							return D(this, void 0, void 0, function* () {
								try {
									const { options: t } = e,
										r = (function (e, t) {
											var r = {};
											for (var s in e)
												Object.prototype.hasOwnProperty.call(e, s) &&
													t.indexOf(s) < 0 &&
													(r[s] = e[s]);
											if (
												null != e &&
												"function" == typeof Object.getOwnPropertySymbols
											) {
												var i = 0;
												for (
													s = Object.getOwnPropertySymbols(e);
													i < s.length;
													i++
												)
													t.indexOf(s[i]) < 0 &&
														Object.prototype.propertyIsEnumerable.call(
															e,
															s[i]
														) &&
														(r[s[i]] = e[s[i]]);
											}
											return r;
										})(e, ["options"]),
										s = Object.assign(Object.assign({}, r), t);
									return (
										"newEmail" in r &&
											((s.new_email = null == r ? void 0 : r.newEmail),
											delete s.newEmail),
										yield C(
											this.fetch,
											"POST",
											`${this.url}/admin/generate_link`,
											{
												body: s,
												headers: this.headers,
												xform: I,
												redirectTo: null == t ? void 0 : t.redirectTo,
											}
										)
									);
								} catch (e) {
									if (g(e))
										return { data: { properties: null, user: null }, error: e };
									throw e;
								}
							});
						}
						createUser(e) {
							return D(this, void 0, void 0, function* () {
								try {
									return yield C(
										this.fetch,
										"POST",
										`${this.url}/admin/users`,
										{ body: e, headers: this.headers, xform: $ }
									);
								} catch (e) {
									if (g(e)) return { data: { user: null }, error: e };
									throw e;
								}
							});
						}
						listUsers(e) {
							var t, r, s, i, n, o, a;
							return D(this, void 0, void 0, function* () {
								try {
									const h = { nextPage: null, lastPage: 0, total: 0 },
										l = yield C(this.fetch, "GET", `${this.url}/admin/users`, {
											headers: this.headers,
											noResolveJson: !0,
											query: {
												page:
													null !==
														(r =
															null === (t = null == e ? void 0 : e.page) ||
															void 0 === t
																? void 0
																: t.toString()) && void 0 !== r
														? r
														: "",
												per_page:
													null !==
														(i =
															null === (s = null == e ? void 0 : e.perPage) ||
															void 0 === s
																? void 0
																: s.toString()) && void 0 !== i
														? i
														: "",
											},
											xform: U,
										});
									if (l.error) throw l.error;
									const c = yield l.json(),
										u =
											null !== (n = l.headers.get("x-total-count")) &&
											void 0 !== n
												? n
												: 0,
										d =
											null !==
												(a =
													null === (o = l.headers.get("link")) || void 0 === o
														? void 0
														: o.split(",")) && void 0 !== a
												? a
												: [];
									return (
										d.length > 0 &&
											(d.forEach((e) => {
												const t = parseInt(
														e.split(";")[0].split("=")[1].substring(0, 1)
													),
													r = JSON.parse(e.split(";")[1].split("=")[1]);
												h[`${r}Page`] = t;
											}),
											(h.total = parseInt(u))),
										{
											data: Object.assign(Object.assign({}, c), h),
											error: null,
										}
									);
								} catch (e) {
									if (g(e)) return { data: { users: [] }, error: e };
									throw e;
								}
							});
						}
						getUserById(e) {
							return D(this, void 0, void 0, function* () {
								try {
									return yield C(
										this.fetch,
										"GET",
										`${this.url}/admin/users/${e}`,
										{ headers: this.headers, xform: $ }
									);
								} catch (e) {
									if (g(e)) return { data: { user: null }, error: e };
									throw e;
								}
							});
						}
						updateUserById(e, t) {
							return D(this, void 0, void 0, function* () {
								try {
									return yield C(
										this.fetch,
										"PUT",
										`${this.url}/admin/users/${e}`,
										{ body: t, headers: this.headers, xform: $ }
									);
								} catch (e) {
									if (g(e)) return { data: { user: null }, error: e };
									throw e;
								}
							});
						}
						deleteUser(e, t = !1) {
							return D(this, void 0, void 0, function* () {
								try {
									return yield C(
										this.fetch,
										"DELETE",
										`${this.url}/admin/users/${e}`,
										{
											headers: this.headers,
											body: { should_soft_delete: t },
											xform: $,
										}
									);
								} catch (e) {
									if (g(e)) return { data: { user: null }, error: e };
									throw e;
								}
							});
						}
						_listFactors(e) {
							return D(this, void 0, void 0, function* () {
								try {
									const { data: t, error: r } = yield C(
										this.fetch,
										"GET",
										`${this.url}/admin/users/${e.userId}/factors`,
										{
											headers: this.headers,
											xform: (e) => ({ data: { factors: e }, error: null }),
										}
									);
									return { data: t, error: r };
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						_deleteFactor(e) {
							return D(this, void 0, void 0, function* () {
								try {
									return {
										data: yield C(
											this.fetch,
											"DELETE",
											`${this.url}/admin/users/${e.userId}/factors/${e.id}`,
											{ headers: this.headers }
										),
										error: null,
									};
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
					}
					const N = {
						getItem: (e) => (o() ? globalThis.localStorage.getItem(e) : null),
						setItem: (e, t) => {
							o() && globalThis.localStorage.setItem(e, t);
						},
						removeItem: (e) => {
							o() && globalThis.localStorage.removeItem(e);
						},
					};
					var F = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					!(function () {
						if ("object" != typeof globalThis)
							try {
								Object.defineProperty(Object.prototype, "__magic__", {
									get: function () {
										return this;
									},
									configurable: !0,
								}),
									(__magic__.globalThis = __magic__),
									delete Object.prototype.__magic__;
							} catch (e) {
								"undefined" != typeof self && (self.globalThis = self);
							}
					})();
					const B = {
							url: "http://localhost:999999999999999",
							storageKey: "supabase.auth.token",
							autoRefreshToken: !0,
							persistSession: !0,
							detectSessionInUrl: !0,
							headers: { "X-Client-Info": "gotrue-js/2.22.0" },
							flowType: "implicit",
						},
						M = 1e4;
					class J {
						constructor(e) {
							var t;
							(this.stateChangeEmitters = new Map()),
								(this.autoRefreshTicker = null),
								(this.visibilityChangedCallback = null),
								(this.refreshingDeferred = null),
								(this.initializePromise = null),
								(this.detectSessionInUrl = !0),
								(this.broadcastChannel = null);
							const r = Object.assign(Object.assign({}, B), e);
							if (
								((this.inMemorySession = null),
								(this.storageKey = r.storageKey),
								(this.autoRefreshToken = r.autoRefreshToken),
								(this.persistSession = r.persistSession),
								(this.storage = r.storage || N),
								(this.admin = new L({
									url: r.url,
									headers: r.headers,
									fetch: r.fetch,
								})),
								(this.url = r.url),
								(this.headers = r.headers),
								(this.fetch = h(r.fetch)),
								(this.detectSessionInUrl = r.detectSessionInUrl),
								(this.flowType = r.flowType),
								(this.mfa = {
									verify: this._verify.bind(this),
									enroll: this._enroll.bind(this),
									unenroll: this._unenroll.bind(this),
									challenge: this._challenge.bind(this),
									listFactors: this._listFactors.bind(this),
									challengeAndVerify: this._challengeAndVerify.bind(this),
									getAuthenticatorAssuranceLevel:
										this._getAuthenticatorAssuranceLevel.bind(this),
								}),
								i() &&
									globalThis.BroadcastChannel &&
									this.persistSession &&
									this.storageKey)
							) {
								try {
									this.broadcastChannel = new globalThis.BroadcastChannel(
										this.storageKey
									);
								} catch (e) {
									console.error(
										"Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
										e
									);
								}
								null === (t = this.broadcastChannel) ||
									void 0 === t ||
									t.addEventListener("message", (e) => {
										this._notifyAllSubscribers(
											e.data.event,
											e.data.session,
											!1
										);
									});
							}
							this.initialize();
						}
						initialize() {
							return (
								this.initializePromise ||
									(this.initializePromise = this._initialize()),
								this.initializePromise
							);
						}
						_initialize() {
							return F(this, void 0, void 0, function* () {
								if (this.initializePromise) return this.initializePromise;
								try {
									const e = yield this._isPKCEFlow();
									if (
										(this.detectSessionInUrl && this._isImplicitGrantFlow()) ||
										e
									) {
										const { data: t, error: r } = yield this._getSessionFromUrl(
											e
										);
										if (r) return yield this._removeSession(), { error: r };
										const { session: s, redirectType: i } = t;
										return (
											yield this._saveSession(s),
											setTimeout(() => {
												"recovery" === i
													? this._notifyAllSubscribers("PASSWORD_RECOVERY", s)
													: this._notifyAllSubscribers("SIGNED_IN", s);
											}, 0),
											{ error: null }
										);
									}
									return yield this._recoverAndRefresh(), { error: null };
								} catch (e) {
									return g(e)
										? { error: e }
										: {
												error: new w(
													"Unexpected error during initialization",
													e
												),
										  };
								} finally {
									yield this._handleVisibilityChange();
								}
							});
						}
						signUp(e) {
							var t, r, s;
							return F(this, void 0, void 0, function* () {
								try {
									let i;
									if ((yield this._removeSession(), "email" in e)) {
										const { email: r, password: s, options: n } = e;
										i = yield C(this.fetch, "POST", `${this.url}/signup`, {
											headers: this.headers,
											redirectTo: null == n ? void 0 : n.emailRedirectTo,
											body: {
												email: r,
												password: s,
												data:
													null !== (t = null == n ? void 0 : n.data) &&
													void 0 !== t
														? t
														: {},
												gotrue_meta_security: {
													captcha_token: null == n ? void 0 : n.captchaToken,
												},
											},
											xform: A,
										});
									} else {
										if (!("phone" in e))
											throw new T(
												"You must provide either an email or phone number and a password"
											);
										{
											const { phone: t, password: n, options: o } = e;
											i = yield C(this.fetch, "POST", `${this.url}/signup`, {
												headers: this.headers,
												body: {
													phone: t,
													password: n,
													data:
														null !== (r = null == o ? void 0 : o.data) &&
														void 0 !== r
															? r
															: {},
													channel:
														null !== (s = null == o ? void 0 : o.channel) &&
														void 0 !== s
															? s
															: "sms",
													gotrue_meta_security: {
														captcha_token: null == o ? void 0 : o.captchaToken,
													},
												},
												xform: A,
											});
										}
									}
									const { data: n, error: o } = i;
									if (o || !n)
										return { data: { user: null, session: null }, error: o };
									const a = n.session,
										h = n.user;
									return (
										n.session &&
											(yield this._saveSession(n.session),
											this._notifyAllSubscribers("SIGNED_IN", a)),
										{ data: { user: h, session: a }, error: null }
									);
								} catch (e) {
									if (g(e))
										return { data: { user: null, session: null }, error: e };
									throw e;
								}
							});
						}
						signInWithPassword(e) {
							return F(this, void 0, void 0, function* () {
								try {
									let t;
									if ((yield this._removeSession(), "email" in e)) {
										const { email: r, password: s, options: i } = e;
										t = yield C(
											this.fetch,
											"POST",
											`${this.url}/token?grant_type=password`,
											{
												headers: this.headers,
												body: {
													email: r,
													password: s,
													gotrue_meta_security: {
														captcha_token: null == i ? void 0 : i.captchaToken,
													},
												},
												xform: A,
											}
										);
									} else {
										if (!("phone" in e))
											throw new T(
												"You must provide either an email or phone number and a password"
											);
										{
											const { phone: r, password: s, options: i } = e;
											t = yield C(
												this.fetch,
												"POST",
												`${this.url}/token?grant_type=password`,
												{
													headers: this.headers,
													body: {
														phone: r,
														password: s,
														gotrue_meta_security: {
															captcha_token:
																null == i ? void 0 : i.captchaToken,
														},
													},
													xform: A,
												}
											);
										}
									}
									const { data: r, error: s } = t;
									return s || !r
										? { data: { user: null, session: null }, error: s }
										: (r.session &&
												(yield this._saveSession(r.session),
												this._notifyAllSubscribers("SIGNED_IN", r.session)),
										  { data: r, error: s });
								} catch (e) {
									if (g(e))
										return { data: { user: null, session: null }, error: e };
									throw e;
								}
							});
						}
						signInWithOAuth(e) {
							var t, r, s, i;
							return F(this, void 0, void 0, function* () {
								return (
									yield this._removeSession(),
									yield this._handleProviderSignIn(e.provider, {
										redirectTo:
											null === (t = e.options) || void 0 === t
												? void 0
												: t.redirectTo,
										scopes:
											null === (r = e.options) || void 0 === r
												? void 0
												: r.scopes,
										queryParams:
											null === (s = e.options) || void 0 === s
												? void 0
												: s.queryParams,
										skipBrowserRedirect:
											null === (i = e.options) || void 0 === i
												? void 0
												: i.skipBrowserRedirect,
									})
								);
							});
						}
						exchangeCodeForSession(e) {
							return F(this, void 0, void 0, function* () {
								const t = yield c(
										this.storage,
										`${this.storageKey}-code-verifier`
									),
									{ data: r, error: s } = yield C(
										this.fetch,
										"POST",
										`${this.url}/token?grant_type=pkce`,
										{
											headers: this.headers,
											body: { auth_code: e, code_verifier: t },
											xform: A,
										}
									);
								return (
									yield u(this.storage, `${this.storageKey}-code-verifier`),
									s || !r
										? { data: { user: null, session: null }, error: s }
										: (r.session &&
												(yield this._saveSession(r.session),
												this._notifyAllSubscribers("SIGNED_IN", r.session)),
										  { data: r, error: s })
								);
							});
						}
						signInWithIdToken(e) {
							return F(this, void 0, void 0, function* () {
								yield this._removeSession();
								try {
									const { options: t, provider: r, token: s, nonce: i } = e,
										n = yield C(
											this.fetch,
											"POST",
											`${this.url}/token?grant_type=id_token`,
											{
												headers: this.headers,
												body: {
													provider: r,
													id_token: s,
													nonce: i,
													gotrue_meta_security: {
														captcha_token: null == t ? void 0 : t.captchaToken,
													},
												},
												xform: A,
											}
										),
										{ data: o, error: a } = n;
									return a || !o
										? { data: { user: null, session: null }, error: a }
										: (o.session &&
												(yield this._saveSession(o.session),
												this._notifyAllSubscribers("SIGNED_IN", o.session)),
										  { data: o, error: a });
								} catch (e) {
									if (g(e))
										return { data: { user: null, session: null }, error: e };
									throw e;
								}
							});
						}
						signInWithOtp(e) {
							var t, r, s, i, n;
							return F(this, void 0, void 0, function* () {
								try {
									if ((yield this._removeSession(), "email" in e)) {
										const { email: s, options: i } = e;
										let n = null;
										if ("pkce" === this.flowType) {
											const e = v();
											yield l(
												this.storage,
												`${this.storageKey}-code-verifier`,
												e
											),
												(n = yield y(e));
										}
										const { error: o } = yield C(
											this.fetch,
											"POST",
											`${this.url}/otp`,
											{
												headers: this.headers,
												body: {
													email: s,
													data:
														null !== (t = null == i ? void 0 : i.data) &&
														void 0 !== t
															? t
															: {},
													create_user:
														null ===
															(r = null == i ? void 0 : i.shouldCreateUser) ||
														void 0 === r ||
														r,
													gotrue_meta_security: {
														captcha_token: null == i ? void 0 : i.captchaToken,
													},
													code_challenge: n,
													code_challenge_method: n ? "s256" : null,
												},
												redirectTo: null == i ? void 0 : i.emailRedirectTo,
											}
										);
										return { data: { user: null, session: null }, error: o };
									}
									if ("phone" in e) {
										const { phone: t, options: r } = e,
											{ error: o } = yield C(
												this.fetch,
												"POST",
												`${this.url}/otp`,
												{
													headers: this.headers,
													body: {
														phone: t,
														data:
															null !== (s = null == r ? void 0 : r.data) &&
															void 0 !== s
																? s
																: {},
														create_user:
															null ===
																(i = null == r ? void 0 : r.shouldCreateUser) ||
															void 0 === i ||
															i,
														gotrue_meta_security: {
															captcha_token:
																null == r ? void 0 : r.captchaToken,
														},
														channel:
															null !== (n = null == r ? void 0 : r.channel) &&
															void 0 !== n
																? n
																: "sms",
													},
												}
											);
										return { data: { user: null, session: null }, error: o };
									}
									throw new T(
										"You must provide either an email or phone number."
									);
								} catch (e) {
									if (g(e))
										return { data: { user: null, session: null }, error: e };
									throw e;
								}
							});
						}
						verifyOtp(e) {
							var t, r;
							return F(this, void 0, void 0, function* () {
								try {
									yield this._removeSession();
									const { data: s, error: i } = yield C(
										this.fetch,
										"POST",
										`${this.url}/verify`,
										{
											headers: this.headers,
											body: Object.assign(Object.assign({}, e), {
												gotrue_meta_security: {
													captcha_token:
														null === (t = e.options) || void 0 === t
															? void 0
															: t.captchaToken,
												},
											}),
											redirectTo:
												null === (r = e.options) || void 0 === r
													? void 0
													: r.redirectTo,
											xform: A,
										}
									);
									if (i) throw i;
									if (!s)
										throw new Error("An error occurred on token verification.");
									const n = s.session,
										o = s.user;
									return (
										(null == n ? void 0 : n.access_token) &&
											(yield this._saveSession(n),
											this._notifyAllSubscribers("SIGNED_IN", n)),
										{ data: { user: o, session: n }, error: null }
									);
								} catch (e) {
									if (g(e))
										return { data: { user: null, session: null }, error: e };
									throw e;
								}
							});
						}
						signInWithSSO(e) {
							var t, r, s;
							return F(this, void 0, void 0, function* () {
								try {
									return (
										yield this._removeSession(),
										yield C(this.fetch, "POST", `${this.url}/sso`, {
											body: Object.assign(
												Object.assign(
													Object.assign(
														Object.assign(
															Object.assign(
																{},
																"providerId" in e
																	? { provider_id: e.providerId }
																	: null
															),
															"domain" in e ? { domain: e.domain } : null
														),
														{
															redirect_to:
																null !==
																	(r =
																		null === (t = e.options) || void 0 === t
																			? void 0
																			: t.redirectTo) && void 0 !== r
																	? r
																	: void 0,
														}
													),
													(
														null === (s = null == e ? void 0 : e.options) ||
														void 0 === s
															? void 0
															: s.captchaToken
													)
														? {
																gotrue_meta_security: {
																	captcha_token: e.options.captchaToken,
																},
														  }
														: null
												),
												{ skip_http_redirect: !0 }
											),
											headers: this.headers,
											xform: R,
										})
									);
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						getSession() {
							return F(this, void 0, void 0, function* () {
								yield this.initializePromise;
								let e = null;
								if (this.persistSession) {
									const t = yield c(this.storage, this.storageKey);
									null !== t &&
										(this._isValidSession(t)
											? (e = t)
											: yield this._removeSession());
								} else e = this.inMemorySession;
								if (!e) return { data: { session: null }, error: null };
								if (!(e.expires_at && e.expires_at <= Date.now() / 1e3))
									return { data: { session: e }, error: null };
								const { session: t, error: r } = yield this._callRefreshToken(
									e.refresh_token
								);
								return r
									? { data: { session: null }, error: r }
									: { data: { session: t }, error: null };
							});
						}
						getUser(e) {
							var t, r;
							return F(this, void 0, void 0, function* () {
								try {
									if (!e) {
										const { data: s, error: i } = yield this.getSession();
										if (i) throw i;
										e =
											null !==
												(r =
													null === (t = s.session) || void 0 === t
														? void 0
														: t.access_token) && void 0 !== r
												? r
												: void 0;
									}
									return yield C(this.fetch, "GET", `${this.url}/user`, {
										headers: this.headers,
										jwt: e,
										xform: $,
									});
								} catch (e) {
									if (g(e)) return { data: { user: null }, error: e };
									throw e;
								}
							});
						}
						updateUser(e, t = {}) {
							return F(this, void 0, void 0, function* () {
								try {
									const { data: r, error: s } = yield this.getSession();
									if (s) throw s;
									if (!r.session) throw new S();
									const i = r.session,
										{ data: n, error: o } = yield C(
											this.fetch,
											"PUT",
											`${this.url}/user`,
											{
												headers: this.headers,
												redirectTo: null == t ? void 0 : t.emailRedirectTo,
												body: e,
												jwt: i.access_token,
												xform: $,
											}
										);
									if (o) throw o;
									return (
										(i.user = n.user),
										yield this._saveSession(i),
										this._notifyAllSubscribers("USER_UPDATED", i),
										{ data: { user: i.user }, error: null }
									);
								} catch (e) {
									if (g(e)) return { data: { user: null }, error: e };
									throw e;
								}
							});
						}
						_decodeJWT(e) {
							return f(e);
						}
						setSession(e) {
							return F(this, void 0, void 0, function* () {
								try {
									if (!e.access_token || !e.refresh_token) throw new S();
									const t = Date.now() / 1e3;
									let r = t,
										s = !0,
										i = null;
									const n = f(e.access_token);
									if ((n.exp && ((r = n.exp), (s = r <= t)), s)) {
										const { session: t, error: r } =
											yield this._callRefreshToken(e.refresh_token);
										if (r)
											return { data: { user: null, session: null }, error: r };
										if (!t)
											return {
												data: { user: null, session: null },
												error: null,
											};
										i = t;
									} else {
										const { data: s, error: n } = yield this.getUser(
											e.access_token
										);
										if (n) throw n;
										(i = {
											access_token: e.access_token,
											refresh_token: e.refresh_token,
											user: s.user,
											token_type: "bearer",
											expires_in: r - t,
											expires_at: r,
										}),
											yield this._saveSession(i),
											this._notifyAllSubscribers("SIGNED_IN", i);
									}
									return { data: { user: i.user, session: i }, error: null };
								} catch (e) {
									if (g(e))
										return { data: { session: null, user: null }, error: e };
									throw e;
								}
							});
						}
						refreshSession(e) {
							var t;
							return F(this, void 0, void 0, function* () {
								try {
									if (!e) {
										const { data: r, error: s } = yield this.getSession();
										if (s) throw s;
										e = null !== (t = r.session) && void 0 !== t ? t : void 0;
									}
									if (!(null == e ? void 0 : e.refresh_token)) throw new S();
									const { session: r, error: s } = yield this._callRefreshToken(
										e.refresh_token
									);
									return s
										? { data: { user: null, session: null }, error: s }
										: r
										? { data: { user: r.user, session: r }, error: null }
										: { data: { user: null, session: null }, error: null };
								} catch (e) {
									if (g(e))
										return { data: { user: null, session: null }, error: e };
									throw e;
								}
							});
						}
						_getSessionFromUrl(e) {
							return F(this, void 0, void 0, function* () {
								try {
									if (!i()) throw new O("No browser detected.");
									if (
										"implicit" === this.flowType &&
										!this._isImplicitGrantFlow()
									)
										throw new O("Not a valid implicit grant flow url.");
									if ("pkce" == this.flowType && !e)
										throw new j("Not a valid PKCE flow url.");
									if (e) {
										const e = a("code");
										if (!e) throw new j("No code detected.");
										const { data: t, error: r } =
											yield this.exchangeCodeForSession(e);
										if (r) throw r;
										if (!t.session) throw new j("No session detected.");
										return {
											data: { session: t.session, redirectType: null },
											error: null,
										};
									}
									const t = a("error_description");
									if (t) {
										const e = a("error_code");
										if (!e) throw new O("No error_code detected.");
										const r = a("error");
										if (!r) throw new O("No error detected.");
										throw new O(t, { error: r, code: e });
									}
									const r = a("provider_token"),
										s = a("provider_refresh_token"),
										n = a("access_token");
									if (!n) throw new O("No access_token detected.");
									const o = a("expires_in");
									if (!o) throw new O("No expires_in detected.");
									const h = a("refresh_token");
									if (!h) throw new O("No refresh_token detected.");
									const l = a("token_type");
									if (!l) throw new O("No token_type detected.");
									const c = Math.round(Date.now() / 1e3) + parseInt(o),
										{ data: u, error: d } = yield this.getUser(n);
									if (d) throw d;
									const f = u.user,
										p = {
											provider_token: r,
											provider_refresh_token: s,
											access_token: n,
											expires_in: parseInt(o),
											expires_at: c,
											refresh_token: h,
											token_type: l,
											user: f,
										},
										v = a("type");
									return (
										(window.location.hash = ""),
										{ data: { session: p, redirectType: v }, error: null }
									);
								} catch (e) {
									if (g(e))
										return {
											data: { session: null, redirectType: null },
											error: e,
										};
									throw e;
								}
							});
						}
						_isImplicitGrantFlow() {
							return (
								i() &&
								(Boolean(a("access_token")) || Boolean(a("error_description")))
							);
						}
						_isPKCEFlow() {
							return F(this, void 0, void 0, function* () {
								const e = yield c(
									this.storage,
									`${this.storageKey}-code-verifier`
								);
								return i() && Boolean(a("code")) && Boolean(e);
							});
						}
						signOut() {
							var e;
							return F(this, void 0, void 0, function* () {
								const { data: t, error: r } = yield this.getSession();
								if (r) return { error: r };
								const s =
									null === (e = t.session) || void 0 === e
										? void 0
										: e.access_token;
								if (s) {
									const { error: e } = yield this.admin.signOut(s);
									if (e && (!_(e) || (404 !== e.status && 401 !== e.status)))
										return { error: e };
								}
								return (
									yield this._removeSession(),
									this._notifyAllSubscribers("SIGNED_OUT", null),
									{ error: null }
								);
							});
						}
						onAuthStateChange(e) {
							const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
									/[xy]/g,
									function (e) {
										const t = (16 * Math.random()) | 0;
										return ("x" == e ? t : (3 & t) | 8).toString(16);
									}
								),
								r = {
									id: t,
									callback: e,
									unsubscribe: () => {
										this.stateChangeEmitters.delete(t);
									},
								};
							return (
								this.stateChangeEmitters.set(t, r),
								this.emitInitialSession(t),
								{ data: { subscription: r } }
							);
						}
						emitInitialSession(e) {
							var t, r;
							return F(this, void 0, void 0, function* () {
								try {
									const {
										data: { session: r },
										error: s,
									} = yield this.getSession();
									if (s) throw s;
									null === (t = this.stateChangeEmitters.get(e)) ||
										void 0 === t ||
										t.callback("INITIAL_SESSION", r);
								} catch (t) {
									null === (r = this.stateChangeEmitters.get(e)) ||
										void 0 === r ||
										r.callback("INITIAL_SESSION", null),
										console.error(t);
								}
							});
						}
						resetPasswordForEmail(e, t = {}) {
							return F(this, void 0, void 0, function* () {
								let r = null;
								if ("pkce" === this.flowType) {
									const e = v();
									yield l(this.storage, `${this.storageKey}-code-verifier`, e),
										(r = yield y(e));
								}
								try {
									return yield C(this.fetch, "POST", `${this.url}/recover`, {
										body: {
											email: e,
											code_challenge: r,
											code_challenge_method: r ? "s256" : null,
											gotrue_meta_security: { captcha_token: t.captchaToken },
										},
										headers: this.headers,
										redirectTo: t.redirectTo,
									});
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						_refreshAccessToken(e) {
							return F(this, void 0, void 0, function* () {
								try {
									const t = Date.now();
									return yield (function (e, t) {
										return new Promise((r, i) => {
											(() => {
												s(this, void 0, void 0, function* () {
													for (let s = 0; s < 1 / 0; s++)
														try {
															const i = yield e(s);
															if (!t(s, 0, i)) return void r(i);
														} catch (e) {
															if (!t(s)) return void i(e);
														}
												});
											})();
										});
									})(
										(t) =>
											F(this, void 0, void 0, function* () {
												var r;
												return (
													yield ((r = 200 * t),
													new Promise((e) => {
														setTimeout(() => e(null), r);
													})),
													yield C(
														this.fetch,
														"POST",
														`${this.url}/token?grant_type=refresh_token`,
														{
															body: { refresh_token: e },
															headers: this.headers,
															xform: A,
														}
													)
												);
											}),
										(e, r, s) =>
											s &&
											s.error &&
											s.error instanceof P &&
											Date.now() + 200 * (e + 1) - t < M
									);
								} catch (e) {
									if (g(e))
										return { data: { session: null, user: null }, error: e };
									throw e;
								}
							});
						}
						_isValidSession(e) {
							return (
								"object" == typeof e &&
								null !== e &&
								"access_token" in e &&
								"refresh_token" in e &&
								"expires_at" in e
							);
						}
						_handleProviderSignIn(e, t) {
							return F(this, void 0, void 0, function* () {
								const r = yield this._getUrlForProvider(e, {
									redirectTo: t.redirectTo,
									scopes: t.scopes,
									queryParams: t.queryParams,
								});
								return (
									i() && !t.skipBrowserRedirect && window.location.assign(r),
									{ data: { provider: e, url: r }, error: null }
								);
							});
						}
						_recoverAndRefresh() {
							var e;
							return F(this, void 0, void 0, function* () {
								try {
									const t = yield c(this.storage, this.storageKey);
									if (!this._isValidSession(t))
										return void (null !== t && (yield this._removeSession()));
									const r = Math.round(Date.now() / 1e3);
									if (
										(null !== (e = t.expires_at) && void 0 !== e ? e : 1 / 0) <
										r + 10
									)
										if (this.autoRefreshToken && t.refresh_token) {
											const { error: e } = yield this._callRefreshToken(
												t.refresh_token
											);
											e &&
												(console.log(e.message), yield this._removeSession());
										} else yield this._removeSession();
									else
										this.persistSession && (yield this._saveSession(t)),
											this._notifyAllSubscribers("SIGNED_IN", t);
								} catch (e) {
									return void console.error(e);
								}
							});
						}
						_callRefreshToken(e) {
							var t, r;
							return F(this, void 0, void 0, function* () {
								if (this.refreshingDeferred)
									return this.refreshingDeferred.promise;
								try {
									if (((this.refreshingDeferred = new d()), !e)) throw new S();
									const { data: t, error: r } = yield this._refreshAccessToken(
										e
									);
									if (r) throw r;
									if (!t.session) throw new S();
									yield this._saveSession(t.session),
										this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
									const s = { session: t.session, error: null };
									return this.refreshingDeferred.resolve(s), s;
								} catch (e) {
									if (g(e)) {
										const r = { session: null, error: e };
										return (
											null === (t = this.refreshingDeferred) ||
												void 0 === t ||
												t.resolve(r),
											r
										);
									}
									throw (
										(null === (r = this.refreshingDeferred) ||
											void 0 === r ||
											r.reject(e),
										e)
									);
								} finally {
									this.refreshingDeferred = null;
								}
							});
						}
						_notifyAllSubscribers(e, t, r = !0) {
							this.broadcastChannel &&
								r &&
								this.broadcastChannel.postMessage({ event: e, session: t }),
								this.stateChangeEmitters.forEach((r) => r.callback(e, t));
						}
						_saveSession(e) {
							return F(this, void 0, void 0, function* () {
								this.persistSession || (this.inMemorySession = e),
									this.persistSession &&
										e.expires_at &&
										(yield this._persistSession(e));
							});
						}
						_persistSession(e) {
							return l(this.storage, this.storageKey, e);
						}
						_removeSession() {
							return F(this, void 0, void 0, function* () {
								this.persistSession
									? yield u(this.storage, this.storageKey)
									: (this.inMemorySession = null);
							});
						}
						_removeVisibilityChangedCallback() {
							const e = this.visibilityChangedCallback;
							this.visibilityChangedCallback = null;
							try {
								e &&
									i() &&
									(null === window || void 0 === window
										? void 0
										: window.removeEventListener) &&
									window.removeEventListener("visibilitychange", e);
							} catch (e) {
								console.error("removing visibilitychange callback failed", e);
							}
						}
						_startAutoRefresh() {
							return F(this, void 0, void 0, function* () {
								yield this._stopAutoRefresh();
								const e = setInterval(() => this._autoRefreshTokenTick(), M);
								(this.autoRefreshTicker = e),
									e &&
										"object" == typeof e &&
										"function" == typeof e.unref &&
										e.unref(),
									yield this._autoRefreshTokenTick();
							});
						}
						_stopAutoRefresh() {
							return F(this, void 0, void 0, function* () {
								const e = this.autoRefreshTicker;
								(this.autoRefreshTicker = null), e && clearInterval(e);
							});
						}
						startAutoRefresh() {
							return F(this, void 0, void 0, function* () {
								this._removeVisibilityChangedCallback(),
									yield this._startAutoRefresh();
							});
						}
						stopAutoRefresh() {
							return F(this, void 0, void 0, function* () {
								this._removeVisibilityChangedCallback(),
									yield this._stopAutoRefresh();
							});
						}
						_autoRefreshTokenTick() {
							return F(this, void 0, void 0, function* () {
								const e = Date.now();
								try {
									const {
										data: { session: t },
									} = yield this.getSession();
									if (!t || !t.refresh_token || !t.expires_at) return;
									Math.floor((1e3 * t.expires_at - e) / M) < 3 &&
										(yield this._callRefreshToken(t.refresh_token));
								} catch (e) {
									console.error(
										"Auto refresh tick failed with error. This is likely a transient error.",
										e
									);
								}
							});
						}
						_handleVisibilityChange() {
							return F(this, void 0, void 0, function* () {
								if (
									!i() ||
									!(null === window || void 0 === window
										? void 0
										: window.addEventListener)
								)
									return this.autoRefreshToken && this.startAutoRefresh(), !1;
								try {
									(this.visibilityChangedCallback = () =>
										F(this, void 0, void 0, function* () {
											return yield this._onVisibilityChanged(!1);
										})),
										null === window ||
											void 0 === window ||
											window.addEventListener(
												"visibilitychange",
												this.visibilityChangedCallback
											),
										yield this._onVisibilityChanged(!0);
								} catch (e) {
									console.error("_handleVisibilityChange", e);
								}
							});
						}
						_onVisibilityChanged(e) {
							return F(this, void 0, void 0, function* () {
								"visible" === document.visibilityState
									? (e ||
											(yield this.initializePromise,
											yield this._recoverAndRefresh()),
									  this.autoRefreshToken && this._startAutoRefresh())
									: "hidden" === document.visibilityState &&
									  this.autoRefreshToken &&
									  this._stopAutoRefresh();
							});
						}
						_getUrlForProvider(e, t) {
							return F(this, void 0, void 0, function* () {
								const r = [`provider=${encodeURIComponent(e)}`];
								if (
									((null == t ? void 0 : t.redirectTo) &&
										r.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
									(null == t ? void 0 : t.scopes) &&
										r.push(`scopes=${encodeURIComponent(t.scopes)}`),
									"pkce" === this.flowType)
								) {
									const e = v();
									yield l(this.storage, `${this.storageKey}-code-verifier`, e);
									const t = yield y(e),
										s = new URLSearchParams({
											code_challenge: `${encodeURIComponent(t)}`,
											code_challenge_method: `${encodeURIComponent("s256")}`,
										});
									r.push(s.toString());
								}
								if (null == t ? void 0 : t.queryParams) {
									const e = new URLSearchParams(t.queryParams);
									r.push(e.toString());
								}
								return `${this.url}/authorize?${r.join("&")}`;
							});
						}
						_unenroll(e) {
							var t;
							return F(this, void 0, void 0, function* () {
								try {
									const { data: r, error: s } = yield this.getSession();
									return s
										? { data: null, error: s }
										: yield C(
												this.fetch,
												"DELETE",
												`${this.url}/factors/${e.factorId}`,
												{
													headers: this.headers,
													jwt:
														null === (t = null == r ? void 0 : r.session) ||
														void 0 === t
															? void 0
															: t.access_token,
												}
										  );
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						_enroll(e) {
							var t, r;
							return F(this, void 0, void 0, function* () {
								try {
									const { data: s, error: i } = yield this.getSession();
									if (i) return { data: null, error: i };
									const { data: n, error: o } = yield C(
										this.fetch,
										"POST",
										`${this.url}/factors`,
										{
											body: {
												friendly_name: e.friendlyName,
												factor_type: e.factorType,
												issuer: e.issuer,
											},
											headers: this.headers,
											jwt:
												null === (t = null == s ? void 0 : s.session) ||
												void 0 === t
													? void 0
													: t.access_token,
										}
									);
									return o
										? { data: null, error: o }
										: ((null === (r = null == n ? void 0 : n.totp) ||
										  void 0 === r
												? void 0
												: r.qr_code) &&
												(n.totp.qr_code = `data:image/svg+xml;utf-8,${n.totp.qr_code}`),
										  { data: n, error: null });
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						_verify(e) {
							var t;
							return F(this, void 0, void 0, function* () {
								try {
									const { data: r, error: s } = yield this.getSession();
									if (s) return { data: null, error: s };
									const { data: i, error: n } = yield C(
										this.fetch,
										"POST",
										`${this.url}/factors/${e.factorId}/verify`,
										{
											body: { code: e.code, challenge_id: e.challengeId },
											headers: this.headers,
											jwt:
												null === (t = null == r ? void 0 : r.session) ||
												void 0 === t
													? void 0
													: t.access_token,
										}
									);
									return n
										? { data: null, error: n }
										: (yield this._saveSession(
												Object.assign(
													{
														expires_at:
															Math.round(Date.now() / 1e3) + i.expires_in,
													},
													i
												)
										  ),
										  this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i),
										  { data: i, error: n });
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						_challenge(e) {
							var t;
							return F(this, void 0, void 0, function* () {
								try {
									const { data: r, error: s } = yield this.getSession();
									return s
										? { data: null, error: s }
										: yield C(
												this.fetch,
												"POST",
												`${this.url}/factors/${e.factorId}/challenge`,
												{
													headers: this.headers,
													jwt:
														null === (t = null == r ? void 0 : r.session) ||
														void 0 === t
															? void 0
															: t.access_token,
												}
										  );
								} catch (e) {
									if (g(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						_challengeAndVerify(e) {
							return F(this, void 0, void 0, function* () {
								const { data: t, error: r } = yield this._challenge({
									factorId: e.factorId,
								});
								return r
									? { data: null, error: r }
									: yield this._verify({
											factorId: e.factorId,
											challengeId: t.id,
											code: e.code,
									  });
							});
						}
						_listFactors() {
							return F(this, void 0, void 0, function* () {
								const {
									data: { user: e },
									error: t,
								} = yield this.getUser();
								if (t) return { data: null, error: t };
								const r = (null == e ? void 0 : e.factors) || [],
									s = r.filter(
										(e) => "totp" === e.factor_type && "verified" === e.status
									);
								return { data: { all: r, totp: s }, error: null };
							});
						}
						_getAuthenticatorAssuranceLevel() {
							var e, t;
							return F(this, void 0, void 0, function* () {
								const {
									data: { session: r },
									error: s,
								} = yield this.getSession();
								if (s) return { data: null, error: s };
								if (!r)
									return {
										data: {
											currentLevel: null,
											nextLevel: null,
											currentAuthenticationMethods: [],
										},
										error: null,
									};
								const i = this._decodeJWT(r.access_token);
								let n = null;
								i.aal && (n = i.aal);
								let o = n;
								return (
									(null !==
										(t =
											null === (e = r.user.factors) || void 0 === e
												? void 0
												: e.filter((e) => "verified" === e.status)) &&
									void 0 !== t
										? t
										: []
									).length > 0 && (o = "aal2"),
									{
										data: {
											currentLevel: n,
											nextLevel: o,
											currentAuthenticationMethods: i.amr || [],
										},
										error: null,
									}
								);
							});
						}
					}
				},
				189: (e, t, r) => {
					"use strict";
					r.r(t),
						r.d(t, {
							PostgrestBuilder: () => n,
							PostgrestClient: () => c,
							PostgrestFilterBuilder: () => a,
							PostgrestQueryBuilder: () => h,
							PostgrestTransformBuilder: () => o,
						});
					var s = r(98),
						i = r.n(s);
					class n {
						constructor(e) {
							(this.shouldThrowOnError = !1),
								(this.method = e.method),
								(this.url = e.url),
								(this.headers = e.headers),
								(this.schema = e.schema),
								(this.body = e.body),
								(this.shouldThrowOnError = e.shouldThrowOnError),
								(this.signal = e.signal),
								(this.allowEmpty = e.allowEmpty),
								e.fetch
									? (this.fetch = e.fetch)
									: "undefined" == typeof fetch
									? (this.fetch = i())
									: (this.fetch = fetch);
						}
						throwOnError() {
							return (this.shouldThrowOnError = !0), this;
						}
						then(e, t) {
							void 0 === this.schema ||
								(["GET", "HEAD"].includes(this.method)
									? (this.headers["Accept-Profile"] = this.schema)
									: (this.headers["Content-Profile"] = this.schema)),
								"GET" !== this.method &&
									"HEAD" !== this.method &&
									(this.headers["Content-Type"] = "application/json");
							let r = (0, this.fetch)(this.url.toString(), {
								method: this.method,
								headers: this.headers,
								body: JSON.stringify(this.body),
								signal: this.signal,
							}).then(async (e) => {
								var t, r, s;
								let i = null,
									n = null,
									o = null,
									a = e.status,
									h = e.statusText;
								if (e.ok) {
									if ("HEAD" !== this.method) {
										const t = await e.text();
										"" === t ||
											(n =
												"text/csv" === this.headers.Accept ||
												(this.headers.Accept &&
													this.headers.Accept.includes(
														"application/vnd.pgrst.plan+text"
													))
													? t
													: JSON.parse(t));
									}
									const s =
											null === (t = this.headers.Prefer) || void 0 === t
												? void 0
												: t.match(/count=(exact|planned|estimated)/),
										i =
											null === (r = e.headers.get("content-range")) ||
											void 0 === r
												? void 0
												: r.split("/");
									s && i && i.length > 1 && (o = parseInt(i[1]));
								} else {
									const t = await e.text();
									try {
										(i = JSON.parse(t)),
											Array.isArray(i) &&
												404 === e.status &&
												((n = []), (i = null), (a = 200), (h = "OK"));
									} catch (r) {
										404 === e.status && "" === t
											? ((a = 204), (h = "No Content"))
											: (i = { message: t });
									}
									if (
										(i &&
											this.allowEmpty &&
											(null === (s = null == i ? void 0 : i.details) ||
											void 0 === s
												? void 0
												: s.includes("Results contain 0 rows")) &&
											((i = null), (a = 200), (h = "OK")),
										i && this.shouldThrowOnError)
									)
										throw i;
								}
								return {
									error: i,
									data: n,
									count: o,
									status: a,
									statusText: h,
								};
							});
							return (
								this.shouldThrowOnError ||
									(r = r.catch((e) => ({
										error: {
											message: `FetchError: ${e.message}`,
											details: "",
											hint: "",
											code: e.code || "",
										},
										data: null,
										count: null,
										status: 0,
										statusText: "",
									}))),
								r.then(e, t)
							);
						}
					}
					class o extends n {
						select(e) {
							let t = !1;
							const r = (null != e ? e : "*")
								.split("")
								.map((e) =>
									/\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)
								)
								.join("");
							return (
								this.url.searchParams.set("select", r),
								this.headers.Prefer && (this.headers.Prefer += ","),
								(this.headers.Prefer += "return=representation"),
								this
							);
						}
						order(
							e,
							{ ascending: t = !0, nullsFirst: r, foreignTable: s } = {}
						) {
							const i = s ? `${s}.order` : "order",
								n = this.url.searchParams.get(i);
							return (
								this.url.searchParams.set(
									i,
									`${n ? `${n},` : ""}${e}.${t ? "asc" : "desc"}${
										void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"
									}`
								),
								this
							);
						}
						limit(e, { foreignTable: t } = {}) {
							const r = void 0 === t ? "limit" : `${t}.limit`;
							return this.url.searchParams.set(r, `${e}`), this;
						}
						range(e, t, { foreignTable: r } = {}) {
							const s = void 0 === r ? "offset" : `${r}.offset`,
								i = void 0 === r ? "limit" : `${r}.limit`;
							return (
								this.url.searchParams.set(s, `${e}`),
								this.url.searchParams.set(i, "" + (t - e + 1)),
								this
							);
						}
						abortSignal(e) {
							return (this.signal = e), this;
						}
						single() {
							return (
								(this.headers.Accept = "application/vnd.pgrst.object+json"),
								this
							);
						}
						maybeSingle() {
							return (
								(this.headers.Accept = "application/vnd.pgrst.object+json"),
								(this.allowEmpty = !0),
								this
							);
						}
						csv() {
							return (this.headers.Accept = "text/csv"), this;
						}
						geojson() {
							return (this.headers.Accept = "application/geo+json"), this;
						}
						explain({
							analyze: e = !1,
							verbose: t = !1,
							settings: r = !1,
							buffers: s = !1,
							wal: i = !1,
							format: n = "text",
						} = {}) {
							const o = [
									e ? "analyze" : null,
									t ? "verbose" : null,
									r ? "settings" : null,
									s ? "buffers" : null,
									i ? "wal" : null,
								]
									.filter(Boolean)
									.join("|"),
								a = this.headers.Accept;
							return (
								(this.headers.Accept = `application/vnd.pgrst.plan+${n}; for="${a}"; options=${o};`),
								this
							);
						}
						rollback() {
							var e;
							return (
								(null !== (e = this.headers.Prefer) && void 0 !== e
									? e
									: ""
								).trim().length > 0
									? (this.headers.Prefer += ",tx=rollback")
									: (this.headers.Prefer = "tx=rollback"),
								this
							);
						}
						returns() {
							return this;
						}
					}
					class a extends o {
						eq(e, t) {
							return this.url.searchParams.append(e, `eq.${t}`), this;
						}
						neq(e, t) {
							return this.url.searchParams.append(e, `neq.${t}`), this;
						}
						gt(e, t) {
							return this.url.searchParams.append(e, `gt.${t}`), this;
						}
						gte(e, t) {
							return this.url.searchParams.append(e, `gte.${t}`), this;
						}
						lt(e, t) {
							return this.url.searchParams.append(e, `lt.${t}`), this;
						}
						lte(e, t) {
							return this.url.searchParams.append(e, `lte.${t}`), this;
						}
						like(e, t) {
							return this.url.searchParams.append(e, `like.${t}`), this;
						}
						ilike(e, t) {
							return this.url.searchParams.append(e, `ilike.${t}`), this;
						}
						is(e, t) {
							return this.url.searchParams.append(e, `is.${t}`), this;
						}
						in(e, t) {
							const r = t
								.map((e) =>
									"string" == typeof e && new RegExp("[,()]").test(e)
										? `"${e}"`
										: `${e}`
								)
								.join(",");
							return this.url.searchParams.append(e, `in.(${r})`), this;
						}
						contains(e, t) {
							return (
								"string" == typeof t
									? this.url.searchParams.append(e, `cs.${t}`)
									: Array.isArray(t)
									? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
									: this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
								this
							);
						}
						containedBy(e, t) {
							return (
								"string" == typeof t
									? this.url.searchParams.append(e, `cd.${t}`)
									: Array.isArray(t)
									? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
									: this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
								this
							);
						}
						rangeGt(e, t) {
							return this.url.searchParams.append(e, `sr.${t}`), this;
						}
						rangeGte(e, t) {
							return this.url.searchParams.append(e, `nxl.${t}`), this;
						}
						rangeLt(e, t) {
							return this.url.searchParams.append(e, `sl.${t}`), this;
						}
						rangeLte(e, t) {
							return this.url.searchParams.append(e, `nxr.${t}`), this;
						}
						rangeAdjacent(e, t) {
							return this.url.searchParams.append(e, `adj.${t}`), this;
						}
						overlaps(e, t) {
							return (
								"string" == typeof t
									? this.url.searchParams.append(e, `ov.${t}`)
									: this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
								this
							);
						}
						textSearch(e, t, { config: r, type: s } = {}) {
							let i = "";
							"plain" === s
								? (i = "pl")
								: "phrase" === s
								? (i = "ph")
								: "websearch" === s && (i = "w");
							const n = void 0 === r ? "" : `(${r})`;
							return this.url.searchParams.append(e, `${i}fts${n}.${t}`), this;
						}
						match(e) {
							return (
								Object.entries(e).forEach(([e, t]) => {
									this.url.searchParams.append(e, `eq.${t}`);
								}),
								this
							);
						}
						not(e, t, r) {
							return this.url.searchParams.append(e, `not.${t}.${r}`), this;
						}
						or(e, { foreignTable: t } = {}) {
							const r = t ? `${t}.or` : "or";
							return this.url.searchParams.append(r, `(${e})`), this;
						}
						filter(e, t, r) {
							return this.url.searchParams.append(e, `${t}.${r}`), this;
						}
					}
					class h {
						constructor(e, { headers: t = {}, schema: r, fetch: s }) {
							(this.url = e),
								(this.headers = t),
								(this.schema = r),
								(this.fetch = s);
						}
						select(e, { head: t = !1, count: r } = {}) {
							const s = t ? "HEAD" : "GET";
							let i = !1;
							const n = (null != e ? e : "*")
								.split("")
								.map((e) =>
									/\s/.test(e) && !i ? "" : ('"' === e && (i = !i), e)
								)
								.join("");
							return (
								this.url.searchParams.set("select", n),
								r && (this.headers.Prefer = `count=${r}`),
								new a({
									method: s,
									url: this.url,
									headers: this.headers,
									schema: this.schema,
									fetch: this.fetch,
									allowEmpty: !1,
								})
							);
						}
						insert(e, { count: t } = {}) {
							const r = [],
								s = e;
							if (
								(t && r.push(`count=${t}`),
								this.headers.Prefer && r.unshift(this.headers.Prefer),
								(this.headers.Prefer = r.join(",")),
								Array.isArray(e))
							) {
								const t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
								if (t.length > 0) {
									const e = [...new Set(t)].map((e) => `"${e}"`);
									this.url.searchParams.set("columns", e.join(","));
								}
							}
							return new a({
								method: "POST",
								url: this.url,
								headers: this.headers,
								schema: this.schema,
								body: s,
								fetch: this.fetch,
								allowEmpty: !1,
							});
						}
						upsert(
							e,
							{ onConflict: t, ignoreDuplicates: r = !1, count: s } = {}
						) {
							const i = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
							void 0 !== t && this.url.searchParams.set("on_conflict", t);
							const n = e;
							return (
								s && i.push(`count=${s}`),
								this.headers.Prefer && i.unshift(this.headers.Prefer),
								(this.headers.Prefer = i.join(",")),
								new a({
									method: "POST",
									url: this.url,
									headers: this.headers,
									schema: this.schema,
									body: n,
									fetch: this.fetch,
									allowEmpty: !1,
								})
							);
						}
						update(e, { count: t } = {}) {
							const r = [],
								s = e;
							return (
								t && r.push(`count=${t}`),
								this.headers.Prefer && r.unshift(this.headers.Prefer),
								(this.headers.Prefer = r.join(",")),
								new a({
									method: "PATCH",
									url: this.url,
									headers: this.headers,
									schema: this.schema,
									body: s,
									fetch: this.fetch,
									allowEmpty: !1,
								})
							);
						}
						delete({ count: e } = {}) {
							const t = [];
							return (
								e && t.push(`count=${e}`),
								this.headers.Prefer && t.unshift(this.headers.Prefer),
								(this.headers.Prefer = t.join(",")),
								new a({
									method: "DELETE",
									url: this.url,
									headers: this.headers,
									schema: this.schema,
									fetch: this.fetch,
									allowEmpty: !1,
								})
							);
						}
					}
					const l = { "X-Client-Info": "postgrest-js/1.5.0" };
					class c {
						constructor(e, { headers: t = {}, schema: r, fetch: s } = {}) {
							(this.url = e),
								(this.headers = Object.assign(Object.assign({}, l), t)),
								(this.schema = r),
								(this.fetch = s);
						}
						from(e) {
							const t = new URL(`${this.url}/${e}`);
							return new h(t, {
								headers: Object.assign({}, this.headers),
								schema: this.schema,
								fetch: this.fetch,
							});
						}
						rpc(e, t = {}, { head: r = !1, count: s } = {}) {
							let i;
							const n = new URL(`${this.url}/rpc/${e}`);
							let o;
							r
								? ((i = "HEAD"),
								  Object.entries(t).forEach(([e, t]) => {
										n.searchParams.append(e, `${t}`);
								  }))
								: ((i = "POST"), (o = t));
							const h = Object.assign({}, this.headers);
							return (
								s && (h.Prefer = `count=${s}`),
								new a({
									method: i,
									url: n,
									headers: h,
									schema: this.schema,
									body: o,
									fetch: this.fetch,
									allowEmpty: !1,
								})
							);
						}
					}
				},
				73: (e, t, r) => {
					"use strict";
					r.r(t),
						r.d(t, {
							REALTIME_LISTEN_TYPES: () => j,
							REALTIME_POSTGRES_CHANGES_LISTEN_EVENT: () => O,
							REALTIME_PRESENCE_LISTEN_EVENTS: () => c,
							REALTIME_SUBSCRIBE_STATES: () => P,
							RealtimeChannel: () => x,
							RealtimeClient: () => $,
							RealtimePresence: () => v,
						});
					var s = r(840);
					const i = { "X-Client-Info": "realtime-js/2.7.2" };
					var n, o, a, h, l, c, u;
					!(function (e) {
						(e[(e.connecting = 0)] = "connecting"),
							(e[(e.open = 1)] = "open"),
							(e[(e.closing = 2)] = "closing"),
							(e[(e.closed = 3)] = "closed");
					})(n || (n = {})),
						(function (e) {
							(e.closed = "closed"),
								(e.errored = "errored"),
								(e.joined = "joined"),
								(e.joining = "joining"),
								(e.leaving = "leaving");
						})(o || (o = {})),
						(function (e) {
							(e.close = "phx_close"),
								(e.error = "phx_error"),
								(e.join = "phx_join"),
								(e.reply = "phx_reply"),
								(e.leave = "phx_leave"),
								(e.access_token = "access_token");
						})(a || (a = {})),
						(function (e) {
							e.websocket = "websocket";
						})(h || (h = {})),
						(function (e) {
							(e.Connecting = "connecting"),
								(e.Open = "open"),
								(e.Closing = "closing"),
								(e.Closed = "closed");
						})(l || (l = {}));
					class d {
						constructor(e, t) {
							(this.callback = e),
								(this.timerCalc = t),
								(this.timer = void 0),
								(this.tries = 0),
								(this.callback = e),
								(this.timerCalc = t);
						}
						reset() {
							(this.tries = 0), clearTimeout(this.timer);
						}
						scheduleTimeout() {
							clearTimeout(this.timer),
								(this.timer = setTimeout(() => {
									(this.tries = this.tries + 1), this.callback();
								}, this.timerCalc(this.tries + 1)));
						}
					}
					class f {
						constructor() {
							this.HEADER_LENGTH = 1;
						}
						decode(e, t) {
							return e.constructor === ArrayBuffer
								? t(this._binaryDecode(e))
								: t("string" == typeof e ? JSON.parse(e) : {});
						}
						_binaryDecode(e) {
							const t = new DataView(e),
								r = new TextDecoder();
							return this._decodeBroadcast(e, t, r);
						}
						_decodeBroadcast(e, t, r) {
							const s = t.getUint8(1),
								i = t.getUint8(2);
							let n = this.HEADER_LENGTH + 2;
							const o = r.decode(e.slice(n, n + s));
							n += s;
							const a = r.decode(e.slice(n, n + i));
							return (
								(n += i),
								{
									ref: null,
									topic: o,
									event: a,
									payload: JSON.parse(r.decode(e.slice(n, e.byteLength))),
								}
							);
						}
					}
					class p {
						constructor(e, t, r = {}, s = 1e4) {
							(this.channel = e),
								(this.event = t),
								(this.payload = r),
								(this.timeout = s),
								(this.sent = !1),
								(this.timeoutTimer = void 0),
								(this.ref = ""),
								(this.receivedResp = null),
								(this.recHooks = []),
								(this.refEvent = null),
								(this.rateLimited = !1);
						}
						resend(e) {
							(this.timeout = e),
								this._cancelRefEvent(),
								(this.ref = ""),
								(this.refEvent = null),
								(this.receivedResp = null),
								(this.sent = !1),
								this.send();
						}
						send() {
							this._hasReceived("timeout") ||
								(this.startTimeout(),
								(this.sent = !0),
								"rate limited" ===
									this.channel.socket.push({
										topic: this.channel.topic,
										event: this.event,
										payload: this.payload,
										ref: this.ref,
										join_ref: this.channel._joinRef(),
									}) && (this.rateLimited = !0));
						}
						updatePayload(e) {
							this.payload = Object.assign(Object.assign({}, this.payload), e);
						}
						receive(e, t) {
							var r;
							return (
								this._hasReceived(e) &&
									t(
										null === (r = this.receivedResp) || void 0 === r
											? void 0
											: r.response
									),
								this.recHooks.push({ status: e, callback: t }),
								this
							);
						}
						startTimeout() {
							this.timeoutTimer ||
								((this.ref = this.channel.socket._makeRef()),
								(this.refEvent = this.channel._replyEventName(this.ref)),
								this.channel._on(this.refEvent, {}, (e) => {
									this._cancelRefEvent(),
										this._cancelTimeout(),
										(this.receivedResp = e),
										this._matchReceive(e);
								}),
								(this.timeoutTimer = setTimeout(() => {
									this.trigger("timeout", {});
								}, this.timeout)));
						}
						trigger(e, t) {
							this.refEvent &&
								this.channel._trigger(this.refEvent, {
									status: e,
									response: t,
								});
						}
						destroy() {
							this._cancelRefEvent(), this._cancelTimeout();
						}
						_cancelRefEvent() {
							this.refEvent && this.channel._off(this.refEvent, {});
						}
						_cancelTimeout() {
							clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
						}
						_matchReceive({ status: e, response: t }) {
							this.recHooks
								.filter((t) => t.status === e)
								.forEach((e) => e.callback(t));
						}
						_hasReceived(e) {
							return this.receivedResp && this.receivedResp.status === e;
						}
					}
					!(function (e) {
						(e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
					})(c || (c = {}));
					class v {
						constructor(e, t) {
							(this.channel = e),
								(this.state = {}),
								(this.pendingDiffs = []),
								(this.joinRef = null),
								(this.caller = {
									onJoin: () => {},
									onLeave: () => {},
									onSync: () => {},
								});
							const r = (null == t ? void 0 : t.events) || {
								state: "presence_state",
								diff: "presence_diff",
							};
							this.channel._on(r.state, {}, (e) => {
								const { onJoin: t, onLeave: r, onSync: s } = this.caller;
								(this.joinRef = this.channel._joinRef()),
									(this.state = v.syncState(this.state, e, t, r)),
									this.pendingDiffs.forEach((e) => {
										this.state = v.syncDiff(this.state, e, t, r);
									}),
									(this.pendingDiffs = []),
									s();
							}),
								this.channel._on(r.diff, {}, (e) => {
									const { onJoin: t, onLeave: r, onSync: s } = this.caller;
									this.inPendingSyncState()
										? this.pendingDiffs.push(e)
										: ((this.state = v.syncDiff(this.state, e, t, r)), s());
								}),
								this.onJoin((e, t, r) => {
									this.channel._trigger("presence", {
										event: "join",
										key: e,
										currentPresences: t,
										newPresences: r,
									});
								}),
								this.onLeave((e, t, r) => {
									this.channel._trigger("presence", {
										event: "leave",
										key: e,
										currentPresences: t,
										leftPresences: r,
									});
								}),
								this.onSync(() => {
									this.channel._trigger("presence", { event: "sync" });
								});
						}
						static syncState(e, t, r, s) {
							const i = this.cloneDeep(e),
								n = this.transformState(t),
								o = {},
								a = {};
							return (
								this.map(i, (e, t) => {
									n[e] || (a[e] = t);
								}),
								this.map(n, (e, t) => {
									const r = i[e];
									if (r) {
										const s = t.map((e) => e.presence_ref),
											i = r.map((e) => e.presence_ref),
											n = t.filter((e) => i.indexOf(e.presence_ref) < 0),
											h = r.filter((e) => s.indexOf(e.presence_ref) < 0);
										n.length > 0 && (o[e] = n), h.length > 0 && (a[e] = h);
									} else o[e] = t;
								}),
								this.syncDiff(i, { joins: o, leaves: a }, r, s)
							);
						}
						static syncDiff(e, t, r, s) {
							const { joins: i, leaves: n } = {
								joins: this.transformState(t.joins),
								leaves: this.transformState(t.leaves),
							};
							return (
								r || (r = () => {}),
								s || (s = () => {}),
								this.map(i, (t, s) => {
									var i;
									const n = null !== (i = e[t]) && void 0 !== i ? i : [];
									if (((e[t] = this.cloneDeep(s)), n.length > 0)) {
										const r = e[t].map((e) => e.presence_ref),
											s = n.filter((e) => r.indexOf(e.presence_ref) < 0);
										e[t].unshift(...s);
									}
									r(t, n, s);
								}),
								this.map(n, (t, r) => {
									let i = e[t];
									if (!i) return;
									const n = r.map((e) => e.presence_ref);
									(i = i.filter((e) => n.indexOf(e.presence_ref) < 0)),
										(e[t] = i),
										s(t, i, r),
										0 === i.length && delete e[t];
								}),
								e
							);
						}
						static map(e, t) {
							return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
						}
						static transformState(e) {
							return (
								(e = this.cloneDeep(e)),
								Object.getOwnPropertyNames(e).reduce((t, r) => {
									const s = e[r];
									return (
										(t[r] =
											"metas" in s
												? s.metas.map(
														(e) => (
															(e.presence_ref = e.phx_ref),
															delete e.phx_ref,
															delete e.phx_ref_prev,
															e
														)
												  )
												: s),
										t
									);
								}, {})
							);
						}
						static cloneDeep(e) {
							return JSON.parse(JSON.stringify(e));
						}
						onJoin(e) {
							this.caller.onJoin = e;
						}
						onLeave(e) {
							this.caller.onLeave = e;
						}
						onSync(e) {
							this.caller.onSync = e;
						}
						inPendingSyncState() {
							return !this.joinRef || this.joinRef !== this.channel._joinRef();
						}
					}
					!(function (e) {
						(e.abstime = "abstime"),
							(e.bool = "bool"),
							(e.date = "date"),
							(e.daterange = "daterange"),
							(e.float4 = "float4"),
							(e.float8 = "float8"),
							(e.int2 = "int2"),
							(e.int4 = "int4"),
							(e.int4range = "int4range"),
							(e.int8 = "int8"),
							(e.int8range = "int8range"),
							(e.json = "json"),
							(e.jsonb = "jsonb"),
							(e.money = "money"),
							(e.numeric = "numeric"),
							(e.oid = "oid"),
							(e.reltime = "reltime"),
							(e.text = "text"),
							(e.time = "time"),
							(e.timestamp = "timestamp"),
							(e.timestamptz = "timestamptz"),
							(e.timetz = "timetz"),
							(e.tsrange = "tsrange"),
							(e.tstzrange = "tstzrange");
					})(u || (u = {}));
					const y = (e, t, r = {}) => {
							var s;
							const i = null !== (s = r.skipTypes) && void 0 !== s ? s : [];
							return Object.keys(t).reduce(
								(r, s) => ((r[s] = m(s, e, t, i)), r),
								{}
							);
						},
						m = (e, t, r, s) => {
							const i = t.find((t) => t.name === e),
								n = null == i ? void 0 : i.type,
								o = r[e];
							return n && !s.includes(n) ? g(n, o) : b(o);
						},
						g = (e, t) => {
							if ("_" === e.charAt(0)) {
								const r = e.slice(1, e.length);
								return S(t, r);
							}
							switch (e) {
								case u.bool:
									return _(t);
								case u.float4:
								case u.float8:
								case u.int2:
								case u.int4:
								case u.int8:
								case u.numeric:
								case u.oid:
									return w(t);
								case u.json:
								case u.jsonb:
									return E(t);
								case u.timestamp:
									return T(t);
								case u.abstime:
								case u.date:
								case u.daterange:
								case u.int4range:
								case u.int8range:
								case u.money:
								case u.reltime:
								case u.text:
								case u.time:
								case u.timestamptz:
								case u.timetz:
								case u.tsrange:
								case u.tstzrange:
								default:
									return b(t);
							}
						},
						b = (e) => e,
						_ = (e) => {
							switch (e) {
								case "t":
									return !0;
								case "f":
									return !1;
								default:
									return e;
							}
						},
						w = (e) => {
							if ("string" == typeof e) {
								const t = parseFloat(e);
								if (!Number.isNaN(t)) return t;
							}
							return e;
						},
						E = (e) => {
							if ("string" == typeof e)
								try {
									return JSON.parse(e);
								} catch (t) {
									return console.log(`JSON parse error: ${t}`), e;
								}
							return e;
						},
						S = (e, t) => {
							if ("string" != typeof e) return e;
							const r = e.length - 1,
								s = e[r];
							if ("{" === e[0] && "}" === s) {
								let s;
								const i = e.slice(1, r);
								try {
									s = JSON.parse("[" + i + "]");
								} catch (e) {
									s = i ? i.split(",") : [];
								}
								return s.map((e) => g(t, e));
							}
							return e;
						},
						T = (e) => ("string" == typeof e ? e.replace(" ", "T") : e);
					var O,
						j,
						P,
						k = function (e, t, r, s) {
							return new (r || (r = Promise))(function (i, n) {
								function o(e) {
									try {
										h(s.next(e));
									} catch (e) {
										n(e);
									}
								}
								function a(e) {
									try {
										h(s.throw(e));
									} catch (e) {
										n(e);
									}
								}
								function h(e) {
									var t;
									e.done
										? i(e.value)
										: ((t = e.value),
										  t instanceof r
												? t
												: new r(function (e) {
														e(t);
												  })).then(o, a);
								}
								h((s = s.apply(e, t || [])).next());
							});
						};
					!(function (e) {
						(e.ALL = "*"),
							(e.INSERT = "INSERT"),
							(e.UPDATE = "UPDATE"),
							(e.DELETE = "DELETE");
					})(O || (O = {})),
						(function (e) {
							(e.BROADCAST = "broadcast"),
								(e.PRESENCE = "presence"),
								(e.POSTGRES_CHANGES = "postgres_changes");
						})(j || (j = {})),
						(function (e) {
							(e.SUBSCRIBED = "SUBSCRIBED"),
								(e.TIMED_OUT = "TIMED_OUT"),
								(e.CLOSED = "CLOSED"),
								(e.CHANNEL_ERROR = "CHANNEL_ERROR");
						})(P || (P = {}));
					class x {
						constructor(e, t = { config: {} }, r) {
							(this.topic = e),
								(this.params = t),
								(this.socket = r),
								(this.bindings = {}),
								(this.state = o.closed),
								(this.joinedOnce = !1),
								(this.pushBuffer = []),
								(this.params.config = Object.assign(
									{ broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
									t.config
								)),
								(this.timeout = this.socket.timeout),
								(this.joinPush = new p(
									this,
									a.join,
									this.params,
									this.timeout
								)),
								(this.rejoinTimer = new d(
									() => this._rejoinUntilConnected(),
									this.socket.reconnectAfterMs
								)),
								this.joinPush.receive("ok", () => {
									(this.state = o.joined),
										this.rejoinTimer.reset(),
										this.pushBuffer.forEach((e) => e.send()),
										(this.pushBuffer = []);
								}),
								this._onClose(() => {
									this.rejoinTimer.reset(),
										this.socket.log(
											"channel",
											`close ${this.topic} ${this._joinRef()}`
										),
										(this.state = o.closed),
										this.socket._remove(this);
								}),
								this._onError((e) => {
									this._isLeaving() ||
										this._isClosed() ||
										(this.socket.log("channel", `error ${this.topic}`, e),
										(this.state = o.errored),
										this.rejoinTimer.scheduleTimeout());
								}),
								this.joinPush.receive("timeout", () => {
									this._isJoining() &&
										(this.socket.log(
											"channel",
											`timeout ${this.topic}`,
											this.joinPush.timeout
										),
										(this.state = o.errored),
										this.rejoinTimer.scheduleTimeout());
								}),
								this._on(a.reply, {}, (e, t) => {
									this._trigger(this._replyEventName(t), e);
								}),
								(this.presence = new v(this));
						}
						subscribe(e, t = this.timeout) {
							var r, s;
							if (this.joinedOnce)
								throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
							{
								const {
									config: { broadcast: i, presence: n },
								} = this.params;
								this._onError((t) => e && e("CHANNEL_ERROR", t)),
									this._onClose(() => e && e("CLOSED"));
								const o = {},
									a = {
										broadcast: i,
										presence: n,
										postgres_changes:
											null !==
												(s =
													null === (r = this.bindings.postgres_changes) ||
													void 0 === r
														? void 0
														: r.map((e) => e.filter)) && void 0 !== s
												? s
												: [],
									};
								this.socket.accessToken &&
									(o.access_token = this.socket.accessToken),
									this.updateJoinPayload(Object.assign({ config: a }, o)),
									(this.joinedOnce = !0),
									this._rejoin(t),
									this.joinPush
										.receive("ok", ({ postgres_changes: t }) => {
											var r;
											if (
												(this.socket.accessToken &&
													this.socket.setAuth(this.socket.accessToken),
												void 0 !== t)
											) {
												const s = this.bindings.postgres_changes,
													i =
														null !== (r = null == s ? void 0 : s.length) &&
														void 0 !== r
															? r
															: 0,
													n = [];
												for (let r = 0; r < i; r++) {
													const i = s[r],
														{
															filter: {
																event: o,
																schema: a,
																table: h,
																filter: l,
															},
														} = i,
														c = t && t[r];
													if (
														!c ||
														c.event !== o ||
														c.schema !== a ||
														c.table !== h ||
														c.filter !== l
													)
														return (
															this.unsubscribe(),
															void (
																e &&
																e(
																	"CHANNEL_ERROR",
																	new Error(
																		"mismatch between server and client bindings for postgres changes"
																	)
																)
															)
														);
													n.push(
														Object.assign(Object.assign({}, i), { id: c.id })
													);
												}
												return (
													(this.bindings.postgres_changes = n),
													void (e && e("SUBSCRIBED"))
												);
											}
											e && e("SUBSCRIBED");
										})
										.receive("error", (t) => {
											e &&
												e(
													"CHANNEL_ERROR",
													new Error(
														JSON.stringify(
															Object.values(t).join(", ") || "error"
														)
													)
												);
										})
										.receive("timeout", () => {
											e && e("TIMED_OUT");
										});
							}
							return this;
						}
						presenceState() {
							return this.presence.state;
						}
						track(e, t = {}) {
							return k(this, void 0, void 0, function* () {
								return yield this.send(
									{ type: "presence", event: "track", payload: e },
									t.timeout || this.timeout
								);
							});
						}
						untrack(e = {}) {
							return k(this, void 0, void 0, function* () {
								return yield this.send(
									{ type: "presence", event: "untrack" },
									e
								);
							});
						}
						on(e, t, r) {
							return this._on(e, t, r);
						}
						send(e, t = {}) {
							return new Promise((r) => {
								var s, i, n;
								const o = this._push(e.type, e, t.timeout || this.timeout);
								o.rateLimited && r("rate limited"),
									"broadcast" !== e.type ||
										(null ===
											(n =
												null ===
													(i =
														null === (s = this.params) || void 0 === s
															? void 0
															: s.config) || void 0 === i
													? void 0
													: i.broadcast) || void 0 === n
											? void 0
											: n.ack) ||
										r("ok"),
									o.receive("ok", () => r("ok")),
									o.receive("timeout", () => r("timed out"));
							});
						}
						updateJoinPayload(e) {
							this.joinPush.updatePayload(e);
						}
						unsubscribe(e = this.timeout) {
							this.state = o.leaving;
							const t = () => {
								this.socket.log("channel", `leave ${this.topic}`),
									this._trigger(a.close, "leave", this._joinRef());
							};
							return (
								this.rejoinTimer.reset(),
								this.joinPush.destroy(),
								new Promise((r) => {
									const s = new p(this, a.leave, {}, e);
									s
										.receive("ok", () => {
											t(), r("ok");
										})
										.receive("timeout", () => {
											t(), r("timed out");
										})
										.receive("error", () => {
											r("error");
										}),
										s.send(),
										this._canPush() || s.trigger("ok", {});
								})
							);
						}
						_push(e, t, r = this.timeout) {
							if (!this.joinedOnce)
								throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
							let s = new p(this, e, t, r);
							return (
								this._canPush()
									? s.send()
									: (s.startTimeout(), this.pushBuffer.push(s)),
								s
							);
						}
						_onMessage(e, t, r) {
							return t;
						}
						_isMember(e) {
							return this.topic === e;
						}
						_joinRef() {
							return this.joinPush.ref;
						}
						_trigger(e, t, r) {
							var s, i;
							const n = e.toLocaleLowerCase(),
								{ close: o, error: h, leave: l, join: c } = a;
							if (r && [o, h, l, c].indexOf(n) >= 0 && r !== this._joinRef())
								return;
							let u = this._onMessage(n, t, r);
							if (t && !u)
								throw "channel onMessage callbacks must return the payload, modified or unmodified";
							["insert", "update", "delete"].includes(n)
								? null === (s = this.bindings.postgres_changes) ||
								  void 0 === s ||
								  s
										.filter((e) => {
											var t, r, s;
											return (
												"*" ===
													(null === (t = e.filter) || void 0 === t
														? void 0
														: t.event) ||
												(null ===
													(s =
														null === (r = e.filter) || void 0 === r
															? void 0
															: r.event) || void 0 === s
													? void 0
													: s.toLocaleLowerCase()) === n
											);
										})
										.map((e) => e.callback(u, r))
								: null === (i = this.bindings[n]) ||
								  void 0 === i ||
								  i
										.filter((e) => {
											var r, s, i, o, a, h;
											if (
												["broadcast", "presence", "postgres_changes"].includes(
													n
												)
											) {
												if ("id" in e) {
													const n = e.id,
														o =
															null === (r = e.filter) || void 0 === r
																? void 0
																: r.event;
													return (
														n &&
														(null === (s = t.ids) || void 0 === s
															? void 0
															: s.includes(n)) &&
														("*" === o ||
															(null == o ? void 0 : o.toLocaleLowerCase()) ===
																(null === (i = t.data) || void 0 === i
																	? void 0
																	: i.type.toLocaleLowerCase()))
													);
												}
												{
													const r =
														null ===
															(a =
																null === (o = null == e ? void 0 : e.filter) ||
																void 0 === o
																	? void 0
																	: o.event) || void 0 === a
															? void 0
															: a.toLocaleLowerCase();
													return (
														"*" === r ||
														r ===
															(null === (h = null == t ? void 0 : t.event) ||
															void 0 === h
																? void 0
																: h.toLocaleLowerCase())
													);
												}
											}
											return e.type.toLocaleLowerCase() === n;
										})
										.map((e) => {
											if ("object" == typeof u && "ids" in u) {
												const e = u.data,
													{
														schema: t,
														table: r,
														commit_timestamp: s,
														type: i,
														errors: n,
													} = e,
													o = {
														schema: t,
														table: r,
														commit_timestamp: s,
														eventType: i,
														new: {},
														old: {},
														errors: n,
													};
												u = Object.assign(
													Object.assign({}, o),
													this._getPayloadRecords(e)
												);
											}
											e.callback(u, r);
										});
						}
						_isClosed() {
							return this.state === o.closed;
						}
						_isJoined() {
							return this.state === o.joined;
						}
						_isJoining() {
							return this.state === o.joining;
						}
						_isLeaving() {
							return this.state === o.leaving;
						}
						_replyEventName(e) {
							return `chan_reply_${e}`;
						}
						_on(e, t, r) {
							const s = e.toLocaleLowerCase(),
								i = { type: s, filter: t, callback: r };
							return (
								this.bindings[s]
									? this.bindings[s].push(i)
									: (this.bindings[s] = [i]),
								this
							);
						}
						_off(e, t) {
							const r = e.toLocaleLowerCase();
							return (
								(this.bindings[r] = this.bindings[r].filter((e) => {
									var s;
									return !(
										(null === (s = e.type) || void 0 === s
											? void 0
											: s.toLocaleLowerCase()) === r && x.isEqual(e.filter, t)
									);
								})),
								this
							);
						}
						static isEqual(e, t) {
							if (Object.keys(e).length !== Object.keys(t).length) return !1;
							for (const r in e) if (e[r] !== t[r]) return !1;
							return !0;
						}
						_rejoinUntilConnected() {
							this.rejoinTimer.scheduleTimeout(),
								this.socket.isConnected() && this._rejoin();
						}
						_onClose(e) {
							this._on(a.close, {}, e);
						}
						_onError(e) {
							this._on(a.error, {}, (t) => e(t));
						}
						_canPush() {
							return this.socket.isConnected() && this._isJoined();
						}
						_rejoin(e = this.timeout) {
							this._isLeaving() ||
								(this.socket._leaveOpenTopic(this.topic),
								(this.state = o.joining),
								this.joinPush.resend(e));
						}
						_getPayloadRecords(e) {
							const t = { new: {}, old: {} };
							return (
								("INSERT" !== e.type && "UPDATE" !== e.type) ||
									(t.new = y(e.columns, e.record)),
								("UPDATE" !== e.type && "DELETE" !== e.type) ||
									(t.old = y(e.columns, e.old_record)),
								t
							);
						}
					}
					var C = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					const A = () => {};
					class $ {
						constructor(e, t) {
							var r;
							(this.accessToken = null),
								(this.channels = []),
								(this.endPoint = ""),
								(this.headers = i),
								(this.params = {}),
								(this.timeout = 1e4),
								(this.transport = s.w3cwebsocket),
								(this.heartbeatIntervalMs = 3e4),
								(this.heartbeatTimer = void 0),
								(this.pendingHeartbeatRef = null),
								(this.ref = 0),
								(this.logger = A),
								(this.conn = null),
								(this.sendBuffer = []),
								(this.serializer = new f()),
								(this.stateChangeCallbacks = {
									open: [],
									close: [],
									error: [],
									message: [],
								}),
								(this.eventsPerSecondLimitMs = 100),
								(this.inThrottle = !1),
								(this.endPoint = `${e}/${h.websocket}`),
								(null == t ? void 0 : t.params) && (this.params = t.params),
								(null == t ? void 0 : t.headers) &&
									(this.headers = Object.assign(
										Object.assign({}, this.headers),
										t.headers
									)),
								(null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
								(null == t ? void 0 : t.logger) && (this.logger = t.logger),
								(null == t ? void 0 : t.transport) &&
									(this.transport = t.transport),
								(null == t ? void 0 : t.heartbeatIntervalMs) &&
									(this.heartbeatIntervalMs = t.heartbeatIntervalMs);
							const n =
								null === (r = null == t ? void 0 : t.params) || void 0 === r
									? void 0
									: r.eventsPerSecond;
							n && (this.eventsPerSecondLimitMs = Math.floor(1e3 / n)),
								(this.reconnectAfterMs = (
									null == t ? void 0 : t.reconnectAfterMs
								)
									? t.reconnectAfterMs
									: (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
								(this.encode = (null == t ? void 0 : t.encode)
									? t.encode
									: (e, t) => t(JSON.stringify(e))),
								(this.decode = (null == t ? void 0 : t.decode)
									? t.decode
									: this.serializer.decode.bind(this.serializer)),
								(this.reconnectTimer = new d(
									() =>
										C(this, void 0, void 0, function* () {
											this.disconnect(), this.connect();
										}),
									this.reconnectAfterMs
								));
						}
						connect() {
							this.conn ||
								((this.conn = new this.transport(
									this._endPointURL(),
									[],
									null,
									this.headers
								)),
								this.conn &&
									((this.conn.binaryType = "arraybuffer"),
									(this.conn.onopen = () => this._onConnOpen()),
									(this.conn.onerror = (e) => this._onConnError(e)),
									(this.conn.onmessage = (e) => this._onConnMessage(e)),
									(this.conn.onclose = (e) => this._onConnClose(e))));
						}
						disconnect(e, t) {
							this.conn &&
								((this.conn.onclose = function () {}),
								e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
								(this.conn = null),
								this.heartbeatTimer && clearInterval(this.heartbeatTimer),
								this.reconnectTimer.reset());
						}
						getChannels() {
							return this.channels;
						}
						removeChannel(e) {
							return C(this, void 0, void 0, function* () {
								const t = yield e.unsubscribe();
								return 0 === this.channels.length && this.disconnect(), t;
							});
						}
						removeAllChannels() {
							return C(this, void 0, void 0, function* () {
								const e = yield Promise.all(
									this.channels.map((e) => e.unsubscribe())
								);
								return this.disconnect(), e;
							});
						}
						log(e, t, r) {
							this.logger(e, t, r);
						}
						connectionState() {
							switch (this.conn && this.conn.readyState) {
								case n.connecting:
									return l.Connecting;
								case n.open:
									return l.Open;
								case n.closing:
									return l.Closing;
								default:
									return l.Closed;
							}
						}
						isConnected() {
							return this.connectionState() === l.Open;
						}
						channel(e, t = { config: {} }) {
							this.isConnected() || this.connect();
							const r = new x(`realtime:${e}`, t, this);
							return this.channels.push(r), r;
						}
						push(e) {
							const { topic: t, event: r, payload: s, ref: i } = e;
							let n = () => {
								this.encode(e, (e) => {
									var t;
									null === (t = this.conn) || void 0 === t || t.send(e);
								});
							};
							if ((this.log("push", `${t} ${r} (${i})`, s), this.isConnected()))
								if (["broadcast", "presence", "postgres_changes"].includes(r)) {
									if (this._throttle(n)()) return "rate limited";
								} else n();
							else this.sendBuffer.push(n);
						}
						setAuth(e) {
							(this.accessToken = e),
								this.channels.forEach((t) => {
									e && t.updateJoinPayload({ access_token: e }),
										t.joinedOnce &&
											t._isJoined() &&
											t._push(a.access_token, { access_token: e });
								});
						}
						_makeRef() {
							let e = this.ref + 1;
							return (
								e === this.ref ? (this.ref = 0) : (this.ref = e),
								this.ref.toString()
							);
						}
						_leaveOpenTopic(e) {
							let t = this.channels.find(
								(t) => t.topic === e && (t._isJoined() || t._isJoining())
							);
							t &&
								(this.log("transport", `leaving duplicate topic "${e}"`),
								t.unsubscribe());
						}
						_remove(e) {
							this.channels = this.channels.filter(
								(t) => t._joinRef() !== e._joinRef()
							);
						}
						_endPointURL() {
							return this._appendParams(
								this.endPoint,
								Object.assign({}, this.params, { vsn: "1.0.0" })
							);
						}
						_onConnMessage(e) {
							this.decode(e.data, (e) => {
								let { topic: t, event: r, payload: s, ref: i } = e;
								((i && i === this.pendingHeartbeatRef) ||
									r === (null == s ? void 0 : s.type)) &&
									(this.pendingHeartbeatRef = null),
									this.log(
										"receive",
										`${s.status || ""} ${t} ${r} ${(i && "(" + i + ")") || ""}`,
										s
									),
									this.channels
										.filter((e) => e._isMember(t))
										.forEach((e) => e._trigger(r, s, i)),
									this.stateChangeCallbacks.message.forEach((t) => t(e));
							});
						}
						_onConnOpen() {
							this.log("transport", `connected to ${this._endPointURL()}`),
								this._flushSendBuffer(),
								this.reconnectTimer.reset(),
								this.heartbeatTimer && clearInterval(this.heartbeatTimer),
								(this.heartbeatTimer = setInterval(
									() => this._sendHeartbeat(),
									this.heartbeatIntervalMs
								)),
								this.stateChangeCallbacks.open.forEach((e) => e());
						}
						_onConnClose(e) {
							this.log("transport", "close", e),
								this._triggerChanError(),
								this.heartbeatTimer && clearInterval(this.heartbeatTimer),
								this.reconnectTimer.scheduleTimeout(),
								this.stateChangeCallbacks.close.forEach((t) => t(e));
						}
						_onConnError(e) {
							this.log("transport", e.message),
								this._triggerChanError(),
								this.stateChangeCallbacks.error.forEach((t) => t(e));
						}
						_triggerChanError() {
							this.channels.forEach((e) => e._trigger(a.error));
						}
						_appendParams(e, t) {
							if (0 === Object.keys(t).length) return e;
							const r = e.match(/\?/) ? "&" : "?";
							return `${e}${r}${new URLSearchParams(t)}`;
						}
						_flushSendBuffer() {
							this.isConnected() &&
								this.sendBuffer.length > 0 &&
								(this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
						}
						_sendHeartbeat() {
							var e;
							if (this.isConnected()) {
								if (this.pendingHeartbeatRef)
									return (
										(this.pendingHeartbeatRef = null),
										this.log(
											"transport",
											"heartbeat timeout. Attempting to re-establish connection"
										),
										void (
											null === (e = this.conn) ||
											void 0 === e ||
											e.close(1e3, "hearbeat timeout")
										)
									);
								(this.pendingHeartbeatRef = this._makeRef()),
									this.push({
										topic: "phoenix",
										event: "heartbeat",
										payload: {},
										ref: this.pendingHeartbeatRef,
									}),
									this.setAuth(this.accessToken);
							}
						}
						_throttle(e, t = this.eventsPerSecondLimitMs) {
							return () =>
								!!this.inThrottle ||
								(e(),
								t > 0 &&
									((this.inThrottle = !0),
									setTimeout(() => {
										this.inThrottle = !1;
									}, t)),
								!1);
						}
					}
				},
				752: (e, t, r) => {
					"use strict";
					r.r(t),
						r.d(t, {
							StorageApiError: () => n,
							StorageClient: () => T,
							StorageError: () => s,
							StorageUnknownError: () => o,
							isStorageError: () => i,
						});
					class s extends Error {
						constructor(e) {
							super(e),
								(this.__isStorageError = !0),
								(this.name = "StorageError");
						}
					}
					function i(e) {
						return (
							"object" == typeof e && null !== e && "__isStorageError" in e
						);
					}
					class n extends s {
						constructor(e, t) {
							super(e), (this.name = "StorageApiError"), (this.status = t);
						}
						toJSON() {
							return {
								name: this.name,
								message: this.message,
								status: this.status,
							};
						}
					}
					class o extends s {
						constructor(e, t) {
							super(e),
								(this.name = "StorageUnknownError"),
								(this.originalError = t);
						}
					}
					var a = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					const h = (e) => {
						let t;
						return (
							(t =
								e ||
								("undefined" == typeof fetch
									? (...e) =>
											a(void 0, void 0, void 0, function* () {
												return yield (yield Promise.resolve().then(
													r.t.bind(r, 98, 23)
												)).fetch(...e);
											})
									: fetch)),
							(...e) => t(...e)
						);
					};
					var l = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					const c = (e) =>
							e.msg ||
							e.message ||
							e.error_description ||
							e.error ||
							JSON.stringify(e),
						u = (e, t) =>
							l(void 0, void 0, void 0, function* () {
								const s = yield a(void 0, void 0, void 0, function* () {
									return "undefined" == typeof Response
										? (yield Promise.resolve().then(r.t.bind(r, 98, 23)))
												.Response
										: Response;
								});
								e instanceof s
									? e
											.json()
											.then((r) => {
												t(new n(c(r), e.status || 500));
											})
											.catch((e) => {
												t(new o(c(e), e));
											})
									: t(new o(c(e), e));
							}),
						d = (e, t, r, s) => {
							const i = {
								method: e,
								headers: (null == t ? void 0 : t.headers) || {},
							};
							return "GET" === e
								? i
								: ((i.headers = Object.assign(
										{ "Content-Type": "application/json" },
										null == t ? void 0 : t.headers
								  )),
								  (i.body = JSON.stringify(s)),
								  Object.assign(Object.assign({}, i), r));
						};
					function f(e, t, r, s, i, n) {
						return l(this, void 0, void 0, function* () {
							return new Promise((o, a) => {
								e(r, d(t, s, i, n))
									.then((e) => {
										if (!e.ok) throw e;
										return (null == s ? void 0 : s.noResolveJson)
											? e
											: e.json();
									})
									.then((e) => o(e))
									.catch((e) => u(e, a));
							});
						});
					}
					function p(e, t, r, s) {
						return l(this, void 0, void 0, function* () {
							return f(e, "GET", t, r, s);
						});
					}
					function v(e, t, r, s, i) {
						return l(this, void 0, void 0, function* () {
							return f(e, "POST", t, s, i, r);
						});
					}
					function y(e, t, r, s, i) {
						return l(this, void 0, void 0, function* () {
							return f(e, "DELETE", t, s, i, r);
						});
					}
					var m = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					const g = {
							limit: 100,
							offset: 0,
							sortBy: { column: "name", order: "asc" },
						},
						b = {
							cacheControl: "3600",
							contentType: "text/plain;charset=UTF-8",
							upsert: !1,
						};
					class _ {
						constructor(e, t = {}, r, s) {
							(this.url = e),
								(this.headers = t),
								(this.bucketId = r),
								(this.fetch = h(s));
						}
						uploadOrUpdate(e, t, r, s) {
							return m(this, void 0, void 0, function* () {
								try {
									let i;
									const n = Object.assign(Object.assign({}, b), s),
										o = Object.assign(
											Object.assign({}, this.headers),
											"POST" === e && { "x-upsert": String(n.upsert) }
										);
									"undefined" != typeof Blob && r instanceof Blob
										? ((i = new FormData()),
										  i.append("cacheControl", n.cacheControl),
										  i.append("", r))
										: "undefined" != typeof FormData && r instanceof FormData
										? ((i = r), i.append("cacheControl", n.cacheControl))
										: ((i = r),
										  (o["cache-control"] = `max-age=${n.cacheControl}`),
										  (o["content-type"] = n.contentType));
									const a = this._removeEmptyFolders(t),
										h = this._getFinalPath(a),
										l = yield this.fetch(
											`${this.url}/object/${h}`,
											Object.assign(
												{ method: e, body: i, headers: o },
												(null == n ? void 0 : n.duplex)
													? { duplex: n.duplex }
													: {}
											)
										);
									return l.ok
										? { data: { path: a }, error: null }
										: { data: null, error: yield l.json() };
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						upload(e, t, r) {
							return m(this, void 0, void 0, function* () {
								return this.uploadOrUpdate("POST", e, t, r);
							});
						}
						uploadToSignedUrl(e, t, r, s) {
							return m(this, void 0, void 0, function* () {
								const n = this._removeEmptyFolders(e),
									o = this._getFinalPath(n),
									a = new URL(this.url + `/object/upload/sign/${o}`);
								a.searchParams.set("token", t);
								try {
									let e;
									const t = Object.assign({ upsert: b.upsert }, s),
										i = Object.assign(Object.assign({}, this.headers), {
											"x-upsert": String(t.upsert),
										});
									"undefined" != typeof Blob && r instanceof Blob
										? ((e = new FormData()),
										  e.append("cacheControl", t.cacheControl),
										  e.append("", r))
										: "undefined" != typeof FormData && r instanceof FormData
										? ((e = r), e.append("cacheControl", t.cacheControl))
										: ((e = r),
										  (i["cache-control"] = `max-age=${t.cacheControl}`),
										  (i["content-type"] = t.contentType));
									const o = yield this.fetch(a.toString(), {
										method: "PUT",
										body: e,
										headers: i,
									});
									return o.ok
										? { data: { path: n }, error: null }
										: { data: null, error: yield o.json() };
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						createSignedUploadUrl(e) {
							return m(this, void 0, void 0, function* () {
								try {
									let t = this._getFinalPath(e);
									const r = yield v(
											this.fetch,
											`${this.url}/object/upload/sign/${t}`,
											{},
											{ headers: this.headers }
										),
										i = new URL(this.url + r.url),
										n = i.searchParams.get("token");
									if (!n) throw new s("No token returned by API");
									return {
										data: { signedUrl: i.toString(), path: e, token: n },
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						update(e, t, r) {
							return m(this, void 0, void 0, function* () {
								return this.uploadOrUpdate("PUT", e, t, r);
							});
						}
						move(e, t) {
							return m(this, void 0, void 0, function* () {
								try {
									return {
										data: yield v(
											this.fetch,
											`${this.url}/object/move`,
											{
												bucketId: this.bucketId,
												sourceKey: e,
												destinationKey: t,
											},
											{ headers: this.headers }
										),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						copy(e, t) {
							return m(this, void 0, void 0, function* () {
								try {
									return {
										data: {
											path: (yield v(
												this.fetch,
												`${this.url}/object/copy`,
												{
													bucketId: this.bucketId,
													sourceKey: e,
													destinationKey: t,
												},
												{ headers: this.headers }
											)).Key,
										},
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						createSignedUrl(e, t, r) {
							return m(this, void 0, void 0, function* () {
								try {
									let s = this._getFinalPath(e),
										i = yield v(
											this.fetch,
											`${this.url}/object/sign/${s}`,
											Object.assign(
												{ expiresIn: t },
												(null == r ? void 0 : r.transform)
													? { transform: r.transform }
													: {}
											),
											{ headers: this.headers }
										);
									const n = (null == r ? void 0 : r.download)
										? `&download=${!0 === r.download ? "" : r.download}`
										: "";
									return (
										(i = {
											signedUrl: encodeURI(`${this.url}${i.signedURL}${n}`),
										}),
										{ data: i, error: null }
									);
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						createSignedUrls(e, t, r) {
							return m(this, void 0, void 0, function* () {
								try {
									const s = yield v(
											this.fetch,
											`${this.url}/object/sign/${this.bucketId}`,
											{ expiresIn: t, paths: e },
											{ headers: this.headers }
										),
										i = (null == r ? void 0 : r.download)
											? `&download=${!0 === r.download ? "" : r.download}`
											: "";
									return {
										data: s.map((e) =>
											Object.assign(Object.assign({}, e), {
												signedUrl: e.signedURL
													? encodeURI(`${this.url}${e.signedURL}${i}`)
													: null,
											})
										),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						download(e, t) {
							return m(this, void 0, void 0, function* () {
								const r =
										void 0 !== (null == t ? void 0 : t.transform)
											? "render/image/authenticated"
											: "object",
									s = this.transformOptsToQueryString(
										(null == t ? void 0 : t.transform) || {}
									),
									n = s ? `?${s}` : "";
								try {
									const t = this._getFinalPath(e),
										s = yield p(this.fetch, `${this.url}/${r}/${t}${n}`, {
											headers: this.headers,
											noResolveJson: !0,
										});
									return { data: yield s.blob(), error: null };
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						getPublicUrl(e, t) {
							const r = this._getFinalPath(e),
								s = [],
								i = (null == t ? void 0 : t.download)
									? `download=${!0 === t.download ? "" : t.download}`
									: "";
							"" !== i && s.push(i);
							const n =
									void 0 !== (null == t ? void 0 : t.transform)
										? "render/image"
										: "object",
								o = this.transformOptsToQueryString(
									(null == t ? void 0 : t.transform) || {}
								);
							"" !== o && s.push(o);
							let a = s.join("&");
							return (
								"" !== a && (a = `?${a}`),
								{
									data: {
										publicUrl: encodeURI(`${this.url}/${n}/public/${r}${a}`),
									},
								}
							);
						}
						remove(e) {
							return m(this, void 0, void 0, function* () {
								try {
									return {
										data: yield y(
											this.fetch,
											`${this.url}/object/${this.bucketId}`,
											{ prefixes: e },
											{ headers: this.headers }
										),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						list(e, t, r) {
							return m(this, void 0, void 0, function* () {
								try {
									const s = Object.assign(
										Object.assign(Object.assign({}, g), t),
										{ prefix: e || "" }
									);
									return {
										data: yield v(
											this.fetch,
											`${this.url}/object/list/${this.bucketId}`,
											s,
											{ headers: this.headers },
											r
										),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						_getFinalPath(e) {
							return `${this.bucketId}/${e}`;
						}
						_removeEmptyFolders(e) {
							return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
						}
						transformOptsToQueryString(e) {
							const t = [];
							return (
								e.width && t.push(`width=${e.width}`),
								e.height && t.push(`height=${e.height}`),
								e.resize && t.push(`resize=${e.resize}`),
								e.format && t.push(`format=${e.format}`),
								e.quality && t.push(`quality=${e.quality}`),
								t.join("&")
							);
						}
					}
					const w = { "X-Client-Info": "storage-js/2.5.1" };
					var E = function (e, t, r, s) {
						return new (r || (r = Promise))(function (i, n) {
							function o(e) {
								try {
									h(s.next(e));
								} catch (e) {
									n(e);
								}
							}
							function a(e) {
								try {
									h(s.throw(e));
								} catch (e) {
									n(e);
								}
							}
							function h(e) {
								var t;
								e.done
									? i(e.value)
									: ((t = e.value),
									  t instanceof r
											? t
											: new r(function (e) {
													e(t);
											  })).then(o, a);
							}
							h((s = s.apply(e, t || [])).next());
						});
					};
					class S {
						constructor(e, t = {}, r) {
							(this.url = e),
								(this.headers = Object.assign(Object.assign({}, w), t)),
								(this.fetch = h(r));
						}
						listBuckets() {
							return E(this, void 0, void 0, function* () {
								try {
									return {
										data: yield p(this.fetch, `${this.url}/bucket`, {
											headers: this.headers,
										}),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						getBucket(e) {
							return E(this, void 0, void 0, function* () {
								try {
									return {
										data: yield p(this.fetch, `${this.url}/bucket/${e}`, {
											headers: this.headers,
										}),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						createBucket(e, t = { public: !1 }) {
							return E(this, void 0, void 0, function* () {
								try {
									return {
										data: yield v(
											this.fetch,
											`${this.url}/bucket`,
											{
												id: e,
												name: e,
												public: t.public,
												file_size_limit: t.fileSizeLimit,
												allowed_mime_types: t.allowedMimeTypes,
											},
											{ headers: this.headers }
										),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						updateBucket(e, t) {
							return E(this, void 0, void 0, function* () {
								try {
									const r = yield (function (e, t, r, s, i) {
										return l(this, void 0, void 0, function* () {
											return f(e, "PUT", t, s, undefined, r);
										});
									})(
										this.fetch,
										`${this.url}/bucket/${e}`,
										{
											id: e,
											name: e,
											public: t.public,
											file_size_limit: t.fileSizeLimit,
											allowed_mime_types: t.allowedMimeTypes,
										},
										{ headers: this.headers }
									);
									return { data: r, error: null };
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						emptyBucket(e) {
							return E(this, void 0, void 0, function* () {
								try {
									return {
										data: yield v(
											this.fetch,
											`${this.url}/bucket/${e}/empty`,
											{},
											{ headers: this.headers }
										),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
						deleteBucket(e) {
							return E(this, void 0, void 0, function* () {
								try {
									return {
										data: yield y(
											this.fetch,
											`${this.url}/bucket/${e}`,
											{},
											{ headers: this.headers }
										),
										error: null,
									};
								} catch (e) {
									if (i(e)) return { data: null, error: e };
									throw e;
								}
							});
						}
					}
					class T extends S {
						constructor(e, t = {}, r) {
							super(e, t, r);
						}
						from(e) {
							return new _(this.url, this.headers, e, this.fetch);
						}
					}
				},
				98: function (e, t) {
					var r = "undefined" != typeof self ? self : this,
						s = (function () {
							function e() {
								(this.fetch = !1), (this.DOMException = r.DOMException);
							}
							return (e.prototype = r), new e();
						})();
					!(function (e) {
						!(function (t) {
							var r = {
								searchParams: "URLSearchParams" in e,
								iterable: "Symbol" in e && "iterator" in Symbol,
								blob:
									"FileReader" in e &&
									"Blob" in e &&
									(function () {
										try {
											return new Blob(), !0;
										} catch (e) {
											return !1;
										}
									})(),
								formData: "FormData" in e,
								arrayBuffer: "ArrayBuffer" in e,
							};
							if (r.arrayBuffer)
								var s = [
										"[object Int8Array]",
										"[object Uint8Array]",
										"[object Uint8ClampedArray]",
										"[object Int16Array]",
										"[object Uint16Array]",
										"[object Int32Array]",
										"[object Uint32Array]",
										"[object Float32Array]",
										"[object Float64Array]",
									],
									i =
										ArrayBuffer.isView ||
										function (e) {
											return (
												e && s.indexOf(Object.prototype.toString.call(e)) > -1
											);
										};
							function n(e) {
								if (
									("string" != typeof e && (e = String(e)),
									/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
								)
									throw new TypeError("Invalid character in header field name");
								return e.toLowerCase();
							}
							function o(e) {
								return "string" != typeof e && (e = String(e)), e;
							}
							function a(e) {
								var t = {
									next: function () {
										var t = e.shift();
										return { done: void 0 === t, value: t };
									},
								};
								return (
									r.iterable &&
										(t[Symbol.iterator] = function () {
											return t;
										}),
									t
								);
							}
							function h(e) {
								(this.map = {}),
									e instanceof h
										? e.forEach(function (e, t) {
												this.append(t, e);
										  }, this)
										: Array.isArray(e)
										? e.forEach(function (e) {
												this.append(e[0], e[1]);
										  }, this)
										: e &&
										  Object.getOwnPropertyNames(e).forEach(function (t) {
												this.append(t, e[t]);
										  }, this);
							}
							function l(e) {
								if (e.bodyUsed)
									return Promise.reject(new TypeError("Already read"));
								e.bodyUsed = !0;
							}
							function c(e) {
								return new Promise(function (t, r) {
									(e.onload = function () {
										t(e.result);
									}),
										(e.onerror = function () {
											r(e.error);
										});
								});
							}
							function u(e) {
								var t = new FileReader(),
									r = c(t);
								return t.readAsArrayBuffer(e), r;
							}
							function d(e) {
								if (e.slice) return e.slice(0);
								var t = new Uint8Array(e.byteLength);
								return t.set(new Uint8Array(e)), t.buffer;
							}
							function f() {
								return (
									(this.bodyUsed = !1),
									(this._initBody = function (e) {
										var t;
										(this._bodyInit = e),
											e
												? "string" == typeof e
													? (this._bodyText = e)
													: r.blob && Blob.prototype.isPrototypeOf(e)
													? (this._bodyBlob = e)
													: r.formData && FormData.prototype.isPrototypeOf(e)
													? (this._bodyFormData = e)
													: r.searchParams &&
													  URLSearchParams.prototype.isPrototypeOf(e)
													? (this._bodyText = e.toString())
													: r.arrayBuffer &&
													  r.blob &&
													  (t = e) &&
													  DataView.prototype.isPrototypeOf(t)
													? ((this._bodyArrayBuffer = d(e.buffer)),
													  (this._bodyInit = new Blob([
															this._bodyArrayBuffer,
													  ])))
													: r.arrayBuffer &&
													  (ArrayBuffer.prototype.isPrototypeOf(e) || i(e))
													? (this._bodyArrayBuffer = d(e))
													: (this._bodyText = e =
															Object.prototype.toString.call(e))
												: (this._bodyText = ""),
											this.headers.get("content-type") ||
												("string" == typeof e
													? this.headers.set(
															"content-type",
															"text/plain;charset=UTF-8"
													  )
													: this._bodyBlob && this._bodyBlob.type
													? this.headers.set(
															"content-type",
															this._bodyBlob.type
													  )
													: r.searchParams &&
													  URLSearchParams.prototype.isPrototypeOf(e) &&
													  this.headers.set(
															"content-type",
															"application/x-www-form-urlencoded;charset=UTF-8"
													  ));
									}),
									r.blob &&
										((this.blob = function () {
											var e = l(this);
											if (e) return e;
											if (this._bodyBlob)
												return Promise.resolve(this._bodyBlob);
											if (this._bodyArrayBuffer)
												return Promise.resolve(
													new Blob([this._bodyArrayBuffer])
												);
											if (this._bodyFormData)
												throw new Error("could not read FormData body as blob");
											return Promise.resolve(new Blob([this._bodyText]));
										}),
										(this.arrayBuffer = function () {
											return this._bodyArrayBuffer
												? l(this) || Promise.resolve(this._bodyArrayBuffer)
												: this.blob().then(u);
										})),
									(this.text = function () {
										var e,
											t,
											r,
											s = l(this);
										if (s) return s;
										if (this._bodyBlob)
											return (
												(e = this._bodyBlob),
												(r = c((t = new FileReader()))),
												t.readAsText(e),
												r
											);
										if (this._bodyArrayBuffer)
											return Promise.resolve(
												(function (e) {
													for (
														var t = new Uint8Array(e),
															r = new Array(t.length),
															s = 0;
														s < t.length;
														s++
													)
														r[s] = String.fromCharCode(t[s]);
													return r.join("");
												})(this._bodyArrayBuffer)
											);
										if (this._bodyFormData)
											throw new Error("could not read FormData body as text");
										return Promise.resolve(this._bodyText);
									}),
									r.formData &&
										(this.formData = function () {
											return this.text().then(y);
										}),
									(this.json = function () {
										return this.text().then(JSON.parse);
									}),
									this
								);
							}
							(h.prototype.append = function (e, t) {
								(e = n(e)), (t = o(t));
								var r = this.map[e];
								this.map[e] = r ? r + ", " + t : t;
							}),
								(h.prototype.delete = function (e) {
									delete this.map[n(e)];
								}),
								(h.prototype.get = function (e) {
									return (e = n(e)), this.has(e) ? this.map[e] : null;
								}),
								(h.prototype.has = function (e) {
									return this.map.hasOwnProperty(n(e));
								}),
								(h.prototype.set = function (e, t) {
									this.map[n(e)] = o(t);
								}),
								(h.prototype.forEach = function (e, t) {
									for (var r in this.map)
										this.map.hasOwnProperty(r) &&
											e.call(t, this.map[r], r, this);
								}),
								(h.prototype.keys = function () {
									var e = [];
									return (
										this.forEach(function (t, r) {
											e.push(r);
										}),
										a(e)
									);
								}),
								(h.prototype.values = function () {
									var e = [];
									return (
										this.forEach(function (t) {
											e.push(t);
										}),
										a(e)
									);
								}),
								(h.prototype.entries = function () {
									var e = [];
									return (
										this.forEach(function (t, r) {
											e.push([r, t]);
										}),
										a(e)
									);
								}),
								r.iterable &&
									(h.prototype[Symbol.iterator] = h.prototype.entries);
							var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
							function v(e, t) {
								var r,
									s,
									i = (t = t || {}).body;
								if (e instanceof v) {
									if (e.bodyUsed) throw new TypeError("Already read");
									(this.url = e.url),
										(this.credentials = e.credentials),
										t.headers || (this.headers = new h(e.headers)),
										(this.method = e.method),
										(this.mode = e.mode),
										(this.signal = e.signal),
										i ||
											null == e._bodyInit ||
											((i = e._bodyInit), (e.bodyUsed = !0));
								} else this.url = String(e);
								if (
									((this.credentials =
										t.credentials || this.credentials || "same-origin"),
									(!t.headers && this.headers) ||
										(this.headers = new h(t.headers)),
									(this.method =
										((s = (r = t.method || this.method || "GET").toUpperCase()),
										p.indexOf(s) > -1 ? s : r)),
									(this.mode = t.mode || this.mode || null),
									(this.signal = t.signal || this.signal),
									(this.referrer = null),
									("GET" === this.method || "HEAD" === this.method) && i)
								)
									throw new TypeError(
										"Body not allowed for GET or HEAD requests"
									);
								this._initBody(i);
							}
							function y(e) {
								var t = new FormData();
								return (
									e
										.trim()
										.split("&")
										.forEach(function (e) {
											if (e) {
												var r = e.split("="),
													s = r.shift().replace(/\+/g, " "),
													i = r.join("=").replace(/\+/g, " ");
												t.append(decodeURIComponent(s), decodeURIComponent(i));
											}
										}),
									t
								);
							}
							function m(e, t) {
								t || (t = {}),
									(this.type = "default"),
									(this.status = void 0 === t.status ? 200 : t.status),
									(this.ok = this.status >= 200 && this.status < 300),
									(this.statusText = "statusText" in t ? t.statusText : "OK"),
									(this.headers = new h(t.headers)),
									(this.url = t.url || ""),
									this._initBody(e);
							}
							(v.prototype.clone = function () {
								return new v(this, { body: this._bodyInit });
							}),
								f.call(v.prototype),
								f.call(m.prototype),
								(m.prototype.clone = function () {
									return new m(this._bodyInit, {
										status: this.status,
										statusText: this.statusText,
										headers: new h(this.headers),
										url: this.url,
									});
								}),
								(m.error = function () {
									var e = new m(null, { status: 0, statusText: "" });
									return (e.type = "error"), e;
								});
							var g = [301, 302, 303, 307, 308];
							(m.redirect = function (e, t) {
								if (-1 === g.indexOf(t))
									throw new RangeError("Invalid status code");
								return new m(null, { status: t, headers: { location: e } });
							}),
								(t.DOMException = e.DOMException);
							try {
								new t.DOMException();
							} catch (e) {
								(t.DOMException = function (e, t) {
									(this.message = e), (this.name = t);
									var r = Error(e);
									this.stack = r.stack;
								}),
									(t.DOMException.prototype = Object.create(Error.prototype)),
									(t.DOMException.prototype.constructor = t.DOMException);
							}
							function b(e, s) {
								return new Promise(function (i, n) {
									var o = new v(e, s);
									if (o.signal && o.signal.aborted)
										return n(new t.DOMException("Aborted", "AbortError"));
									var a = new XMLHttpRequest();
									function l() {
										a.abort();
									}
									(a.onload = function () {
										var e,
											t,
											r = {
												status: a.status,
												statusText: a.statusText,
												headers:
													((e = a.getAllResponseHeaders() || ""),
													(t = new h()),
													e
														.replace(/\r?\n[\t ]+/g, " ")
														.split(/\r?\n/)
														.forEach(function (e) {
															var r = e.split(":"),
																s = r.shift().trim();
															if (s) {
																var i = r.join(":").trim();
																t.append(s, i);
															}
														}),
													t),
											};
										r.url =
											"responseURL" in a
												? a.responseURL
												: r.headers.get("X-Request-URL");
										var s = "response" in a ? a.response : a.responseText;
										i(new m(s, r));
									}),
										(a.onerror = function () {
											n(new TypeError("Network request failed"));
										}),
										(a.ontimeout = function () {
											n(new TypeError("Network request failed"));
										}),
										(a.onabort = function () {
											n(new t.DOMException("Aborted", "AbortError"));
										}),
										a.open(o.method, o.url, !0),
										"include" === o.credentials
											? (a.withCredentials = !0)
											: "omit" === o.credentials && (a.withCredentials = !1),
										"responseType" in a && r.blob && (a.responseType = "blob"),
										o.headers.forEach(function (e, t) {
											a.setRequestHeader(t, e);
										}),
										o.signal &&
											(o.signal.addEventListener("abort", l),
											(a.onreadystatechange = function () {
												4 === a.readyState &&
													o.signal.removeEventListener("abort", l);
											})),
										a.send(void 0 === o._bodyInit ? null : o._bodyInit);
								});
							}
							(b.polyfill = !0),
								e.fetch ||
									((e.fetch = b),
									(e.Headers = h),
									(e.Request = v),
									(e.Response = m)),
								(t.Headers = h),
								(t.Request = v),
								(t.Response = m),
								(t.fetch = b),
								Object.defineProperty(t, "__esModule", { value: !0 });
						})({});
					})(s),
						(s.fetch.ponyfill = !0),
						delete s.fetch.polyfill;
					var i = s;
					((t = i.fetch).default = i.fetch),
						(t.fetch = i.fetch),
						(t.Headers = i.Headers),
						(t.Request = i.Request),
						(t.Response = i.Response),
						(e.exports = t);
				},
				284: (e) => {
					var t = function () {
						if ("object" == typeof self && self) return self;
						if ("object" == typeof window && window) return window;
						throw new Error("Unable to resolve global `this`");
					};
					e.exports = (function () {
						if (this) return this;
						if ("object" == typeof globalThis && globalThis) return globalThis;
						try {
							Object.defineProperty(Object.prototype, "__global__", {
								get: function () {
									return this;
								},
								configurable: !0,
							});
						} catch (e) {
							return t();
						}
						try {
							return __global__ || t();
						} finally {
							delete Object.prototype.__global__;
						}
					})();
				},
				296: function (e, t, r) {
					"use strict";
					var s =
						(this && this.__awaiter) ||
						function (e, t, r, s) {
							return new (r || (r = Promise))(function (i, n) {
								function o(e) {
									try {
										h(s.next(e));
									} catch (e) {
										n(e);
									}
								}
								function a(e) {
									try {
										h(s.throw(e));
									} catch (e) {
										n(e);
									}
								}
								function h(e) {
									var t;
									e.done
										? i(e.value)
										: ((t = e.value),
										  t instanceof r
												? t
												: new r(function (e) {
														e(t);
												  })).then(o, a);
								}
								h((s = s.apply(e, t || [])).next());
							});
						};
					Object.defineProperty(t, "__esModule", { value: !0 });
					const i = r(982),
						n = r(189),
						o = r(73),
						a = r(752),
						h = r(678),
						l = r(716),
						c = r(610),
						u = r(283),
						d = { headers: h.DEFAULT_HEADERS },
						f = { schema: "public" },
						p = {
							autoRefreshToken: !0,
							persistSession: !0,
							detectSessionInUrl: !0,
							flowType: "implicit",
						},
						v = {};
					t.default = class {
						constructor(e, t, r) {
							var s, i, o, a, h, u, y, m;
							if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
								throw new Error("supabaseUrl is required.");
							if (!t) throw new Error("supabaseKey is required.");
							const g = (0, c.stripTrailingSlash)(e);
							if (
								((this.realtimeUrl = `${g}/realtime/v1`.replace(
									/^http/i,
									"ws"
								)),
								(this.authUrl = `${g}/auth/v1`),
								(this.storageUrl = `${g}/storage/v1`),
								g.match(/(supabase\.co)|(supabase\.in)/))
							) {
								const e = g.split(".");
								this.functionsUrl = `${e[0]}.functions.${e[1]}.${e[2]}`;
							} else this.functionsUrl = `${g}/functions/v1`;
							const b = `sb-${
									new URL(this.authUrl).hostname.split(".")[0]
								}-auth-token`,
								_ = {
									db: f,
									realtime: v,
									auth: Object.assign(Object.assign({}, p), { storageKey: b }),
									global: d,
								},
								w = (0, c.applySettingDefaults)(null != r ? r : {}, _);
							(this.storageKey =
								null !==
									(i =
										null === (s = w.auth) || void 0 === s
											? void 0
											: s.storageKey) && void 0 !== i
									? i
									: ""),
								(this.headers =
									null !==
										(a =
											null === (o = w.global) || void 0 === o
												? void 0
												: o.headers) && void 0 !== a
										? a
										: {}),
								(this.auth = this._initSupabaseAuthClient(
									null !== (h = w.auth) && void 0 !== h ? h : {},
									this.headers,
									null === (u = w.global) || void 0 === u ? void 0 : u.fetch
								)),
								(this.fetch = (0, l.fetchWithAuth)(
									t,
									this._getAccessToken.bind(this),
									null === (y = w.global) || void 0 === y ? void 0 : y.fetch
								)),
								(this.realtime = this._initRealtimeClient(
									Object.assign({ headers: this.headers }, w.realtime)
								)),
								(this.rest = new n.PostgrestClient(`${g}/rest/v1`, {
									headers: this.headers,
									schema:
										null === (m = w.db) || void 0 === m ? void 0 : m.schema,
									fetch: this.fetch,
								})),
								this._listenForAuthEvents();
						}
						get functions() {
							return new i.FunctionsClient(this.functionsUrl, {
								headers: this.headers,
								customFetch: this.fetch,
							});
						}
						get storage() {
							return new a.StorageClient(
								this.storageUrl,
								this.headers,
								this.fetch
							);
						}
						from(e) {
							return this.rest.from(e);
						}
						rpc(e, t = {}, r) {
							return this.rest.rpc(e, t, r);
						}
						channel(e, t = { config: {} }) {
							return this.realtime.channel(e, t);
						}
						getChannels() {
							return this.realtime.getChannels();
						}
						removeChannel(e) {
							return this.realtime.removeChannel(e);
						}
						removeAllChannels() {
							return this.realtime.removeAllChannels();
						}
						_getAccessToken() {
							var e, t;
							return s(this, void 0, void 0, function* () {
								const { data: r } = yield this.auth.getSession();
								return null !==
									(t =
										null === (e = r.session) || void 0 === e
											? void 0
											: e.access_token) && void 0 !== t
									? t
									: null;
							});
						}
						_initSupabaseAuthClient(
							{
								autoRefreshToken: e,
								persistSession: t,
								detectSessionInUrl: r,
								storage: s,
								storageKey: i,
								flowType: n,
							},
							o,
							a
						) {
							const h = {
								Authorization: `Bearer ${this.supabaseKey}`,
								apikey: `${this.supabaseKey}`,
							};
							return new u.SupabaseAuthClient({
								url: this.authUrl,
								headers: Object.assign(Object.assign({}, h), o),
								storageKey: i,
								autoRefreshToken: e,
								persistSession: t,
								detectSessionInUrl: r,
								storage: s,
								flowType: n,
								fetch: a,
							});
						}
						_initRealtimeClient(e) {
							return new o.RealtimeClient(
								this.realtimeUrl,
								Object.assign(Object.assign({}, e), {
									params: Object.assign(
										{ apikey: this.supabaseKey },
										null == e ? void 0 : e.params
									),
								})
							);
						}
						_listenForAuthEvents() {
							return this.auth.onAuthStateChange((e, t) => {
								this._handleTokenChanged(
									e,
									null == t ? void 0 : t.access_token,
									"CLIENT"
								);
							});
						}
						_handleTokenChanged(e, t, r) {
							("TOKEN_REFRESHED" !== e && "SIGNED_IN" !== e) ||
							this.changedAccessToken === t
								? "SIGNED_OUT" === e &&
								  (this.realtime.setAuth(this.supabaseKey),
								  "STORAGE" == r && this.auth.signOut(),
								  (this.changedAccessToken = void 0))
								: (this.realtime.setAuth(null != t ? t : null),
								  (this.changedAccessToken = t));
						}
					};
				},
				341: function (e, t, r) {
					"use strict";
					var s =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, s) {
										void 0 === s && (s = r);
										var i = Object.getOwnPropertyDescriptor(t, r);
										(i &&
											!("get" in i
												? !t.__esModule
												: i.writable || i.configurable)) ||
											(i = {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											}),
											Object.defineProperty(e, s, i);
								  }
								: function (e, t, r, s) {
										void 0 === s && (s = r), (e[s] = t[r]);
								  }),
						i =
							(this && this.__exportStar) ||
							function (e, t) {
								for (var r in e)
									"default" === r ||
										Object.prototype.hasOwnProperty.call(t, r) ||
										s(t, e, r);
							},
						n =
							(this && this.__importDefault) ||
							function (e) {
								return e && e.__esModule ? e : { default: e };
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.createClient =
							t.SupabaseClient =
							t.FunctionsError =
							t.FunctionsRelayError =
							t.FunctionsFetchError =
							t.FunctionsHttpError =
								void 0);
					const o = n(r(296));
					i(r(165), t);
					var a = r(982);
					Object.defineProperty(t, "FunctionsHttpError", {
						enumerable: !0,
						get: function () {
							return a.FunctionsHttpError;
						},
					}),
						Object.defineProperty(t, "FunctionsFetchError", {
							enumerable: !0,
							get: function () {
								return a.FunctionsFetchError;
							},
						}),
						Object.defineProperty(t, "FunctionsRelayError", {
							enumerable: !0,
							get: function () {
								return a.FunctionsRelayError;
							},
						}),
						Object.defineProperty(t, "FunctionsError", {
							enumerable: !0,
							get: function () {
								return a.FunctionsError;
							},
						}),
						i(r(73), t);
					var h = r(296);
					Object.defineProperty(t, "SupabaseClient", {
						enumerable: !0,
						get: function () {
							return n(h).default;
						},
					}),
						(t.createClient = (e, t, r) => new o.default(e, t, r));
				},
				283: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.SupabaseAuthClient = void 0);
					const s = r(165);
					class i extends s.GoTrueClient {
						constructor(e) {
							super(e);
						}
					}
					t.SupabaseAuthClient = i;
				},
				678: (e, t, r) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.DEFAULT_HEADERS = void 0);
					const s = r(506);
					t.DEFAULT_HEADERS = { "X-Client-Info": `supabase-js/${s.version}` };
				},
				716: function (e, t, r) {
					"use strict";
					var s =
							(this && this.__createBinding) ||
							(Object.create
								? function (e, t, r, s) {
										void 0 === s && (s = r);
										var i = Object.getOwnPropertyDescriptor(t, r);
										(i &&
											!("get" in i
												? !t.__esModule
												: i.writable || i.configurable)) ||
											(i = {
												enumerable: !0,
												get: function () {
													return t[r];
												},
											}),
											Object.defineProperty(e, s, i);
								  }
								: function (e, t, r, s) {
										void 0 === s && (s = r), (e[s] = t[r]);
								  }),
						i =
							(this && this.__setModuleDefault) ||
							(Object.create
								? function (e, t) {
										Object.defineProperty(e, "default", {
											enumerable: !0,
											value: t,
										});
								  }
								: function (e, t) {
										e.default = t;
								  }),
						n =
							(this && this.__importStar) ||
							function (e) {
								if (e && e.__esModule) return e;
								var t = {};
								if (null != e)
									for (var r in e)
										"default" !== r &&
											Object.prototype.hasOwnProperty.call(e, r) &&
											s(t, e, r);
								return i(t, e), t;
							},
						o =
							(this && this.__awaiter) ||
							function (e, t, r, s) {
								return new (r || (r = Promise))(function (i, n) {
									function o(e) {
										try {
											h(s.next(e));
										} catch (e) {
											n(e);
										}
									}
									function a(e) {
										try {
											h(s.throw(e));
										} catch (e) {
											n(e);
										}
									}
									function h(e) {
										var t;
										e.done
											? i(e.value)
											: ((t = e.value),
											  t instanceof r
													? t
													: new r(function (e) {
															e(t);
													  })).then(o, a);
									}
									h((s = s.apply(e, t || [])).next());
								});
							};
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.fetchWithAuth =
							t.resolveHeadersConstructor =
							t.resolveFetch =
								void 0);
					const a = n(r(98));
					(t.resolveFetch = (e) => {
						let t;
						return (
							(t = e || ("undefined" == typeof fetch ? a.default : fetch)),
							(...e) => t(...e)
						);
					}),
						(t.resolveHeadersConstructor = () =>
							"undefined" == typeof Headers ? a.Headers : Headers),
						(t.fetchWithAuth = (e, r, s) => {
							const i = (0, t.resolveFetch)(s),
								n = (0, t.resolveHeadersConstructor)();
							return (t, s) =>
								o(void 0, void 0, void 0, function* () {
									var o;
									const a = null !== (o = yield r()) && void 0 !== o ? o : e;
									let h = new n(null == s ? void 0 : s.headers);
									return (
										h.has("apikey") || h.set("apikey", e),
										h.has("Authorization") ||
											h.set("Authorization", `Bearer ${a}`),
										i(t, Object.assign(Object.assign({}, s), { headers: h }))
									);
								});
						});
				},
				610: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.applySettingDefaults =
							t.isBrowser =
							t.stripTrailingSlash =
							t.uuid =
								void 0),
						(t.uuid = function () {
							return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
								/[xy]/g,
								function (e) {
									var t = (16 * Math.random()) | 0;
									return ("x" == e ? t : (3 & t) | 8).toString(16);
								}
							);
						}),
						(t.stripTrailingSlash = function (e) {
							return e.replace(/\/$/, "");
						}),
						(t.isBrowser = () => "undefined" != typeof window),
						(t.applySettingDefaults = function (e, t) {
							const { db: r, auth: s, realtime: i, global: n } = e,
								{ db: o, auth: a, realtime: h, global: l } = t;
							return {
								db: Object.assign(Object.assign({}, o), r),
								auth: Object.assign(Object.assign({}, a), s),
								realtime: Object.assign(Object.assign({}, h), i),
								global: Object.assign(Object.assign({}, l), n),
							};
						});
				},
				506: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", { value: !0 }),
						(t.version = void 0),
						(t.version = "2.20.0");
				},
				840: (e, t, r) => {
					var s;
					if ("object" == typeof globalThis) s = globalThis;
					else
						try {
							s = r(284);
						} catch (e) {
						} finally {
							if ((s || "undefined" == typeof window || (s = window), !s))
								throw new Error("Could not determine global this");
						}
					var i = s.WebSocket || s.MozWebSocket,
						n = r(387);
					function o(e, t) {
						return t ? new i(e, t) : new i(e);
					}
					i &&
						["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
							Object.defineProperty(o, e, {
								get: function () {
									return i[e];
								},
							});
						}),
						(e.exports = { w3cwebsocket: i ? o : null, version: n });
				},
				387: (e, t, r) => {
					e.exports = r(794).version;
				},
				794: (e) => {
					"use strict";
					e.exports = { version: "1.0.34" };
				},
			},
			s = {};
		function i(e) {
			var t = s[e];
			if (void 0 !== t) return t.exports;
			var n = (s[e] = { exports: {} });
			return r[e].call(n.exports, n, n.exports, i), n.exports;
		}
		return (
			(i.n = (e) => {
				var t = e && e.__esModule ? () => e.default : () => e;
				return i.d(t, { a: t }), t;
			}),
			(t = Object.getPrototypeOf
				? (e) => Object.getPrototypeOf(e)
				: (e) => e.__proto__),
			(i.t = function (r, s) {
				if ((1 & s && (r = this(r)), 8 & s)) return r;
				if ("object" == typeof r && r) {
					if (4 & s && r.__esModule) return r;
					if (16 & s && "function" == typeof r.then) return r;
				}
				var n = Object.create(null);
				i.r(n);
				var o = {};
				e = e || [null, t({}), t([]), t(t)];
				for (
					var a = 2 & s && r;
					"object" == typeof a && !~e.indexOf(a);
					a = t(a)
				)
					Object.getOwnPropertyNames(a).forEach((e) => (o[e] = () => r[e]));
				return (o.default = () => r), i.d(n, o), n;
			}),
			(i.d = (e, t) => {
				for (var r in t)
					i.o(t, r) &&
						!i.o(e, r) &&
						Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
			}),
			(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(i.r = (e) => {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			i(341)
		);
	})()
);


