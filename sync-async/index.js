// sychronous = executes line by line in sequential manner 
//              code that waits for an operation to complete 

// asynchronous = allows multiple operations to be preformed concurrently without waiting 
//                doesn't block the execution of flow and 
//                allows the program to continue (I/O operations,
//                network requests, fetching data) handled with: callbacks, 
//                promises, async/await


function func1(callback) {
    // in this case Task 1 is asynchronous and Tasks 2-4 are synchronous 
    setTimeout(() => { console.log("Task 1"); callback() }, 3000);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);
