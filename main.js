function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    color = "";
}

function draw()
{
    image(video, 230, 150, 220, 200);
    tint(color);
    fill(0, 0, 255);
    stroke(0, 0, 150);
    circle(50, 50, 50)
    circle(50, 430, 50)
    circle(590, 50, 50)
    circle(590, 430, 50)
    fill(0, 255, 0)
    stroke(0, 0, 0)
    rect(90, 40, 460, 20)
    rect(90, 420, 460, 20)
    rect(40, 90, 20, 300)
    rect(580, 90, 20, 300)
}

function aplicarFiltro()
{
    color = document.getElementById("NomeDaCor").value;
}

function takeSnapshot()
{
    save("SuaFoto.png")
}