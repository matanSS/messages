const verbArray = ['jump', 'talk']
const nounArray = ['ball', 'boat']
const adverbArray = ['filthy', 'poorly']

const addWords = (word, array) => {
    array.push(word)
}

const randomGen = () => {

   const randomVerbIndex = Math.floor(Math.random() * verbArray.length)
   const randomnounIndex = Math.floor(Math.random() * nounArray.length)
   const randomadverbIndex = Math.floor(Math.random() * adverbArray.length)

   const randomVerb = verbArray[randomVerbIndex]
   const randomNoun = nounArray[randomnounIndex]
   const randomAdverb = adverbArray[randomadverbIndex]

   console.log(`Be ware of ${randomVerb} ${randomNoun} ${randomAdverb}! `)
   
}

addWords('walk',verbArray)
addWords('play',verbArray)
addWords('laugh',verbArray)
addWords('sun',nounArray)
addWords('table',nounArray)
addWords('stone',nounArray)
addWords('pathetic',adverbArray)
addWords('tidely',adverbArray)
addWords('nicely',adverbArray)


randomGen()