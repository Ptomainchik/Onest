import React from "react";

export function withAuthRedirect<WCP extends object>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<div>loading...</div>} >
            <WrappedComponent {...props} />
        </React.Suspense>
    }
}