import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Phone,
  Send,
  HelpCircle,
  Bug,
  Lightbulb,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactReasons = [
  { value: "general", label: "General Inquiry", icon: HelpCircle },
  { value: "support", label: "Technical Support", icon: MessageSquare },
  { value: "bug", label: "Report a Bug", icon: Bug },
  { value: "feature", label: "Feature Request", icon: Lightbulb },
  { value: "partnership", label: "Partnership/Business", icon: Briefcase },
  { value: "other", label: "Other", icon: Mail }
];

const ContactPage = () => {
  const { toast } = useToast();
  const [selectedReason, setSelectedReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question, suggestion, or need help? We're here to assist you. Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@softhub.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-2 h-auto p-3">
                      <HelpCircle className="w-4 h-4" />
                      <div className="text-left">
                        <p className="font-medium">FAQ</p>
                        <p className="text-xs text-muted-foreground">Common questions</p>
                      </div>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start gap-2 h-auto p-3">
                      <Bug className="w-4 h-4" />
                      <div className="text-left">
                        <p className="font-medium">Report Issue</p>
                        <p className="text-xs text-muted-foreground">Found a bug?</p>
                      </div>
                    </Button>
                    
                    <Button variant="ghost" className="w-full justify-start gap-2 h-auto p-3">
                      <Lightbulb className="w-4 h-4" />
                      <div className="text-left">
                        <p className="font-medium">Feature Request</p>
                        <p className="text-xs text-muted-foreground">Suggest improvements</p>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">SoftHub HQ</p>
                      <p className="text-sm text-muted-foreground">
                        123 Tech Street<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">What can we help you with? *</Label>
                      <Select value={selectedReason} onValueChange={setSelectedReason} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map(reason => {
                            const Icon = reason.icon;
                            return (
                              <SelectItem key={reason.value} value={reason.value}>
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4" />
                                  {reason.label}
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="Brief description of your message"
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        placeholder="Please provide as much detail as possible to help us assist you better..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="normal">Normal - Standard support</SelectItem>
                          <SelectItem value="high">High - Issue affecting work</SelectItem>
                          <SelectItem value="urgent">Urgent - Critical issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Help */}
          <div className="mt-12">
            <Card className="bg-secondary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-muted-foreground mb-6">
                  For urgent technical issues or if you need immediate assistance, try these resources:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">
                    Check Status Page
                  </Button>
                  <Button variant="outline">
                    Browse Documentation
                  </Button>
                  <Button variant="outline">
                    Community Forum
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;