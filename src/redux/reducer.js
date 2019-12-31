import {ADD_WORD, DELETE_WORD, EDIT_WORD} from "./actionsType";

const initialState = {
    wordsList: []
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_WORD: return{
             wordsList: [action.addedWord, ...state.wordsList]
        }
        case DELETE_WORD: return{
            wordsList: state.wordsList.filter((word) => word !== action.deletedWord)
        }
        case EDIT_WORD: return{
            wordsList: state.wordsList.map((word) => word.id === action.preEditWord.id ? action.postEditWord : word)
        }
        default: return state;
    }
}