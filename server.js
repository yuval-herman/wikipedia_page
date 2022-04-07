function handle(request, response) {
  let path = request.path;
  console.log("Received request: " + path);
  if (path === '/') path = 'index.html';
  getFile(path).subscribe(file => {
    response.sendFile(file);
  }, err => {
    response.sendText('Page not found. Perhaps the filename is wrong?');
  });
}

console.log('Server is running');
