import * as React from 'react';
import {render} from "@testing-library/react";
export interface BeerData {
    name: string;
}

interface Props {
    beer: BeerData;
    onRemove: () => void;
}

interface State {}

class Beer extends React.Component<Props, State> {
    render() {
        return (
            <><h1>{this.props.beer.name}</h1>
                <button onClick={this.props.onRemove}>Remove {this.props.beer.name}</button>
            </>
        );
    }
}

export default Beer;