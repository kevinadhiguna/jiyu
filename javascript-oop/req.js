// import RequestCSVGenerator from './csv/request-csv-generator';
const ReqCSVGen = require('./csv/req-csv-gen');

function getCSVFiltList() {
  const id = 'Ky4Ca9Rr3An';

  let csvHelper = new ReqCSVGen();
  csvHelper.gen(id);
}

getCSVFiltList();
