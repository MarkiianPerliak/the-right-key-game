import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

const keys = ["w", "a", "s", "d", "f", "e", "z", "x", "q"];

let currentKeyIndex = 0;
let keyNumber = Math.floor(Math.random() * keys.length);
let key = keys[keyNumber];

console.log("Press this key:", key);

window.addEventListener("keydown", (event) => {
    if (event.key === key) {
        alert({
            text: "You did it!",
            type: 'success',
            delay: 1000
        });
        currentKeyIndex++;
        keyNumber = Math.floor(Math.random() * keys.length);
        key = keys[keyNumber];
        console.log("Next key:", key);
    } else {
        alert({
            text: "You didn't do it!",
            type: 'loser',
            delay: 1000
        });
    }
});
