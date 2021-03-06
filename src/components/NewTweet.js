import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import { Redirect } from 'react-router-dom';
class NewTweet extends Component {

    state = {
        text: '',
        toHome: false
    }

    handleChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state;
        const { dispatch, id } = this.props

        // takes the text and the id of the tweet if we are replying to.
        dispatch(handleAddTweet(text, id))
        // reset the component state again...
        this.setState(() => ({
            text: '',
            toHome: id ? false : true
        }))
    }


    render () {

        const { text, toHome }  = this.state;
        const tweetLength = 280 - text.length;

        if(toHome === true) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <h3 className="center">Compose new Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                      className="textarea"
                      placeholder="What's happening ?"
                      value={text}
                      onChange={this.handleChange}
                      maxLength={280}
                    />
                    { tweetLength <= 100 && (
                        <div className="tweet-length">{tweetLength}</div>

                    )}
                    <button
                      type="submit"
                      className="btn"
                      disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet);