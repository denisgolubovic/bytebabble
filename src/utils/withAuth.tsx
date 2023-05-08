import React from 'react';
import { useUser } from '@clerk/nextjs';

type WrappedComponentProps = {
    [key: string]: any;
};
/**
 * Checks if the user is signed in or not and returns a WrappedComponent with the properties if the user is in fact
 * signed in.
 * @param WrappedComponent
 */
const withAuth = <P extends WrappedComponentProps>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
    return (props: P) => {
        const { isLoaded, isSignedIn } = useUser();

        if (isLoaded && isSignedIn) {
            return <WrappedComponent {...props} />;
        } else {
            return null;
        }
    };
};

export default withAuth;
