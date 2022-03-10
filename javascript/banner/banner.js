const figlet = require("figlet");

let text = "JavaScript";

const banner = figlet.text(
  text,
  {
    font: "Larry 3D",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      console.error("Oops.. something went wrong..");
      console.dir(err);
      return err;
    }
    console.log(data);
  }
);

// == Import and Export syntaxes (details : https://stackoverflow.com/a/60331886) ==
// (1) CommonJS syntax
// Export the banner
module.exports = banner;
// How to import the banner in another file (Example)
// const banner = require("./banner");

// (2) ES6 syntax
// Export the banner
// export default banner;
// How to import the banner in another file (Example)
// import { banner } from "banner";
