// Minimal Wordle core logic (demo)
const WORDS=['APPLE','GRAPE','BERRY','MANGO','PEACH'];
const ANSWER=WORDS[Math.floor(Math.random()*WORDS.length)];
const board=document.getElementById('board');
for(let i=0;i<5;i++){const d=document.createElement('div');d.className='tile';board.appendChild(d)}
console.log('Answer (demo):', ANSWER);
// expose for UI work in next PR
window._WORDLE={ANSWER,WORDS};
