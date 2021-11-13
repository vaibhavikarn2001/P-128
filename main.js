song_1="";
song_2="";

function preload(){
    song_1=loadSong("Ranjha - Shershaah 128 Kbps.mp3");
    song_2=loadSong("Stay(PaglaSongs).mp3");
}
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;

function setup(){
  canvas=createCanvas(500,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on('poses',gotPoses);

}
function modelLoaded(){
  console.log('Posenet is initialized.');

}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
  }
}
function draw(){
    image(video,0,0,500,500);
    song.rate(1);
    song.volume(1);

}

