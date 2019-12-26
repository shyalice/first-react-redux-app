import {ADD, DELETE, EDIT} from "./actionsType";

export const addWord = (word, translate) =>{
    return{
        type: ADD, 
        word:{
            word: word,
            translate: translate
        }
    }
}

export const deleteWord = (deleteWord) =>{
    return{
        type: DELETE,
        deleteWord
    }
}

export const editeWord = () =>{
    return{
        type: EDIT
    }
}