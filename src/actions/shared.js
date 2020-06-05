import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';

//this function will follow redux thunk pattern, coz we want to make an async request inside this function...
export function handleInitailaData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets}) => {
                //take users and tweets and add them to the state of our redux store...
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
            })
    }
}