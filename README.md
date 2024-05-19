# Online Practice Test Platform

## Overview

This project is an Online Practice Test Platform designed to help students from 7th to 10th grade practice mathematics through a personalized quiz experience. The platform includes user authentication (including Google OAuth), a personalized dashboard, and a quiz system that adapts based on the user's performance using Computerized Adaptive Testing (CAT).

## Features

- User Authentication:
  - Login with email and password
  - Google OAuth for easy login
  - Signup option for new users

- Personalized Dashboard:
  - Displays user-specific information
  - Allows users to start a personalized quiz

- Quiz System:
  - Contains 20 MCQ questions with varying difficulty
  - Questions are tagged by topics (e.g., algebra, geometry)
  - Adapts the difficulty of the quiz based on user's performance

- Result Evaluation and Reporting:
  - Generates a performance report after quiz submission
  - Provides suggestions for further improvement

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Google OAuth

## Project Setup

### Prerequisites

- Node.js and npm installed
- MongoDB instance running
- Google OAuth credentials (Client ID and Client Secret)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/online-practice-test-platform.git
   cd online-practice-test-platform
