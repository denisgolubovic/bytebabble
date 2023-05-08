import React from 'react';
import {GetServerSideProps} from "next";
import {fetchPosts} from "@/pages/api/posts";
import {Post} from "@/interfaces/Post";
import BlogPostsList from '@/components/BlogPostsList';
import BlogPostEditor from '@/components/BlogPostEditor';
import Analytics from '@/components/Analytics';
import withAuth from '@/utils/withAuth';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface DashboardProps {
    posts: Post[];
}

const Dashboard: React.FC<DashboardProps> = ({posts}) => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen bg-cover bg-center">
                <Navbar />
                <div className="dashboard">
                    <div className="mt-8 mx-auto">
                        <BlogPostEditor />
                    </div>
                    <div className="mt-24 mx-auto max-w-5xl">
                    <BlogPostsList posts={posts} />
                    </div>
                    {/*<Analytics/>*/}
                </div>
                <Footer />
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const posts = await fetchPosts();

    return {
        props: {
            posts,
        },
    };
};

export default withAuth(Dashboard);
