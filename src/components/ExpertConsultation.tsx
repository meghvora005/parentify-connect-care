import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Stethoscope, 
  Star, 
  Clock, 
  MessageCircle, 
  Video,
  Calendar,
  CheckCircle
} from "lucide-react";

const ExpertConsultation = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Pediatrician",
      specialization: "Newborn Care & Development",
      rating: 4.9,
      reviews: 234,
      experience: "12 years",
      avatar: "/placeholder.svg",
      isOnline: true,
      responseTime: "Usually responds within 2 hours",
      consultationFee: "$45",
      availability: "Available today"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Child Psychologist",
      specialization: "Behavioral Issues & Sleep Training",
      rating: 4.8,
      reviews: 189,
      experience: "8 years",
      avatar: "/placeholder.svg",
      isOnline: false,
      responseTime: "Usually responds within 4 hours",
      consultationFee: "$60",
      availability: "Next available: Tomorrow 2 PM"
    },
    {
      id: 3,
      name: "Dr. Lisa Wang",
      title: "Lactation Consultant",
      specialization: "Breastfeeding & Nutrition",
      rating: 5.0,
      reviews: 156,
      experience: "15 years",
      avatar: "/placeholder.svg",
      isOnline: true,
      responseTime: "Usually responds within 1 hour",
      consultationFee: "$35",
      availability: "Available now"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Stethoscope className="w-16 h-16 mx-auto text-primary mb-4" />
        <h2 className="text-3xl font-bold mb-2">Talk to Experts</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get professional advice from certified pediatricians, child psychologists, and specialists. 
          Available for both urgent questions and scheduled consultations.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-primary border-0 text-primary-foreground text-center">
          <CardContent className="pt-6">
            <MessageCircle className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Quick Question</h3>
            <p className="text-sm opacity-90 mb-4">Get answers to urgent questions</p>
            <Button variant="secondary" size="sm" className="shadow-button">
              Ask Now
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-secondary border-0 text-center">
          <CardContent className="pt-6">
            <Video className="w-8 h-8 mx-auto mb-3 text-secondary-foreground" />
            <h3 className="font-semibold mb-2">Video Consultation</h3>
            <p className="text-sm text-muted-foreground mb-4">Face-to-face expert guidance</p>
            <Button variant="outline" size="sm">
              Schedule Call
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 text-center">
          <CardContent className="pt-6">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-accent-foreground" />
            <h3 className="font-semibold mb-2">Follow-up Care</h3>
            <p className="text-sm text-muted-foreground mb-4">Ongoing support plans</p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Available Experts */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Available Experts</h3>
        <div className="grid gap-4">
          {experts.map((expert) => (
            <Card key={expert.id} className="shadow-card border-0 hover:shadow-soft transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={expert.avatar} />
                      <AvatarFallback className="bg-gradient-accent text-lg">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {expert.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold">{expert.name}</h4>
                        <p className="text-muted-foreground">{expert.title}</p>
                        <p className="text-sm text-primary font-medium">{expert.specialization}</p>
                      </div>
                      <Badge variant={expert.isOnline ? "default" : "secondary"} className="bg-green-100 text-green-800">
                        {expert.isOnline ? "Online" : "Offline"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{expert.rating}</span>
                        <span>({expert.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{expert.experience} experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{expert.responseTime}</p>
                    <p className="text-sm font-medium">{expert.availability}</p>
                    <p className="text-lg font-semibold text-primary">{expert.consultationFee}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:bg-primary-hover shadow-button transition-smooth"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Consult Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <Card className="bg-muted/50 border-0">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Stethoscope className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Professional Healthcare Notice</h4>
              <p className="text-sm text-muted-foreground">
                Our expert consultations are for guidance and educational purposes. For urgent medical concerns, 
                please contact your local emergency services or visit the nearest emergency room immediately.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertConsultation;