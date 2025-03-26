const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the initial HTML structure
  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Live Update</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
        }
        h2 {
          color: tomato;
          font-size: 24px;
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
        .hidden {
          opacity: 0;
        }
        .spinner {
          width: 30px;
          height: 30px;
          border: 4px solid #ddd;
          border-top: 4px solid tomato;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
          display: none;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </head>
    <body>
      <h2 id="message">Hello</h2>
      <div class="spinner" id="spinner"></div>

      <script>
        setTimeout(() => {
          document.getElementById('message').classList.add('hidden');
          document.getElementById('spinner').style.display = 'block';

          setTimeout(() => {
            document.getElementById('spinner').style.display = 'none';
            const message = document.getElementById('message');
            message.innerHTML = "Welcome to Priyen sir's class";
            message.classList.remove('hidden');
          }, 2000); // Delay before showing the final message
        }, 8000); // Wait 8 seconds before starting transition
      </script>
    </body>
    </html>
  `);

  res.end(); // Close response immediately
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
