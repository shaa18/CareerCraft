import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Map, Users, Code, Trophy, Sparkles } from "lucide-react";

export default function Home() {
 const navigate = useNavigate();

 return (
 <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
 {/* Hero Section */}
 <div className="container mx-auto px-4 py-16">
 <nav className="flex justify-between items-center mb-20 animate-fade-in">
 <div className="flex items-center gap-2">
 <div className="relative">
 <Map className="w-8 h-8 text-purple-600 animate-pulse-slow" />
 <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
 </div>
 <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
 CareerCraft
 </span>
 </div>
 <div className="flex gap-3">
 <Button variant="ghost" onClick={() => navigate("/login")} className="hover:bg-purple-100">
 Log In
 </Button>
 <Button
 onClick={() => navigate("/signup")}
 className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all"
 >
 Get Started
 </Button>
 </div>
 </nav>

 <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
 <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
 Master Your Career Path
 </h1>
 <p className="text-xl text-gray-700 mb-8 animate-fade-in">
 Navigate structured learning roadmaps, track your progress, and grow with a community of learners
 </p>
 <Button
 size="lg"
 onClick={() => navigate("/signup")}
 className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
 >
 Start Learning <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 </div>

 {/* Features Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-20">
 <div className="p-6 rounded-xl bg-white border-2 border-purple-200 hover:border-purple-500 transition-all hover:shadow-xl transform hover:-translate-y-2 animate-slide-up">
 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
 <Map className="w-6 h-6 text-white" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Roadmaps</h3>
 <p className="text-gray-600 text-sm">
 Visual skill trees with clickable nodes and curated resources
 </p>
 </div>

 <div className="p-6 rounded-xl bg-white border-2 border-pink-200 hover:border-pink-500 transition-all hover:shadow-xl transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
 <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
 <Users className="w-6 h-6 text-white" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">Community & Clans</h3>
 <p className="text-gray-600 text-sm">
 Join clans, share knowledge, and compete on leaderboards
 </p>
 </div>

 <div className="p-6 rounded-xl bg-white border-2 border-blue-200 hover:border-blue-500 transition-all hover:shadow-xl transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
 <Code className="w-6 h-6 text-white" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Problems</h3>
 <p className="text-gray-600 text-sm">
 Apply your skills with real coding challenges and instant feedback
 </p>
 </div>

 <div className="p-6 rounded-xl bg-white border-2 border-yellow-200 hover:border-yellow-500 transition-all hover:shadow-xl transform hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.3s'}}>
 <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
 <Trophy className="w-6 h-6 text-white" />
 </div>
 <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Progress</h3>
 <p className="text-gray-600 text-sm">
 Earn XP, level up, and visualize your learning journey
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}