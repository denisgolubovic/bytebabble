import React from 'react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import PublicContent from '@/components/PublicContent';
import { useUser } from '@clerk/nextjs';
import {useRouter} from "next/router";

/**
 * Redirects the user to /dashboard if signed in, otherwise we show the PublicContent component.
 * @constructor
 */
const HomePage: React.FC = () => {
    const { isLoaded, isSignedIn } = useUser();
    const router = useRouter();

    React.useEffect(() => {
        if (isLoaded && isSignedIn) {
            router.push('/dashboard');
        }
    }, [isLoaded, isSignedIn, router]);

    return (
        <>
            <div className="bg-gray-100 min-h-screen bg-cover bg-center">
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    {isLoaded && !isSignedIn  && <PublicContent />}
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default HomePage;
