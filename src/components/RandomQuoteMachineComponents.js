import React from "react"
import { FaTwitter } from "react-icons/fa"
import { FaRandom } from "react-icons/fa"

function RandomQuoteMachineComponent(props) {
    return (
        <div
            id="quote-box"
            className="vw-100 vh-100 d-flex flex-column justify-content-center p-4"
            style={{ background: props.background }}
        >

            <blockquote
                id="text"
                className="fs-5 text-light"
                style={{ textAlign: "justify" }}
            >
                {props.text}
            </blockquote>
            <span
                id="author"
                className="d-block w-100 text-light text-end fst-italic"
            >
                {props.author}
            </span>

            <div className="fixed-bottom text-center text-light p-4">
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