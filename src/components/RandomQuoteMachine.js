import React, {useState, useEffect} from "react"
import RandomQuoteMachineComponent from "./RandomQuoteMachineComponents";
import KeyboardEventHandler from 'react-keyboard-event-handler';
import random from "../helpers/random";
import randomColor from "../helpers/randomColor";
import QuoteDB_En from "./RandomQuoteMachineData_En"
import QuoteDB_Vi from "./RandomQuoteMachineData_Vi"

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

    const handleLang = () => {
        if(lang === "En") {
            setLang(lang => "Vi")
        } else if(lang === "Vi") {
            setLang(lang => "En")
        }
    }

    const handleQuotes = () => {

        let quoteData = lang === "En" 
        ? QuoteDB_En
        : QuoteDB_Vi

        const index = random(0, quoteData.length - 1)
        setText(text => quoteData[index].text)
        setAuthor(author => quoteData[index].author == null ? (lang == "En" ? "Unknown" : "Sưu tầm") : quoteData[index].author)
        setBackground(background => randomColor())
    }

    // const handleQuotes = () => {
    //     fetch("https://type.fit/api/quotes")
    //         .then(response => response.json())
    //         .then(QuoteDB_En => {
    //             const index = random(0, QuoteDB_En.length - 1)
    //             setText(text => QuoteDB_En[index].text)
    //             setAuthor(author => QuoteDB_En[index].author == null ? "Unknown" : QuoteDB_En[index].author)
    //             setBackground(background => randomColor())
    //         }) 
    // }

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