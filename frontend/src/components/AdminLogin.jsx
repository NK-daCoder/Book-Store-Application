import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios"
import getBaseURL from '../utils/baseURL';

const AdminLogin = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: '',
    });

    const [message, setMessage] = useState("")
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        try {
            const response =  await axios.post(`${getBaseURL()}/api/auth/admin`, formData, {
                 headers: {
                     'Content-Type': 'application/json',
                 }
            })
            const auth = response.data;
            // console.log(auth)
            if(auth.token) {
                 localStorage.setItem('token', auth.token);
                 setTimeout(() => {
                     localStorage.removeItem('token')
                     alert('Token has been expired!, Please login again.');
                     navigate("/")
                 }, 3600 * 1000)
             }
 
             alert("Admin Login successful!")
             navigate("/dashboard")
 
        } catch (error) {
             setMessage("Please provide a valid email and password") 
             console.error(error)
        }
        
    }

    return (
        <section className="container md:mx-auto flex flex-col items-center justify-center p-3 h-screen relative">
            <h1 className="flex gap-2 items-center text-3xl font-semibold">
                <span className="material-symbols-rounded p-[.5rem] bg-gradient-to-bl from-blue-500 to-blue-800 text-white !text-md rounded-xl">
                    how_to_reg
                </span>
                Admin Login
            </h1>

            <Link
            to="/"
            className="absolute top-5 left-5 p-3 rounded-full w-10 h-10 flex items-center justify-center text-white bg-gradient-to-bl from-blue-500 to-blue-600 text-3xl"
            >
                <span className="material-symbols-rounded">close</span>
            </Link>

            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-2 md:gap-4 w-full md:w-[45%]">
                <fieldset className="flex items-center gap-3 border rounded-md p-2">
                    <label htmlFor="username" aria-label="user name" className="flex items-center border-r pr-1 text-gray-400">
                        <span className="material-symbols-rounded">mail</span>
                    </label>
                    <input
                    type="text"
                    placeholder="User Name....."
                    id="username"
                    required
                    className="w-full p-2 rounded-md"
                    value={formData.username}
                    onChange={handleChange}
                    />
                </fieldset>

                <fieldset className="flex items-center gap-3 border rounded-md p-2">
                    <label htmlFor="password" aria-label="admin password" className="flex items-center border-r pr-1 text-gray-400">
                        <span className="material-symbols-rounded">passkey</span>
                    </label>
                    <input
                    type="password"
                    placeholder="Password....."
                    id="password"
                    required
                    className="w-full p-2 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                    />
                </fieldset>

                <section className="flex justify-between">
                    <button type="submit" className="text-blue-500 flex gap-1 items-center">
                        Login
                        <span className="material-symbols-rounded !text-sm">north_east</span>
                    </button>
                </section>

                <footer className="text-center p-3 text-gray-500 ">
                    <strong>&copy;</strong>2025 Book Alchemy Library All Rights Reserved.
                </footer>
            </form>
        </section>
  )
}

export default AdminLogin