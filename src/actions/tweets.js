import { saveLikeToggle } from "../utils/api";
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';

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