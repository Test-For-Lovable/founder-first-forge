
import { useState, useEffect } from 'react';
import { BlogPostType } from '@/types/blog';
import { blogPosts as defaultBlogPosts } from '@/data/blogPosts';

/**
 * A hook to fetch blog posts from localStorage and default data
 */
export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load blog posts from localStorage and merge with defaults
    const loadPosts = () => {
      setLoading(true);
      
      try {
        const storedPostsString = localStorage.getItem('blogPosts');
        const storedPosts: BlogPostType[] = storedPostsString 
          ? JSON.parse(storedPostsString) 
          : [];
        
        // Create a map of stored posts by slug for quick lookup
        const storedPostMap = new Map(storedPosts.map(post => [post.slug, post]));
        
        // Start with stored posts
        const allPosts = [...storedPosts];
        
        // Add default posts that aren't overridden by stored posts
        defaultBlogPosts.forEach(defaultPost => {
          if (!storedPostMap.has(defaultPost.slug)) {
            allPosts.push(defaultPost);
          }
        });
        
        // Sort by date (newest first)
        allPosts.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        
        setBlogPosts(allPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        // Fall back to default posts on error
        setBlogPosts([...defaultBlogPosts]);
      } finally {
        setLoading(false);
      }
    };
    
    loadPosts();
    
    // Add event listener to detect changes in other tabs/windows
    window.addEventListener('storage', loadPosts);
    
    return () => {
      window.removeEventListener('storage', loadPosts);
    };
  }, []);

  /**
   * Get a single blog post by slug
   * @param slug The slug to look for
   * @returns The blog post or undefined if not found
   */
  const getBlogPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
  };

  return {
    blogPosts,
    loading,
    getBlogPostBySlug
  };
}
