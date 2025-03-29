Overview:
This microservice uses Node.js and Express to deliver simple arithmetic operations through a REST API. It also has Winston-based logging capabilities for monitoring failures and operations.
•	Perform basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.
•	Winston-based logging for request tracking and error handling.
Prerequisites:
1.	Node.js installed in the system
2.	Git installed
Tools required:
1.	Node.js: Download from Node.js Official Website
2.	Git: Git Download
3.	Visual Studio Code: VS Code
Steps for building the project:
1.	Setting up the environment
•	Install Node.js from Node.js Official Website
•	Install git and clone the project using git clone <repository_url> 
2.	Install all dependencies
•	Using npm install command, install the required packages i.e. Winston and express
•	express is used to create the microservice and handle HTTP requests.
•	Winston is used for logging request details and errors.
3.	Creating the server:
•	Using Express to set up a server listening on port 3000.
•	Define routes for arithmetic operations ( /add ,  /subtract , /multiply , /divide ).
4.	Initializing Express and Logger:
•	Initializes express application using const app = express();
•	const port = 3000 sets the port to 3000.
•	Winston Logger Setup:
o	Logs information at info level in JSON format.
o	Logs errors in logs/error.log.
o	Logs all activities in logs/combined.log.
5.	Middleware for Parsing JSON: app.use(express.json()) parses incoming JSON data in requests.
6.	Input Validation Function: Ensures num1 and num2 are valid numbers before processing.
7. API Endpoints for Arithmetic Operations:
A. Addition (/add): It extracts num1 and num2 from query parameters and then validates input using validateNumbers(). It then performs addition and logs the request.
Endpoint: GET /add?num1=5&num2=3
Example: http://localhost:3000/add?num1=5&num2=3
B. Subtraction (/subtract): It extracts num1 and num2 from query parameters and then validates input using validateNumbers(). It then performs subtraction and logs the request.
Endpoint: GET /subtract?num1=8&num2=2
Example: http://localhost:3000/subtract?num1=8&num2=2
C. Multiplication (/multiply): It extracts num1 and num2 from query parameters and then validates input using validateNumbers(). It then performs multiplication and logs the request.
Endpoint: GET /multiply?num1=4&num2=7
Example: http://localhost:3000/multiply?num1=4&num2=7
D. Division (/divide): It extracts num1 and num2 from query parameters and then validates input using validateNumbers(). It then performs division and logs the request. It includes an extra check for division by zero.
Endpoint: GET /divide?num1=10&num2=2
Example: http://localhost:3000/divide?num1=10&num2=2
8. Logging and Debugging:
•	Used Winston for logging.
•	Logs successful operations in logs/combined.log.
•	Logs errors in logs/error.log.
        9. Error Handling:
•	Validate input parameters for each endpoint.
•	Handles all invalid inputs and handles division by 0
        10.  Running the application:
•	Starting the server using node index.js
•	The server runs on http://localhost:3000.


