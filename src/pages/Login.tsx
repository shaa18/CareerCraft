import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";

export default function Login() {
 const navigate = useNavigate();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = (e: React.FormEvent) => {
 e.preventDefault();
 // Mock login - in real app would authenticate
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
 <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
 <CardDescription>Enter your credentials to access your account</CardDescription>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleLogin} className="space-y-4">
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
 Log In
 </Button>
 </form>

 <div className="mt-6 text-center text-sm">
 <span className="text-gray-600">Don't have an account? </span>
 <button
 onClick={() => navigate("/signup")}
 className="text-blue-500 hover:text-blue-600 font-semibold"
 >
 Sign up
 </button>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 );
}