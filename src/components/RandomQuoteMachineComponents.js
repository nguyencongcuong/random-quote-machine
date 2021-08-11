import React from "react"
import { FaTwitter } from "react-icons/fa"
import { FaRandom } from "react-icons/fa"

function RandomQuoteMachineComponent(props) {
    return (
        <div
            id="quote-box"
            className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center text-center p-4"
            style={{ background: props.background }}
        >
            <blockquote
                id="text"
                className="display-5 text-white p-4">
                {props.text}
            </blockquote>
            <span
                id="author"
                className="text-light fst-italic">
                {props.author}
            </span>
            <div className="fixed-bottom text-light p-4">
                <button
                    id="new-quote"
                    className="btn btn-danger text-light text-uppercase fw-bold p-4 m-1"
                    onClick={props.handleClick}
                >
                    <FaRandom /> <span className="visually-hidden">Randomize {props.handleKeyboard}</span>
                </button>
                <a
                    id="tweet-quote"
                    className="btn btn-info text-light text-uppercase fw-bold p-4 m-1"
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter /> <span className="visually-hidden">Tweet</span>
                </a>
            </div>
        </div>
    )
}

export default RandomQuoteMachineComponent