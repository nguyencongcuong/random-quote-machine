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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">

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

                    </div>
                </div>

                <div className="row">
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
                        <button
                            id="switch-lang"
                            className="btn btn-warning text-light text-uppercase fw-bold p-4 m-1"
                            onClick={props.handleLang}
                        >
                            {props.lang}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RandomQuoteMachineComponent