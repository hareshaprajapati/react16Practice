import React from 'react';

const withClass = (WrappedCompnent,className) =>
        props => (
    <div className={className}>
        <WrappedCompnent {...props}/>
    </div>
);

export default withClass