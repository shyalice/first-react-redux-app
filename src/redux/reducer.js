import {ADD, DELETE, EDIT} from "./actionsType";

const initialState = {
    wordsList: []
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD: return{
             wordsList: [
                 ...state.wordsList, 
                 action.word
             ]
        }
        case DELETE: return{
            wordslist: state.wordsList.filter((elem) => elem !== action.deleteWord)
        }
        default: return state;
    }
}