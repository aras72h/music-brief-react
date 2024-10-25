# Music Challenge Generator

This project is a **React-based music challenge generator** designed to randomly generate various musical elements such as tempo, scale, arrangement, color, and more. It also allows users to download the generated content as a PDF.

## Live Demo

Check out the live demo here: [Music Brief React App](https://music-brief-react.vercel.app)

## Features

- **Random Title Generator**: Generates random song titles.
- **Tempo Generator**: Offers both slow and fast tempo options.
- **Scale Generator**: Displays various musical scales.
- **Arrangement Generator**: Generates a random song arrangement.
- **Color Generator**: Assigns a random color representing the sound character.
- **Start Point Generator**: Suggests a starting point for song creation.
- **Deadline Generator**: Sets a random deadline for completing the challenge.
- **PDF Export**: Allows downloading the generated challenge as a PDF file.
- **Responsive Design**: Adapts to different screen sizes for an optimal user experience.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You can verify the installation with:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/music-challenge-generator.git
   cd music-challenge-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

Run the application locally with:

```bash
npm start
```

This command starts the development server, and the application should open automatically at `http://localhost:3000`.

### Build

To create a production-ready build, use:

```bash
npm run build
```

## Scripts

- **`npm start`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Runs the tests.

## Dependencies

- React
- FontAwesome
- html2pdf.js
- Teoria
- React Icons

## Project Structure

- **public/**: Contains the main HTML file.
- **src/**: Contains all the JavaScript and CSS files for the application.
  - **App.js**: Main component that organizes and displays the application.
  - **Functions.js**: Helper functions to manage app logic.
  - **index.js**: Entry point that renders the app.
  - **CSS files**: `desktop.css`, `index.css` for styling.

## Contributing

Contributions are welcome! Please open an issue to discuss any feature suggestions or bug reports.
