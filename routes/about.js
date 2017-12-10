const express = require('express');
const router = express.Router();


router.get("", (req, res) => {
    
 let obj= [
   { 
  "name":"About Moulya Soma Sundara"
   },
   
  {
    "biography": "Upon turning eleven, i was surprised to learn that i was invited to attend Hogwarts School of Witchcraft and Wizardry.I began attending the school on 1 September, 1991, where i was subsequently sorted into Gryffindor House,despite being considered for Ravenclaw. I possessed a brilliant academic mind, and proved to be a gifted student in almost every subject that i studied. I am very studious and bookish. I eagerly accepted and took to studying magic even before i began my first year at Hogwarts in the September of 1991, learning all the set spell books by heart and even managing to perform a few spells successfully"},
  {
    "biography": "In addition to the texts set by the school, i took with me several other books for reference and to further my understanding of the wizarding world Now that the witch and wizardary world is combined with the muggle world it is important for me to develop new skill sets.I have developed a new interest for coding. I am keen to learn new languages such as Java, JavaScript, HTML and develop working knowledge of Algorithms, Data Structure and become a skilled Programmer so that one day i go on to work at GOOGLE whichis my dream company"},
  {
    "favoriteShows": ["FRIENDS","Game of Thrones","Modern Family","Downtown Abbey","Two and a Half Men","Vampire Diaries","The Big Bang Theory","Gilmore Girls","Supernatural","90210","The Office","The Mindy Project","Last Man Standing","How I Met Your Mother"]
  },
  {"hobbies": ["Reading","Campaigning for House-Elves' right","Learning new spells","Coding","Watching Movies, TV Series","Listening to Music"]}
  ]
res.json(obj);
});
module.exports = router;




