import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store"
import Home from "./home/Home";

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>  
                <Home />
            </Provider>
        );
    }
}

export default App;