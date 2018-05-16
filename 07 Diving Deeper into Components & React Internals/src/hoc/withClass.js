import React from 'react';

const withClass = (className) => {
    return (props) => (
        <div className>
            {props.children}
        </div>
    )
}

export default withClass;