const isTransferred = false;

const transfer = new Promise((resolve, reject) => {
  if (!isTransferred) {
    const transferDetails = {
      player: 'Luka Modric',
      club: 'Kawasaki Frontale',
      fee: 1000000
    };
    resolve(transferDetails);
  } else {
    reject(new Error('Transfer is already done!'));
  }
});

const addToTransferList = transferDetails => {
  return new Promise((resolve, reject) => {
    const transferList = `${transferDetails.player} is transferred to ${transferDetails.club} for ${transferDetails.fee} EUR`;
    resolve(transferList);
  });
};

// Has same functionality as the 'addToTransferList' function above
const addToTransferList2 = transferDetails => {
  const transferList = `${transferDetails.player} is transferred to ${transferDetails.club} for ${transferDetails.fee} EUR`;
  return Promise.resolve(transferList);
};

transfer
  .then(addToTransferList)
  .then(res => {
    console.log('The transfer is a done deal!');
    console.log(res);
  })
  .catch(err => {
    console.log('Something went wrong...');
    console.log(err.message);
  });
