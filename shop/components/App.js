import React from 'react';
import Header from "./Header";
import Itinary from "./Itinary";
import Order from "./Order";

class App extends React.Component {
    render(){
        return (
            <div classname="store">
            <div classname="menu">
            <Header />
            </div>
            <Itinary />
            <Order />
            
            </div>
            );
        }
    }
    
    export default App;