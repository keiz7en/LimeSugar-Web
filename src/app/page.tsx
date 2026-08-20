import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(215,163,90,0.08)_0%,_transparent_70%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[150px] animate-pulse-glow" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Logo - Manim Animation */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <video
              src="/logo-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain animate-float"
            />
          </div>
          
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent animate-float">
            LimeSugar
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-text-dim max-w-2xl mx-auto font-medium">
            Premium Anime, Drama & Hollywood Streaming
          </p>
          
          {/* Download Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
            <Link 
              href="https://github.com/keiz7en/LimeSugar/releases/download/v0.2.4-beta/app-release.apk"
              className="btn-gold group flex items-center justify-center gap-3 px-8 py-4 min-w-[220px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18h12v2H6zm5-14l-5 5h3v9h4V9h3l-5-5zm7 14H6v2h12z"/>
              </svg>
              <span className="text-lg font-semibold">Download for Android</span>
              <span className="text-sm opacity-80">67.9 MB · APK</span>
            </Link>
            
            <Link 
              href="https://github.com/keiz7en/LimeSugar/releases/tag/v0.2.4-beta"
              className="btn-outline group flex items-center justify-center gap-3 px-8 py-4 min-w-[220px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 13V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V3h14v10h-2zm-4 2h-2v-2h-2v2H9v-2H7v2H5c-1.1 0-2 .9-2 2v4h14v-4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span className="text-lg font-semibold">Download for Windows</span>
              <span className="text-sm opacity-80">33.8 MB · ZIP</span>
            </Link>
            
            <Link 
              href="https://github.com/keiz7en/LimeSugar/releases/tag/v0.2.4-beta"
              className="btn-outline group flex items-center justify-center gap-3 px-8 py-4 min-w-[220px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z"/>
              </svg>
              <span className="text-lg font-semibold">All Downloads</span>
              <span className="text-sm opacity-80">APK · ZIP</span>
            </Link>
          </div>

          {/* APK variants */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {[
               { n: "universal", s: "67.9 MB", h: "https://github.com/keiz7en/LimeSugar/releases/download/v0.2.4-beta/app-release.apk" },
               { n: "arm64-v8a", s: "67.9 MB", h: "https://github.com/keiz7en/LimeSugar/releases/download/v0.2.4-beta/app-release.apk" },
               { n: "armeabi-v7a", s: "67.9 MB", h: "https://github.com/keiz7en/LimeSugar/releases/download/v0.2.4-beta/app-release.apk" },
               { n: "x86_64 · emulator", s: "67.9 MB", h: "https://github.com/keiz7en/LimeSugar/releases/download/v0.2.4-beta/app-release.apk" },
               { n: "Windows", s: "33.8 MB", h: "https://github.com/keiz7en/LimeSugar/releases/tag/v0.2.4-beta" },
             ].map((v, i) => (
              <a key={i} href={v.h} target="_blank" rel="noopener noreferrer"
                 className="text-xs px-3 py-1.5 glass rounded-full text-text-dim hover:text-gold transition-colors">
                {v.n} · {v.s}
              </a>
            ))}
          </div>
          
          {/* Version badge */}
          <div className="mt-10 inline-flex items-center gap-3 px-4 py-2 glass rounded-lg">
            <span className="text-sm text-text-dim">Latest Release</span>
               <span className="px-3 py-1 text-sm font-semibold gold-gradient-text">v0.2.4-beta</span>
                <span className="text-xs text-text-dim">Beta build · Aug 2026</span>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-dim/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-surface/50 border-y border-line-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 gold-gradient-text">
            Built for Streaming
          </h2>
          <p className="text-lg text-text-dim text-center max-w-2xl mx-auto mb-16">
            Every feature designed for the best streaming experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎬", title: "Three Content Modes", desc: "Switch instantly between Anime, Drama, and Hollywood with dedicated tabs and sorting." },
              { icon: "🔍", title: "Smart Discovery", desc: "Ongoing badges, year-based sorting (2026→2025), quick search per content type." },
              { icon: "🎮", title: "Universal Player", desc: "MediaKit powered HLS/DASH/MP4 playback with 8MB buffer, 30s timeout, auto-retry." },
              { icon: "🔄", title: "Multi-Server Fallback", desc: "Auto-cycles through CDNs, per-server Referer headers, external player option." },
              { icon: "⏯️", title: "Resume Playback", desc: "Auto-saves progress every 5s, resume dialog on reopen, episode navigation." },
              { icon: "🌙", title: "Nipah Dark Theme", desc: "Custom dark palette with gold accent, smooth animations, shimmer loading." },
              { icon: "📱", title: "Cross-Platform", desc: "Android, Windows, Linux native apps. iOS, macOS, Web coming soon." },
              { icon: "🔒", title: "Privacy First", desc: "No tracking, no ads, local-only data, zero hardcoded API keys." },
               { icon: "⚡", title: "Fast & Light", desc: "77MB install, instant startup, shimmer placeholders, pull-to-refresh." },
               { icon: "👥", title: "Characters & Voice Actors", desc: "Browse every character with photos, roles, and their Japanese voice actors." },
               { icon: "🔗", title: "AniList Integration", desc: "Sync your library, archive finished titles, and see your latest AniList activity." },
               { icon: "🏷️", title: "Smart Genre Search", desc: "Multi-select genres to find exactly the anime you want across the catalog." },
               { icon: "✨", title: "SSR Highlights", desc: "Freshly aired episodes glow with an animated gold shine so you never miss a drop." },
             ].map((feature, i) => (
              <div key={i} className="card-hover glass p-6 rounded-xl group">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${i * 100}ms` }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-text group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-dim leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 gold-gradient-text">
            App Preview
          </h2>
          <p className="text-lg text-text-dim text-center max-w-2xl mx-auto mb-16">
            Same beautiful UI across all platforms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/screenshot1.jpg", alt: "Home (Anime)", title: "Home — Anime", desc: "Airing schedule, top rated, latest episodes" },
              { src: "/screenshot2.jpg", alt: "Player (Drama)", title: "Player — Drama", desc: "Multi-server, resume, quality selection" },
              { src: "/screenshot3.jpg", alt: "Library (Hollywood)", title: "Library — Hollywood", desc: "New releases, popular, airing now" },
            ].map((shot, i) => (
              <div key={i} className="card-hover glass rounded-xl overflow-hidden group">
                <div className="aspect-video bg-surface-2 relative overflow-hidden">
                  <img 
                    src={shot.src} 
                    alt={shot.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{shot.title}</h3>
                  <p className="text-text-dim text-sm">{shot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-24 px-6 bg-surface/50 border-y border-line-soft">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gold-gradient-text">
            Available Everywhere
          </h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto mb-16">
            Native apps for every platform, same beautiful experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🤖", name: "Android", status: "Ready", color: "text-green-400" },
              { icon: "🪟", name: "Windows", status: "Ready", color: "text-blue-400" },
              { icon: "🐧", name: "Linux", status: "Soon", color: "text-text-dim" },
              { icon: "🍎", name: "iOS", status: "Soon", color: "text-text-dim" },
              { icon: "💻", name: "macOS", status: "Soon", color: "text-text-dim" },
              { icon: "🌐", name: "Web", status: "Soon", color: "text-text-dim" },
            ].map((p, i) => (
              <div key={i} className={`glass p-5 rounded-xl card-hover text-center ${p.status !== "Ready" ? 'opacity-60' : ''}`}>
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <span className={`text-sm font-medium ${p.color}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-surface/50 to-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gold-gradient-text">
            Ready to Stream?
          </h2>
          <p className="text-lg text-text-dim mb-10 max-w-xl mx-auto">
            Join thousands of streamers. No ads, no tracking, just pure content.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://github.com/keiz7en/LimeSugar/releases/download/v0.2.4-beta/app-release.apk"
              className="btn-gold px-10 py-4 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Free
            </Link>
            <Link 
              href="https://github.com/keiz7en/LimeSugar/releases"
              className="btn-outline px-10 py-4 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Releases
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-line-soft bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gold-gradient mb-4">
                <svg className="w-6 h-6 text-bg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">LimeSugar</h3>
              <p className="text-text-dim text-sm leading-relaxed">
                Premium streaming app for anime, drama & Hollywood. Built with Flutter & MediaKit.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-text-dim">
                <li><a href="https://github.com/keiz7en/LimeSugar/releases" className="hover:text-gold transition-colors" target="_blank" rel="noopener">Downloads</a></li>
                <li><a href="https://github.com/keiz7en/LimeSugar" className="hover:text-gold transition-colors" target="_blank" rel="noopener">GitHub</a></li>
                <li><a href="/license" className="hover:text-gold transition-colors">License</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platforms</h4>
              <ul className="space-y-2 text-sm text-text-dim">
                <li>Android 5.0+</li>
                <li>Windows 10/11</li>
                <li>Linux / iOS / macOS / Web — Soon</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-text-dim">
                <li><a href="/license" className="hover:text-gold transition-colors">EULA</a></li>
                <li><a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li>No tracking • No ads</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-line-soft flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-dim">
              © 2026 LimeSugar. All rights reserved.
            </p>
            <p className="text-sm text-text-dim">
              Not affiliated with any streaming service. Third-party content accessed via public links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}