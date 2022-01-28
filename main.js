var canvas = new fabric.Canvas('myCanvas');

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;

        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}
function up() {
    if (player_y > 0) {
        player_y = player_y - block_img_height;
        console.log("block image height " + block_img_height);
        console.log("player X = " + player_x + "player Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y <= 500) {
        player_y = player_y + block_img_height;
        console.log("block image height " + block_img_height);
        console.log("player X = " + player_x + "player Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x > 0) {
        player_x = player_x - block_img_width;
        console.log("block image width " + block_img_width);
        console.log("player X = " + player_x + "player Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x <= 850) {
        player_x = player_x + block_img_width;
        console.log("block image width " + block_img_width);
        console.log("player X = " + player_x + "player Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("ASCII value of keyPressed is " + keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p + shift");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m + shift");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keyPressed == '37') {
        
        console.log("left");
        left();
    }
    if (keyPressed == '38') {
        
        console.log("up");
        up();
    }
    if (keyPressed == '39') {
        
        console.log("right");
        right();
    }
    if (keyPressed == '40') {
        
        console.log("down");
        down();
    }
    if (keyPressed == '87') {
        
        console.log("w");
        new_image('wall.jpg');
    }
    if (keyPressed == '71') {
        
        console.log("g");
        new_image('ground.png');
    }
    if (keyPressed == '76') {
        
        console.log("l");
        new_image('light_green.png');
    }
    if (keyPressed == '84') {
        
        console.log("t");
        new_image('trunk.jpg');
    }
    if (keyPressed == '82') {
        
        console.log("r");
        new_image('roof.jpg');
    }
    if (keyPressed == '89') {
        
        console.log("y");
        new_image('yellow_wall.png');
    }
    if (keyPressed == '68') {
        
        console.log("d");
        new_image('dark_green.png');
    }
    if (keyPressed == '85') {
        
        console.log("u");
        new_image('different.png');
    }
    if (keyPressed == '67') {
        
        console.log("c");
        new_image('cloud.jpg');
    }
}