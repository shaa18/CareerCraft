import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./pages/Dashboard";
import RoadmapView from "./pages/RoadmapView";
import Community from "./pages/Community";
import Practice from "./pages/Practice";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Clans from "./pages/Clans";
import { Toaster } from "./components/ui/toaster";

function App() {
 return (
 <>
 <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/login" element={<Login />} />
 <Route path="/signup" element={<Signup />} />
 <Route path="/dashboard" element={<Dashboard />} />
 <Route path="/roadmap/:id" element={<RoadmapView />} />
 <Route path="/community" element={<Community />} />
 <Route path="/clans" element={<Clans />} />
 <Route path="/practice" element={<Practice />} />
 <Route path="/profile" element={<Profile />} />
 </Routes>
 </Suspense>
 <Toaster />
 </>
 );
}

export default App;