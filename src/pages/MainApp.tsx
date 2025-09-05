import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Plus, 
  Home, 
  Users, 
  Stethoscope, 
  Brain,
  Search,
  Bell,
  Menu
} from "lucide-react";
import PostCreator from "@/components/PostCreator";
import ExpertConsultation from "@/components/ExpertConsultation";
import MentalHealthSupport from "@/components/MentalHealthSupport";

const MainApp = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [showPostCreator, setShowPostCreator] = useState(false);

  // Mock data for posts
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg",
        badge: "New Mom",
        verified: true
      },
      content: "Just discovered this amazing technique for getting my 6-month-old to sleep through the night! The key was establishing a consistent bedtime routine. Here's what worked for us...",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ["SleepTips", "NewMom", "6Months"]
    },
    {
      id: 2,
      author: {
        name: "Mike Rodriguez",
        avatar: "/placeholder.svg",
        badge: "Dad of 2",
        verified: false
      },
      content: "Looking for recommendations for educational toys for a 3-year-old. My daughter loves puzzles and building blocks. What has worked well for your toddlers?",
      timestamp: "4 hours ago",
      likes: 15,
      comments: 12,
      shares: 2,
      tags: ["Recommendations", "Toddler", "Educational"]
    },
    {
      id: 3,
      author: {
        name: "Dr. Emma Wilson",
        avatar: "/placeholder.svg",
        badge: "Pediatrician",
        verified: true
      },
      content: "Gentle reminder about the importance of tummy time for infants! Start with 2-3 minutes several times a day and gradually increase. It's crucial for developing neck and shoulder muscles. 💪",
      timestamp: "1 day ago",
      likes: 56,
      comments: 18,
      shares: 15,
      tags: ["PediatricAdvice", "TummyTime", "Development"]
    }
  ];

  const renderPost = (post: typeof posts[0]) => (
    <Card key={post.id} className="shadow-card border-0 transition-smooth hover:shadow-soft">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback className="bg-gradient-secondary">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{post.author.name}</h3>
              {post.author.verified && (
                <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-2.5 h-2.5 text-primary-foreground" fill="currentColor" />
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="secondary" className="text-xs">
                {post.author.badge}
              </Badge>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-foreground leading-relaxed mb-4">
          {post.content}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-accent/30">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 text-muted-foreground">
          <button className="flex items-center gap-2 hover:text-primary transition-smooth">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-primary transition-smooth">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-primary transition-smooth">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">{post.shares}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b shadow-card">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" fill="currentColor" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Parentified
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts, topics, experts..."
                className="pl-10 pr-4 py-2 bg-muted rounded-full border-0 focus:ring-2 focus:ring-primary/20 transition-smooth w-80"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-gradient-accent">You</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Navigation */}
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-card shadow-card">
            <TabsTrigger value="feed" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Feed</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
            <TabsTrigger value="experts" className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              <span className="hidden sm:inline">Experts</span>
            </TabsTrigger>
            <TabsTrigger value="wellness" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Wellness</span>
            </TabsTrigger>
          </TabsList>

          {/* Feed Content */}
          <TabsContent value="feed" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Feed</h2>
              <Button 
                onClick={() => setShowPostCreator(true)}
                className="bg-gradient-primary hover:bg-primary-hover shadow-button transition-smooth"
              >
                <Plus className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-secondary border-0 text-center py-4">
                <CardContent className="pb-0">
                  <div className="text-2xl font-bold">1.2k</div>
                  <div className="text-sm text-muted-foreground">Parents Connected</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-accent border-0 text-center py-4">
                <CardContent className="pb-0">
                  <div className="text-2xl font-bold">847</div>
                  <div className="text-sm text-muted-foreground">Tips Shared Today</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-primary border-0 text-center py-4 text-primary-foreground">
                <CardContent className="pb-0">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm opacity-90">Experts Online</div>
                </CardContent>
              </Card>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map(renderPost)}
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="text-center py-12">
              <Users className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">Community Groups</h2>
              <p className="text-muted-foreground">Connect with parents who share similar experiences and interests.</p>
            </div>
          </TabsContent>

          <TabsContent value="experts">
            <ExpertConsultation />
          </TabsContent>

          <TabsContent value="wellness">
            <MentalHealthSupport />
          </TabsContent>
        </Tabs>
      </div>

      {/* Post Creator Modal */}
      {showPostCreator && (
        <PostCreator onClose={() => setShowPostCreator(false)} />
      )}
    </div>
  );
};

export default MainApp;