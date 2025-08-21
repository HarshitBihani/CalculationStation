import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, Star, Zap, BookOpen, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-calcstation.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30" variant="outline">
              🚀 The Future of Collaborative Calculation
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build, Share & 
              <span className="block text-gradient bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                Calculate Together
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the largest community of students and educators creating custom calculators. 
              From algebra to engineering, build tools that make complex calculations simple.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-glow">
                <Link to="/library">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Calculators
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/builder">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Building
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                <span className="text-sm">1,200+ Calculators</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">15,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span className="text-sm">4.9 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose CalcStation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, discover, and master calculations in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-primary transition-all duration-300 border-border/50">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Easy Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Create custom calculators with our intuitive drag-and-drop builder. 
                  No coding required - just pure mathematical creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-primary transition-all duration-300 border-border/50">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Learn from thousands of calculators shared by students worldwide. 
                  Rate, save, and contribute to the growing knowledge base.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-primary transition-all duration-300 border-border/50">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Track Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Monitor your learning journey with detailed analytics. 
                  See which calculators help you most and track your contributions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
            <p className="text-xl text-muted-foreground">
              Discover calculators across all academic disciplines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Algebra", count: "240+", color: "bg-blue-500" },
              { name: "Finance", count: "180+", color: "bg-green-500" },
              { name: "Physics", count: "160+", color: "bg-purple-500" },
              { name: "Statistics", count: "120+", color: "bg-orange-500" },
              { name: "Chemistry", count: "90+", color: "bg-red-500" },
              { name: "Geometry", count: "85+", color: "bg-teal-500" },
            ].map((category) => (
              <Card key={category.name} className="shadow-card hover:shadow-primary transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`h-12 w-12 mx-auto ${category.color} rounded-full flex items-center justify-center mb-3`}>
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Creating?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of students who are already building and sharing calculators. 
            Your next breakthrough calculation is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/builder">
                <Zap className="mr-2 h-5 w-5" />
                Create Your First Calculator
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/library">
                Browse Library
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Calculator className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg text-gradient">CalcStation</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 CalcStation. Built for students, by students.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;