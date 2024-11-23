import React, { useState } from 'react';
import { KeyRound } from 'lucide-react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  error?: string;
}

export const Login: React.FC<LoginProps> = ({ onLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
            <KeyRound className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-400">Enter your details to continue</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3 mt-1 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3 mt-1 bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150 ease-in-out"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};