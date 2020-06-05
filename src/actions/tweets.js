export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

// RECEIVE_TWEETS Action Creator...
export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}