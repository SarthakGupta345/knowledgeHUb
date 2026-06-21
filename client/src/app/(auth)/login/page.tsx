"use client";

import React, { useState } from "react";
import { Eye, EyeOff, BookOpen, ShieldCheck, Sparkles, Globe } from "lucide-react";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen h-screen w-full bg-slate-900 flex items-center justify-center overflow-hidden font-sans">
            <div className="w-full h-full bg-white grid lg:grid-cols-12">

                {/* Left Section (Premium & Classic Editorial Design) */}
                <div className="hidden lg:flex lg:col-span-5 bg-[#0b0f19] text-slate-200 p-12 xl:p-16 flex-col justify-between h-full relative border-r border-slate-800/50">
                    {/* Subtle Premium Vignette & Grid Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

                    {/* Premium Branding */}
                    <div className="flex items-center gap-3 z-10">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-[1px]">
                            <div className="h-full w-full bg-[#0b0f19] rounded-[7px] flex items-center justify-center">
                                <BookOpen size={18} className="text-amber-400" />
                            </div>
                        </div>
                        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
                            Knowledge Hub
                        </span>
                    </div>

                    {/* Hero Editorial Typography */}
                    <div className="my-auto z-10 max-w-md space-y-12">
                        <div className="space-y-4">
                            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                                Welcome Back
                            </span>
                            <h2 className="text-4xl xl:text-5xl font-serif text-white tracking-tight leading-[1.15]">
                                Rejoin the absolute benchmark of ideas.
                            </h2>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-amber-500 to-transparent my-6" />
                            <p className="text-slate-400 text-sm xl:text-base leading-relaxed font-light">
                                Sign in to resume access to high-fidelity community discussions, verified documentation networks, and deep institutional knowledge repositories.
                            </p>
                        </div>

                        {/* Micro-Credentials Grid */}
                        <div className="grid grid-cols-1 gap-6 border-t border-slate-800/60 pt-8">
                            <div className="flex gap-4 items-start">
                                <ShieldCheck size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white tracking-wide">Secure Access</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">Your sessions are protected with multi-layered, state-of-the-art encryption algorithms.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <Sparkles size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white tracking-wide">Tailored Intelligence</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">Pick up immediately right where you left off with custom tailored tracking filters.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Premium Fine Print Footer */}
                    <div className="z-10 flex items-center justify-between text-[11px] tracking-wider text-slate-500 border-t border-slate-900 pt-6">
                        <span>© 2026 KNOWLEDGE HUB INC.</span>
                        <span>ALL RIGHTS RESERVED</span>
                    </div>
                </div>

                {/* Right Section (Form) - Focused, Clean Form Layout */}
                <div className="col-span-12 lg:col-span-7 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-white overflow-y-auto h-full">
                    <div className="w-full max-w-sm mx-auto space-y-8">

                        {/* Mobile Branding (Only visible when Left Section is hidden) */}
                        <div className="flex flex-col items-center gap-2 lg:hidden mb-2 text-center">
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-600">
                                Knowledge Hub
                            </span>
                        </div>

                        <div className="text-center lg:text-left space-y-2">
                            <h2 className="text-3xl font-serif text-slate-900 tracking-tight">
                                Welcome Back!
                            </h2>
                            <p className="text-slate-400 text-sm font-light">
                                Enter your authorized credentials to request platform entry.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-500">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="name@institution.com"
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none transition font-light text-slate-800 placeholder-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500">
                                        Password
                                    </label>
                                    <a href="#" className="text-[11px] text-slate-400 hover:text-slate-900 transition font-medium">
                                        Forgot Key?
                                    </a>
                                </div>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••••"
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none transition font-light text-slate-800 placeholder-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-[#0b0f19] hover:bg-slate-800 text-white py-3.5 rounded-lg font-medium tracking-wide text-md transition-all duration-200 shadow-md active:scale-[0.99]"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="text-center text-xs text-slate-400 tracking-wide">
                            New to the ecosystem?{" "}
                            <a
                                href="/signup"
                                className="text-slate-900 font-semibold hover:underline transition ml-1"
                            >
                                Signup
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;