import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { FolderPlus, Lightbulb, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const existingCategories = [
  "AI & Machine Learning",
  "Marketing & SEO", 
  "Design & Creative",
  "Productivity",
  "Security & Privacy",
  "Finance & Analytics",
  "Media & Video",
  "Analytics & Data"
];

const popularRequests = [
  { name: "DevOps & Infrastructure", votes: 47, description: "Tools for deployment, monitoring, and infrastructure management" },
  { name: "E-commerce", votes: 32, description: "Online store builders, payment processors, inventory management" },
  { name: "CRM & Sales", votes: 28, description: "Customer relationship management and sales automation tools" },
  { name: "Learning & Education", votes: 25, description: "Online learning platforms, course creation, and educational tools" },
  { name: "Health & Fitness", votes: 19, description: "Health tracking, fitness apps, and wellness platforms" },
];

const RequestCategoryPage = () => {
  const { toast } = useToast();
  const [exampleTools, setExampleTools] = useState<string[]>([""]);

  const addExampleTool = () => {
    setExampleTools([...exampleTools, ""]);
  };

  const updateExampleTool = (index: number, value: string) => {
    const updated = [...exampleTools];
    updated[index] = value;
    setExampleTools(updated);
  };

  const removeExampleTool = (index: number) => {
    setExampleTools(exampleTools.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Category Request Submitted!",
      description: "Thank you for your suggestion. We'll review it and consider adding it to our directory.",
    });
  };

  const handleVote = (categoryName: string) => {
    toast({
      title: "Vote Recorded!",
      description: `You voted for "${categoryName}". We'll prioritize categories with the most votes.`,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <FolderPlus className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Request a New Category</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't see a category that fits your tools? Help us expand our directory by suggesting new categories.
            </p>
          </div>

          <div className="space-y-8">
            {/* Current Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Current Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {existingCategories.map(category => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Popular Category Requests
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Vote for categories you'd like to see added, or submit a new one below.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularRequests.map((request, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/50">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{request.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{request.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{request.votes} votes</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleVote(request.name)}
                      >
                        Vote
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Request Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Suggest a New Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="categoryName">Category Name *</Label>
                      <Input 
                        id="categoryName" 
                        placeholder="e.g., Project Management"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estimatedTools">Estimated Number of Tools</Label>
                      <Input 
                        id="estimatedTools" 
                        type="number" 
                        min="1"
                        placeholder="e.g., 50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Category Description *</Label>
                    <Textarea 
                      id="description"
                      placeholder="Describe what types of tools would belong in this category and why it's needed..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Example Tools in this Category</Label>
                      <Button type="button" variant="outline" size="sm" onClick={addExampleTool}>
                        Add Example
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Provide 3-5 example tools that would fit in this category to help us understand the scope.
                    </p>
                    <div className="space-y-2">
                      {exampleTools.map((tool, index) => (
                        <div key={index} className="flex gap-2">
                          <Input 
                            value={tool}
                            onChange={(e) => updateExampleTool(index, e.target.value)}
                            placeholder="e.g., Trello, Asana, Monday.com"
                          />
                          {exampleTools.length > 1 && (
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="sm"
                              onClick={() => removeExampleTool(index)}
                            >
                              Remove
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="useCase">Use Case / Why is this needed? *</Label>
                    <Textarea 
                      id="useCase"
                      placeholder="Explain why this category is important and how it would help users discover tools..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="submitterEmail">Your Email *</Label>
                    <Input 
                      id="submitterEmail" 
                      type="email" 
                      placeholder="your@email.com"
                      required 
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll notify you when the category is added or if we need more information.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm">
                        Notify me about new categories and features on SoftHub.
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Submit Category Request
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Our team will review your suggestion and may contact you for additional details.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCategoryPage;