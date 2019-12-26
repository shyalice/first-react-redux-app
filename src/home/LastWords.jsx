import React, {Component} from "react";
import { connect } from "react-redux";
import {deleteWord} from "../redux/actions";

class LastWords extends Component{
    render(){
        return(
            <div>
                <h2>Last Words</h2>
                {this.props.wordsList.map(word => {
                    return(
                        <div style={{border: "2px solid red"}}>
                            <p>Word: {word.word}</p>
                            <p>Translate: {word.translate}</p>
                            <button type="button" onClick={() => this.props.deleteWord(word)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        wordsList: state.wordsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteWord: (word) => dispatch(deleteWord(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LastWords);