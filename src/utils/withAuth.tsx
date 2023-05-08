import React from 'react';
import { useUser } from '@clerk/nextjs';

type WrappedComponentProps = {
    [key: string]: any;
};

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
