import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingBag, TrendingUp } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-10 h-8 w-8 text-teal/20 animate-float" />
        <ShoppingBag className="absolute top-40 right-20 h-12 w-12 text-accent/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <TrendingUp className="absolute bottom-32 left-1/4 h-10 w-10 text-neon/20 animate-float" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-20 right-1/3 h-6 w-6 text-teal/20 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-up relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow">
            <span className="text-3xl font-bold text-white">Y</span>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary animate-fade-in">
            Welcome to Yavuli
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            The Student Marketplace — Where Ideas, Skills, and Things Find New Homes.
          </p>
        </div>

        {/* Quote */}
        <blockquote className="border-l-4 border-accent pl-4 py-2 text-left max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-foreground/80 italic">
            "Buy what you need. Sell what you don't. Build your own circle of value."
          </p>
        </blockquote>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link to="/explore">
            <Button 
              size="lg" 
              className="bg-gradient-hero text-white hover:shadow-glow transition-all w-full sm:w-auto"
            >
              Explore Marketplace
            </Button>
          </Link>
          <Link to="/login">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-white transition-all w-full sm:w-auto"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto hover:bg-muted"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors">
            <ShoppingBag className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Buy & Sell</h3>
            <p className="text-xs text-muted-foreground mt-1">Find great deals from verified students</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors">
            <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Verified Only</h3>
            <p className="text-xs text-muted-foreground mt-1">College email verification for safety</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors">
            <Sparkles className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="font-semibold text-sm">Student-First</h3>
            <p className="text-xs text-muted-foreground mt-1">Built for the student community</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground">
        Connecting Students, Empowering Trades.
      </p>
    </div>
  );
};

export default Welcome;
