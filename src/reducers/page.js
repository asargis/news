import {REQUEST_NEWS} from "../constants/action-types";

const initialState = {
    api: 'https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=41ad95dae3eb452dbc468c118e9ffe11',
    news: [],
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case REQUEST_NEWS:
            return { ...state, news: action.payload.news };
        default:
            return state;
    }
}