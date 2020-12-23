# quotes-api
Quotes API with **Node.js and Express.js**\
I got the json file, which for the quotes; from [there](https://github.com/JamesFT/Database-Quotes-JSON)\
You can access API from [here](https://quotes-node-api.herokuapp.com)\

# How to use

    npm install
    node index.js

# Where to find?
You can access the API from local, `localhost:1998` or `127.0.0.1:1998`

# API Endpoints
`localhost:1998/api/sozler` - brings all quotes from the pool.\
`localhost:1998/api/sozler/{id}` - brings the quote, which with specified id.\
`localhost:1998/api/rastgele` - brings a random quote.\
`localhost:1998/api/dizi/{count}` - brings random array of quotes with specified count.\
`localhost:1998/api/authors` - brings list of authors.\
`localhost:1998/api/searchAuthor/'{authorName}'` - brings authors* all quotes from the pool.


# To-Do's

 - <del>Deploy into Heroku</del>
 - **Create a landing page**
 - **Establish a Real-Time Database**
  \
  \
 <b>* = You can get name of the author, which you want to search; from the `/api/authors`</b>