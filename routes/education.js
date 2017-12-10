const express = require('express');
const router = express.Router();


router.get("", (req, res) => {
    
 let obj= [
    {
      "schoolName": "Hogwarts School of Witchcraft and Wizardry",
      "degree": "Bachelors in Witchcraft and Wizardry",
      "favoriteClass": "Arithmancy",
      "favoriteMemory": "The homeworks given to us in this subject were very Very Challenging but i did well in this class and received an O.W.L.s in the finals which was necessary to apply for a curse-breaker position at Gringotts"
    },
    {
      "schoolName": "Hogwarts School of Witchcraft and Wizardry",
      "degree": "Masters in Witchcraft and Wizardry",
      "favoriteClass": "Defence against the Dark Arts",
      "favoriteMemory": "when i scored full marks in all the subjects offered in Masters Program"
    },
    {
      "schoolName": "Hogwarts School of Witchcraft and Wizardry",
      "degree": "PHD in Witchcraft and Wizardry",
      "favoriteClass": "Care of Magical Creatures",
      "favoriteMemory": "Fighting and surviving in Battle of Hogwarts"
    },
     
]
res.json(obj);
});
module.exports = router;
