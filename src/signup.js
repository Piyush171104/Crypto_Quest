import React from 'react';

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8">
                    <h1 className="text-4xl mb-6">Crypto Quest</h1>
                    <h2 className="text-xl text-center mb-8">Welcome!<br />Please login to your account</h2>
                    <form>
                        <input type="email" className="input-field" placeholder="Email" />
                        <input type="password" className="input-field" placeholder="Password" />
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="remember-me" className="mr-2" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type="submit" className="btn-login">Login</button>
                    </form>
                </div>
                <div className="md:w-1/2 p-8 bg-green-500 flex justify-center items-center">
                    <img src="image-url-here" alt="Crypto Quest Image" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Login;
