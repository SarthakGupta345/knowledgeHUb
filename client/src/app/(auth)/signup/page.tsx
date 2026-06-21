"use client"

import React, { useState } from "react";
import { Eye, EyeOff, BookOpen, ShieldCheck, Sparkles, Globe } from "lucide-react";
import { useSignup } from "@/hooks/useUsers";
import toast from "react-hot-toast";

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { mutate: register, isPending: isPendingRegister } = useSignup();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await register(formData);
            console.log(response);
            toast.success("Account Created successfully");
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message);
            }
            toast.error("Something went wrong");
        }
    }

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
                                Est. 2026 / Members Only
                            </span>
                            <h2 className="text-4xl xl:text-5xl font-serif text-white tracking-tight leading-[1.15]">
                                The premier collective for global minds.
                            </h2>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-amber-500 to-transparent my-6" />
                            <p className="text-slate-400 text-sm xl:text-base leading-relaxed font-light">
                                Welcome to a refined ecosystem dedicated to intellectual growth, peer-verified knowledge sharing, and professional elevation.
                            </p>
                        </div>

                        {/* Micro-Credentials Grid */}
                        <div className="grid grid-cols-1 gap-6 border-t border-slate-800/60 pt-8">
                            <div className="flex gap-4 items-start">
                                <ShieldCheck size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white tracking-wide">Verified Expertise Only</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">Engage in high-fidelity discussions backed by absolute credibility.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <Sparkles size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white tracking-wide">Curated Insights</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">Filter out the noise. Access tailored, high-value technical literature.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <Globe size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white tracking-wide">A Global Syndicate</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">Connect with industry pioneers, researchers, and engineers worldwide.</p>
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
                                Begin Your Journey
                            </h2>
                            <p className="text-slate-400 text-sm font-light">
                                Provide your credentials to request full system access.
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => handleSignup(e)}
                            className="space-y-5" >
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-500">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Alexander Wright"
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none transition font-light text-slate-800 placeholder-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-500">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="name@institution.com"
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none transition font-light text-slate-800 placeholder-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-500">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                                    disabled={isPendingRegister}
                                    className="w-full bg-[#0b0f19] hover:bg-slate-800 text-white py-3.5 rounded-lg font-medium tracking-wide text-sm transition-all duration-200 shadow-md active:scale-[0.99]"
                                >
                                    {isPendingRegister ? "Creating Account..." : "Create Secure Account"}
                                </button>
                            </div>
                        </form>

                        <p className="text-center text-xs text-slate-400 tracking-wide">
                            Already verified?{" "}
                            <a
                                href="/login"
                                className="text-slate-900 font-semibold hover:underline transition ml-1"
                            >
                                Sign In
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignupPage;