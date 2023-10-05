// Casey Hsu - 101376814
// Full Stack Web Development COMP3123 - Lab Test 1
// Date: 2023-10-05

// Question 1
function lowerCasedWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject("Error: Not an array");
        } else {
            const stringsOnly = array.filter(element => typeof element === "string");
            resolve(stringsOnly.map(element => element.toLowerCase()));
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCasedWords(mixedArray)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))