## 🇬🇧 English

# 📚 BookShelf Frontend: Manage Your Personal Library with React

Welcome to the front-end repository of **BookShelf**, a web application designed to help you manage your personal library. Users can add, modify, and remove books from their library, and keep track of the number of times each book has been read. Utilizing React for the frontend, BookShelf offers an intuitive user experience and advanced features to organize your book collection.

## Project Description

BookShelf is a web application designed to:

1. **Add, Modify, and Remove Books**: Easily manage your library by adding, updating, or deleting books.
2. **Track Reading Progress**: Keep track of the number of times each book has been read.
3. **Generate PDF of Your Library**: Download a PDF of your updated book list, including any modifications or deletions.

## Main Features

- **Library Management**: Add, update, and delete books in your personal library.
- **Reading Tracking**: Track the number of times you have read each book.
- **PDF Generation**: Generate a PDF of your book list.
- **Custom Cover Upload**: Upload custom book cover images via Cloudinary.
- **User Selection**: Easily select the user to simulate login without full authentication.

## Technologies Used

- **Frontend**: React ⚛️
- **State Management**: Redux ⚛️
- **Fetch API**: Used for making HTTP requests 🛜
- **Styling**: CSS Modules / Styled Components 🎨
- **Routing**: React Router 🔗
- **Build Tool**: Vite ⚡️
- **Version Control**: Git 🖇️

## Project Structure

- **src/components**: Contains the React components used in the application.
- **src/redux**: Contains Redux-related files:
  - **actions**: Contains action creators.
  - **reducers**: Contains reducers.
  - **store**: Contains the Redux store configuration.
- **src/assets**: Contains static assets like images, CSS files, etc.
- **src/App.jsx**: Main application component.
- **src/App.css**: Main stylesheet for the application.
- **src/main.jsx**: Entry point for the application.
- **src/index.css**: Global CSS styles.

## Backend Repository

This repository contains only the frontend part of the application. You can find the backend repository here:

👉 [BookShelf Backend](https://github.com/alicelazzeri/BookShelf-BACKEND) 👈

## Installation and Configuration

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher / yarn 1.x or higher

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/alicelazzeri/BookShelf-FRONTEND.git

2. Navigate to the project directory:

   ```bash
   cd BookShelf-FRONTEND
   
3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   
4. Start the development server:
   
   ```bash
   npm run dev
   # or
   yarn dev
   
5. Access the application:
Open your browser and go to http://localhost:5173.

## Contributing to the Application
Contributions and pull requests are welcome! Feel free to explore the open issues and contribute with improvements or bug fixes.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
   
## Contact 
For questions or to report issues, you can open an issue on GitHub.
