function isEmailValid(email) {
    // Email Regex Source : https://emailregex.com/
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email) ? "a valid" : "an invalid";
}

const emailAddresses = [
    "hello@mywebsite.com",
    "admin@mywebsite.com",
    "customer.service@mywebsite.com",
    "privacy-question@mywebsite.com",
    "Hi@mywebsite.com", // <- Known issue : should be invalid
    "support#nofilter@mywebsite.com", // <- // Known issue : should be invalid
];

for (let i = 0; i < emailAddresses.length; i++) {
    console.log(
        `[case ${i}]`,
        emailAddresses[i],
        "is",
        isEmailValid(emailAddresses[i]),
        "email address.."
    );
}
