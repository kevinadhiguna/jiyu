const uri = 'https://applytojob.org/?ref=メール';
const encodedUri = encodeURI(uri);

console.log('Encoded URI :', encodedUri); // https://applytojob.org/?ref=%E3%83%A1%E3%83%BC%E3%83%AB

// To-do: decode the URI