// error handling in JS


// errors happen due to:
// NETWROK ERRORS
// SECURITY REJECTION

try {
    console.log("hi");

}
catch (error) {
    console.error(error);
}

//optional
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("always executes");
}
console.log("end");

try {
    const dividend = Number(window.prompt("enter dividend"));
    const divisor = Number(window.prompt("Enter diviser"));

    if (divisor == 0) {
        throw new Error("No division by zero");
    }

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("values must be numbers");
    }

    const result = dividend / divisor;
    console.leg(result);
}
catch (error) {
    console.error(error);
}
console.log("end");