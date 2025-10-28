import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";

export default function Signup() {
 const navigate = useNavigate();
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleSignup = (e: React.FormEvent) => {
 e.preventDefault();
 // Mock signup - in real app would create account
 navigate("/dashboard");
 };

 return (
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
 <div className="w-full max-w-md">
 <div className="flex items-center justify-center gap-2 mb-8">
 <Map className="w-8 h-8 text-blue-500" />
 <span className="text-2xl font-bold text-gray-900">CareerCraft</span>
 </div>

 <Card className="border-gray-200 shadow-lg">
 <CardHeader className="space-y-1">
 <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
 <CardDescription>Start your learning journey today</CardDescription>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleSignup} className="space-y-4">
 <div className="space-y-2">
 <Label htmlFor="name">Full Name</Label>
 <Input
 id="name"
 type="text"
 placeholder="John Doe"
 value={name}
 onChange={(e) => setName(e.target.value)}
 required
 />
 </div>
 <div className="space-y-2">
 <Label htmlFor="email">Email</Label>
 <Input
 id="email"
 type="email"
 placeholder="you@example.com"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 />
 </div>
 <div className="space-y-2">
 <Label htmlFor="password">Password</Label>
 <Input
 id="password"
 type="password"
 placeholder="••••••••"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 required
 />
 </div>
 <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
 Sign Up
 </Button>
 </form>

 <div className="mt-6 text-center text-sm">
 <span className="text-gray-600">Already have an account? </span>
 <button
 onClick={() => navigate("/login")}
 className="text-blue-500 hover:text-blue-600 font-semibold"
 >
 Log in
 </button>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 );
}