
const canvasApp = require('./sphere')
import './css/clients.css'
import './css/style.css'

window.addEventListener("load", canvasApp, false);

const myPage = new window.fullpage('#fullpage', {
    onLeave: function (origin, destination, direction) {
        // console.log('origin.index', origin.index);
        // console.log('destination.index', destination.index);
        if (origin.index !== destination.index) {
            if (destination.index === 1) {
                window.setTimeout(function () {
                    window.$('.top-logo').addClass('black');
                }, 500)
            } else {
                window.$('.top-logo').removeClass('black');
            }
        }
    },
    // afterLoad: function (origin, destination, direction) {
    //     console.log('origin.index', origin.index);
    //     console.log('destination.index', destination.index);
    //     if (origin.index === 0 && destination.index === 1) {
    //         window.$('.top-logo').addClass('black');
    //     }
    // }
});

// console.log('myPage', myPage);

function toContact() {
    myPage.moveSectionDown();
}

document.querySelector('#toContact').addEventListener('click', toContact)

//methods
// fullpage_api.setAllowScrolling(false);