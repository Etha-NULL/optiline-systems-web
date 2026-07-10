import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LOGO_URL = '/manus-storage/optiline_v8_refined_dark_6588f1b7.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-8 py-20">
        {/* Logo */}
        <div className="animate-fade-in-up">
          <img
            src={LOGO_URL}
            alt="OptiLine Systems"
            className="h-32 w-auto mx-auto drop-shadow-lg"
          />
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            High-Performance
            <span className="block text-accent">IT Systems</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70">
            Engineered for speed, built for reliability. OptiLine Systems delivers cutting-edge infrastructure and optimization solutions that keep your business running at peak performance.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
          >
            <a href="#services">Learn More</a>
          </Button>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-3 gap-8 pt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">99.9%</div>
            <div className="text-sm text-foreground/60 mt-2">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
            <div className="text-sm text-foreground/60 mt-2">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
            <div className="text-sm text-foreground/60 mt-2">Years</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
