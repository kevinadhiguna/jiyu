// Reference : https://www.w3schools.com/js/js_this.asp

// "this" keyword refers to an object it belongs to.
const angels_anaheim = {
  manager: "Joe Maddon",
  best_player: "Shohei Ohtani",
  quote: function () {
    return (
      "Angels manager is " +
      this.manager +
      " and Angels' best player is " +
      this.best_player
    );
  },
};

console.log("Currently", angels_anaheim.quote());
// Currently Angels manager is Joe Maddon and Angels' best player is Shohei Ohtani
