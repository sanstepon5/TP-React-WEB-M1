import * as React from 'react';
import Beer, { BeerData } from './Beer';
import {render} from "@testing-library/react";


interface Props {
}

interface State {
    beers: BeerData[];
    newBeerName: string;
}

class BeerList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            beers : [{name:"beer1"}],
            newBeerName: "",
        };
    }
    addBeer = (): void => {
        this.setState((state) => ({
            beers: state.beers.concat({name: state.newBeerName}), // Add the new beer to the state
            newBeerName : ""
        }));
    };
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ newBeerName: event.target.value });

    };

    render() {
        return (
            <div>
                <h1>Beer List</h1>
                <ul>
                    {this.state.beers.map((beer, index) => (
                        <Beer key={index} beer={beer}/>
                    ))}
                </ul>
                <input
                    type="text"
                    value={this.state.newBeerName}
                    onChange={this.handleInputChange}
                    placeholder="Enter beer name"
                />
                <button onClick={() => this.addBeer()}>Add Beer</button>
            </div>
        );
    }
}

export default BeerList;