song1 = "";
song2 = "";
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 550);
    canvas.position(500, 00)
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 550);
}