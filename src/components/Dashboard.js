import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render () {
        console.log(this.props);

        return (
            <div>Dashboard
                <h3 className="center">Your Timeline</h3>
                <ul className="dashboard-list">
                    {this.props.tweetsIds.map((tweetId) => (
                        <li key={tweetId}>
                            <div>Tweet id: {tweetId}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToprops({ tweets }) {
    return {
        tweetsIds: Object.keys(tweets)
         .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToprops)(Dashboard);