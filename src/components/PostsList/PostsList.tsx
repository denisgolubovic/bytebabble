import React from "react";
import { Post as PostType } from "@/interfaces/Post";
import {ClipLoader} from "react-spinners";

interface PostsListProps {
    posts: PostType[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
    if (!posts) {
        return (
            <div className="flex justify-center items-center">
                <ClipLoader color="#123abc" loading={true} size={50} />
            </div>
        );
    }
    const sortedPosts = posts.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


    return (
        <section className="mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="grid gap-4">
                {
                    sortedPosts.map((post) => (
                        <article className="mt-5 pt-8 md:pt-0" key={post.id}>
                            <a>
                                <span className="block text-gray-400 text-sm">
                                    {post.date}
                                </span>
                                <div className="mt-2">
                                    <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 mt-1 leading-relaxed">
                                        {post.content}
                                    </p>
                                </div>
                            </a>
                            <span className="mt-3 block text-gray-700 text-sm">
                                Written by {post.author}
                            </span>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};

export default PostsList;
