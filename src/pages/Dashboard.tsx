import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Star, TrendingUp, Users, Edit, Trash2 } from "lucide-react";

const Dashboard = () => {
  // This is a placeholder - users will need Supabase integration for real authentication
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <Calculator className="h-16 w-16 mx-auto text-primary mb-6" />
            <h1 className="text-3xl font-bold mb-4">Access Your Dashboard</h1>
            <p className="text-muted-foreground mb-8">
              Sign in to view your calculator stats, manage your creations, and track your saved calculators.
            </p>
            
            <div className="bg-accent/50 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-2">Need Authentication?</h3>
              <p className="text-sm text-muted-foreground">
                To enable user accounts and personalized dashboards, connect your Lovable project to Supabase using our native integration.
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button>Sign Up</Button>
              <Button variant="outline">Sign In</Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="h-20 w-20">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Student & Calculator Creator</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <Calculator className="h-4 w-4" />
                <span className="text-sm">12 calculators</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span className="text-sm">4.7 avg rating</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">1,249 total uses</span>
              </div>
            </div>
          </div>
          
          <Button>Edit Profile</Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calculator className="h-8 w-8 mx-auto text-primary mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Created</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
              <div className="text-2xl font-bold">35</div>
              <div className="text-sm text-muted-foreground">Saved</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto text-green-500 mb-2" />
              <div className="text-2xl font-bold">1,249</div>
              <div className="text-sm text-muted-foreground">Total Uses</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto text-blue-500 mb-2" />
              <div className="text-2xl font-bold">4.7</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="created" className="space-y-6">
          <TabsList>
            <TabsTrigger value="created">My Calculators</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="created" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">My Calculators</h2>
              <Button>Create New</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">Finance</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <CardTitle>Compound Interest Calculator</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Calculate compound interest for investments and savings accounts.
                    </p>
                    
                    <div className="text-sm text-muted-foreground mb-4">
                      Used 234 times this month
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <h2 className="text-xl font-semibold">Saved Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="shadow-card">
                  <CardHeader>
                    <Badge variant="secondary">Physics</Badge>
                    <CardTitle>Kinematic Equations</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Solve motion problems using kinematic equations.
                    </p>
                    
                    <div className="text-sm text-muted-foreground">
                      By PhysicsHelper
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: "Created", item: "BMI Calculator", time: "2 hours ago" },
                { action: "Saved", item: "Quadratic Formula Solver", time: "1 day ago" },
                { action: "Updated", item: "Compound Interest Calculator", time: "3 days ago" },
              ].map((activity, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{activity.action}</span>
                      <span className="text-muted-foreground"> "{activity.item}"</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;