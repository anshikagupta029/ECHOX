import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpeg";
import { IoIosEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {};

  return (
    <div className="min-h-screen w-full bg-[#080D14] text-white relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="absolute inset-0 bg-[#080D14]/80" />

      {/* Main Layout */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SECTION */}
        <section className="flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-12">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-16">
            {/* Sound Wave Mark */}
            <div className="flex items-center gap-1 h-10">
              <span className="w-0.75 h-4 rounded-full bg-[#318BFF]" />
              <span className="w-0.75 h-8 rounded-full bg-[#BDEEFF]" />
              <span className="w-0.75 h-5 rounded-full bg-[#318BFF]" />
              <span className="w-0.75 h-10 rounded-full bg-[#BDEEFF]" />
              <span className="w-0.75 h-6 rounded-full bg-[#318BFF]" />
              <span className="w-0.75 h-3 rounded-full bg-[#BDEEFF]" />
            </div>

            <h1 className="text-4xl font-bold tracking-[3px]">
              ECHO<span className="text-[#BDEEFF]">X</span>
            </h1>
          </div>

          {/* Brand Content */}
          <div className="max-w-lg">
            <p className="text-[#69B5FF] text-xs tracking-[4px] uppercase font-semibold mb-6">
              Where Voice Meets Intelligence
            </p>

            <h2 className="text-4xl sm:text-5xl xl:text-[58px] font-semibold leading-[1.18] tracking-tight">
              Listen.
              <br />
              Understand.
              <br />
              <span className="text-[#BDEEFF]">Respond.</span>
            </h2>

            <p className="text-[#8996A8] text-base leading-8 mt-7 max-w-md">
              Meet ECHOX — your intelligent voice assistant. A simpler way to
              interact with technology through natural conversations.
            </p>

            {/* Decorative Sound Wave */}
            <div className="flex items-center gap-1.25 mt-12 h-12">
              {[
                12, 22, 34, 18, 42, 28, 15, 38, 48, 24, 16, 35, 22, 12, 30, 18,
              ].map((height, index) => (
                <span
                  key={index}
                  className="w-0.75 rounded-full bg-[#318BFF]"
                  style={{
                    height: `${height}px`,
                    opacity: 0.45 + height / 100,
                  }}
                />
              ))}
            </div>
          </div>

          <p className="text-[#566477] text-xs tracking-widest uppercase mt-20">
            Intelligence that responds.
          </p>
        </section>

        {/* RIGHT SECTION */}
        <section className="flex items-center justify-center px-5 sm:px-10 py-12 lg:py-16">
          <div className="w-full max-w-107.5">
            <div className="bg-[#101722] border border-[#263647] rounded-2xl p-7 sm:p-10">
              {/* Form Heading */}
              <div className="mb-9">
                <p className="text-[#69B5FF] text-xs font-semibold tracking-[2px] uppercase mb-3">
                  Get started with ECHOX
                </p>

                <h2 className="text-3xl font-semibold">Create Account</h2>

                <p className="text-[#8996A8] text-sm mt-2">
                  Create your account to get started.
                </p>
              </div>

              {/* Signup Form */}
              <form className="flex flex-col gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm text-[#C6D0DD] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#0B111B] border border-[#263647] text-white placeholder:text-[#647286] outline-none focus:border-[#69B5FF] transition-colors"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-[#C6D0DD] mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#0B111B] border border-[#263647] text-white placeholder:text-[#647286] outline-none focus:border-[#69B5FF] transition-colors"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm text-[#C6D0DD] mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="w-full px-4 py-3.5 pr-12 rounded-lg bg-[#0B111B] border border-[#263647] text-white placeholder:text-[#647286] outline-none focus:border-[#69B5FF] transition-colors"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8996A8] hover:text-[#BDEEFF] transition"
                    >
                      {showPassword ? (
                        <IoEyeOff size={20} />
                      ) : (
                        <IoIosEye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-lg bg-[#318BFF] hover:bg-[#2378E5] text-[#07111B] font-semibold transition-colors duration-200"
                >
                  Create Account
                </button>
              </form>

              {/* Sign In Navigation */}
              <p className="text-[#8996A8] text-sm text-center mt-8">
                Already have an account?
                <span
                  onClick={() => navigate("/signin")}
                  className="text-[#BDEEFF] ml-2 cursor-pointer hover:text-white transition-colors"
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
