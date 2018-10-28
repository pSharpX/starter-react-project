import React from 'react';

const ListView = (props) => {
    return (
        <ul className="list-group">
            {props.children}
        </ul>
    );
};
export default ListView;