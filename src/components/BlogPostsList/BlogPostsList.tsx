import React from 'react';
import {Post, Post as PostType} from '@/interfaces/Post';
import PostsList from '@/components/PostsList';

interface BlogPostsListProps {
    posts: Post[];
}
//TODO: Add events from server with webhooks or similar to update whenever we get a new blog post to the database.

const BlogPostsList: React.FC<BlogPostsListProps> = ({posts}) => {

    return (
        <div className="blog-posts-list">
            <h2 className="text-3xl font-bold mb-4 mt-0">Recent Blog Posts</h2>
            <div className="bg-gray-200 p-4 rounded-md">
                <PostsList posts={posts} />
            </div>
        </div>
    );

};

export default BlogPostsList;
