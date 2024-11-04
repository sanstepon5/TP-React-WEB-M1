import * as React from 'react';
import Beer, { BeerData } from './Beer';
import {render} from "@testing-library/react";


interface Props {
}

interface State {
    beers: BeerData[];
}

class BeerList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            beers : [{name:"beer1"}],
        };
    }
    addBeer = (name: string): void => {
        this.setState((state) => ({
            beers: state.beers.concat({name}), // Add the new beer to the state
        }));
    };


    render() {
        return (
            <div>
                <h1>Beer List</h1>
                <ul>
                    {this.state.beers.map((beer, index) => (
                        <Beer key={index} beer={beer} />
                    ))}
                </ul>
                <button onClick={() => this.addBeer(`Beer `)}>Add Beer</button>
            </div>
        );
    }
}
export default BeerList;