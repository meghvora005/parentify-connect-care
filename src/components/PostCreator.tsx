import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  X, 
  Image as ImageIcon, 
  Tag, 
  MapPin, 
  Users,
  Lightbulb,
  HelpCircle,
  Heart
} from "lucide-react";

interface PostCreatorProps {
  onClose: () => void;
}

const PostCreator = ({ onClose }: PostCreatorProps) => {
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [postType, setPostType] = useState<"tip" | "question" | "celebration" | "general">("general");

  const suggestedTags = [
    "NewMom", "NewDad", "Toddler", "Newborn", "SleepTips", "Feeding", 
    "Development", "Safety", "Activities", "Recommendations", "Support"
  ];

  const postTypes = [
    { id: "tip", label: "Share a Tip", icon: Lightbulb, color: "bg-sage-green" },
    { id: "question", label: "Ask for Help", icon: HelpCircle, color: "bg-lavender" },
    { id: "celebration", label: "Celebrate", icon: Heart, color: "bg-warm-coral" },
    { id: "general", label: "General Post", icon: Users, color: "bg-muted" }
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handlePost = () => {
    // This would typically send to backend/database
    console.log("Posting:", { content, selectedTags, postType });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-soft border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Share with the Community</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-gradient-accent">You</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Your Name</div>
              <div className="text-sm text-muted-foreground">Sharing to Parent Community</div>
            </div>
          </div>

          {/* Post Type Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">What kind of post is this?</label>
            <div className="grid grid-cols-2 gap-2">
              {postTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setPostType(type.id as any)}
                    className={`p-3 rounded-lg border-2 transition-smooth text-left ${
                      postType === type.id 
                        ? 'border-primary bg-primary/10' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${type.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-3 h-3 text-background" />
                      </div>
                      <span className="text-sm font-medium">{type.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Input */}
          <div className="space-y-2">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                postType === "tip" ? "Share your parenting tip or trick..." :
                postType === "question" ? "What would you like help with?" :
                postType === "celebration" ? "What milestone or joy would you like to celebrate?" :
                "What's on your mind? Share with fellow parents..."
              }
              className="min-h-[120px] resize-none border-0 bg-muted focus-visible:ring-primary/20"
            />
          </div>

          {/* Media Options */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="transition-smooth">
              <ImageIcon className="w-4 h-4 mr-2" />
              Add Photo
            </Button>
            <Button variant="outline" size="sm" className="transition-smooth">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Button>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <label className="text-sm font-medium">Add tags to help others find your post</label>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-smooth ${
                    selectedTags.includes(tag) 
                      ? 'bg-primary hover:bg-primary-hover' 
                      : 'hover:bg-accent'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              {content.length}/500 characters
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                onClick={handlePost}
                disabled={!content.trim()}
                className="bg-gradient-primary hover:bg-primary-hover shadow-button transition-smooth"
              >
                Share Post
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostCreator;