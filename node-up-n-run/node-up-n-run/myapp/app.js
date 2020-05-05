// File: app.js
// Time-stamp: <2020-02-18 13:26:13 Chuck Siska>
var express = require('express');
var app = express();  // Init an Express object.
    /// This is run when you click on the button in the form with 'action="/get_form_text"'.
    app.get( // Handle a client-side action request.
        '/get_form_text', // For this URL sub-tag action:
        function(req, res){  // Run this fcn.  /// This function builds the response 'webpage'.
        // Get the text from the URL request packet.
        var myText = req.query.my_input_box_text; /// This is where you get the user's input text.
        console.log('App.js rcvd = ' + myText + '.');
        // Reply to the client GUI using that text.
        res.send('Your Text:' +myText);  /// This 'builds' and sends the response 'webpage'.
});
/// This is run when you got to the http://localhost:3000/ webpage.
app.get('/', function (req, res) { // Set page-gen fcn for URL root request.
    //Old: res.send('Hello World!'); // Send webpage containing "Hello World!".
    // NB, need absolute path here (including correct drive location).
    res.sendFile( 'Macintosh HD⁩:Utilisateurs⁩//tealaurey⁩//Bureau⁩//CECS343⁩//CECS343_Projects⁩//node-up-n-run⁩//node-up-n-run⁩//js-up-n-run⁩//code⁩//ex3⁩' ); /// The initial webpage.
});
app.listen(3000, function () { // Set callback action fcn on network port.
    console.log('App.js listening on port 3000!'); /// See this after you do >node app.js
});
