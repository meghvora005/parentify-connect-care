import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Heart, 
  Users, 
  BookOpen, 
  Phone, 
  Calendar,
  MessageSquare,
  Headphones,
  Star,
  Shield
} from "lucide-react";

const MentalHealthSupport = () => {
  const supportGroups = [
    {
      name: "Postpartum Support Circle",
      description: "A safe space for mothers experiencing postpartum challenges",
      members: 156,
      nextSession: "Today 7:00 PM",
      isActive: true
    },
    {
      name: "New Dad Support Network",
      description: "Support and guidance for fathers navigating early parenthood",
      members: 89,
      nextSession: "Tomorrow 8:00 PM",
      isActive: false
    },
    {
      name: "Single Parents United",
      description: "Community support for single parents facing unique challenges",
      members: 203,
      nextSession: "Wednesday 6:30 PM",
      isActive: false
    }
  ];

  const resources = [
    {
      title: "Managing Parental Anxiety",
      type: "Article",
      readTime: "5 min read",
      rating: 4.8,
      description: "Evidence-based strategies for dealing with parenting anxiety and worry"
    },
    {
      title: "Sleep Deprivation & Mental Health",
      type: "Guide",
      readTime: "8 min read",
      rating: 4.9,
      description: "Understanding the connection between sleep loss and emotional wellbeing"
    },
    {
      title: "Building Resilience as a Parent",
      type: "Worksheet",
      readTime: "Interactive",
      rating: 4.7,
      description: "Practical exercises to develop emotional resilience in your parenting journey"
    }
  ];

  const therapists = [
    {
      name: "Dr. Jennifer Martinez",
      specialty: "Perinatal Mental Health",
      experience: "10 years",
      rating: 4.9,
      isAvailable: true,
      sessionFee: "$120"
    },
    {
      name: "Dr. Robert Kim",
      specialty: "Family Therapy",
      experience: "8 years",
      rating: 4.8,
      isAvailable: false,
      sessionFee: "$100"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Brain className="w-16 h-16 mx-auto text-primary mb-4" />
        <h2 className="text-3xl font-bold mb-2">Mental Health & Wellness</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your mental health matters. Find support, resources, and professional help to navigate 
          the emotional challenges of parenthood with confidence and resilience.
        </p>
      </div>

      {/* Crisis Support Banner */}
      <Card className="bg-destructive/10 border-destructive/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-destructive mb-1">Crisis Support Available 24/7</h4>
              <p className="text-sm text-muted-foreground">
                If you're experiencing a mental health crisis, call the National Suicide Prevention Lifeline: 
                <strong className="ml-1 text-foreground">988</strong>
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Get Help Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="support" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-card shadow-card">
          <TabsTrigger value="support">Support Groups</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="therapy">Therapy</TabsTrigger>
          <TabsTrigger value="wellness">Wellness Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="support" className="space-y-4">
          <div className="grid gap-4">
            {supportGroups.map((group, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-soft transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        {group.isActive && (
                          <Badge className="bg-green-100 text-green-800">Live</Badge>
                        )}
                      </div>
                      <CardDescription>{group.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{group.members} members</div>
                      <div className="text-sm font-medium">{group.nextSession}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Moderated by licensed therapists</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Join Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-soft transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{resource.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                            <span>•</span>
                            <span>{resource.readTime}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{resource.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Read
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="therapy" className="space-y-4">
          <div className="grid gap-4">
            {therapists.map((therapist, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-soft transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{therapist.name}</h4>
                        {therapist.isAvailable && (
                          <Badge className="bg-green-100 text-green-800">Available</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-1">{therapist.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{therapist.experience} experience</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{therapist.rating}</span>
                        </div>
                        <span className="font-medium text-primary">{therapist.sessionFee}/session</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-primary hover:bg-primary-hover shadow-button transition-smooth"
                        disabled={!therapist.isAvailable}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50 border-0">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Confidential & Secure</h4>
                  <p className="text-sm text-muted-foreground">
                    All therapy sessions are conducted by licensed professionals and are completely confidential. 
                    Your privacy and security are our top priorities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellness" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gradient-secondary border-0 text-center">
              <CardContent className="pt-6">
                <Headphones className="w-12 h-12 mx-auto mb-4 text-secondary-foreground" />
                <h3 className="font-semibold mb-2">Guided Meditation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  5-minute mindfulness sessions designed for busy parents
                </p>
                <Button variant="outline" size="sm">
                  Start Session
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent border-0 text-center">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-accent-foreground" />
                <h3 className="font-semibold mb-2">Mood Tracker</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Track your daily emotional wellbeing and identify patterns
                </p>
                <Button variant="outline" size="sm">
                  Track Mood
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentalHealthSupport;