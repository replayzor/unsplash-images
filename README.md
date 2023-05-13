# unsplash-images

### [LIVE SITE](https://unsplash-images-brown.vercel.app/)

This app contains a web application built using Vite, Axios, React-Query, and React-Icons. The app allows users to search for images using the Unsplash Images API.

## Features

1. **Search**: Users can enter a search term and retrieve a list of images related to their query.
2. **Image Display**: The app displays the retrieved images in a visually appealing manner, making it easy for users to browse and select images of their choice.
3. **API Integration**: The app utilizes the Unsplash Images API to fetch images based on user search queries.
4. **React-Query**: React-Query is used for data fetching and caching, ensuring efficient retrieval of images and improved performance.
5. **React-Icons**: The app incorporates React-Icons library to enhance the visual representation of UI elements, providing a more engaging user experience.

## Installation

To set up the Unsplash Images app locally, follow these steps:

1. Ensure you have Node.js installed on your machine.

2. Clone this repository to your local machine using the following command:

`git clone https://github.com/replayzor/unsplash-images.git`

3. Navigate to the project directory:

`cd unsplash-images`

4. Install the dependencies by running:

`npm install`

## Configuration

Before running the app, you need to provide your Unsplash API access key. Follow the steps below:

1. Create a `.env` file in the project root directory.

2. Open the `.env` file and add the following line:

`VITE_UNSPLASH_API_KEY=YOUR_UNSPLASH_API_KEY`

Replace `YOUR_UNSPLASH_API_KEY` with your actual Unsplash API access key.

## Usage

Once you have completed the installation and configuration steps, you can start the app by running the following command:

`npm run dev`

## Libraries and APIs

This project is built using the following libraries and APIs:

- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/docs/intro)
- [React-Query](https://tanstack.com/query/v3/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Unsplash Images API](https://unsplash.com/developers)
