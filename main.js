status="";
function preload(){
canvas=createCapture(480,380);
canvas.center();
video=createVideo(380,480);
video.hide();
}
function setup(){

}
function draw(){
image(video,0,0,380,480);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects."
    input=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}