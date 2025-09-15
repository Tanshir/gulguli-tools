import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, Upload, Link as LinkIcon, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "AI & Machine Learning",
  "Marketing & SEO", 
  "Design & Creative",
  "Productivity",
  "Security & Privacy",
  "Finance & Analytics",
  "Media & Video",
  "Analytics & Data"
];

const pricingOptions = [
  { value: "free", label: "Free" },
  { value: "freemium", label: "Freemium (Free + Paid)" },
  { value: "paid", label: "Paid Only" }
];

const platforms = [
  "Web", "Windows", "macOS", "Linux", "iOS", "Android", "Chrome Extension", "Firefox Extension"
];

const SubmitToolPage = () => {
  const { toast } = useToast();
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([""]);

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const updateFeature = (index: number, value: string) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tool Submitted!",
      description: "Thank you for your submission. We'll review it and get back to you within 2-3 business days.",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Submit a Tool</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help other developers discover amazing tools. Submit your favorite software or your own creation to our directory.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="toolName">Tool Name *</Label>
                    <Input id="toolName" placeholder="e.g., Figma" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shortDescription">Short Description *</Label>
                  <Input 
                    id="shortDescription" 
                    placeholder="Brief one-line description (max 120 characters)"
                    maxLength={120}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="longDescription">Detailed Description *</Label>
                  <Textarea 
                    id="longDescription"
                    placeholder="Provide a comprehensive description of the tool, its main features, and what makes it unique..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL *</Label>
                    <Input 
                      id="website" 
                      type="url" 
                      placeholder="https://example.com"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pricing">Pricing Model *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pricing model" />
                      </SelectTrigger>
                      <SelectContent>
                        {pricingOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platforms & Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5" />
                  Platforms & Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Supported Platforms *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {platforms.map(platform => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox 
                          id={platform}
                          checked={selectedPlatforms.includes(platform)}
                          onCheckedChange={() => handlePlatformToggle(platform)}
                        />
                        <Label htmlFor={platform} className="text-sm cursor-pointer">
                          {platform}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Key Features</Label>
                    <Button type="button" variant="outline" size="sm" onClick={addFeature}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Feature
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <Input 
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          placeholder="e.g., Real-time collaboration"
                        />
                        {features.length > 1 && (
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeFeature(index)}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="foundedYear">Founded Year</Label>
                    <Input 
                      id="foundedYear" 
                      type="number" 
                      min="1990" 
                      max={new Date().getFullYear()}
                      placeholder="e.g., 2020" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alternatives">Similar Tools / Alternatives</Label>
                  <Input 
                    id="alternatives" 
                    placeholder="e.g., Sketch, Adobe XD, InVision (comma-separated)"
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
                    We'll use this to contact you about your submission status. Not displayed publicly.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea 
                    id="additionalNotes"
                    placeholder="Any additional information you'd like to share about this tool..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submission */}
            <Card className="bg-secondary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I confirm that I have the right to submit this tool and that all information provided is accurate.
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="updates" />
                    <Label htmlFor="updates" className="text-sm">
                      Send me updates about new tools and features on GulGuli.
                    </Label>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Submit Tool for Review
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Our team will review your submission within 2-3 business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitToolPage;