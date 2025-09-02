import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = ["Web Development", "Design", "Business", "Cloud Computing", "Security"];

const AddBlogPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    readTime: "",
    image: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.excerpt || !formData.content || !formData.category || !formData.author) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Blog Post Created!",
        description: "Your blog post has been successfully published",
      });
      setIsSubmitting(false);
      navigate('/blog');
    }, 1000);
  };

  const handlePreview = () => {
    if (!formData.title) {
      toast({
        title: "No Content to Preview",
        description: "Please add at least a title to preview",
        variant: "destructive"
      });
      return;
    }
    // For now, just show a toast. Could implement a preview modal later
    toast({
      title: "Preview Feature",
      description: "Preview functionality coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-brand-blue to-brand-orange bg-clip-text text-transparent">
              Create New Blog Post
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your insights and expertise with our community
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Blog Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  Title *
                </Label>
                <Input
                  id="title"
                  placeholder="Enter your blog post title..."
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Category and Author */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">
                    Category *
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author" className="text-sm font-medium">
                    Author *
                  </Label>
                  <Input
                    id="author"
                    placeholder="Your name"
                    value={formData.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                  />
                </div>
              </div>

              {/* Read Time and Image */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="readTime" className="text-sm font-medium">
                    Read Time
                  </Label>
                  <Input
                    id="readTime"
                    placeholder="e.g., 5 min read"
                    value={formData.readTime}
                    onChange={(e) => handleInputChange('readTime', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image" className="text-sm font-medium">
                    Featured Image URL
                  </Label>
                  <Input
                    id="image"
                    placeholder="https://example.com/image.jpg"
                    value={formData.image}
                    onChange={(e) => handleInputChange('image', e.target.value)}
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-sm font-medium">
                  Excerpt *
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief description of your blog post..."
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  rows={3}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content" className="text-sm font-medium">
                  Content *
                </Label>
                <Textarea
                  id="content"
                  placeholder="Write your blog post content here..."
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  rows={12}
                  className="resize-none"
                />
                <p className="text-sm text-muted-foreground">
                  Tip: You can use basic HTML tags for formatting
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button
                  variant="outline"
                  onClick={handlePreview}
                  className="flex-1"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Publishing...' : 'Publish Post'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddBlogPage;