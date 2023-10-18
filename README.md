
# Soul Bloom - Your Virtual Self-Care Garden

Welcome to **Soul Bloom**, a unique self-care application that allows you to cultivate a virtual garden of well-being through daily reflections, self-care activities, and mindful choices.

![Soul Bloom Banner](./path-to-your-banner-image.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Soul Bloom is a user-friendly, interactive platform designed to help you foster a habit of daily self-care. Here's what you can expect from our application:

- **Cultivate a Garden:** Plant a virtual flower in your garden each day to represent your self-care activities and reflections.

- **Daily Watering:** Nurture your garden by adding daily self-care activities, food choices, and reflections.

- **Track Progress:** Visualize your well-being journey by exploring your garden's growth over time.

This README provides a comprehensive guide to help you set up and use the frontend of Soul Bloom.

## Features

- User registration and login.
- Post daily "flowers" to your garden.
- Water your garden with self-care activities and reflections.
- View your garden's progress and past flowers.

## Getting Started

### User Stories:

- Register for an account with a unique username and a secure password.
- Log in with username and password to access the garden.
- Have a personal garden displayed upon logging in.
- Add flowers to the garden as a form of self-care.
- Provide a self-care type and description for each flower planted.
- Delete a specific flower from the garden.

### Entity-Relationship Diagram (ERD):

**User (Table)**

- UserID (Primary Key)
- Username
- Password (hashed)
- GardenID (Foreign Key, links to the Garden table)

**Garden (Table)**

- GardenID (Primary Key)
- UserID (Foreign Key, links to the User table)
- LastWatered (Timestamp)

**Flower (Table)**

- FlowerID (Primary Key)
- GardenID (Foreign Key, links to the Garden table)
- SelfCareType
- Description

#### Prerequisites

Before you get started, make sure you have the following:

- Node.js: [Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/soul-bloom-frontend.git
   ```

2. Navigate to the project directory:
   ```sh
   cd soul-bloom-frontend
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the Soul Bloom application.

3. Sign up, log in, and start planting flowers in your garden!

## Contributing

Contributions are welcome! If you'd like to contribute to Soul Bloom, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for choosing Soul Bloom to embark on your well-being journey. We hope you enjoy cultivating your virtual garden of self-care.

For support and inquiries, contact us at [your-email@example.com](mailto:your-email@example.com).
```

Please replace `"./path-to-your-banner-image.png"` with the actual path to your banner image. Additionally, ensure that the links for prerequisites and other URLs are correct.
