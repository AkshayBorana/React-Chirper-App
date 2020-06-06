import React, { Component } from 'react';

class NewTweet extends Component {

    state = {
        text: ''
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
        // Add tweet to the state of the store...


        // reset the component state again...
        this.setState(() => ({
            text: ''
        }))
    }


    render () {

        const { text }  = this.state;
        const tweetLength = 280 - text.length;

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

export default NewTweet;