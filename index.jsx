import React from 'react';
import ReactDOM from 'react-dom';

// const Test = () => {
//     return (
//         <h1>Hello!</h1>
//     )
// };

class Test extends React.Component {
    constructor() {
        super();
    }

    state = {

    };
    
    render () {
        return (<h1>Hello React!!</h1>)
    }
}

ReactDOM.render(<Test/>, document.querySelector('#root'));