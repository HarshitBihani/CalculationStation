import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Library, PlusCircle, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b border-border/40 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Calculator className="h-8 w-8 text-primary" />
          <span className="text-gradient">CalcStation</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/library" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/library") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Library className="h-4 w-4" />
            Library
          </Link>
          
          <Link 
            to="/builder" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/builder") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <PlusCircle className="h-4 w-4" />
            Builder
          </Link>
          
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
              isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <User className="h-4 w-4" />
            Dashboard
          </Link>
          
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          
          <Button size="sm" className="bg-gradient-primary text-primary-foreground">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;