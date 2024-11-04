import * as React from 'react';
import Beer from "./Beer";

interface Props {
    beers: string[];
}

interface State {
    count: number;
}

class BeerList extends React.Component<Props, State> {
    state: State = {
        count: 0
    };

    render () {
        return (
            <ul>
                {this.props.beers.map((x, i) =>
                    <Beer name={x} />
                )}
            </ul>
        );
    }
}

export default BeerList;