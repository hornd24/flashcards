
function Flashcard(front,back){
    this.front=front;
    this.back=back;

    this.front2 = function(){
        console.log('helllo')
        return 'hi'
    };
    this.back2=function(){
        console.log(this.back);
    }
}




module.exports = Flashcard;
