function logger(event) {
  const char = event.key;

  console.log(char);
  return char;
}

document.addEventListener('keydown', logger);
