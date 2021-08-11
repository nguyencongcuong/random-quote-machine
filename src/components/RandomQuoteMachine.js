import React, {useState, useEffect} from "react"
import RandomQuoteMachineComponent from "./RandomQuoteMachineComponents";
import KeyboardEventHandler from 'react-keyboard-event-handler';
import random from "../helpers/random";
import randomColor from "../helpers/randomColor";

function RandomQuoteMachine() {

    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [background, setBackground] = useState("")

    useEffect( () => {
        handleQuotes()
    }, [] )
    
    const RandomQuoteBySpace = () => (
        <KeyboardEventHandler
            handleKeys={['space', 'enter']}
            onKeyEvent={(key, e) => handleQuotes()}
        />
    )

    const handleQuotes = () => {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(quoteData => {
                const index = random(0, quoteData.length - 1)
                setText(text => quoteData[index].text)
                setAuthor(author => quoteData[index].author == null ? "Unknown" : quoteData[index].author)
                setBackground(background => randomColor())
            }) 
    }

    return (

        <RandomQuoteMachineComponent 
            text={text}
            author={author}
            background={background}
            handleClick={() => handleQuotes()}
            handleKeyboard={<RandomQuoteBySpace />}
        />

    )
}

export default RandomQuoteMachine