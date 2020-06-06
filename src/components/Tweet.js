import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
    render () {
        const { tweet } = this.props;

        if(tweet === null) return (<p>This tweet doesn't exists.</p>)

        return (
            <div className="tweet">

            </div>
        )
    }
}
// 1st arg: ask yourself what state does the compinent needs from the store...
// 2nd arg: the props that the component will receive...
function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];
    // To get parent tweet details if they exists..
    const parentTweet = tweet ?  tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}

export default connect(mapStateToProps)(Tweet);