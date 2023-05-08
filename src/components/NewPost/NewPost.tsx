import React, {useState} from "react";
import axios from "axios";
import {Post as PostType} from "@/interfaces/Post";

interface NewPostProps {
    onPostCreated: (post: PostType) => void;
}

const NewPost: React.FC<NewPostProps> = ({onPostCreated}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post<PostType>("/api/posts", {title, content});
            onPostCreated(response.data);
            setTitle("");
            setContent("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"
                />
                <textarea
                    placeholder="Post content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"
                />
                <button
                    type="submit"
                    className="w-full md:w-auto px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:bg-indigo-700"
                >
                    Submit Post
                </button>
            </form>
        </div>
    );
};

export default NewPost;