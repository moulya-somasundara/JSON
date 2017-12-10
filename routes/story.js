const express = require('express');
const router = express.Router();


router.get("", (req, res) => {
    
 let obj= {
  "storyTitle": "Hogwarts Battle",
  "story": "When Harry proposed the theory that Draco Malfoy was the Heir of Slytherin i went even further by daring to check Moste Potente Potions out of the library using a note from Professor Lockhart, in the desire to research Polyjuice Potion. I hoped that they would be able to obtain a confession from Malfoy. I brewed the potion in Myrtle's bathroom, as no one used it. I also risked serious consequences when i stole potion ingredients from Professor Snape's personal cupboards that were needed for the difficult potion, which took a month to brew Unfortunately i was unable to join Harry and Ron in the ruse with Polyjuice Potion because the hair i obtained from Millicent Bulstrode during our scuffle in the Duelling Club was actually the hair of Bulstrode's cat. I grew fur and a tail, and remained in the Hospital Wing for weeks. Harry and Ron, however, were able to use the potion i brewed to transform into Gregory Goyle and Vincent Crabbe, respectively. They entered the Slytherin common room, and through conversation with Draco Malfoy, realised that he was not the Heir of Slytherin, and was not involved in the opening of the Chamber after all.I was later cured with a Mandrake Restorative Draught created by Professor Sprout. I was disappointed to learn that, as a special treat for the school, Professor Dumbledore cancelled the students' end of year exams, though intensely proud that my friends had solved the mystery.That summer, i went on holiday to France with my parents."
}
res.json(obj);
});
module.exports = router;




