const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: '*', 
  methods: 'GET,POST,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions)); // Apply CORS middleware globally
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Received request on', req.path);
  console.log('Request Method:', req.method);
  console.log('Request Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Request Body:', JSON.stringify(req.body, null, 2));
  console.log('Request Query:', JSON.stringify(req.query, null, 2));
  next();
});

app.get('/overrides', (req, res) => {
  res.send({
    themeV2: {
      loginBox: {
        signup: {
          splitFullName: true,
        },
      },
    },
    localizations: {
      en: {
        loginBox: {
          login: {
            backToLogin:"" // remove the "Back to Sign-in" link 
          },
        },
      },
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
