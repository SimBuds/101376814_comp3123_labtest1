// Casey Hsu - 101376814
// Full Stack Web Development COMP3123 - Lab Test 1
// Date: 2023-10-05

// Question 2
// Function that will resolve after 500ms
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Successfully resolved.');
        }, 500);
    });
}

// Function that will reject after 500ms
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Promise rejected.');
        }, 500);
    });
}

resolvedPromise()
    .then((message) => {
        console.log(message);
    });

rejectedPromise()
    .catch((error) => {
        console.error(error);
    });