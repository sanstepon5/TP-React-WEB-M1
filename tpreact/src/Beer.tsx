import * as React from 'react';

const Beer: React.FunctionComponent<{ name: string; }>
    = (props) => {
    return <h1>{props.name}</h1>;
};

export default Beer;