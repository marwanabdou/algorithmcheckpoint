let sentence = "insert your sentence here"



// number of characters 
let numberOfChar = sentence.split('').length;
console.log("char in sentence:", numberOfChar);

//number of words 
wordsInSentence = sentence.split(' ').length;
console.log("words in sentence:", wordsInSentence); 

//number of vowels in sentence 
let numberOfVowels = sentence.match(/[aeiou]/gi).length;
console.log("vowels in sentence:", numberOfVowels);