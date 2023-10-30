
# Soul Bloom - Your Virtual Self-Care Garden

Welcome to **Soul Bloom**, a unique self-care application that allows you to cultivate a virtual garden of well-being through daily reflections, self-care activities, and mindful choices.


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

## Link to BackEnd 
- https://github.com/ShaylaWhite/Soul-Bloom---Back-End/tree/main

### User Stories:

- Register for an account with a unique username and a secure password.
- Log in with username and password to access the garden.
- Have a personal garden displayed upon logging in.
- Add flowers to the garden as a form of self-care.
- Provide a self-care type and description for each flower planted.
- Delete a specific flower from the garden.
Certainly, here are all the Soul Bloom REST API endpoints organized into a table:


##  REST API endpoints so that users are aware of the functionality it provides.
| Request Type | URL                                      | Functionality                            | Access   |
|--------------|------------------------------------------|------------------------------------------|----------|
| POST         | /auth/users/login/                       | User login                               | Public   |
| GET          | /api/categories/                         | Get all categories                        | Private  |
| POST         | /auth/users/register/                    | User registration                         | Public   |
| GET          | /api/users/{userId}                     | Get user profile by user ID               | Private  |
| PUT          | /api/users/{userId}                     | Update user profile by user ID            | Private  |
| DELETE       | /api/users/{userId}                     | Delete user by user ID                    | Private  |
| GET          | /api/users/gardens/{gardenId}           | Get user's garden by garden ID            | Private  |
| PUT          | /api/users/water-garden/{gardenId}      | Water user's garden by garden ID         | Private  |
| POST         | /api/users/create-garden                | Create user's garden                      | Private  |
| POST         | /api/users/add-flower                   | Add a flower to the user's garden         | Private  |
| DELETE       | /api/users/flowers/{flowerId}           | Delete a flower from the user's garden by flower ID | Private  |
| PUT          | /api/users/flowers/{flowerId}           | Update a flower by flower ID              | Private  |

These are all the endpoints for Soul Bloom, categorized by functionality and access level.

## Project Planning

Managed this project using GitHub Projects, where you can find detailed information about my project breakdown, deliverables, timelines, and progress.

### Challenges and Ongoing Development
During the development of the Soul Bloom application, I successfully achieved significant milestones, such as user registration, login functionality, and the ability for users to plant flowers in their gardens. However, there are still exciting challenges and features on the horizon:

## Update and Delete Flower Functionality
i am still actively working on implementing update and delete functionalities for flowers in the user's garden. These features will empower users to edit or remove specific flowers as they nurture their virtual gardens. Our team is dedicated to providing a seamless and user-friendly experience for managing their blooming oasis.

As I continue to develop Soul Bloom, MY mission is to ensure that users have complete control over their gardens, allowing them to personalize their self-care experience to the fullest.

Stay tuned for these upcoming enhancements as we strive to create a more vibrant and enriching experience in the world of Soul Bloom! 🌼🌿🌻

If you have any suggestions, feedback, or need assistance, please feel free to reach out. We value your input and are committed to making Soul Bloom the best it can be. Thank you for being a part of our journey.

## Entity-Relationship Diagram (ERD)

### User (Table)

- **UserID** (Primary Key)
- Username
- Password (hashed)
- GardenID (Foreign Key, links to the Garden table)

### Garden (Table)

- **GardenID** (Primary Key)
- UserID (Foreign Key, links to the User table)
- LastWatered (Timestamp)

### Flower (Table)

- **FlowerID** (Primary Key)
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
