const express = require('express');
const helmet = require('helmet') 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
require ('dotenv').config();

module.exports = app;

// Add middleware for http headers
app.use(helmet()) 

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

app.use(morgan('tiny'));

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middware for parsing request bodies here:
app.use(bodyParser.json());

// Mongoose options
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URL, options)
  .then(() => console.log(`Database connection established`))
  .catch((err) => console.error(`There was an error connecting to database, the err is ${err}`));


// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
