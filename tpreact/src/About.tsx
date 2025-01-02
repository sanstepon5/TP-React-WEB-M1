import * as React from 'react';

const About: React.FunctionComponent
    = () => {
    return <>
        <h1>TP React (WEB M1 IL)</h1><h2> Authors </h2><p>Stepan Tyurin, Yvan Douis - M1 Informatique IL</p>
        <p>2024-2025</p>
        <h2>Application details</h2><p>This
        React app was made for a Web Engineering class.</p><p>The application allows to visualize a list of beers
        and add or remove them. It also
        contains an "about" page available at http://localhost:4200/about thanks to routing</p>
        <a href="/">Home</a>
    </>
        ;
};

export default About;