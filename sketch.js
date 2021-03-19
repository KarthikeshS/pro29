var block1,block2,block3,block4;

function setup(){
    var canvas = createCanvas(1200,400);
    block1 = new blocks(360,235,30,40);
    block2 = new blocks(390,235,30,40);
    block3 = new blocks(420,235,30,40);
    block4 = new blocks(450,235,30,40);
    
}
function draw(){

    block1.display();
    block2.display();
    block3.display();
    block4.display();


}
