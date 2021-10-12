const figlet = require("figlet");

let text = "JavaScript";

const banner = figlet.text(text, {
    font: "Larry 3D",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
    whitespaceBreak: true
}, (err, data) => {
    if (err) {
        console.error("Oops.. something went wrong..");
        console.dir(err);
        return err;
    }
    console.log(data);
});

module.exports = banner;
