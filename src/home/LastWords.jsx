import React, {Component} from "react";
import { connect } from "react-redux";
import {toDeleteWord, toEditWord} from "../redux/actions";

class LastWords extends Component{
    constructor(props){
        super(props);
        this.state = {
            preEditWord: {},
            postEditWord: {word:"", translate:"", id:""}
        }
        this.handlerEdit = this.handlerEdit.bind(this);
        this.handlerEdit_Word = this.handlerEdit_Word.bind(this);
        this.handlerEdit_Translate = this.handlerEdit_Translate.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }

    handlerEdit = (word) =>{
        this.setState(
            {preEditWord: word,
            postEditWord: word},
        );
    }

    handlerEdit_Word = (e) =>{
        this.setState({postEditWord:{...this.state.postEditWord, word: e.target.value.trim().toLowerCase()}});
    }

    handlerEdit_Translate = (e) =>{
        this.setState({postEditWord:{...this.state.postEditWord, translate: e.target.value.trim().toLowerCase()}});
    }

    saveEdit = () =>{
        if(this.state.postEditWord.word !== "" && this.state.postEditWord.translate !== ""){
            this.props.toEditWord(this.state.preEditWord, this.state.postEditWord);
            this.setState({preEditWord:{}});
        }
    }

    render(){
        return(
            <div>
                <h2>Last Words</h2>
                {this.props.wordsList.map((word) => {
                    if(this.state.preEditWord !== word){
                        return(
                            <div key={word.id} style={{border: "2px solid red"}}>
                                <p>Word: {word.word}</p>
                                <p>Translate: {word.translate}</p>
                                <button type="button" onClick={() => this.props.toDeleteWord(word)}>Delete</button>
                                <button type="button" onClick={() => this.handlerEdit(word)}>Edit</button>
                            </div>
                        );
                    }
                    else{
                        return(
                            <div>
                                <form>
                                    <label htmlFor="word">Word:</label>
                                    <input type="text" id="word" value={this.state.postEditWord.word} onChange={(e) => this.handlerEdit_Word(e)} />
                                    <label htmlFor="translate">Translate:</label>
                                    <input type="text" id="translate" value={this.state.postEditWord.translate} onChange={(e) => this.handlerEdit_Translate(e)} />
                                    <button type="button" onClick={() => this.saveEdit()}>Save edit</button>
                                </form>
                            </div>
                        );
                    }
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
        toDeleteWord: (word) => dispatch(toDeleteWord(word)),
        toEditWord: (preEditWord, postEditWord) => dispatch(toEditWord(preEditWord, postEditWord))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LastWords);