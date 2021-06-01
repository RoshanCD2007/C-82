Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
color="black";
width_of_line=2;
var mouseEvent="empty";
var last_position_x,last_position_y;

Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}

Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_position_x=e.clientX-Canvas.offsetLeft;
    var current_position_y=e.clientY-Canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last position of X and Y coordinates =");
        console.log("x="+last_position_x+"y="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("Current positions of X and Y coordinates");
        console.log("x="+current_position_x+"y="+current_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;
}

Canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}



