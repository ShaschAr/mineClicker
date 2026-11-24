const counter = document.getElementById("counter");
const button = document.getElementById("mainButton");
const shop1 = document.getElementById("shop1");
const shop2 = document.getElementById("shop2");
const test = document.getElementById("test");
const inventory = document.getElementById("inventory");
const slots = document.getElementById("slots");
let shovelCount = 0;
let gloveCount = 0;
let money = 0;
let shop1Color = true;
let shop2Color = true;
let isInventoryOut = false;

//inventory variables
let inventoryCount = 0;
const dirt = document.getElementById("dirt");
let dirtCount = 0;
const stone = document.getElementById("stone");
let stoneCount = 0;
const iron = document.getElementById("iron");
let ironCount = 0;
const quartz = document.getElementById("quartz");
let quartzCount = 0;
const coal = document.getElementById("coal");
let coalCount = 0;
const copper = document.getElementById("copper");
let copperCount = 0;
const gold = document.getElementById("gold");
let goldCount = 0;
const emerald = document.getElementById("emerald");
let emeraldCount = 0;
const diamond = document.getElementById("diamond");
let diamondCount = 0;
const metite = document.getElementById("metite");
let metiteCount = 0;
        
//button
button.addEventListener("click", function() {
    money += (1 + shovelCount/2) * ((gloveCount/20)+1);
    counter.innerHTML = "<bold>" + "$" + Math.floor(money) + "</bold>";
    button.style.width = "12vw";
    button.style.height = "12vw";
    button.style.left = "44vw";
    button.style.top = "44vh";
    button.style.fontSize = "3vw";
    setTimeout(resize, 100);
    mine(1,1)
});
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#282524";
});
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#3a3634";
});
function resize() {
    button.style.width = "14vw";
    button.style.height = "14vw";
    button.style.left = "43vw";
    button.style.top = "43vh";
    button.style.fontSize = "3.75vw";
}

//inventory
function mine(tool, depth) {
    if (depth = 1) {
        if (tool=1) {
            let randomOre = Math.floor(Math.random() * 10);
            if (randomOre === 9) {
                quartzCount++;
                quartz.innerHTML = quartzCount;
            } else if (randomOre === 8) {
                ironCount++;
                iron.innerHTML = ironCount;
            } else if (randomOre > 4) {
                stoneCount++;
                stone.innerHTML = stoneCount;
            } else {
                dirtCount++;
                dirt.innerHTML = dirtCount;
            }
            inventoryCount++;
        } else if (tool=2) {
            
        } else if (tool=3) {

        } else {

        };
    } else if (depth = 2) {
        if (tool=1) {

        } else if (tool=2) {
            
        } else if (tool=3) {

        } else {

        };
    } else if (depth = 3) {
        if (tool=1) {

        } else if (tool=2) {
            
        } else if (tool=3) {

        } else {

        };
    } else if (depth = 4) {
        if (tool=1) {

        } else if (tool=2) {
            
        } else if (tool=3) {

        } else {

    };
    } else if (depth = 5) {
        if (tool=1) {

        } else if (tool=2) {
            
        } else if (tool=3) {

        } else {

        };
    };
};

//inventory
inventory.addEventListener("mouseover", function() {
    inventory.style.backgroundColor = "#282524";
});
inventory.addEventListener("mouseout", function() {
    inventory.style.backgroundColor = "#3a3634";
});
inventory.addEventListener("click", function() {
    if (isInventoryOut) {
        slots.style.visibility = "hidden";
        inventory.style.top = "88vh";
        isInventoryOut = false;
    } else {
        slots.style.visibility = "visible";
        inventory.style.top = "66vh";
        isInventoryOut = true;
    }
});
        
//shovels
shop1.addEventListener("mouseover", function() {
    if (shop1Color) {
        shop1.style.backgroundColor = "#282524";
    }
});
shop1.addEventListener("mouseout", function() {
    if (shop1Color) {
        shop1.style.backgroundColor = "#3a3634";
    }
});
shop1.addEventListener("click", function() {
    if (money >= 50) {
        money -= 50;
        shovelCount++;
        counter.innerHTML = "<bold>" + "$" + Math.floor(money) + "</bold>";
        document.getElementById("shovelCount").innerHTML = shovelCount;
    } else {
        shop1.style.backgroundColor = "#810000";
        shop1Color = false;
        setTimeout(shop1fail, 500)
    }
});
function shop1fail() {
    shop1.style.backgroundColor = "#3a3634";
    shop1Color = true;
}

//gloves
shop2.addEventListener("mouseover", function() {
    if (shop2Color) {
        shop2.style.backgroundColor = "#282524";
    }
});
shop2.addEventListener("mouseout", function() {
    if (shop2Color) {
        shop2.style.backgroundColor = "#3a3634";
    }
});
shop2.addEventListener("click", function() {
    if (money >= 200) {
        money -= 200;
        gloveCount++;
        counter.innerHTML = "<bold>" + "$" + Math.floor(money) + "</bold>";
        document.getElementById("gloveCount").innerHTML = gloveCount;
    } else {
        shop2.style.backgroundColor = "#810000";
        shop2Color = false;
        setTimeout(shop2fail, 500)
    }
});
function shop2fail() {
    shop2.style.backgroundColor = "#3a3634";
    shop2Color = true;
}