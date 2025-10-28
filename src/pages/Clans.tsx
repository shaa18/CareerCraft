import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Trophy, TrendingUp, Crown, Medal, Award } from "lucide-react";

const clans = [
 {
 id: 1,
 name: "Code Warriors",
 members: 156,
 xp: 45230,
 description: "Dedicated to mastering full-stack development",
 rank: 1,
 avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=warriors",
 },
 {
 id: 2,
 name: "React Masters",
 members: 142,
 xp: 42100,
 description: "All things React and modern frontend",
 rank: 2,
 avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=react",
 },
 {
 id: 3,
 name: "DevOps Elite",
 members: 98,
 xp: 38450,
 description: "Infrastructure and automation experts",
 rank: 3,
 avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=devops",
 },
];

const topMembers = [
 { name: "Samiksha Sharma", xp: 2450, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=samiksha" },
 { name: "Sarthak Verma", xp: 2280, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarthak" },
 { name: "Bhavya Patel", xp: 2150, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bhavya" },
 { name: "Iksha Gupta", xp: 1980, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=iksha" },
 { name: "Deepanshu Singh", xp: 1850, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=deepanshu" },
];

export default function Clans() {
 const [selectedTab, setSelectedTab] = useState("browse");

 const getRankIcon = (rank: number) => {
 if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500 animate-pulse" />;
 if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
 if (rank === 3) return <Award className="w-5 h-5 text-orange-600" />;
 return null;
 };

 return (
 <Layout>
 <div className="space-y-6">
 <div className="animate-fade-in">
 <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Clans</h1>
 <p className="text-gray-600">Join a clan and compete together</p>
 </div>

 <Tabs value={selectedTab} onValueChange={setSelectedTab}>
 <TabsList className="grid w-full max-w-md grid-cols-3 bg-purple-100">
 <TabsTrigger value="browse" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Browse</TabsTrigger>
 <TabsTrigger value="my-clan" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">My Clan</TabsTrigger>
 <TabsTrigger value="leaderboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Leaderboard</TabsTrigger>
 </TabsList>

 <TabsContent value="browse" className="space-y-4 mt-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
 {clans.map((clan, index) => (
 <Card key={clan.id} className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-xl transition-all transform hover:-translate-y-1 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
 <CardHeader>
 <div className="flex items-start gap-4">
 <Avatar className="w-16 h-16 ring-2 ring-purple-300">
 <AvatarImage src={clan.avatar} />
 <AvatarFallback>{clan.name[0]}</AvatarFallback>
 </Avatar>
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-1">
 <CardTitle className="text-xl">{clan.name}</CardTitle>
 {getRankIcon(clan.rank)}
 </div>
 <CardDescription>{clan.description}</CardDescription>
 </div>
 </div>
 </CardHeader>
 <CardContent>
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-4 text-sm text-gray-600">
 <div className="flex items-center gap-1">
 <Users className="w-4 h-4 text-purple-500" />
 <span>{clan.members} members</span>
 </div>
 <div className="flex items-center gap-1">
 <Trophy className="w-4 h-4 text-yellow-500" />
 <span>{clan.xp.toLocaleString()} XP</span>
 </div>
 </div>
 <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">Rank #{clan.rank}</Badge>
 </div>
 <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all">
 Request to Join
 </Button>
 </CardContent>
 </Card>
 ))}
 </div>
 </TabsContent>

 <TabsContent value="my-clan" className="mt-6">
 <Card className="border-2 border-purple-200 shadow-xl animate-slide-up">
 <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
 <div className="flex items-start gap-4">
 <Avatar className="w-20 h-20 ring-4 ring-yellow-400">
 <AvatarImage src={clans[0].avatar} />
 <AvatarFallback>CW</AvatarFallback>
 </Avatar>
 <div className="flex-1">
 <div className="flex items-center gap-2 mb-1">
 <CardTitle className="text-2xl">{clans[0].name}</CardTitle>
 <Crown className="w-6 h-6 text-yellow-500 animate-pulse" />
 </div>
 <CardDescription className="text-base">{clans[0].description}</CardDescription>
 <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
 <div className="flex items-center gap-1">
 <Users className="w-4 h-4 text-purple-500" />
 <span>{clans[0].members} members</span>
 </div>
 <div className="flex items-center gap-1">
 <Trophy className="w-4 h-4 text-yellow-500" />
 <span>{clans[0].xp.toLocaleString()} XP</span>
 </div>
 <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-0">Rank #1</Badge>
 </div>
 </div>
 </div>
 </CardHeader>
 <CardContent>
 <div className="space-y-4">
 <div>
 <h3 className="font-semibold text-gray-900 mb-3">Top Contributors</h3>
 <div className="space-y-2">
 {topMembers.map((member, index) => (
 <div
 key={index}
 className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all"
 >
 <div className="flex items-center gap-3">
 <span className={`text-sm font-semibold w-6 ${index === 0 ? 'text-yellow-600' : index === 1 ? 'text-gray-500' : index === 2 ? 'text-orange-600' : 'text-gray-500'}`}>
 #{index + 1}
 </span>
 <Avatar className="w-8 h-8 ring-2 ring-purple-200">
 <AvatarImage src={member.avatar} />
 <AvatarFallback>{member.name[0]}</AvatarFallback>
 </Avatar>
 <span className="font-medium text-gray-900">{member.name}</span>
 </div>
 <div className="flex items-center gap-1 text-sm font-semibold text-purple-600">
 <TrendingUp className="w-4 h-4" />
 <span>{member.xp} XP</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </CardContent>
 </Card>
 </TabsContent>

 <TabsContent value="leaderboard" className="mt-6">
 <Card className="border-2 border-purple-200 shadow-xl animate-slide-up">
 <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
 <CardTitle>Global Clan Leaderboard</CardTitle>
 <CardDescription>Top performing clans this month</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="space-y-3">
 {clans.map((clan, index) => (
 <div
 key={clan.id}
 className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
 >
 <div className="flex items-center gap-4">
 <div className="flex items-center gap-2 w-12">
 {getRankIcon(clan.rank)}
 <span className={`text-lg font-bold ${clan.rank === 1 ? 'text-yellow-600' : clan.rank === 2 ? 'text-gray-500' : 'text-orange-600'}`}>#{clan.rank}</span>
 </div>
 <Avatar className="w-12 h-12 ring-2 ring-purple-300">
 <AvatarImage src={clan.avatar} />
 <AvatarFallback>{clan.name[0]}</AvatarFallback>
 </Avatar>
 <div>
 <p className="font-semibold text-gray-900">{clan.name}</p>
 <p className="text-sm text-gray-600">{clan.members} members</p>
 </div>
 </div>
 <div className="text-right">
 <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
 {clan.xp.toLocaleString()}
 </p>
 <p className="text-sm text-gray-600">Total XP</p>
 </div>
 </div>
 ))}
 </div>
 </CardContent>
 </Card>
 </TabsContent>
 </Tabs>
 </div>
 </Layout>
 );
}