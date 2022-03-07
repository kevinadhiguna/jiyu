// Reference : Digital Ocean (https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node)

class Balondor {
  private balondorAwardee: Array<string> = [
    "Cristiano Ronaldo",
    "Robert Lewandowski",
    "Lionel Messi",
    "Kaka",
    "Lev Yashin",
    "Alfredo Di Stefano",
    "Gerd Muller",
    "Franz Beckenbauer",
    "Johan Cruyff",
    "Michel Platini",
  ];

  shuffle(): void {
    for (let i: number = this.balondorAwardee.length - 1; i > 0; i--) {
      let j: number = Math.floor(Math.random() * (i + 1));
      let temp: string = this.balondorAwardee[i];
      this.balondorAwardee[i] = this.balondorAwardee[j];
      this.balondorAwardee[j] = temp;
    }
  }

  random(count: number = 1, allowDups?: boolean): Array<string> {
    let selectedBalondorAwardee: Array<string> = [];

    // let selected2: [string] = []; // <- Error
    // Type '[]' is not assignable to type '[string]'.
    // Source has 0 element(s) but target requires 1.

    // If count parameter exceeds number of Balond'or awardee in array above, throw an error
    if (count > this.balondorAwardee.length && !allowDups) {
      throw new Error("Can ensure no duplicates on that count...");
    }

    for (let i: number = 0; i < count; i++) {
      if (allowDups) {
        selectedBalondorAwardee.push(
          this.balondorAwardee[
            Math.floor(Math.random() * this.balondorAwardee.length)
          ]
        );
      } else {
        this.shuffle();
        selectedBalondorAwardee = this.balondorAwardee.slice(0, count);
      }
    }

    return selectedBalondorAwardee;
  }
}

const balondorPlayers = new Balondor();
console.log(`With Duplicates : ${balondorPlayers.random(10, true)}`);
// If 'allowDups' parameter is not present, by default it equals to false.
console.log(`Without Duplicates : ${balondorPlayers.random(5)}`);

