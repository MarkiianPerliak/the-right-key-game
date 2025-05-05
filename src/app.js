const keys = ["w", "a", "s", "d", "f", "e", "z", "x", "q"];

let currentKeyIndex = 0;
let keyNumber = Math.floor(Math.random() * keys.length);
let key = keys[keyNumber];

console.log("Press this key:", key);

window.addEventListener("keydown", (event) => {
    if (event.key === key) {
        alert("You did it!");
        currentKeyIndex++;
        keyNumber = Math.floor(Math.random() * keys.length);
        key = keys[keyNumber];
    } else {
        console.log(`Wrong key: "${event.key}". Try again!`);
    }
});
