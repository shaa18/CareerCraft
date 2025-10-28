import { useCallback, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactFlow, {
 Node,
 Edge,
 Controls,
 Background,
 useNodesState,
 useEdgesState,
 addEdge,
 Connection,
 BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, CheckCircle2, Circle, ExternalLink } from "lucide-react";

const initialNodes: Node[] = [
 {
 id: "1",
 type: "default",
 data: { label: "HTML Basics" },
 position: { x: 250, y: 0 },
 style: { background: "#3B82F6", color: "white", border: "none", borderRadius: "8px" },
 },
 {
 id: "2",
 type: "default",
 data: { label: "CSS Fundamentals" },
 position: { x: 250, y: 100 },
 style: { background: "#3B82F6", color: "white", border: "none", borderRadius: "8px" },
 },
 {
 id: "3",
 type: "default",
 data: { label: "JavaScript Basics" },
 position: { x: 250, y: 200 },
 style: { background: "#10B981", color: "white", border: "none", borderRadius: "8px" },
 },
 {
 id: "4",
 type: "default",
 data: { label: "React Fundamentals" },
 position: { x: 100, y: 300 },
 style: { background: "#E5E7EB", color: "#374151", border: "2px solid #D1D5DB", borderRadius: "8px" },
 },
 {
 id: "5",
 type: "default",
 data: { label: "TypeScript" },
 position: { x: 400, y: 300 },
 style: { background: "#E5E7EB", color: "#374151", border: "2px solid #D1D5DB", borderRadius: "8px" },
 },
 {
 id: "6",
 type: "default",
 data: { label: "React Hooks" },
 position: { x: 100, y: 400 },
 style: { background: "#E5E7EB", color: "#374151", border: "2px solid #D1D5DB", borderRadius: "8px" },
 },
 {
 id: "7",
 type: "default",
 data: { label: "State Management" },
 position: { x: 250, y: 500 },
 style: { background: "#E5E7EB", color: "#374151", border: "2px solid #D1D5DB", borderRadius: "8px" },
 },
];

const initialEdges: Edge[] = [
 { id: "e1-2", source: "1", target: "2", animated: false },
 { id: "e2-3", source: "2", target: "3", animated: false },
 { id: "e3-4", source: "3", target: "4", animated: false },
 { id: "e3-5", source: "3", target: "5", animated: false },
 { id: "e4-6", source: "4", target: "6", animated: false },
 { id: "e6-7", source: "6", target: "7", animated: false },
];

const nodeDetails = {
 "1": {
 title: "HTML Basics",
 description: "Learn the fundamentals of HTML structure and semantic markup",
 resources: [
 { title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
 { title: "HTML Tutorial", url: "https://www.w3schools.com/html/" },
 ],
 completed: true,
 },
 "2": {
 title: "CSS Fundamentals",
 description: "Master styling, layouts, flexbox, and grid systems",
 resources: [
 { title: "CSS Tricks", url: "https://css-tricks.com/" },
 { title: "Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
 ],
 completed: true,
 },
 "3": {
 title: "JavaScript Basics",
 description: "Understand variables, functions, arrays, and DOM manipulation",
 resources: [
 { title: "JavaScript.info", url: "https://javascript.info/" },
 { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
 ],
 completed: true,
 },
 "4": {
 title: "React Fundamentals",
 description: "Learn components, props, and JSX syntax",
 resources: [
 { title: "React Docs", url: "https://react.dev/" },
 { title: "React Tutorial", url: "https://react.dev/learn" },
 ],
 completed: false,
 },
};

export default function RoadmapView() {
 const { id } = useParams();
 const navigate = useNavigate();
 const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
 const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 const [selectedNode, setSelectedNode] = useState<string | null>(null);
 const [dialogOpen, setDialogOpen] = useState(false);

 const onConnect = useCallback(
 (params: Connection) => setEdges((eds) => addEdge(params, eds)),
 [setEdges]
 );

 const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
 setSelectedNode(node.id);
 setDialogOpen(true);
 }, []);

 const handleMarkComplete = () => {
 if (selectedNode) {
 setNodes((nds) =>
 nds.map((node) => {
 if (node.id === selectedNode) {
 return {
 ...node,
 style: {
 ...node.style,
 background: "#10B981",
 color: "white",
 border: "none",
 },
 };
 }
 return node;
 })
 );
 setDialogOpen(false);
 }
 };

 const currentNodeDetails = selectedNode ? nodeDetails[selectedNode as keyof typeof nodeDetails] : null;

 return (
 <Layout>
 <div className="space-y-6">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-4">
 <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
 <ArrowLeft className="w-5 h-5" />
 </Button>
 <div>
 <h1 className="text-3xl font-bold text-gray-900">Frontend Development</h1>
 <p className="text-gray-600">Interactive learning roadmap</p>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <Badge variant="secondary" className="text-sm px-3 py-1">
 11/24 completed
 </Badge>
 </div>
 </div>

 <Card className="border-gray-200 h-[600px]">
 <CardContent className="p-0 h-full">
 <ReactFlow
 nodes={nodes}
 edges={edges}
 onNodesChange={onNodesChange}
 onEdgesChange={onEdgesChange}
 onConnect={onConnect}
 onNodeClick={onNodeClick}
 fitView
 >
 <Controls />
 <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
 </ReactFlow>
 </CardContent>
 </Card>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
 <CheckCircle2 className="w-5 h-5 text-blue-500" />
 <div>
 <p className="text-sm font-semibold text-gray-900">Completed</p>
 <p className="text-xs text-gray-600">Blue nodes</p>
 </div>
 </div>
 <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
 <CheckCircle2 className="w-5 h-5 text-green-500" />
 <div>
 <p className="text-sm font-semibold text-gray-900">In Progress</p>
 <p className="text-xs text-gray-600">Green nodes</p>
 </div>
 </div>
 <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
 <Circle className="w-5 h-5 text-gray-400" />
 <div>
 <p className="text-sm font-semibold text-gray-900">Not Started</p>
 <p className="text-xs text-gray-600">Gray nodes</p>
 </div>
 </div>
 </div>
 </div>

 <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
 <DialogContent className="max-w-2xl">
 <DialogHeader>
 <DialogTitle className="text-2xl">{currentNodeDetails?.title}</DialogTitle>
 <DialogDescription>{currentNodeDetails?.description}</DialogDescription>
 </DialogHeader>
 <div className="space-y-6">
 <div>
 <h3 className="font-semibold text-gray-900 mb-3">Learning Resources</h3>
 <div className="space-y-2">
 {currentNodeDetails?.resources.map((resource, index) => (
 <a
 key={index}
 href={resource.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
 >
 <span className="text-sm font-medium text-gray-900">{resource.title}</span>
 <ExternalLink className="w-4 h-4 text-gray-400" />
 </a>
 ))}
 </div>
 </div>
 <div className="flex gap-3">
 {!currentNodeDetails?.completed && (
 <Button onClick={handleMarkComplete} className="flex-1 bg-blue-500 hover:bg-blue-600">
 <CheckCircle2 className="w-4 h-4 mr-2" />
 Mark as Complete
 </Button>
 )}
 {currentNodeDetails?.completed && (
 <Badge variant="secondary" className="flex-1 justify-center py-2">
 <CheckCircle2 className="w-4 h-4 mr-2" />
 Completed
 </Badge>
 )}
 </div>
 </div>
 </DialogContent>
 </Dialog>
 </Layout>
 );
}