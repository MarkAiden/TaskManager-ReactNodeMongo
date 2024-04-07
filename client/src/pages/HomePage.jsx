import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };

    const getWelcomeMessage = () => {
        return language === 'en'
            ? 'Welcome to my Fullstack Application'
            : 'Bienvenido a mi Aplicación Fullstack';
    };

    const getActionButtonText = () => {
        return language === 'en' ? 'Log In' : 'Iniciar Sesión';
    };

    const getActionButtonTextREG = () => {
        return language === 'en' ? 'Register' : 'Registrarse';
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">{getWelcomeMessage()}</h1>
            <p className="text-lg mb-8">
                {language === 'en'
                    ? 'This is a practice of a Fullstack web application using Node.js as the Backend, MongoDB as a NoSQL database, and React as the frontend application.'
                    : 'Esta es una práctica de una aplicación web Fullstack usando Node.js como Backend, MongoDB como base de datos NoSQL y React como aplicación frontend.'}
            </p>
            <div className="flex space-x-4">
                <Link to="/login" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                    {getActionButtonText()}
                </Link>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    {getActionButtonTextREG()}
                </Link>
                <button onClick={toggleLanguage} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                </button>
            </div>
            <footer className="absolute bottom-0 inset-x-0 flex items-center justify-center text-sm text-gray-400 p-4">
                <p className="mr-2">&copy; Freivel Hirujo, 2024.</p>
                <a href="https://www.linkedin.com/in/freivelhirujo/" className="inline-block">
                    <span className="px-2 hover:underline">Linkedin</span>
                </a>
            </footer>
        </div>
    );
}

export default HomePage;