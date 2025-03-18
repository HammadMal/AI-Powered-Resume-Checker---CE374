import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { AnimatedBackground } from 'animated-backgrounds';

const Login = () => {
    const navigate = useNavigate();
    const ref = useRef(null);

    const handleSignIn = () => {
      ref.current.continuousStart();
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        if (progress >= 90) {
          clearInterval(interval);
          ref.current.complete();
          setTimeout(() => {
            navigate("/homepage");
          }, 200);
        } else {
          ref.current.static(progress);
        }
      }, 100);
    };

    const handleRegisterClick = () => {
      ref.current.continuousStart();
      setTimeout(() => {
        ref.current.complete();
        navigate("/signup");
      }, 1000);
    };

    const handleForgotPassword = () => {
      ref.current.continuousStart();
      setTimeout(() => {
        ref.current.complete();
        navigate("/forgotpassword");
      }, 800);
    };

    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Loading Bar */}
        <LoadingBar color="#4f46e5" ref={ref} height={3} />
        
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground 
            animationName="auroraBorealis" 
            blendMode="normal" 
            style={{ opacity: 1 }} 
          />
        </div>

        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue-900/50 z-1"></div>
        
        {/* Header/Navigation */}
        <header className="relative z-10 py-4 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-white font-bold text-xl">ResumeAI</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Sign In</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      id="remember-me" 
                      name="remember-me" 
                      type="checkbox" 
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                      Remember me
                    </label>
                  </div>
                  
                  <button 
                    type="button" 
                    onClick={handleForgotPassword}
                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Forgot password?
                  </button>
                </div>
                
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl transition-all duration-300 font-medium shadow-lg"
                >
                  Sign In
                </button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/0"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-white/60">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                      <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" data-original="#fbbd00" />
                      <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" data-original="#0f9d58" />
                      <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" data-original="#31aa52" />
                      <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" data-original="#3c79e6" />
                      <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" data-original="#cf2d48" />
                      <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" data-original="#eb4132" />
                    </svg>
                    Sign in with Google
                  </button>
                </div>
              </div>
              
              <p className="mt-6 text-center text-sm text-white/70">
                Don't have an account?{" "}
                <button
                  onClick={handleRegisterClick}
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;