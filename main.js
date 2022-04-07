NoseX=0;
NoseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
   
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;

    console.log("NoseX = " + NoseX + "NoseY = " + NoseY);
    
    rightwristX = results[0].pose.rightWrist.x;
    leftwristX = results[0].pose.leftWrist.x;

    console.log("Right Wrist X = " + rightwristX + "Left Wrist X = " + leftwristX + "difference = " + difference);


}
}

function draw() {
background('#969A97');

document.getElementById("result").innerHTML="width and height of square will be = " + difference;

fill("pink");
stroke("pink");
square(NoseX,NoseY,difference);


}