const isTransferred = false;

let addToTransferList = details => console.log(`${details.player} is transferred to ${details.club} for ${details.fee} EUR`);

function transfer(callback) {
  if (!isTransferred) {
    const transferDetails = {
      player: 'Luka Modric',
      club: 'Kawasaki Frontale',
      fee: 1000000
    };
    callback(addToTransferList(transferDetails));
  } else {
    console.log('Transfer is already done!');
  }
}

transfer(addToTransferList);

// Output:
// Luka Modric is transferred to Kawasaki Frontale for 1000000 EUR
// callback-2.js:3
// let addToTransferList = details => console.log(`${details.player} is transferred to ${details.club} for ${details.fee} EUR`);
//                                                           ^

// TypeError: Cannot read property 'player' of undefined
