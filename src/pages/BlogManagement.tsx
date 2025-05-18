
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardHeader,
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { BlogPostType } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { formatDate } from '@/lib/utils';
import { blogPosts as defaultBlogPosts } from '@/data/blogPosts';

const BlogManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<BlogPostType | null>(null);

  // Check authentication
  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth !== 'true') {
      navigate('/admin');
      return;
    }
    setIsAuthenticated(true);
    
    // Load blog posts
    loadBlogPosts();
  }, [navigate]);

  // Load blog posts from localStorage and merge with default posts
  const loadBlogPosts = () => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    // Create a map of default posts for reference
    const defaultPostsMap = new Map(
      defaultBlogPosts.map(post => [post.slug, post])
    );
    
    // Add all stored posts and mark them as custom
    const allPosts = [...storedPosts.map((post: BlogPostType) => ({
      ...post,
      isCustom: true
    }))];
    
    // Add default posts that aren't overridden by custom posts
    defaultBlogPosts.forEach(post => {
      if (!allPosts.some(p => p.slug === post.slug)) {
        allPosts.push({
          ...post,
          isCustom: false
        });
      }
    });
    
    // Sort by date (newest first)
    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setBlogPosts(allPosts);
  };

  const handleEdit = (post: BlogPostType) => {
    navigate(`/blog-editor/${post.slug}`);
  };

  const confirmDelete = (post: BlogPostType) => {
    setPostToDelete(post);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = () => {
    if (!postToDelete) return;
    
    // Can only delete custom posts
    if (postToDelete.isCustom) {
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const updatedPosts = storedPosts.filter(
        (post: BlogPostType) => post.slug !== postToDelete.slug
      );
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      
      toast({
        title: "Post deleted",
        description: "Blog post has been successfully removed"
      });
      
      loadBlogPosts();
    }
    
    setIsDeleteDialogOpen(false);
    setPostToDelete(null);
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
            <span className="text-gradient">Blog Management</span>
          </h1>
          <div className="space-x-4">
            <Button 
              variant="outline" 
              className="border-white/20 text-white"
              onClick={() => navigate('/admin')}
            >
              Back to Admin
            </Button>
            <Button onClick={() => navigate('/blog-editor')}>
              Create New Post
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {blogPosts.length === 0 ? (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center">
              <p>No blog posts found. Start by creating a new post.</p>
            </Card>
          ) : (
            blogPosts.map((post) => (
              <Card 
                key={post.slug} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-40 md:h-auto bg-futuristic-dark">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://placehold.co/800x400/152535/ffffff?text=AI+Technology';
                      }}
                    />
                  </div>
                  <div className="w-full md:w-3/4 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{post.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-white/70 mt-1">
                            <span>{formatDate(post.date)}</span>
                            <span>{post.readTime} read</span>
                            {!post.isCustom && (
                              <span className="bg-futuristic-cyan/30 px-2 py-0.5 rounded-full text-xs">
                                Default
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0 mb-4">
                      <p className="text-white/70 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="bg-futuristic-purple/30 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-0 flex justify-end space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-white/20 text-white"
                        onClick={() => handleEdit(post)}
                      >
                        Edit
                      </Button>
                      {post.isCustom && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-red-500/50 text-red-400 hover:bg-red-950/30"
                          onClick={() => confirmDelete(post)}
                        >
                          Delete
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
      <Footer />

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="bg-futuristic-dark border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription className="text-white/70">
              Are you sure you want to delete "{postToDelete?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="border-white/20 text-white"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogManagement;
