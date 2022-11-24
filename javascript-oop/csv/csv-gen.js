class CSVGen {
  gen(reportId) {
    console.log('gen (csv-gen.js)');
    this.continueGen(reportId);
  }

  continueGen(id) {
    console.log('continueGen (csv-gen.js)');
    console.log('id : ', id);
  }
}

// export default CSVGen;
module.exports = CSVGen;
