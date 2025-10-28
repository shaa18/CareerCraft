import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Send } from "lucide-react";

const posts = [
 {
 id: 1,
 author: "Samiksha Sharma",
 avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=samiksha",
 time: "2 hours ago",
 content: "Just completed the React Hooks section! The useEffect hook finally makes sense. Anyone have tips for optimizing re-renders?",
 likes: 24,
 comments: 8,
 tags: ["React", "Hooks"],
 },
 {
 id: 2,
 author: "Sarthak Verma",
 avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarthak",
 time: "5 hours ago",
 content: "Sharing my notes on TypeScript generics. Hope this helps someone! 📝",
 likes: 42,
 comments: 15,
 tags: ["TypeScript", "Learning"],
 },
 {
 id: 3,
 author: "Bhavya Patel",
 avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bhavya",
 time: "1 day ago",
 content: "Our clan just hit 1000 XP! Shoutout to everyone contributing. Let's keep the momentum going! 🚀",
 likes: 67,
 comments: 23,
 tags: ["Clan", "Milestone"],
 },
];

export default function Community() {
 const [newPost, setNewPost] = useState("");
 const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

 const handleLike = (postId: number) => {
 setLikedPosts((prev) => {
 const newSet = new Set(prev);
 if (newSet.has(postId)) {
 newSet.delete(postId);
 } else {
 newSet.add(postId);
 }
 return newSet;
 });
 };

 return (
 <Layout>
 <div className="max-w-4xl mx-auto space-y-6">
 <div className="animate-fade-in">
 <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Community</h1>
 <p className="text-gray-600">Share your progress and learn from others</p>
 </div>

 {/* Create Post */}
 <Card className="border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all animate-slide-up">
 <CardHeader>
 <CardTitle className="text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Share with the community</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <Textarea
 placeholder="What's on your mind? Share your progress, ask questions, or help others..."
 value={newPost}
 onChange={(e) => setNewPost(e.target.value)}
 className="min-h-[100px] resize-none border-purple-200 focus:border-purple-500"
 />
 <div className="flex justify-end">
 <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white gap-2 shadow-lg hover:shadow-xl transition-all">
 <Send className="w-4 h-4" />
 Post
 </Button>
 </div>
 </CardContent>
 </Card>

 {/* Posts Feed */}
 <div className="space-y-4">
 {posts.map((post, index) => (
 <Card key={post.id} className="border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
 <CardHeader>
 <div className="flex items-start gap-4">
 <Avatar className="ring-2 ring-purple-200">
 <AvatarImage src={post.avatar} />
 <AvatarFallback>{post.author[0]}</AvatarFallback>
 </Avatar>
 <div className="flex-1">
 <div className="flex items-center justify-between">
 <div>
 <p className="font-semibold text-gray-900">{post.author}</p>
 <p className="text-sm text-gray-500">{post.time}</p>
 </div>
 </div>
 <p className="mt-3 text-gray-700">{post.content}</p>
 <div className="flex gap-2 mt-3">
 {post.tags.map((tag) => (
 <Badge key={tag} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">
 {tag}
 </Badge>
 ))}
 </div>
 </div>
 </div>
 </CardHeader>
 <CardContent>
 <div className="flex items-center gap-6 pt-2 border-t border-gray-100">
 <Button
 variant="ghost"
 size="sm"
 className="gap-2 hover:bg-red-50"
 onClick={() => handleLike(post.id)}
 >
 <Heart
 className={`w-4 h-4 transition-all ${likedPosts.has(post.id) ? "fill-red-500 text-red-500 scale-110" : ""}`}
 />
 <span className={likedPosts.has(post.id) ? "text-red-500 font-semibold" : ""}>
 {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
 </span>
 </Button>
 <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50">
 <MessageCircle className="w-4 h-4" />
 {post.comments}
 </Button>
 <Button variant="ghost" size="sm" className="gap-2 hover:bg-green-50">
 <Share2 className="w-4 h-4" />
 Share
 </Button>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </Layout>
 );
}