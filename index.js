const connection = require("./utilities/connection");

connection.connect((err) => {
    try {
        if (err) {
            console.log("sorry couldn't connect");
            throw err;
        };
        console.log("connection success");
    } catch (error) {
        console.log(error.stack);
    }
});

//all code where connection is required such as query goes here

connection.end();