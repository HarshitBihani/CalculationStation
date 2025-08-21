import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Play, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const mockCalculators = [
  {
    id: "1",
    title: "Quadratic Formula Solver",
    description: "Solve quadratic equations step by step with detailed explanations",
    creator: "MathPro101",
    category: "Algebra",
    rating: 4.8,
    uses: 12540,
  },
  {
    id: "2", 
    title: "Compound Interest Calculator",
    description: "Calculate compound interest for investments and savings",
    creator: "FinanceGuru",
    category: "Finance",
    rating: 4.9,
    uses: 8932,
  },
  {
    id: "3",
    title: "Unit Converter Pro",
    description: "Convert between various units of measurement",
    creator: "PhysicsHelper",
    category: "Physics",
    rating: 4.7,
    uses: 15620,
  },
  {
    id: "4",
    title: "Statistical Analysis Tool",
    description: "Perform basic statistical calculations and analysis",
    creator: "DataScientist",
    category: "Statistics",
    rating: 4.6,
    uses: 7832,
  }
];

const categories = ["All", "Algebra", "Finance", "Physics", "Statistics", "Geometry", "Chemistry"];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Calculator Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and use calculators created by our community of students and educators
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search calculators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCalculators.map((calc) => (
            <Card key={calc.id} className="shadow-card hover:shadow-primary transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{calc.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{calc.rating}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{calc.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {calc.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-muted-foreground">
                    By {calc.creator}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Play className="h-3 w-3" />
                    {calc.uses.toLocaleString()} uses
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button asChild className="flex-1" size="sm">
                    <Link to={`/calculator/${calc.id}`}>
                      <Play className="h-4 w-4 mr-2" />
                      Use Calculator
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Calculators
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Library;