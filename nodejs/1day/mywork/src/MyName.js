import React, {Component, Fragment} from 'react';
import './App.css';

class MyName extends Component{
    render (){
        return(
            <h1> {this.props.name} 안녕하세요. </h1>
        );
    }
}

export default MyName;

// import React, {Component, Fragment} from 'react';
// import './App.css';


// class myName extends Component{
//     render (){
//         return(
//             <h1>안녕하세요.</h1>
//         );
//     }
// }

// export default myName;