import React, {Component} from "react";
import {connect} from "react-redux";
import {addWord} from "../redux/actions";

class NewWord extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentWord: "",
            currentTranslate: ""
        }
        this.handlerWordInput = this.handlerWordInput.bind(this);
        this.handlerTranslateInput = this.handlerTranslateInput.bind(this);
    }

    handlerWordInput = (e) =>{
        this.setState({currentWord: e.target.value});
    }

    handlerTranslateInput = (e) =>{
        this.setState({currentTranslate: e.target.value});
    }

    render(){
        return(
            <div>
                <h2>Add word</h2>
                <form>
                    <label htmlFor="word">Word:</label>
                    <input type="text" id="word" onChange={(e) => this.handlerWordInput(e)} />
                    <label htmlFor="translate">Translate:</label>
                    <input type="text" id="translate" onChange={(e) => this.handlerTranslateInput(e)} />
                    <button type="button" onClick={() => this.props.addWord(this.state.currentWord, this.state.currentTranslate)}>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        words: state.wordsList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addWord: (word, translate) => dispatch(addWord(word, translate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWord) ;