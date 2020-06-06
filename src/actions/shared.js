import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

// this is the hard-coded auth id...
const AUTH_ID = 'tylermcginnis';

//this Thunk Action Creator function will follow redux thunk pattern, coz we want to make an async request inside this function...
export function handleInitailaData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, tweets}) => {
                //take users and tweets and add them to the state of our redux store...
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTH_ID));
                dispatch(hideLoading());
            })
    }
}