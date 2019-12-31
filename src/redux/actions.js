import {ADD_WORD, DELETE_WORD, EDIT_WORD} from "./actionsType";

export const toAddWord = (addedWord) =>{
    return{
        type: ADD_WORD, 
        addedWord
    }
}

export const toDeleteWord = (deletedWord) =>{
    return{
        type: DELETE_WORD,
        deletedWord
    }
}

export const toEditWord = (preEditWord, postEditWord) =>{
    return{
        type: EDIT_WORD,
        preEditWord,
        postEditWord
    }
}