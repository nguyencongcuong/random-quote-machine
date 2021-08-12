import React, {useState, useEffect} from "react"
import RandomQuoteMachineComponent from "./RandomQuoteMachineComponents";
import QuoteDB_En from "./RandomQuoteMachineData_En"
import QuoteDB_Vi from "./RandomQuoteMachineData_Vi"
import KeyboardEventHandler from 'react-keyboard-event-handler';
import random from "../helpers/random";
import randomColor from "../helpers/randomColor";

function RandomQuoteMachine() {

    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [background, setBackground] = useState("")
    const [lang, setLang] = useState("En")

    useEffect( () => {
        handleQuotes()
    }, [] )
    
    const RandomQuoteBySpace = () => (
        <KeyboardEventHandler
            handleKeys={['space', 'enter']}
            onKeyEvent={(key, e) => handleQuotes()}
        />
    )

    const handleLang = () => lang === "En" ? setLang(lang => "Vi") : setLang(lang => "En")

    const handleQuotes = () => {
        const quoteData = ( lang === "En" ? QuoteDB_En : QuoteDB_Vi )
        const index = random(0, quoteData.length - 1)
        setText(text => quoteData[index].text)
        setAuthor(author => quoteData[index].author === null ? (lang === "En" ? "Unknown" : "Sưu tầm") : quoteData[index].author)
        setBackground(background => randomColor())
    }

    return (
        <RandomQuoteMachineComponent 
            text = {text}
            author = {author}
            background = {background}
            handleClick = {() => handleQuotes()}
            handleKeyboard = {<RandomQuoteBySpace />}
            handleLang = {() => handleLang()}
            lang = {lang}
        />
    )
}

export default RandomQuoteMachine