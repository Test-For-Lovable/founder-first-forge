
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card,
  CardContent,
  CardFooter 
} from '@/components/ui/card';
import { BlogPostType } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { blogPosts } from '@/data/blogPosts';

const BlogEditor = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initialBlogState: BlogPostType = {
    id: Date.now(),
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Usama Ahmed',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min',
    coverImage: 'https://placehold.co/800x400/152535/ffffff?text=New+Blog+Post',
    tags: []
  };

  const [blogPost, setBlogPost] = useState<BlogPostType>(initialBlogState);
  const [tagInput, setTagInput] = useState('');

  // Check authentication
  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin');
      return;
    }
    setIsAuthenticated(true);

    // If we're editing an existing post, load it
    if (slug) {
      // Try to get from localStorage first
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const existingPost = storedPosts.find((post: BlogPostType) => post.slug === slug);
      
      if (existingPost) {
        setBlogPost(existingPost);
      } else {
        // If not in localStorage, check default posts
        const defaultPost = blogPosts.find(post => post.slug === slug);
        if (defaultPost) {
          setBlogPost(defaultPost);
        } else {
          toast({
            title: "Post not found",
            description: "Could not find the blog post you're looking for",
            variant: "destructive",
          });
          navigate('/blog-management');
        }
      }
    }
  }, [navigate, slug, toast]);

  // Update slug when title changes
  useEffect(() => {
    if (!blogPost.title) return;
    
    const newSlug = blogPost.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
      
    setBlogPost(prev => ({ ...prev, slug: newSlug }));
  }, [blogPost.title]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlogPost(prev => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (tagInput && !blogPost.tags.includes(tagInput)) {
      setBlogPost(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setBlogPost(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const saveBlogPost = () => {
    // Validate required fields
    if (!blogPost.title || !blogPost.content || !blogPost.excerpt) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Get existing posts from localStorage
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    let updatedPosts;
    
    if (slug) {
      // Update existing post
      updatedPosts = existingPosts.map((post: BlogPostType) => 
        post.slug === slug ? blogPost : post
      );
      
      // If post wasn't found in localStorage, it might be a default post we're editing
      if (!updatedPosts.some((post: BlogPostType) => post.slug === blogPost.slug)) {
        updatedPosts.push(blogPost);
      }
    } else {
      // Add new post
      updatedPosts = [...existingPosts, blogPost];
    }
    
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    toast({
      title: "Success!",
      description: `Blog post ${slug ? 'updated' : 'created'} successfully`,
    });
    
    navigate('/blog-management');
  };

  if (!isAuthenticated) {
    return null; // Redirect happens in useEffect
  }

  return (
    <div className="min-h-screen bg-futuristic-dark text-white">
      <NavBar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-gradient">
              {slug ? 'Edit Blog Post' : 'Create New Blog Post'}
            </span>
          </h1>
          <Button 
            variant="outline" 
            className="border-white/20 text-white"
            onClick={() => navigate('/blog-management')}
          >
            Back to Management
          </Button>
        </div>
        
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium">
                  Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  value={blogPost.title}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Enter blog title"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="slug" className="block mb-2 text-sm font-medium">
                  Slug
                </label>
                <Input
                  id="slug"
                  name="slug"
                  value={blogPost.slug}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Auto-generated from title"
                  disabled
                />
              </div>
              
              <div>
                <label htmlFor="excerpt" className="block mb-2 text-sm font-medium">
                  Excerpt *
                </label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={blogPost.excerpt}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white min-h-[100px]"
                  placeholder="Brief summary of the blog post"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block mb-2 text-sm font-medium">
                  Content *
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={blogPost.content}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white min-h-[400px]"
                  placeholder="Blog content (markdown supported)"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="coverImage" className="block mb-2 text-sm font-medium">
                  Cover Image URL
                </label>
                <Input
                  id="coverImage"
                  name="coverImage"
                  value={blogPost.coverImage}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="author" className="block mb-2 text-sm font-medium">
                    Author
                  </label>
                  <Input
                    id="author"
                    name="author"
                    value={blogPost.author}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium">
                    Date
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={blogPost.date}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="readTime" className="block mb-2 text-sm font-medium">
                    Read Time
                  </label>
                  <Input
                    id="readTime"
                    name="readTime"
                    value={blogPost.readTime}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="5 min"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {blogPost.tags.map(tag => (
                    <div 
                      key={tag} 
                      className="bg-futuristic-purple/30 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button 
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-white/70 hover:text-white"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Add a tag"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />
                  <Button 
                    type="button" 
                    onClick={addTag} 
                    variant="outline"
                    className="border-white/20 text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <div className="flex justify-end gap-4 w-full">
              <Button 
                variant="outline" 
                className="border-white/20 text-white"
                onClick={() => navigate('/blog-management')}
              >
                Cancel
              </Button>
              <Button onClick={saveBlogPost}>
                {slug ? 'Update' : 'Publish'} Blog Post
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default BlogEditor;
