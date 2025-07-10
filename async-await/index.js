// ASYNC/AWAIT 

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

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const trashResult = await trash();
        console.log(trashResult);

        console.log("finished");
    }
    catch (error) {
        console.error(error);
    }

}

doChores();