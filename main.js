img = "";
 var status = "";
 objectDetector="";
function setup ()
{
    canvas = creteCanvas(640,420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerhtml="Status : Detectind Objects "
}
function preload()
{
img= loadImage('dog_cat copy.jpg');
}
function draw()
{
image(img, 0, 0, 640 , 420);
fill("#FF0000");
text("Dog",45,75);
stoke("#FF0000");
rect(30 , 60 ,450 , 350);

fill("#FF0000");
text("cat",45,75);
noFill();
toke("#FF0000");
rect(300 , 90 ,270 , 320);
}
function modelLoaded ()
{
    console.log("model Loaded!");
   status =  true;
    objectDetector.detect(img , gotresult);
}
function gotresult()
{
if(error) {
console.log(error);
}
console.log (result);
}