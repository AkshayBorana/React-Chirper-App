import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';

// Tweets Reducer function...
export default function tweets (state = {}, action) {
    switch(action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state, // Spreading all of the tweets on the object..
                ...action.tweets
            }
        case TOGGLE_TWEET:
            return {
                ...state, // spreading the state...
                [action.id]: {  // getting a particular tweet from the above state...
                    ...state[action.id], // spreading that particular tweet...
                    likes: action.hasLiked === true // adding or removing user from the tweet based on the action...
                     ? state[action.id].likes.filter(id => id !== action.authedUser)
                     : state[action.id].likes.concat([action.authedUser])

                }
            }
        case ADD_TWEET:
            const {tweet} = action

            let replyingTo = {}
            if(tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }
            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo
            }
        default:
            return state;
    }
}