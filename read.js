

var fs = require("fs");
var basicflash = require("./basic.js");
var clozeCards = require("./ClozeCard.js");

var inquirer = require("inquirer");

x=0;

var ironMan = new basicflash('What Year Was Iron Man Released?','2008');
var test =ironMan
console.log(test)



var ironManCloze =new clozeCards('Iron Man was Released in 2008','2008');


var hulk = new basicflash('Who Is The Hulk?','Bruce Banner');

hulkCloze =new clozeCards('Bruce Banner Is The Hulk','Bruce Banner');

var avengers =new basicflash('Who Is The Villian in Avengers?','Loki');

avengersCloze= new clozeCards('Loki Is The Villian In Avengers','Loki');

var iron = new basicflash('What Is The New Name for War Machines Suit in Iron Man 3?','Iron Patriot');

var ironCloze= new clozeCards('Iron Patriot Was The New Name for War Machines Suit in Iron Man 3','Iron Patriot');


var winter= new basicflash('Who Is The Winter Soldier in Captain America: The Winter Soldier?','Bucky Barnes');

var winterCloze=new basicflash('Bucky Barnes Is The Winter Soldier in Captain America: The Winter Soldier','Bucky Barnes')

function won(){
    if(x = 5){
    console.log('YOU WON!!!!!!!!! Gold Medal');
    
    inquirer.prompt([
        {name:'game',
        message:'Would you like to play? y/n',
        default:'y'
        },
    ]).then(function(users2){
        if(users2.name=='y'){
            ironManCard();
        }else{
            console.log('Game Over')

        }
});
    }
    else if(x=4){
      console.log('You came SO Close!, Silver Medal')
      
      inquirer.prompt([
          {name:'game',
          message:'Would you like to play? y/n',
          default:'y'
          },
      ]).then(function(users2){
          if(users2.name=='y'){
              ironManCard();
          }else{
              console.log('Game Over')

          }
  });
    }
    else if(x=3){
console.log('Third Place Not Bad,Bronze Medal')
    
    
    inquirer.prompt([
        {name:'game',
        message:'Would you like to play? y/n',
        default:'y'
        },
    ]).then(function(users2){
        if(users2.name=='y'){
            ironManCard();
        }else{
            console.log('Game Over')

        }

})
    }
    else if(x<3){
        console.log('Game Over, You Lost Better Luck Next Time')
        inquirer.prompt([
            {name:'game',
            message:'Would you like to play? y/n',
            default:'y'
            },
        ]).then(function(users2){
            if(users2.name=='y'){
                ironManCard();
            }else{
                console.log('Game Over, You Suck!')

            }
    });
    }
}




function theWinter(){
    inquirer.prompt([
        {name:'winter',
        message: winter.front,
    
        },
    ]).then(function(winterS){
            if(winterS.winter===winter.back){
                console.log('you got it right')
                x++
                console.log('Score'+' '+x);
                won();
            }
                else{x--;
                    console.log('Score' +' '+x);
                       inquirer.prompt([
                    {type:'list',
                    name:'try',
                message:'Do You Want To Try Again?',
                choices:['Try Last Card','Start From Begining']
                
                    }
                
                ]).then(function(play){
                    if(play.try=='Try Last Card'){
                    iron();}
                    else if(play.try=='Start From Begining'){
                        ironManCard();
                    
                    }else if(x>3){
                        console.log('Score'+' '+x);
                        console.log('Game Over You won')
                    }else{
                        console.log('Score'+' '+x);
                        console.log('Game Over Loser ')
                    }
                                })
                            }
                                   
                        });

                }

function IronThree(){
    inquirer.prompt([
        {name:'ironman',
        message: iron.front,
    
        },
    ]).then(function(ironman){
            if(ironman.ironman===iron.back){
                console.log('you got it right')
                x++
                console.log('Score'+' '+x);
                theWinter();
            }
                else{x--;
                    console.log('Score' +' '+x);
                       inquirer.prompt([
                    {type:'list',
                    name:'try',
                message:'Do You Want To Try Again?',
                choices:['Try Last Card','Start From Begining']
                
                    }
                
                ]).then(function(play){
                    if(play.try=='Try Last Card'){
                        IronThree();
                    }
                    else if(play.try=='Start From Begining'){
                        ironManCard();
                    
                    }else if(x>3){
                        console.log('Score'+' '+x);
                        console.log('Game Over You won')
                    }else{
                        console.log('Score'+' '+x);
                        console.log('Game Over Loser ')
                    }
                                })
                            }
                                   
                        });

                }
            

function avengersCard(){
    inquirer.prompt([
        {name:'avengers',
        message: avengers.front,
    
        },
    ]).then(function(theAvengers){
        console.log(avengers.back)
            if(theAvengers.avengers===avengers.back){
                console.log('you got it right')
                x++
                console.log('Score'+' '+x);
                IronThree();
            }
                else{x--;
                    console.log('Score' +' '+x);
                       inquirer.prompt([
                    {type:'list',
                        name:'try',
                    message:'Do You Want To Try Again?',
                    choices:['Try Last Card','Start From Begining']
                
                    }
                
                ]).then(function(play){
                    if(play.try=='Try Last Card'){
                    avengersCard();
                     } else if(play.try=='Start From Begining'){
                        ironManCard();
                    }
                    else if(x>3){
                        console.log('Score'+' '+x);
                        console.log('Game Over You won')
                    }else{
                        console.log('Score'+' '+x);
                        console.log('Game Over Loser ')
                    }

                        
                      
                    
                                })
                            }
                                   
                        });

                }


function hulkCard(){
    inquirer.prompt([
        {name:'hulk',
        message: hulk.front,
    
        },
    ]).then(function(theHulk){
            if(theHulk.hulk===hulk.back){
                console.log('you got it right')
                x++
                console.log('Score'+' '+x);
                avengersCard();
            }
                else{x--;
                    console.log('Score' +' '+x);
                       inquirer.prompt([
                    {type:'list',
                    name:'try',
                message:'Do You Want To Try Again?',
                choices:['Try Last Card','Start From Begining']
                
                    }
                
                ]).then(function(play){
                    if(play.try=='Try Last Card'){
                    hulkCard();}
                    else if(play.try=='Start From Begining'){
                        ironManCard();
                    
                    }else if(x>3){
                        console.log('Score'+' '+x);
                        console.log('Game Over You won')
                    }else{
                        console.log('Score'+' '+x);
                        console.log('Game Over Loser ')
                    }
                                })
                            }
                                   
                        });

                }
            

function ironManCard(){
    inquirer.prompt([
        {name:'ironman',
        message: ironMan.front
    
        },
    ]).then(function(iron){
        if(iron.ironman===ironMan.back){
    console.log('you got it right')
    x++
    console.log('Score'+' '+x);
    hulkCard();
    
               }
               else{ x--;
                console.log('Score' +' '+x);
                   inquirer.prompt([
                {
                name:'try',
            message:'Do You Want To Try Again? y/n',
            
            
                }
            
            ]).then(function(play){
if(play.try=='y'){
ironManCard();
}

else if(x>3){
    console.log('Score'+' '+x);
    console.log('Game Over You won')
}else{
    console.log('Score'+' '+x);
    console.log('Game Over Loser ')
}
            })
        }
               
    });
    
}


console.log('Welcome to Marvel Cinematic Universe Flash Cards')
inquirer.prompt([
    {
        name:'name',
        message:'What is Your Name'
    },
    {
        name:'game',
        message:'Would you like to play? y/n',
        default:'y'
    }
]).then(function (user) {
    if(user.game== 'y'){
console.log(user.name +' is Ready to Play');

    }
    ironManCard();
   
});