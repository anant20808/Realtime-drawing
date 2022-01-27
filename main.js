noseX=0;
noseY=0;
rightwristX=0;
rightwristY=0;
function preload(){

}
function setup(){
canvas=createCanvas(550,550);
canvas.center();
video=createCapture(VIDEO);
video.size(550,550);
canvas.position(560,160);


posenet= ml5.poseNet(video,modelloaded);
posenet.on('pose',gotresult);
}

function modelloaded(){
console.log("model is loaded");
}
function draw(){
background("#AAD7EF")
square(noseX,noseY,difference)
fill("#ff0000")
stroke("#000000")
}
function gotresult(result){
    if(result.length>0){
console.log(result)
noseX = result[0].pose.nose.x;
noseY = result[0].pose.nose.y;
rightwristX = result[0].pose.rightWrist.x;
rightwristY = result[0].pose.rightWrist.y;
leftwristX = result[0].pose.leftWrist.x;
leftwristY = result[0].pose.leftWrist.y;
difference = floor(leftwristX - rightwristX)
console.log("nose x = "+noseX+", nose y = "+noseY);
console.log("Rightwrist x = "+rightwristX+", Rightwrist y = "+rightwristY);
console.log("leftwrist x = "+leftwristX+", leftwrist y = "+leftwristY);
document.getElementById("widthofshape").innerHTML=difference+" pixel";

    }
}