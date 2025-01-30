# Project Name

This is a brief description of the project:Dynmaic Image Resizer

## Installation

Steps to install the project.
install -i express ejs multer sharp 

## Usage

choose your pic from your pc ,Resize according to your need,Resized image shown on the browser,just click shown Resize Image and also download

1. EJS (Embedded JavaScript Templates)
Purpose: EJS is a templating engine that allows you to dynamically generate HTML on the server-side, which is useful for creating web pages that depend on data from your backend.

Why use EJS?:

Server-side rendering: With EJS, you can embed JavaScript inside your HTML templates. This helps in rendering dynamic content based on data (e.g., user information, blog posts, etc.).
Template logic: You can include conditional statements, loops, and even partial templates in your views.
Cleaner code: EJS keeps your HTML separate from your JavaScript, allowing for cleaner code and better maintainability.
Example use case:

Rendering a list of blog posts, where each post’s content comes from a database, but the layout (HTML) remains the same.
2. Multer
Purpose: Multer is a middleware for handling multipart/form-data, which is used for uploading files (e.g., images, documents, etc.) in a web application.

Why use Multer?:

Handling file uploads: Multer makes it easy to manage file uploads in Node.js applications by parsing incoming multipart/form-data requests.
File storage: It allows you to specify how and where the uploaded files should be stored (in-memory or on disk).
File validation: You can set constraints on the uploaded files, like limiting the file size or filtering by file type (e.g., only allowing images).
Example use case:

An app that allows users to upload their profile pictures. Multer would handle receiving the file and storing it either on your server or in cloud storage.
3. Sharp
Purpose: Sharp is a high-performance image processing library that allows you to resize, crop, and manipulate images quickly.

Why use Sharp?:

Efficient image processing: Sharp is extremely fast and can handle large image files without much memory overhead, which is crucial for applications dealing with a lot of images.
Image resizing: If you want to resize images after uploading them (e.g., creating thumbnails or fitting images to a specific size), Sharp is perfect for this.
Optimizing images: You can use Sharp to compress and optimize images for faster load times on websites, which improves performance.
Example use case:

After a user uploads an image (e.g., a profile picture), you can use Sharp to resize the image, compress it, and save a smaller version of the image for use as a thumbnail or for other display purposes.
Example scenario: Image Upload with Resizing
Imagine you have a web application where users can upload profile pictures. Here's how you could use these three libraries together:

Multer handles the file upload and saves the image to the server.
Sharp resizes and optimizes the image to create a smaller thumbnail for faster loading on the website.
EJS renders the image on the user's profile page by injecting the image path into the HTML template.

4. Express.js
    Expressjs is Nodejs Library ,I use express.js for middleware
   Why use Express?:
   Middleware support: Routes can be dynamically added to the app, and middleware functions can be applied to specific routes or globally to handle requests, responses, or errors.

## Contributing

Ashutosh Rana
