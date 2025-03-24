import { Shield, Video, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
              <span className="text-sm font-medium">New: Advanced DRM Protection</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Videos</span> Like Never Before
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-xl mx-auto lg:mx-0">
              Secure your video content with military-grade encryption and advanced access controls that keep your intellectual property safe.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2" />
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-blue-400 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 border-t border-blue-800 pt-6 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-400 mr-2" />
                  <p className="text-sm text-blue-200">Trusted by 15,000+ creators</p>
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border-2 border-indigo-900 bg-gradient-to-br from-blue-${300 + i*100} to-purple-${400 + i*100}`}></div>
                    ))}
                  </div>
                  <div className="text-xs text-blue-200">⭐ 4.9/5 rating</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Video Preview */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md">
              {/* Video Placeholder */}
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-800 to-indigo-800 p-1">
                <div className="h-full w-full rounded-lg overflow-hidden relative bg-black/80 backdrop-blur flex items-center justify-center">
                  <Video className="w-16 h-16 text-blue-400 opacity-80" />
                  
                  {/* Security Elements */}
                  <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
                    <Shield className="w-3 h-3 text-green-400 mr-1" />
                    <span className="text-xs text-white/90">Encrypted</span>
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Features */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-xl p-4 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-md">
                    <Shield className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Military-grade Encryption</h3>
                    <p className="text-xs text-blue-200 mt-1">AES-256 encryption keeps your content secure</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -right-8 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}