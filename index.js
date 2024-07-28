let randomWord = ['fat', 'laser', 'palm', 'celebration', 'yard', 'fleet', 'plaintiff', 'charm', 'interrupt', 'appeal', 'earthwax', 'symptom', 'asset', 'ignorant',
                'sensitive', 'satisfied', 'echo', 'highlight', 'linger', 'slide', 'court', 'holiday', 'linen', 'stool', 'orthodox', 'card', 'inflation', 'wisecrack' ,
                'ask', 'overlook', 'stroke', 'fireplace', 'crime', 'maid', 'shape', 'surround', 'rawBanana', 'Mango', 'Apple', 'Avocado', 'Cherry', 'Coconut', 'Blackberry',
                'Grape', 'Lemon', 'Lychee']


/*function getRandomWord(randomWord){
    let index=Math.floor(Math.random()*randomWord.length);
    return randomWord(index);
}*/

let index = Math.floor(Math.random() * randomWord.length);
let displayWord = document.getElementById('word_display');
let insert = document.getElementById('insert');

displayWord.innerText = randomWord[index]

insert.addEventListener('keydown', (e) =>  {
    console.log(e.key);
    let key= e.key.toLowerCase();
    if(key==='')
        di
    if (e.key === 'Enter') {
        let insertedWord = insert.value.trim();
        console.log('Entered word:', insertedWord);
        insert.value = ''; 
        nextWord();
    }
},);
function nextWord(){
    let index = Math.floor(Math.random() * randomWord.length);
    currentWord = randomWord[index];
    displayWord.innerText = randomWord[index]

}

/*et startClick = document.getElementById('start_button');
startClick.addEventListener('click', (e)=>{
    setInterval
});*/
