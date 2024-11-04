import * as React from 'react';
import {render} from "@testing-library/react";
export interface BeerData {
    name: string;
}

interface Props {
    beer: BeerData;
}

interface State {}

class Beer extends React.Component<Props, State> {
    render() {
        return (
            <h1>{this.props.beer.name}</h1>
        );
    }
}

export default Beer;