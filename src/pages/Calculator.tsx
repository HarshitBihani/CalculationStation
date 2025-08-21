import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Heart, Share2, Calculator as CalcIcon, Bookmark } from "lucide-react";

// Mock calculator data - in a real app this would come from a database
const mockCalculators = {
  "1": {
    id: "1",
    title: "Quadratic Formula Solver",
    description: "Solve quadratic equations of the form ax² + bx + c = 0 using the quadratic formula. Get both real and complex solutions with step-by-step explanations.",
    creator: "MathPro101",
    category: "Algebra",
    rating: 4.8,
    uses: 12540,
    inputs: [
      { name: "a", label: "Coefficient a", type: "number" },
      { name: "b", label: "Coefficient b", type: "number" },
      { name: "c", label: "Coefficient c", type: "number" }
    ]
  }
};

const Calculator = () => {
  const { id } = useParams<{ id: string }>();
  const calculator = mockCalculators[id as keyof typeof mockCalculators];
  
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string>("");
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!calculator) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-16 text-center">
          <CalcIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Calculator Not Found</h1>
          <p className="text-muted-foreground">The calculator you're looking for doesn't exist.</p>
        </main>
      </div>
    );
  }

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const calculate = () => {
    // Mock calculation for quadratic formula
    if (calculator.id === "1") {
      const a = parseFloat(inputs.a || "0");
      const b = parseFloat(inputs.b || "0");
      const c = parseFloat(inputs.c || "0");
      
      if (a === 0) {
        setResult("Not a quadratic equation (a cannot be 0)");
        return;
      }
      
      const discriminant = b * b - 4 * a * c;
      
      if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        setResult(`Two real solutions: x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`);
      } else if (discriminant === 0) {
        const x = -b / (2 * a);
        setResult(`One real solution: x = ${x.toFixed(4)}`);
      } else {
        const realPart = (-b / (2 * a)).toFixed(4);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
        setResult(`Two complex solutions: x = ${realPart} ± ${imagPart}i`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Calculator Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary">{calculator.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{calculator.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({calculator.uses.toLocaleString()} uses)
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">{calculator.title}</h1>
                <p className="text-muted-foreground max-w-2xl">{calculator.description}</p>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500 border-red-200" : ""}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-red-500" : ""}`} />
                  Like
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSaved(!isSaved)}
                  className={isSaved ? "text-primary border-primary/20" : ""}
                >
                  <Bookmark className={`h-4 w-4 mr-1 ${isSaved ? "fill-primary" : ""}`} />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
            
            {/* Creator Info */}
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt={calculator.creator} />
                <AvatarFallback>{calculator.creator.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">
                Created by <span className="font-medium text-foreground">{calculator.creator}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Interface */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalcIcon className="h-5 w-5" />
                  Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {calculator.inputs.map((input) => (
                  <div key={input.name}>
                    <Label htmlFor={input.name}>{input.label}</Label>
                    <Input
                      id={input.name}
                      type={input.type}
                      value={inputs[input.name] || ""}
                      onChange={(e) => handleInputChange(input.name, e.target.value)}
                      placeholder={`Enter ${input.label.toLowerCase()}...`}
                    />
                  </div>
                ))}
                
                <Button 
                  onClick={calculate} 
                  className="w-full bg-gradient-primary text-primary-foreground"
                  size="lg"
                >
                  Calculate
                </Button>
                
                {result && (
                  <Card className="p-4 bg-accent/50 border-primary/20">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Result</div>
                      <div className="text-lg font-semibold text-primary">{result}</div>
                    </div>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Information Panel */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>How it works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p>The quadratic formula is used to solve equations of the form:</p>
                    <div className="bg-accent/50 p-3 rounded font-mono text-center">
                      ax² + bx + c = 0
                    </div>
                    <p>The formula calculates the roots using:</p>
                    <div className="bg-accent/50 p-3 rounded font-mono text-center">
                      x = (-b ± √(b² - 4ac)) / 2a
                    </div>
                    <p>The discriminant (b² - 4ac) determines the nature of the solutions:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Positive: Two real solutions</li>
                      <li>Zero: One real solution</li>
                      <li>Negative: Two complex solutions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <p className="font-medium">Solve: 2x² - 5x + 2 = 0</p>
                    <div className="text-muted-foreground">
                      <p>a = 2, b = -5, c = 2</p>
                      <p>x = (5 ± √(25 - 16)) / 4</p>
                      <p>x = (5 ± 3) / 4</p>
                      <p className="font-medium text-foreground">x = 2 or x = 0.5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calculator;