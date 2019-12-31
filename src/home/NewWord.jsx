import React, {Component} from "react";
import {connect} from "react-redux";
import {toAddWord} from "../redux/actions";

class NewWord extends Component{
    constructor(props){
        super(props);
        this.state = {
            addedWord:{
                word: "",
                translate: "",
                id: '_' + Math.random().toString(36).substr(2, 9)
            }
        }
        this.handlerAdd_Word = this.handlerAdd_Word.bind(this);
        this.handlerAdd_Translate = this.handlerAdd_Translate.bind(this);
        this.AddWord = this.AddWord.bind(this);
    }
    handlerAdd_Word = (e) =>{
        this.setState({addedWord:{...this.state.addedWord, word: e.target.value.trim().toLowerCase()}});
    }

    handlerAdd_Translate = (e) =>{
        this.setState({addedWord:{...this.state.addedWord, translate: e.target.value.trim().toLowerCase()}});
    }
    AddWord = () =>{
        if(this.state.addedWord.word !== "" && this.state.addedWord.translate !== ""){
            this.props.toAddWord(this.state.addedWord);
            this.setState({addedWord:{word:"", translate:"", id:'_' + Math.random().toString(36).substr(2, 9)}});
        }
    }

    render(){
        return(
            <div>
                <h2>Add word</h2>
                <form>
                    <label htmlFor="word">Word:</label>
                    <input type="text" id="word" value={this.state.addedWord.word} onChange={(e) => this.handlerAdd_Word(e)} />
                    <label htmlFor="translate">Translate:</label>
                    <input type="text" id="translate" value={this.state.addedWord.translate} onChange={(e) => this.handlerAdd_Translate(e)} />
                    <button type="button" onClick={() => this.AddWord()}>Add</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        toAddWord: (addedWord) => dispatch(toAddWord(addedWord))
    }
}

export default connect(null, mapDispatchToProps)(NewWord) ;