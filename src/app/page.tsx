import Link from 'next/link'
import CryptoTicker from '@/components/CryptoTicker'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center px-4 py-16 md:px-8 lg:px-12 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,transparent_65%)]"></div>

        <div className="relative max-w-5xl mx-auto py-8 md:py-16 lg:py-20">
          <div className="animate-fade-in-up space-y-6 md:space-y-10">
            {/* Overline text */}
            <p className="text-gold/70 uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm font-medium">
              Welcome to the Future of Finance
            </p>

            {/* Main heading with animated background */}
            <div className="relative my-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-gold relative z-10 leading-tight">
                Wealth<br />Academy
              </h1>
              <div className="absolute -inset-x-20 top-1/2 h-2 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-sm transform -translate-y-1/2"></div>
            </div>

            {/* Subheading with gradient text */}
            <h2 className="text-2xl md:text-4xl font-light mb-4 md:mb-8 bg-gradient-to-r from-gold-light/80 via-gold/80 to-gold-dark/80 bg-clip-text text-transparent max-w-3xl mx-auto leading-relaxed">
              Learn How To Create Generational Wealth In Six Simple Steps
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-2">
              Join thousands of successful students who have transformed their financial future through our proven methodology
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="https://t.me/+9Jq-Eb18NuQ1MDI8"
                className="group relative inline-flex items-center px-8 md:px-12 py-4 md:py-5 overflow-hidden text-base md:text-lg font-bold text-dark-darker transition-all duration-300 bg-gradient-to-r from-gold-light to-gold-dark rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
              >
                Join Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={'https://t.me/+9Jq-Eb18NuQ1MDI8'} className="text-gold border border-gold/30 rounded-full px-6 md:px-8 py-4 md:py-5 hover:bg-gold/10 transition-all duration-300 text-base md:text-lg w-full sm:w-auto">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 mt-12 md:mt-20 border-t border-gold/10 pt-8 md:pt-12">
              {[
                { number: "10K+", label: "Active Students" },
                { number: "95%", label: "Success Rate" },
                { number: "24/7", label: "Expert Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Crypto Ticker */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10"></div>
        <CryptoTicker />
      </div>

      {/* Features */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-dark-light/20 to-[#0A0A0A]"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-gold">
            Stop Living Paycheck to Paycheck
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "💰",
                title: "Financial Freedom",
                description: "Break free from the 9-5 cycle and build lasting wealth"
              },
              {
                icon: "🎯",
                title: "Strategic Planning",
                description: "Learn proven strategies for sustainable wealth creation"
              },
              {
                icon: "🚀",
                title: "Exponential Growth",
                description: "Accelerate your journey to financial independence"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-dark-light/30 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-300">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Course Modules */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-dark-light/20 to-[#0A0A0A]"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-gold">
            Your Path to Financial Success
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Foundation Building",
                description: "Master the fundamentals of wealth creation and financial literacy"
              },
              {
                number: "02",
                title: "Investment Strategies",
                description: "Learn proven investment techniques for sustainable growth"
              },
              {
                number: "03",
                title: "Risk Management",
                description: "Develop skills to protect and grow your wealth safely"
              },
              {
                number: "04",
                title: "Advanced Techniques",
                description: "Access advanced strategies used by financial experts"
              }
            ].map((module, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-dark-light/20 border border-gold/10 hover:border-gold/30 transition-all duration-300">
                <div className="text-6xl font-bold text-gold/20 mb-4">{module.number}</div>
                <h3 className="text-2xl font-bold mb-3 text-gold">{module.title}</h3>
                <p className="text-gray-400">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-dark-light/5">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold">Why Choose Wealth Academy</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Our comprehensive approach combines expert knowledge with practical application</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Expert Instructors",
                points: ["Industry veterans", "Proven track record", "Personal mentorship"]
              },
              {
                icon: "📊",
                title: "Data-Driven Methods",
                points: ["Real-world case studies", "Market analysis", "Performance tracking"]
              },
              {
                icon: "🌟",
                title: "Lifetime Access",
                points: ["Regular updates", "Community support", "Exclusive resources"]
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-dark-light/10 backdrop-blur-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gold">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="text-gray-400">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-center opacity-5"></div>
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-gold">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                story: "Doubled my business revenue in just 6 months using the strategies learned",
                image: "/image.png"
              },
              {
                name: "Michael Chen",
                role: "Tech Professional",
                story: "Built a diversified investment portfolio that generates passive income",
                image: "/image.png"
              },
              {
                name: "Emma Davis",
                role: "Freelancer",
                story: "Achieved financial independence through smart investment decisions",
                image: "/image.png"
              }
            ].map((story, index) => (
              <div key={index} className="group relative p-6 rounded-2xl bg-dark-light/20 border border-gold/10 hover:border-gold/30 transition-all duration-300">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover mx-auto"
                />
                <h3 className="text-xl font-bold mb-2 text-gold">{story.name}</h3>
                <p className="text-sm text-gold/70 mb-4">{story.role}</p>
                <p className="text-gray-400 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section continues... */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-dark-light/20 to-[#0A0A0A]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-gold">
                Transform Your Financial Future
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our comprehensive program is designed to give you the tools, knowledge, and confidence needed to build lasting wealth. With expert guidance and proven strategies, you'll learn to navigate the complex world of finance and investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-gold-light to-gold-dark"></div>
                  <span className="text-gold">Expert Mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-gold-light to-gold-dark"></div>
                  <span className="text-gold">Proven Results</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-light/20 to-gold-dark/20 rounded-2xl blur-2xl group-hover:opacity-75 transition duration-500 opacity-50"></div>
              <img
                src="/image.png"
                alt="Financial Success Vision"
                className="relative rounded-2xl w-full object-cover shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
      <Stats />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-light/50"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-center opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-gold">
            Limited Time Offer - Don't Miss Out!
          </h2>
          <p className="text-2xl mb-12 text-gray-300">
            Join now and save 90% on your enrollment
          </p>
          <Link
            href="https://t.me/+9Jq-Eb18NuQ1MDI8"
            className="group relative inline-flex items-center px-12 py-5 overflow-hidden text-lg font-bold text-dark-darker transition duration-300 ease-out bg-gradient-to-r from-gold-light to-gold-dark rounded-full hover:scale-105"
          >
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gold/80 mb-4 md:mb-0">
              © 2025 Wealth Academy. All rights reserved.
            </div>
            <div className="flex gap-8">
              <Link href="https://t.me/+9Jq-Eb18NuQ1MDI8" className="text-gold/80 hover:text-gold transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107L9.65 13.95l-2.66-.83c-.58-.183-.594-.582.12-.86l10.705-4.12c.48-.176.905.114.74.818z" /></svg>
                Join on Telegram
              </Link>

            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
