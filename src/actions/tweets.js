import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

// ADD_TWEET Action Creator...
function AddTweet (tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

// Thunk Action Creator for Adding Tweet...
export function handleAddTweet(text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());

        return saveTweet({
            text,
            author: authedUser,
            replyingTo
        })
          .then((tweet) => dispatch(AddTweet(tweet)))
          .then(() => dispatch(hideLoading()))
    }
}

// RECEIVE_TWEETS Action Creator...
export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

// TOGGLE_TWEET Action creator...
function toggleTweet ({ authedUser, hasLiked, id }) {
    return {
        type: TOGGLE_TWEET,
        id,
        hasLiked,
        authedUser
    }
}

// Acync Thunk Action Creator for tweet like.
export function handleToggleTweet(tweetInfo) {
    return (dispatch) => {
        // optimistic updating to update the store...
        dispatch(toggleTweet(tweetInfo));

        // call to database...
        return saveLikeToggle(tweetInfo)
          .catch((e) => {
              console.log('Error in handleToggleEvent', e);
             // reset the toggle for the tweet in the store.
             dispatch(toggleTweet(tweetInfo));
             alert('There was an error liking the tweet.');
          })
    }
}