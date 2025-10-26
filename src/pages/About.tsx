import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Shield, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary">About Yavuli</h1>
            <p className="text-xl text-muted-foreground">
              The Student Marketplace — Where Ideas, Skills, and Things Find New Homes
            </p>
          </div>

          <Card className="p-8 space-y-6 animate-fade-up">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Yavuli was born from a simple observation: college students have unique needs and limited budgets. 
              We created a trusted marketplace exclusively for the student community in India, where you can buy, 
              sell, or exchange items and services with verified peers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform ensures safety through college email verification, making every transaction trustworthy. 
              Whether you're looking for textbooks, electronics, furniture, or services, Yavuli connects you with 
              fellow students who understand your needs.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Verified & Safe</h3>
              <p className="text-muted-foreground">
                Every user is verified through their college email. Trade with confidence knowing 
                you're dealing with real students.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Student Community</h3>
              <p className="text-muted-foreground">
                Built by students, for students. Connect with peers from colleges across India 
                and build your own circle of value.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Easy Trading</h3>
              <p className="text-muted-foreground">
                Simple, intuitive interface makes buying and selling effortless. List items in 
                minutes and start trading immediately.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Smart Pricing</h3>
              <p className="text-muted-foreground">
                Get the best deals from motivated student sellers. Find quality items at 
                prices that fit your budget.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-hero text-white text-center space-y-4 animate-fade-up">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              "Buy what you need. Sell what you don't. Build your own circle of value."
            </p>
            <p className="text-white/80">
              Empowering students to make smarter choices while building a sustainable, 
              trusted community marketplace.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
