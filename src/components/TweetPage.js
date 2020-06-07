import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';
import NewTweet from './NewTweet';

class TweetPage extends Component {
    render() {
        const { id, replies } = this.props;
        return (
            <div>
                <Tweet id={id}/>
                {/* if we  pass id to NewTweet, means we are replying to a tweet, wlese we are creating a new tweet.*/}
                <NewTweet id={id} />
                { replies.length !== 0 && (<h3 className="center"></h3>) }
                <ul>
                    {replies.map((replyId) => {
                        return(<li key={replyId}>
                            <Tweet id={replyId}/>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({authedUser, tweets, users}, props) {
    // we will grab the id of the tweet to which we wanted to reply.
    const { id } = props.match.params; // id of the tweet
    return {
        id,
        replies: !tweets[id]
          ? []
          : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(TweetPage);