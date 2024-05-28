/* Write a Js program to create a word dictionary of 5 words
 */

// Define a function to create a word dictionary
function createWordDictionary() {
    // Initialize an empty object to store the dictionary
    const wordDictionary = {};

    // Add words to the dictionary with their meanings
    wordDictionary["apple"] = "a round fruit with red or green skin and a whitish interior";
    wordDictionary["bicycle"] = "a two-wheeled vehicle that is powered by pedaling";
    wordDictionary["computer"] = "an electronic device for storing and processing data";
    wordDictionary["elephant"] = "a large mammal with a long trunk and tusks";
    wordDictionary["guitar"] = "a musical instrument with strings played by plucking or strumming";

    // Return the created word dictionary
    return wordDictionary;
}

// Call the function to create the word dictionary
const dictionary = createWordDictionary();

// Display the created word dictionary
console.log("Word Dictionary:");
console.log(dictionary);
