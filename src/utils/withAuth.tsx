import React from 'react';
import { useUser } from '@clerk/nextjs';
import {useRouter} from "next/router";


type WrappedComponentProps = {
    [key: string]: any;
};
/**
 * A HOC that checks if the user is signed in or not and returns a WrappedComponent with the properties if the user is in fact
 * signed in.
 * @param WrappedComponent
 */
const withAuth = (WrappedComponent: React.ComponentType) => {
    const WithAuthComponent: React.FC = (props) => {
        const { isLoaded, isSignedIn } = useUser();
        const router = useRouter();

        React.useEffect(() => {
            if (isLoaded && !isSignedIn) {
                router.push('/');
            }
        }, [isLoaded, isSignedIn, router]);

        return <>{isSignedIn && <WrappedComponent {...props} />}</>;
    };

    return WithAuthComponent;
};

export default withAuth;
