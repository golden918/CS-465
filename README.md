Travlr Getaways – Full Stack Web Application

Architecture

This project used three different frontend approaches. The Express HTML side uses server-side rendering with Handlebars templates, where the server processes each request and returns a fully built HTML page to the browser. JavaScript was used throughout to handle routing, data logic, and templating. The Angular SPA takes a completely different approach as it loads once and dynamically updates the UI without full page reloads, communicating with the backend through a REST API.

MongoDB was chosen as the backend database because it stores data as flexible JSON-like documents, which aligns naturally with the JavaScript stack. Unlike relational databases, MongoDB doesn't require a fixed schema, making it easier to iterate on data structures like trips without running migrations. It also scales horizontally well, which suits a travel app that may experience traffic spikes.

Functionality

JSON is a lightweight data format used to transfer information between the frontend and backend. Unlike JavaScript, JSON is language-agnostic and can be parsed by any system. In this project, the Angular SPA sends and receives JSON through HTTP requests to the REST API, which reads and writes to MongoDB. JSON is what ties the two sides together. The Angular service calls the API, gets JSON back, and binds it to the UI components.

During development, code was refactored several times to improve functionality. The trip data was originally hardcoded in a local TypeScript file and later moved to MongoDB and fetched through the API. The trip display was also split from a single component into TripListing and TripCard components. This separation made each component easier to maintain and reuse. TripCard can be dropped anywhere a trip needs to be displayed without duplicating code.

Testing

Testing the API was done using Postman to send GET, POST, and PUT requests to the endpoints. GET requests to /api/trips were tested without authentication since they are public. POST and PUT requests require a valid JWT, so testing involved first hitting /api/login to get a token, then including it in the Authorization header as a Bearer token for protected routes. Adding security layers increases testing complexity because every protected endpoint must be tested both with and without a valid token to confirm that unauthorized requests are properly rejected.

Reflection

This course helped build a practical understanding of how full-stack applications are structured and how the pieces connect. Working through both the Express side and the Angular SPA showed how different rendering approaches solve different problems. The skills developed here, REST API design, JWT authentication, Angular component architecture, and MongoDB integration, are all directly applicable to real-world development roles.
