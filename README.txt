RUNNING THE SERVER
This server listens on port 3000.

Install the dependencies by running 'npm install'.
You can run the server by running 'node index.js' from the directory.

TESTING THE SERVER
To test, install a program called 'Postman' (it's free).
Set the URL to http://localhost:3000/data/record
Set the request type (dropdown box to the left of the URL box) to POST
Click on the 'Body' tab
Set the type (radio button just below the tab) to x-www-form-urlencoded
Put in a key and a value (like 'test' and 'testValue')
Click the blue 'Send' button.

You should see 'Success' pop up in the response area.
The server will have printed what it received to the screen.


ADDING CODE
There are a ton of available packages for node.  These are installed
through a command line tool called "npm".

If you want to use a package, run 'npm install <packagename> --save'.
The --save flag tells it to save the package requirement in package.json.
package.json is what the 'npm install' command uses to know about and install
dependencies.
