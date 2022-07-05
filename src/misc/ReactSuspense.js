import React from 'react';

const LazyComponent = React.lazy(() => new Promise(function (resolve, reject) {
    setTimeout(() => {
        return resolve(import('./LazyComponent'))
    }, 5000)
}))

function SuspenseExample() {

    return (
        <div>
            <p>
                Hi, this is the parent component
            </p>
            <React.Suspense fallback={<p>Loading...</p>}>
                <LazyComponent />
            </React.Suspense>
        </div>
    )
}

export default SuspenseExample;