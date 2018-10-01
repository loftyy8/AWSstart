import React from 'react';

class App extends React.Component {
    render(){
        return (
            <div classname="store">
            <div classname="menu">
            <Header />
            </div>
            <Inventory />
            <Order />
            
            </div>
            );
        }
    }
    
    export default App;