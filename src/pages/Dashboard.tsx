import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Map, TrendingUp, Target, Award, ArrowRight } from "lucide-react";

const roadmaps = [
 {
 id: "frontend",
 title: "Frontend Development",
 description: "Master modern web development with React, TypeScript, and more",
 progress: 45,
 nodes: 24,
 completedNodes: 11,
 gradient: "from-purple-500 to-pink-500",
 },
 {
 id: "backend",
 title: "Backend Development",
 description: "Build scalable APIs and server-side applications",
 progress: 20,
 nodes: 30,
 completedNodes: 6,
 gradient: "from-green-500 to-teal-500",
 },
 {
 id: "devops",
 title: "DevOps Engineering",
 description: "Learn CI/CD, containerization, and cloud infrastructure",
 progress: 10,
 nodes: 28,
 completedNodes: 3,
 gradient: "from-blue-500 to-cyan-500",
 },
];

export default function Dashboard() {
 const navigate = useNavigate();

 return (
 <Layout>
 <div className="space-y-8">
 {/* Welcome Section */}
 <div className="animate-fade-in">
 <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
 Welcome back, Shashank Dadhich! 👋
 </h1>
 <p className="text-gray-600 text-lg">Continue your learning journey</p>
 </div>

 {/* Stats Grid */}
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 <Card className="border-2 border-purple-200 hover:shadow-xl transition-all transform hover:-translate-y-1 animate-slide-up">
 <CardContent className="pt-6">
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm text-gray-600 mb-1">Total XP</p>
 <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1,250</p>
 </div>
 <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
 <TrendingUp className="w-7 h-7 text-white" />
 </div>
 </div>
 </CardContent>
 </Card>

 <Card className="border-2 border-green-200 hover:shadow-xl transition-all transform hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.1s'}}>
 <CardContent className="pt-6">
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm text-gray-600 mb-1">Level</p>
 <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">8</p>
 </div>
 <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
 <Award className="w-7 h-7 text-white" />
 </div>
 </div>
 </CardContent>
 </Card>

 <Card className="border-2 border-blue-200 hover:shadow-xl transition-all transform hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.2s'}}>
 <CardContent className="pt-6">
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm text-gray-600 mb-1">Completed</p>
 <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">20</p>
 </div>
 <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
 <Target className="w-7 h-7 text-white" />
 </div>
 </div>
 </CardContent>
 </Card>

 <Card className="border-2 border-orange-200 hover:shadow-xl transition-all transform hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.3s'}}>
 <CardContent className="pt-6">
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm text-gray-600 mb-1">Roadmaps</p>
 <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">3</p>
 </div>
 <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
 <Map className="w-7 h-7 text-white" />
 </div>
 </div>
 </CardContent>
 </Card>
 </div>

 {/* Active Roadmaps */}
 <div>
 <div className="flex items-center justify-between mb-6 animate-fade-in">
 <h2 className="text-2xl font-bold text-gray-900">Your Roadmaps</h2>
 <Button variant="outline" className="gap-2 border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50">
 Browse All <ArrowRight className="w-4 h-4" />
 </Button>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 {roadmaps.map((roadmap, index) => (
 <Card
 key={roadmap.id}
 className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 animate-slide-up"
 onClick={() => navigate(`/roadmap/${roadmap.id}`)}
 style={{animationDelay: `${index * 0.1}s`}}
 >
 <CardHeader>
 <div className="flex items-start justify-between mb-2">
 <div className={`w-12 h-12 bg-gradient-to-br ${roadmap.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
 <Map className="w-6 h-6 text-white" />
 </div>
 <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">
 {roadmap.completedNodes}/{roadmap.nodes} nodes
 </Badge>
 </div>
 <CardTitle className="text-xl">{roadmap.title}</CardTitle>
 <CardDescription>{roadmap.description}</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="space-y-2">
 <div className="flex items-center justify-between text-sm">
 <span className="text-gray-600">Progress</span>
 <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{roadmap.progress}%</span>
 </div>
 <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
 <div
 className={`absolute top-0 left-0 h-full bg-gradient-to-r ${roadmap.gradient} rounded-full transition-all duration-500`}
 style={{width: `${roadmap.progress}%`}}
 />
 </div>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </div>
 </Layout>
 );
}