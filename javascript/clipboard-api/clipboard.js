/**
 * Some notes :
 * - The readtText() API prompts for permission first time.
 * - Both readText() and writeText() need the document to be in focus.
 * - This code should be compatible on Chrome 66+, Firefox 63+, and Microsoft Edge 79+
 */

// To read text from clipboard
navigator.clipboard.readText()
    .then(text => {
        // Use a text
        console.log("Text :", text);
    })
    .catch(readTextErr => {
        // Handle an error reading text
        console.log("Error happened :", readTextErr);
    });

// To write text to clipboard
navigator.clipboard.writeText()
    .then(() => {
        // Success
        console.info("Successfully write the text !");
    })
    .catch(writeTextErr => {
        // Handle an error writing text
        console.error("Failed writing text :", writeTextErr);
    });
