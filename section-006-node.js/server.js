// Import the HTTP module
const http = require('http');

//Define the port
const PORT = 3000

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  // console.log(req.url);
  const resource = [];

  switch (req.url) {
    case '/books':
      resource.push(...['b1', 'b2'])
      break;

    case '/authors':
      resource.push('a1', 'a2')
      break;

    default:
      // TODO SOMETIME IN THE NEAR FUTURE
      break;
  }

  // Send the response body as 'Hello, World!'
  res.end(JSON.stringify({data: resource})); 
  // res.end('{text: hello}'); 
});

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});