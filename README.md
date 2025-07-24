# Booking Project

A modern React-based booking application built with TypeScript, leveraging a range of libraries and tools for UI components, state management, routing, forms, API data fetching, and more.

---

## Table of Contents

- [Overview](#overview)  
- [Technologies & Dependencies](#technologies--dependencies)
- [Demo](#demo)
- [Login Information](#login-information)  
- [Public Pages](#public-pages)  
- [User Pages](#user-pages)  
- [Admin Pages](#admin-pages)
- [Starting point](#starting-point)
- [Project Scrum Board](#project-scrum-board) 
- [Scripts](#scripts)  
- [Getting Started](#getting-started)  
- [Contact](#contact)  
- [Acknowledgement](#acknowledgement)  

---

## Overview

This project is a private React app using the latest tools to provide a scalable, performant, and developer-friendly environment. It utilizes:

- React 19 with functional components and hooks
- Material UI (MUI) for UI components and icons
- Redux Toolkit for state management and redux-persist for persistence
- React Query for API data fetching and caching
- Formik & Yup for form handling and validation
- Leaflet and React Leaflet for interactive maps
- JWT for authentication token decoding
- Axios for HTTP requests
- React Router DOM for routing
- Other utilities like Day.js for date management, js-cookie for cookie handling, and more

---

## Technologies & Dependencies

- **TypeScript**  
  Typed superset of JavaScript for safer coding.  
- **Vite**  
  Next-generation frontend tooling for fast development.  
- **ESLint & Plugins**  
  Linting with React hooks and refresh support to maintain code quality.  
- **@types/** packages  
  TypeScript typings for various libraries.

---

---
## Demo

Check out the demo video here: https://drive.google.com/file/d/17ehfZ9yevD4HRP0K86Pt6cOxFN4A-GMA/view?usp=sharing

---

---
## Login Information

### User Login
- **Username:** `user`
- **Password:** `user`

### Admin Login
- **Username:** `admin`
- **Password:** `admin`
---

## Public Pages

### Login Page  
![Login](src/assets/Readme-images/Login.png)  

### Unauthenticated Access Page  
![Unauthenticated](src/assets/Readme-images/unauthenticated.png)  

### Access Denied Page  
![Access-Denied](src/assets/Readme-images/Access-Denied.png)

### Not Found Page
![Not-Found](src/assets/Readme-images/Not-Found-Page.png)

### Failed to Load Page
![Failed-to-Load-Page](src/assets/Readme-images/Failed-To-Load-Page.png)


---

## User Pages

### Home Page Screenshots  
![Home-1](src/assets/Readme-images/Home-Page.png)  
![Home-2](src/assets/Readme-images/Home-Page-2.png)  
![Home-3](src/assets/Readme-images/Home-Page-3.png)  
![Home-4](src/assets/Readme-images/Home-Page-4.png)  

### Search Page  
![Search](src/assets/Readme-images/Search-Page.png)

### Hotel Details  
![Hotel-Details-1](src/assets/Readme-images/Hotel-Details-page-1.png)  
![Hotel-Details-2](src/assets/Readme-images/Hotel-Details-page-2.png)

### Checkout Pages  
![Checkout-1](src/assets/Readme-images/Checkout-page-1.png)  
![Checkout-2](src/assets/Readme-images/Checkout-page-2.png)

### Booking Confirmation  
![Booking-Confirmed](src/assets/Readme-images/Booking-Confirmed-page.png)  
![Booking-pdf](src/assets/Readme-images/Booking-Confirmation-pdf.png)

### User Profile  
![Profile](src/assets/Readme-images/Profile-page.png)

---

## Admin Pages

### Cities Management  
![Cities](src/assets/Readme-images/Cities-page.png)  

#### Add/Edit City Dialog  
![Cities-Dialog](src/assets/Readme-images/Add-City-Dialog.png)

### Hotels Management  
![Hotels](src/assets/Readme-images/Hotels-page.png)

#### Add/Edit Hotel Dialog  
![Hotels-Dialog](src/assets/Readme-images/Add-Edited-Hotel-Dialog.png)

### Delete Confirmation Dialog  
![Confiromation-Dialog](src/assets/Readme-images/Confiromation-Dialog.png)

### Hotel Rooms Management  
![Hotel-Room](src/assets/Readme-images/Rooms-page.png)

#### Add/Edit Hotel Room Dialog  
![Hotel-Room-Dialog](src/assets/Readme-images/Add-Hotel-Room-Dialog.png)

---

---
## Starting point

I followed this UX: https://excalidraw.com/

---

---
## Project Scrum Board

My project is managed using an agile scrum board to track tasks and sprints.
![Jira](src/assets/Readme-images/Jira.png)

---

## Scripts

| Command           | Description                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Compile TypeScript and build production files |
| `npm run lint`    | Run ESLint to check code style and errors |
| `npm run preview` | Preview the production build locally   |

---

## Getting Started

1. **Clone the Frontend Repository:**  
   ```bash
   git clone https://github.com/BaselTurkman/Travel-and-Accommodation-Booking-Platform
   cd Travel-and-Accommodation-Booking-Platform     

2. **Install Frontend Dependencies:**  
   ```bash
   npm install
   
3. **Run the Frontend Development Server:**  
   ```bash
   npm run dev

4. **Clone the Backend Static Repository:**
     Make sure to clone this repository: https://github.com/BaselTurkman/Travel-and-Accommodation-Booking-static-BE.git
   Then follow its *Getting Started* instructions to run the backend server and enable API data fetching.
   
5. **Configure the API URL:**
     Ensure your `.env` file contains the following so the frontend can connect to the backend:
   ```bash
   VITE_API_URL="http://localhost:5000/api/"

---

## Contact

If you have any questions, feedback, or would like to get in touch, feel free to reach out:

- **Name:** Basel Turkman  
- **Email:** Basel.Turkman123@gmail.com 
- **GitHub:** [https://github.com/BaselTurkman](https://github.com/BaselTurkman)  
- **LinkedIn:** [https://linkedin.com/in/baselturkman](https://www.linkedin.com/in/basel-turkman/)

Looking forward to connecting with you!

---

## Acknowledgement 

I extend my heartfelt thanks to <b> Foothill Technology Solutions </b> for offering me the opportunity to participate in this internship cycle. Their consistent support has been crucial in the development of this project.
