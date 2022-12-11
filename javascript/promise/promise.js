const isTransferred = false;

const transfer = new Promise((resolve, reject) => {
  if (!isTransferred) {
    const transferDetails = {
      player: 'Luka Modrid',
      club: 'Kawasaki Frontale',
      fee: 1000000
    };
    resolve(transferDetails);
  } else {
    reject(new Error('Transfer is already done!'));
  }
});

transfer
  .then(res => {
    console.log('Transfer is ready to be done');
    console.log(res);
  })
  .catch(err => {
    console.log('Something went wrong...');
    console.log(err.message);
  });
