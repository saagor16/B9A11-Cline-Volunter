# Volunteer Website

**Live Site URL:** [Volunteer](https://b9a11-volun.web.app)

## Repository Links

- [Client Repository](https://github.com/saagor16/B9A11-Cline-Volunter)
- [Server Repository](https://github.com/saagor16/B9A11-Server-Volunter)

## Description

This project is a volunteer management website designed to streamline volunteer activities using modern web technologies. It features a responsive design implemented with **Tailwind CSS** and pre-styled components from **Daisy UI**. **React Helmet** manages document head settings, while **React Toast** handles notifications. The site supports user authentication for seamless login and logout experiences, alongside robust volunteer management functionalities.

## Features

- Responsive design with Tailwind CSS and pre-styled components from Daisy UI
- Document head management using React Helmet
- Notifications powered by React Toast
- Typing animations provided by React-simple-typewriter
- UI animations enhanced with React Awesome Reveal
- Data management and storage facilitated by MongoDB Atlas
- User authentication functionalities (login, logout)
- Comprehensive volunteer management capabilities

## npm Packages Used

- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [React Helmet](https://www.npmjs.com/package/react-helmet)
- [React Toast](https://react-toast.com/)
- [Mamba UI](https://mambaui.com/components)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [React-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)
- [React Awesome Reveal](https://www.npmjs.com/package/react-awesome-reveal)

## Installation

1. Clone the server repository:
    ```bash
    git clone https://github.com/saagor16/B9A11-Server-Volunter.git
    ```

2. Navigate to the project directory:
    ```bash
    cd B9A11-Server-Volunter
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_atlas_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Contributing

Contributions are welcome! Fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
