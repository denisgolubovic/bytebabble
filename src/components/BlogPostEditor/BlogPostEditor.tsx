import React, { useState } from 'react';
import { createPost } from '@/pages/api/posts';
import {useUser} from "@clerk/nextjs";

const BlogPostEditor: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {  user } = useUser()
    const [editorVisible, setEditorVisible] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newPost = {
            id: new Date().getMilliseconds(),
            title,
            content,
            author: user?.username || "Jane Doe",
            date: new Date().toISOString(),
        };
        try {
            await createPost(newPost);
            alert('Post created successfully');
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Failed to create post:', error);
            alert('Failed to create post');
        }
    };

    return (
        <>
            {!editorVisible &&   <button
                onClick={() => setEditorVisible(!editorVisible)}
                className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
                Create new post
            </button>}

            {editorVisible ? (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setEditorVisible(false)}></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="flex justify-end">
                                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                        onClick={() => setEditorVisible(false)}
                                >
                                </button>
                            </div>
                            <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                                <h4 className="text-lg font-medium text-gray-800">
                                    Create new post
                                </h4>
                                <p className="text-[15px] text-gray-600">
                                    Let's inspire someone!
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="relative">
                                        <input
                                            placeholder={"Title"}
                                            id="title"
                                            name="title"
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                            Content
                                        </label>
                                        <textarea
                                            placeholder={"What's on your mind?"}
                                            id="content"
                                            style={{height: '300px'}}
                                            name="content"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
                                        Create post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                // <div className="blog-post-editor bg-white shadow-md rounded-lg p-4">
                //     <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
                //     <form onSubmit={handleSubmit}>
                //         <div className="mb-4">
                //             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                //                 Title
                //             </label>
                //             <input
                //                 id="title"
                //                 name="title"
                //                 type="text"
                //                 value={title}
                //                 onChange={(e) => setTitle(e.target.value)}
                //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                //             />
                //         </div>
                //         <div className="mb-4">
                //             <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                //                 Content
                //             </label>
                //             <textarea
                //                 id="content"
                //                 name="content"
                //                 value={content}
                //                 onChange={(e) => setContent(e.target.value)}
                //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                //             />
                //         </div>
                //         <button
                //             type="submit"
                //             className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                //         >
                //             Create Post
                //         </button>
                //     </form>
                // </div>
            ): ''}
        </>
    );
};

export default BlogPostEditor;
