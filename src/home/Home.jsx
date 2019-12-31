import React, {Component} from "react";
import NewWord from "./NewWord";
import LastWords from "./LastWords";

class Home extends Component{
    render(){
        return(
            <div className="container">
                <NewWord />
                <LastWords />
            </div>
        );
    }
}

export default Home;