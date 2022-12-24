// Reference : https://dev.to/ramgendeploy/learn-javascript-reduce-method-with-5-examples-128n

let obj = [
  {name: 'Alice', job: 'Data Analyst', country: 'AU'},
  {name: 'Bob', job: 'Pilot', country: 'US'},
  {name: 'Lewis', job: 'Pilot', country: 'US'},
  {name: 'Karen', job: 'Software Eng', country: 'CA'},
  {name: 'Jona', job: 'Painter', country: 'CA'},
  {name: 'Jeremy', job: 'Artist', country: 'SP'},
];

let initialValue = []; // Could be '{}' too

const ppl = obj.reduce((group, curP) => {
  let newkey = curP['country'];
  
  if (!group[newkey]) {
    group[newkey] = [];
  }
  
  group[newkey].push(curP);
  
  return group;
}, initialValue);

console.log(ppl);

// index 0
// newkey = 'AU'
// group[newkey] = group['AU'] = [];
// group[newkey].push(curP) --> group['AU'] = [ 'AU': [{name: 'Alice', job: 'Data Analyst', country: 'AU'}] ]
// return group ->
// [ 'AU': [{name: 'Alice', job: 'Data Analyst', country: 'AU'}] ]

// index 1
// newkey = 'US'
// group[newkey] = group['US'] = [];
// group[newkey].push(curP) --> group['US'] = [ 'US': [{name: 'Bob', job: 'Pilot', country: 'US'}] ]
// return group -->
// [
//   AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
//   US: [{name: 'Bob', job: 'Pilot', country: 'US'}]
// ]

// index 2
// newkey = 'US'
// group[newkey].push(curP) --> group['US'] = [ 'US': [
//  {name: 'Bob', job: 'Pilot', country: 'US'},
//  {name: 'Lewis', job: 'Pilot', country: 'US'}
// ]]
// return group --> 
// [
//   AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
//   US: [{name: 'Bob', job: 'Pilot', country: 'US'}, {name: 'Lewis', job: 'Pilot', country: 'US'}]
// ]

// index 3
// newkey = 'CA'
// group[newkey] = group['CA'] = [];
// group[newkey].push(curP) --> group['CA'] = [ 'CA': [{name: 'Karen', job: 'Software Eng', country: 'CA'}] ]
// return group --> 
// [
//   AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
//   US: [{name: 'Bob', job: 'Pilot', country: 'US'}, {name: 'Lewis', job: 'Pilot', country: 'US'}],
//   CA: [{name: 'Karen', job: 'Software Eng', country: 'CA'}]
// ]

// index 4
// newkey = 'CA'
// group[newkey].push(curP) --> group['CA'] = [ 'CA': [
//  {name: 'Karen', job: 'Software Eng', country: 'CA'},
//  {name: 'Jona', job: 'Painter', country: 'CA'}
// ] ]
// return group --> 
// [
//   AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
//   US: [{name: 'Bob', job: 'Pilot', country: 'US'}, {name: 'Lewis', job: 'Pilot', country: 'US'}],
//   CA: [{name: 'Karen', job: 'Software Eng', country: 'CA'}, {name: 'Jona', job: 'Painter', country: 'CA'}]
// ]

// index 5
// newkey = 'SP'
// group[newkey] = group['SP'] = [];
// group[newkey].push(curP) --> group['SP'] = [ 'SP': [{name: 'Jeremy', job: 'Artist', country: 'SP'}] ]
// return group --> 
// [
//   AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
//   US: [{name: 'Bob', job: 'Pilot', country: 'US'}, {name: 'Lewis', job: 'Pilot', country: 'US'}],
//   CA: [{name: 'Karen', job: 'Software Eng', country: 'CA'}, {name: 'Jona', job: 'Painter', country: 'CA'}],
//   SP: [{name: 'Jeremy', job: 'Artist', country: 'SP'}]
// ]
