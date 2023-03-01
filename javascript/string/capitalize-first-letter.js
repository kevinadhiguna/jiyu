function capitalizeFirstLetter([first, ...rest]) {
  return first.toUpperCase() + rest.join('');
}

console.log('vscode :', capitalizeFirstLetter('vscode')); // Vscode

// To-do: Capitalize each word separated by a space
console.log('visual studio :', capitalizeFirstLetter('visual studio')); // Visual studio

// Reference:
// - https://morioh.com/p/a76bc7d72226
