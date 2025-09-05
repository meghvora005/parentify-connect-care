import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, MessageCircle, Stethoscope, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-button">
              <Heart className="w-8 h-8 text-primary-foreground" fill="currentColor" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Parentified
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Parenting <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Community Awaits
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect with fellow parents, get expert advice, and find the support you need 
            for every milestone in your parenting journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-hover shadow-button transition-smooth px-8 py-6 text-lg"
              >
                Join the Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/10 transition-smooth"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Everything you need as a parent</h3>
          <p className="text-muted-foreground text-lg">
            From community support to professional guidance, we've got your back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center shadow-card border-0 hover:shadow-soft transition-smooth">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-xl">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Connect with thousands of parents sharing similar experiences and challenges.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card border-0 hover:shadow-soft transition-smooth">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Share & Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Share tips, ask questions, and learn from experienced parents in real-time.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card border-0 hover:shadow-soft transition-smooth">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">Expert Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Get professional guidance from certified pediatricians and child specialists.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card border-0 hover:shadow-soft transition-smooth">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-xl">Mental Wellness</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Access mental health support and resources designed specifically for parents.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Active Parents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Expert Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Community Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to join our community?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Start connecting with parents who understand your journey.
          </p>
          <Link to="/login">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-hover shadow-button transition-smooth px-8 py-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
