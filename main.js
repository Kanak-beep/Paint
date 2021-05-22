canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "black";
var width = "5";
var radius = "10";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line");
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.client - canvas.offsetLeft;
    current_position_of_mouse_y = e.client - canvas.offsetTop;
    if(mouseEvent == "mouseDown") {
        console.log("current_position_of_mouse_x_and_y_coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y + );
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_the_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke;
    }
}
