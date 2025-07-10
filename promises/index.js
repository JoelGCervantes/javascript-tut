// PROMISES

// Example 1 

/** Doing Chores **/
// 1. Walk Dog 
// 2. Clean Kitchen 
// 3. Take Out Trash 

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if (dogWalked) {
                resolve("dog walked");
            }
            else {
                reject("dog wasn't walked");
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = false;

            if (kitchenCleaned) {
                resolve("kitchen cleaned");
            }
            else {
                reject("kitchen was not cleaned");
            }
        }, 2000);
    });
}

function trash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trash = true;

            if (trash) {
                resolve("trash taken out");
            }
            else {
                reject("trash not taken out");
            }
        }, 1000);
    })
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return trash() })
    .then(value => { console.log(value); console.log("finised") })
    .catch(error => {
        console.error(error);
    });

/** Using Callback Hell
walkDog(() => {
    cleanKitchen(() => {
        trash(() => {
            console.log("finished");
        });
    });
})
**/

