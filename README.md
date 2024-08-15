# Weather App

A simple weather application built using React and Vite.js. This app allows users to view current weather information and forecast data for different locations.

## Features

- View current weather data.
- Search for weather information by location.
- Responsive design for mobile and desktop views.
- Shows detailed weather data for specific cities.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite.js**: Build tool for faster development and optimized builds.
- **CSS**: For styling the application.
- **OpenWeather API**: For fetching weather data.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or later)
- [Docker](https://www.docker.com/products/docker-desktop) (if you want to run the application in a Docker container)

### Clone the Repository

Clone the repository using Git:

    git clone https://github.com/Frnn4268/weather-app.git
    cd weather-app

### Install Dependencies

Install the required dependencies using npm:

> npm install

### Run the Application Locally

To run the application locally in development mode, use the following command:

> npm run dev

The application will be available at  `http://localhost:8080/`

### Build the Application

To build the application for production, use the following command:

>  npm run build

The production build will be generated in the `dist` directory.

### Run the Application with Docker

If you prefer to run the application using Docker, follow these steps:

1. Build the Docker Image
	>docker build -t weather-app .

2. Run the Docker Container
	>docker run -p 3000:3000 weather-app

The application will be available at `http://localhost:3000`.

### Configuration

Update the `.env` file in the root of the project to include your OpenWeather API key and any other environment-specific variables.

    VITE_APP_WEATHER_ID="your_OpenWeather_Api_key"

### Explanation

- **Project Overview**: A brief description of what the project does.
- **Features**: Key features of the application.
- **Technologies Used**: Technologies and tools used in the project.
- **Getting Started**: Steps to set up and run the project locally.
- **Docker Instructions**: Instructions for running the app using Docker.
- **Configuration**: How to set up environment variables.



