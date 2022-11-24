// import CSVGen from './csv-gen';
const CSVGen = require('./csv-gen');

class ReqCSVGen extends CSVGen {
  continueGen(id) {
    console.log('continueGen (req-csv-gen.js)');
    console.log('id : ', id);
  }
}

// export default ReqCSVGen;
module.exports = ReqCSVGen;
