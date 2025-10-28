import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, XCircle, Play, RotateCcw, Code } from "lucide-react";

const problems = [
 {
 id: 1,
 title: "Two Sum",
 difficulty: "Easy",
 description: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.",
 starterCode: `function twoSum(nums, target) {\n // Your code here\n \n}`,
 solution: `function twoSum(nums, target) {\n const map = new Map();\n for (let i = 0; i < nums.length; i++) {\n const complement = target - nums[i];\n if (map.has(complement)) {\n return [map.get(complement), i];\n }\n map.set(nums[i], i);\n }\n return [];\n}`,
 testCases: [
 { input: "[2,7,11,15], 9", output: "[0,1]" },
 { input: "[3,2,4], 6", output: "[1,2]" },
 ],
 },
 {
 id: 2,
 title: "Reverse String",
 difficulty: "Easy",
 description: "Write a function that reverses a string. The input string is given as an array of characters.",
 starterCode: `function reverseString(s) {\n // Your code here\n \n}`,
 solution: `function reverseString(s) {\n let left = 0;\n let right = s.length - 1;\n while (left < right) {\n [s[left], s[right]] = [s[right], s[left]];\n left++;\n right--;\n }\n return s;\n}`,
 testCases: [
 { input: '["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
 { input: '["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
 ],
 },
];

export default function Practice() {
 const [selectedProblem, setSelectedProblem] = useState(problems[0]);
 const [code, setCode] = useState(selectedProblem.starterCode);
 const [output, setOutput] = useState<{ success: boolean; message: string } | null>(null);

 const handleRun = () => {
 // Mock execution - in real app would run code safely
 const isCorrect = Math.random() > 0.5;
 setOutput({
 success: isCorrect,
 message: isCorrect
 ? "All test cases passed! +50 XP"
 : "Test case 1 failed. Expected [0,1] but got undefined",
 });
 };

 const handleReset = () => {
 setCode(selectedProblem.starterCode);
 setOutput(null);
 };

 const getDifficultyColor = (difficulty: string) => {
 switch (difficulty) {
 case "Easy":
 return "bg-green-100 text-green-700";
 case "Medium":
 return "bg-yellow-100 text-yellow-700";
 case "Hard":
 return "bg-red-100 text-red-700";
 default:
 return "bg-gray-100 text-gray-700";
 }
 };

 return (
 <Layout>
 <div className="space-y-6">
 <div>
 <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Problems</h1>
 <p className="text-gray-600">Sharpen your skills with coding challenges</p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 {/* Problem List */}
 <Card className="border-gray-200 lg:col-span-1">
 <CardHeader>
 <CardTitle>Problems</CardTitle>
 <CardDescription>Select a challenge</CardDescription>
 </CardHeader>
 <CardContent className="space-y-2">
 {problems.map((problem) => (
 <div
 key={problem.id}
 onClick={() => {
 setSelectedProblem(problem);
 setCode(problem.starterCode);
 setOutput(null);
 }}
 className={`p-3 rounded-lg border cursor-pointer transition-colors ${
 selectedProblem.id === problem.id
 ? "border-blue-500 bg-blue-50"
 : "border-gray-200 hover:border-gray-300"
 }`}
 >
 <div className="flex items-start justify-between mb-2">
 <h3 className="font-semibold text-gray-900">{problem.title}</h3>
 <Badge className={getDifficultyColor(problem.difficulty)} variant="secondary">
 {problem.difficulty}
 </Badge>
 </div>
 <p className="text-sm text-gray-600 line-clamp-2">{problem.description}</p>
 </div>
 ))}
 </CardContent>
 </Card>

 {/* Code Editor */}
 <Card className="border-gray-200 lg:col-span-2">
 <CardHeader>
 <div className="flex items-start justify-between">
 <div>
 <CardTitle className="text-xl">{selectedProblem.title}</CardTitle>
 <CardDescription className="mt-2">{selectedProblem.description}</CardDescription>
 </div>
 <Badge className={getDifficultyColor(selectedProblem.difficulty)} variant="secondary">
 {selectedProblem.difficulty}
 </Badge>
 </div>
 </CardHeader>
 <CardContent className="space-y-4">
 <Tabs defaultValue="problem">
 <TabsList>
 <TabsTrigger value="problem">Problem</TabsTrigger>
 <TabsTrigger value="solution">Solution</TabsTrigger>
 </TabsList>
 <TabsContent value="problem" className="space-y-4 mt-4">
 <div>
 <h3 className="font-semibold text-gray-900 mb-2">Test Cases</h3>
 <div className="space-y-2">
 {selectedProblem.testCases.map((testCase, index) => (
 <div key={index} className="p-3 bg-gray-50 rounded-lg text-sm">
 <p className="text-gray-600">
 <span className="font-semibold">Input:</span> {testCase.input}
 </p>
 <p className="text-gray-600">
 <span className="font-semibold">Output:</span> {testCase.output}
 </p>
 </div>
 ))}
 </div>
 </div>

 <div>
 <div className="flex items-center justify-between mb-2">
 <h3 className="font-semibold text-gray-900">Code Editor</h3>
 <Button variant="ghost" size="sm" onClick={handleReset} className="gap-2">
 <RotateCcw className="w-4 h-4" />
 Reset
 </Button>
 </div>
 <Textarea
 value={code}
 onChange={(e) => setCode(e.target.value)}
 className="font-mono text-sm min-h-[300px] resize-none"
 placeholder="Write your solution here..."
 />
 </div>

 {output && (
 <div
 className={`p-4 rounded-lg flex items-start gap-3 ${
 output.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
 }`}
 >
 {output.success ? (
 <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
 ) : (
 <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
 )}
 <div>
 <p className={`font-semibold ${output.success ? "text-green-900" : "text-red-900"}`}>
 {output.success ? "Success!" : "Failed"}
 </p>
 <p className={`text-sm ${output.success ? "text-green-700" : "text-red-700"}`}>
 {output.message}
 </p>
 </div>
 </div>
 )}

 <Button onClick={handleRun} className="w-full bg-blue-500 hover:bg-blue-600 gap-2">
 <Play className="w-4 h-4" />
 Run Code
 </Button>
 </TabsContent>

 <TabsContent value="solution" className="mt-4">
 <div className="space-y-4">
 <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
 <p className="text-sm text-yellow-800">
 💡 Try solving the problem yourself first before viewing the solution!
 </p>
 </div>
 <div>
 <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
 <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
 <code>{selectedProblem.solution}</code>
 </pre>
 </div>
 </div>
 </TabsContent>
 </Tabs>
 </CardContent>
 </Card>
 </div>
 </div>
 </Layout>
 );
}