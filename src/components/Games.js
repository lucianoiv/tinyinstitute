import React from 'react'
import { useState } from "react";
import Vocabulary from './Vocabulary';
import Grammar from "./Grammar";

const Games = () => {

const [vocabulary, setVocabulary] = useState(false)
const [grammar, setGrammar] = useState(false)

function ChooseVocabulary() {
  setVocabulary(true);
  setGrammar(false)
}

function ChooseGrammar() {
  setVocabulary(false);
  setGrammar(true)
}


  return (
    <div>
      <div >
        <button
          type="button"
          value="VOCABULARY"
          onClick={() => ChooseVocabulary()}
          className="button"
        >VOCABULARY</button>
      </div>

      <div>
        <button
          type="button"
          value="GRAMMAR"
          onClick={() => ChooseGrammar()}
          
          className="button"
        >GRAMMAR</button>
      </div>

      {vocabulary ? (
        <Vocabulary></Vocabulary>
        )
        :
        (null)}

      {grammar ? (

        <Grammar></Grammar>
        )
        :
        (null)}
    
    </div>
  )
}

export default Games