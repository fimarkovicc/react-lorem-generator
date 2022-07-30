import React from 'react'
import { words } from './data'

function Lorem(props) {
    
    const { paragraphs, minSentences, maxSentences, minWords, maxWords } = props
    
    function renderSentence(numOfWords){
        let sentence = ''

        for(let i = 0; i < numOfWords; i++){
            sentence += words[Math.floor(Math.random() * words.length)] + ' '
        }
        
        return (sentence[0].toUpperCase() + sentence.slice(1)).trim() + '.';
    }

    function renderParagraphs(){
        let sentences = []
        
        for(let i = 0; i < paragraphs; i++){
            sentences.push([])
            const numOfSentences = Math.floor(Math.random() * (Math.floor(maxSentences) - Math.ceil(minSentences) + 1) + Math.ceil(minSentences))

            for(let j = 0; j < numOfSentences; j++){                
                const numOfWords = Math.floor(Math.random() * (Math.floor(maxWords) - Math.ceil(minWords) + 1) + Math.ceil(minWords))
                sentences[i].push(renderSentence(numOfWords))
            }            
        }

        return sentences
    }

    const paragraphsArr = renderParagraphs()

    return (
        <>
            {
                paragraphsArr.map((item, i) => {
                    return (
                        <p key={i}>
                        {item.map(sentence => {
                            return sentence + ' '
                        })}
                        </p>
                    )
                })
            }
        </>
    );
}

Lorem.defaultProps = {
    paragraphs: 1,
    minSentences: 3,
    maxSentences: 7,
    minWords: 3,
    maxWords: 15
  }

export default Lorem;
