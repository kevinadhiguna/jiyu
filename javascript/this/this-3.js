// "this" keyword refers to an object it belongs to. W
// When used alone, "this" refers to the global object because "this" is running in the global scope.

const self = this;

const team = {
  player: "Marc Marquez"
};

function setPlayer() {
  self.player = team.player;
}

setPlayer();

console.log("this.player : ", this.player); // this.player : Marc Marquez
console.log("self.player : ", self.player); // self.player : Marc Marquez
