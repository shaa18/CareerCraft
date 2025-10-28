import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Map, Home, Users, Code, User, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface LayoutProps {
 children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
 const navigate = useNavigate();
 const location = useLocation();

 const navItems = [
 { icon: Home, label: "Dashboard", path: "/dashboard" },
 { icon: Map, label: "Roadmaps", path: "/dashboard" },
 { icon: Users, label: "Community", path: "/community" },
 { icon: Trophy, label: "Clans", path: "/clans" },
 { icon: Code, label: "Practice", path: "/practice" },
 ];

 return (
 <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
 {/* Top Navigation */}
 <nav className="border-b-2 border-purple-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
 <div className="container mx-auto px-4">
 <div className="flex items-center justify-between h-16">
 <div className="flex items-center gap-8">
 <div
 className="flex items-center gap-2 cursor-pointer group"
 onClick={() => navigate("/dashboard")}
 >
 <Map className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
 <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
 CareerCraft
 </span>
 </div>

 <div className="hidden md:flex items-center gap-1">
 {navItems.map((item) => (
 <Button
 key={item.path}
 variant={location.pathname === item.path ? "secondary" : "ghost"}
 onClick={() => navigate(item.path)}
 className={`gap-2 transition-all ${
 location.pathname === item.path
 ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200"
 : "hover:bg-purple-50"
 }`}
 >
 <item.icon className="w-4 h-4" />
 {item.label}
 </Button>
 ))}
 </div>
 </div>

 <div className="flex items-center gap-4">
 <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-md hover:shadow-lg transition-all">
 <Trophy className="w-5 h-5 text-purple-600 animate-pulse" />
 <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1,250 XP</span>
 </div>
 <Avatar
 className="cursor-pointer ring-2 ring-purple-300 hover:ring-4 hover:ring-purple-400 transition-all transform hover:scale-110"
 onClick={() => navigate("/profile")}
 >
 <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=shashank" />
 <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">SD</AvatarFallback>
 </Avatar>
 </div>
 </div>
 </div>
 </nav>

 {/* Main Content */}
 <main className="container mx-auto px-4 py-8">
 {children}
 </main>
 </div>
 );
}