import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Save, Eye } from "lucide-react";

const Builder = () => {
  const [calculatorName, setCalculatorName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [inputs, setInputs] = useState([
    { id: 1, name: "", label: "", type: "number", required: true }
  ]);
  const [formula, setFormula] = useState("");

  const addInput = () => {
    const newId = Math.max(...inputs.map(i => i.id)) + 1;
    setInputs([...inputs, { id: newId, name: "", label: "", type: "number", required: true }]);
  };

  const removeInput = (id: number) => {
    if (inputs.length > 1) {
      setInputs(inputs.filter(input => input.id !== id));
    }
  };

  const updateInput = (id: number, field: string, value: string | boolean) => {
    setInputs(inputs.map(input => 
      input.id === id ? { ...input, [field]: value } : input
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Calculator Builder</h1>
            <p className="text-xl text-muted-foreground">
              Create your own custom calculator to share with the community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Builder Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Calculator Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="name">Calculator Name</Label>
                  <Input
                    id="name"
                    value={calculatorName}
                    onChange={(e) => setCalculatorName(e.target.value)}
                    placeholder="e.g., BMI Calculator"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what your calculator does..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="algebra">Algebra</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="statistics">Statistics</SelectItem>
                      <SelectItem value="geometry">Geometry</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="health">Health & Fitness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Input Fields */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label>Input Fields</Label>
                    <Button onClick={addInput} size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Field
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {inputs.map((input) => (
                      <Card key={input.id} className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline">Field {input.id}</Badge>
                          {inputs.length > 1 && (
                            <Button 
                              onClick={() => removeInput(input.id)}
                              size="sm" 
                              variant="ghost"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label className="text-xs">Variable Name</Label>
                            <Input
                              value={input.name}
                              onChange={(e) => updateInput(input.id, 'name', e.target.value)}
                              placeholder="x, a, rate..."
                              className="text-sm"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">Display Label</Label>
                            <Input
                              value={input.label}
                              onChange={(e) => updateInput(input.id, 'label', e.target.value)}
                              placeholder="Enter value..."
                              className="text-sm"
                            />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Formula */}
                <div>
                  <Label htmlFor="formula">Calculation Formula</Label>
                  <Textarea
                    id="formula"
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
                    placeholder="e.g., weight / (height * height) for BMI"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Use variable names from input fields above
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button className="flex-1">
                    <Save className="h-4 w-4 mr-2" />
                    Save Calculator
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {calculatorName || "Your Calculator Name"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {description || "Your calculator description will appear here"}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {inputs.map((input) => (
                      <div key={input.id}>
                        <Label className="text-sm">
                          {input.label || `Field ${input.id}`}
                        </Label>
                        <Input 
                          type="number" 
                          placeholder={`Enter ${input.name || 'value'}...`}
                          className="text-sm"
                        />
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">
                    Calculate
                  </Button>

                  <Card className="p-4 bg-accent/50">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Result</div>
                      <div className="text-2xl font-bold text-primary">--</div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Builder;