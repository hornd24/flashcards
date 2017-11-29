var fs = require("fs");
var basicflash = require("./basic.js");
var clozeCards = require("./ClozeCard.js");
function createFlashCards(){
    var ironMan = new basicflash('What Year Was Iron Man Released?','2008');
    
    var ironManCloze =new clozeCards('Iron Man was Released in 2008','2008');
    
    
    var hulk = new basicflash('Who Is The Hulk?','Bruce Banner');
    
    hulkCloze =new clozeCards('Bruce Banner Is The Hulk','Bruce Banner');
    
    var avengers =new basicflash('Who Is The Villian in Avengers?','Loki');
    
    avengersCloze= new clozeCards('Loki Is The Villian In Avengers','Loki');
    
    var iron = new basicflash('What Is The New Name for War Machines Suit in Iron Man 3?','Iron Patriot');
    
    var ironCloze= new clozeCards('Iron Patriot Was The New Name for War Machines Suit in Iron Man 3','Iron Patroit');
    
    
    var winter= new basicflash('Who Is The Winter Soldier in Captain America: The Winter Soldier?','Bucky Barnes');
    
    var winterCloze=new basicflash('Bucky Barnes Is The Winter Soldier in Captain America: The Winter Soldier','Bucky Barnes')
    
    }
    module.exports = {createFlashCards};