let xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost/endpoint', true);
xhr.send('email=update@email.com');
fetch('http://localhost/endpoint');
