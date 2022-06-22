const SET_QUERY = "SET_QUERY";

const defaultState = {
    items: [],
    isFetching: true,
    text: '',
}

export default function reposReducer(state = defaultState, action) {
    console.log(state)
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state, // возвращаем старый стейт
                text: action.payload, // меняем поле text
            }
        default: 
            return state;
    }
}

export const setQuery = (text) => ({type: SET_QUERY, payload: text})