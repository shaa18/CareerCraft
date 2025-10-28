import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Target, TrendingUp, Calendar, Edit } from "lucide-react";

const completedNodes = [
 { id: 1, title: "HTML Basics", roadmap: "Frontend Development", date: "2024-01-15", xp: 50 },
 { id: 2, title: "CSS Fundamentals", roadmap: "Frontend Development", date: "2024-01-18", xp: 50 },
 { id: 3, title: "JavaScript Basics", roadmap: "Frontend Development", date: "2024-01-22", xp: 75 },
 { id: 4, title: "Git & GitHub", roadmap: "Backend Development", date: "2024-01-25", xp: 40 },
 { id: 5, title: "Command Line", roadmap: "DevOps Engineering", date: "2024-01-28", xp: 30 },
];

const achievements = [
 { id: 1, title: "First Steps", description: "Complete your first node", icon: "🎯" },
 { id: 2, title: "Week Warrior", description: "7 day learning streak", icon: "🔥" },
 { id: 3, title: "Century Club", description: "Earn 100 XP", icon: "💯" },
 { id: 4, title: "Social Butterfly", description: "Join a clan", icon: "🦋" },
];

export default function Profile() {
 return (
 <Layout>
 <div className="space-y-6">
 {/* Profile Header */}
 <Card className="border-2 border-purple-200 shadow-xl animate-slide-up">
 <CardContent className="pt-6">
 <div className="flex flex-col md:flex-row items-start gap-6">
 <Avatar className="w-28 h-28 ring-4 ring-purple-300 shadow-xl">
 <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=shashank" />
 <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl">SD</AvatarFallback>
 </Avatar>
 <div className="flex-1">
 <div className="flex items-start justify-between mb-4">
 <div>
 <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
 Shashank Dadhich
 </h1>
 <p className="text-gray-600">shashank.dadhich@example.com</p>
 </div>
 <Button variant="outline" className="gap-2 border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50">
 <Edit className="w-4 h-4" />
 Edit Profile
 </Button>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all">
 <div className="flex items-center gap-2 mb-1">
 <Trophy className="w-5 h-5 text-purple-600" />
 <span className="text-sm text-gray-600">Total XP</span>
 </div>
 <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1,250</p>
 </div>
 <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md hover:shadow-lg transition-all">
 <div className="flex items-center gap-2 mb-1">
 <TrendingUp className="w-5 h-5 text-green-600" />
 <span className="text-sm text-gray-600">Level</span>
 </div>
 <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">8</p>
 </div>
 <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all">
 <div className="flex items-center gap-2 mb-1">
 <Target className="w-5 h-5 text-blue-600" />
 <span className="text-sm text-gray-600">Completed</span>
 </div>
 <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">20</p>
 </div>
 <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl shadow-md hover:shadow-lg transition-all">
 <div className="flex items-center gap-2 mb-1">
 <Calendar className="w-5 h-5 text-orange-600" />
 <span className="text-sm text-gray-600">Streak</span>
 </div>
 <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">7 days</p>
 </div>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>

 {/* Level Progress */}
 <Card className="border-2 border-purple-200 shadow-lg animate-slide-up" style={{animationDelay: '0.1s'}}>
 <CardHeader>
 <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Level Progress</CardTitle>
 <CardDescription>250 XP until Level 9</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
 <div
 className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
 style={{width: '83%'}}
 />
 </div>
 <div className="flex justify-between mt-2 text-sm text-gray-600">
 <span>1,250 XP</span>
 <span>1,500 XP</span>
 </div>
 </CardContent>
 </Card>

 <Tabs defaultValue="activity" className="space-y-6">
 <TabsList className="grid w-full max-w-md grid-cols-3 bg-purple-100">
 <TabsTrigger value="activity" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Activity</TabsTrigger>
 <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Achievements</TabsTrigger>
 <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Settings</TabsTrigger>
 </TabsList>

 <TabsContent value="activity" className="space-y-4">
 <Card className="border-2 border-purple-200 shadow-lg">
 <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
 <CardTitle>Recent Activity</CardTitle>
 <CardDescription>Your learning progress</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="space-y-3">
 {completedNodes.map((node, index) => (
 <div
 key={node.id}
 className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all animate-slide-up"
 style={{animationDelay: `${index * 0.1}s`}}
 >
 <div className="flex items-center gap-3">
 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
 <Target className="w-6 h-6 text-white" />
 </div>
 <div>
 <p className="font-semibold text-gray-900">{node.title}</p>
 <p className="text-sm text-gray-600">{node.roadmap}</p>
 </div>
 </div>
 <div className="text-right">
 <Badge className="mb-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">
 +{node.xp} XP
 </Badge>
 <p className="text-xs text-gray-500">{node.date}</p>
 </div>
 </div>
 ))}
 </div>
 </CardContent>
 </Card>
 </TabsContent>

 <TabsContent value="achievements" className="space-y-4">
 <Card className="border-2 border-purple-200 shadow-lg">
 <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
 <CardTitle>Achievements</CardTitle>
 <CardDescription>Your earned badges</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {achievements.map((achievement, index) => (
 <div
 key={achievement.id}
 className="flex items-start gap-4 p-5 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all animate-slide-up"
 style={{animationDelay: `${index * 0.1}s`}}
 >
 <div className="text-5xl animate-float">{achievement.icon}</div>
 <div>
 <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
 <p className="text-sm text-gray-600">{achievement.description}</p>
 </div>
 </div>
 ))}
 </div>
 </CardContent>
 </Card>
 </TabsContent>

 <TabsContent value="settings" className="space-y-4">
 <Card className="border-2 border-purple-200 shadow-lg">
 <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
 <CardTitle>Account Settings</CardTitle>
 <CardDescription>Manage your account information</CardDescription>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="space-y-2">
 <Label htmlFor="name">Full Name</Label>
 <Input id="name" defaultValue="Shashank Dadhich" className="border-purple-200 focus:border-purple-500" />
 </div>
 <div className="space-y-2">
 <Label htmlFor="email">Email</Label>
 <Input id="email" type="email" defaultValue="shashank.dadhich@example.com" className="border-purple-200 focus:border-purple-500" />
 </div>
 <div className="space-y-2">
 <Label htmlFor="bio">Bio</Label>
 <Input id="bio" defaultValue="Passionate learner on a journey to master web development" className="border-purple-200 focus:border-purple-500" />
 </div>
 <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all">
 Save Changes
 </Button>
 </CardContent>
 </Card>
 </TabsContent>
 </Tabs>
 </div>
 </Layout>
 );
}