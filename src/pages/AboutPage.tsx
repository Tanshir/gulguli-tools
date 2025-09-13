import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Shield,
  TrendingUp,
  Mail,
  Github,
  Twitter
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Tools Listed", value: "1,200+", icon: Zap },
    { label: "Categories", value: "25+", icon: Target },
    { label: "Monthly Users", value: "50K+", icon: Users },
    { label: "Countries", value: "120+", icon: Globe }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community-Driven",
      description: "Built by developers, for developers. Every tool recommendation comes from real user experiences."
    },
    {
      icon: Shield,
      title: "Quality First", 
      description: "We carefully review every submission to ensure only high-quality, legitimate tools make it to our directory."
    },
    {
      icon: TrendingUp,
      title: "Always Updated",
      description: "Our database is constantly updated with the latest tools, pricing changes, and feature updates."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We feature tools from around the world, giving you access to the best software regardless of origin."
    }
  ];

  const team = [
    {
      name: "Alex Chen", 
      role: "Founder & CEO",
      bio: "Former software engineer at Google with a passion for discovering and sharing great tools."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Curation", 
      bio: "Expert in software evaluation with 10+ years of experience in tech product management."
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer focused on creating the best possible user experience for tool discovery."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              About SoftHub
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Helping developers discover the <span className="text-primary">perfect tools</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              SoftHub is the most comprehensive directory of software tools, built by the developer community to help you find, compare, and choose the right tools for your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To democratize access to the world's best software tools and help every developer, entrepreneur, and creator find the perfect solution for their needs.
              </p>
            </div>

            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Why SoftHub Exists</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    In 2023, we noticed a problem: developers and creators were spending countless hours researching tools, jumping between review sites, and struggling to find reliable information about software solutions. The landscape was fragmented, biased, and often outdated.
                  </p>
                  <p className="mb-4">
                    We built SoftHub to solve this. Our platform brings together comprehensive tool information, real user reviews, and expert curation in one place. Whether you're a solo developer looking for the perfect code editor or a startup founder building your tech stack, SoftHub helps you make informed decisions quickly.
                  </p>
                  <p>
                    Today, SoftHub serves over 50,000 developers and creators worldwide, helping them discover tools that boost productivity, enhance creativity, and drive business growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do at SoftHub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
              <p className="text-lg text-muted-foreground">
                The passionate individuals behind SoftHub's mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions, suggestions, or want to collaborate? We'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Twitter className="w-4 h-4" />
                Follow Us
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-4 h-4" />
                Contribute
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;