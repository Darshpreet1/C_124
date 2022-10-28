function preload(){

}

function setup(){
    Canvas = createCanvas(300,300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()

    poseNet = ml5.poseNet(video,modelLoded);
    poseNet.on("pose",Gotposes);
}

function draw(){
  image(video,0,0,300,300);
}

function take_snapshot(){
    save("Myfilterimg.jpg");
}

function modelLoded(){
    console.log("model Loded");
}

function Gotposes(resultes)
{
    if(resultes.length >0 ){
        console.log( resultes );
        console.log( "nose x = "+ resultes[0].pose.nose.x);
        console.log( "nose y = "+ resultes[0].pose.nose.y);
    }
}