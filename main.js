song = "";

function preload()
{
song = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    canvas.hide();
}

function play()
{
    song.play();
}

function draw()
{
    image(video, 0 , 0 , 600 , 500);
}