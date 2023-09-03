import quotes from './assets/quotes.json';
import './App.css';
import { useState } from 'react';
import {FaTwitter, FaQuoteLeft} from 'react-icons/fa';

function getRandomColor(){
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomQuotes(){
  return  quotes[Math.floor(Math.random()*quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(getRandomQuotes());
  const [color, setColor] = useState(getRandomColor());
  
  function handleClick(){
    setQuote(getRandomQuotes());
    setColor(getRandomColor());
  }

  return (
    <div className='background' style={{backgroundColor: color}}>
      <div id="quote-box">
        <div id="text" style={{color: color}}>
          <FaQuoteLeft size={35} style={{marginRight: '10px'}}/>
          {quote.quote}
        </div>
        <div id="author" style={{color: color}}>
          -{quote.author}
        </div>
        <div className='buttons'>
          <div className='tweet-part' >
          <a id="tweet-quote" style={{backgroundColor: color}} href={`https://twitter.com/intent/tweet?text=${quote.quote}`} target='_top'>
        <FaTwitter size={10} className='tweet'/>
        </a>
        </div>
        <button id="new-quote" onClick={handleClick} style={{backgroundColor: color}}>
          New Quote
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
