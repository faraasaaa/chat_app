import React, { useEffect, useState } from 'react';
import { Auth } from './components/Auth';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { useStore } from './store';
import { MessageSquare, LogOut } from 'lucide-react';

function App() {
  const [error, setError] = useState<string>();
  const { messages, currentUser, initialize, loginUser, registerUser, logoutUser, addMessage } = useStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleLogin = (username: string, password: string) => {
    const result = loginUser(username, password);
    if (!result.success) {
      setError(result.error);
    }
  };

  const handleRegister = (username: string, password: string) => {
    const result = registerUser(username, password);
    if (result.success) {
      handleLogin(username, password);
    } else {
      setError(result.error);
    }
  };

  if (!currentUser) {
    return <Auth onLogin={handleLogin} onRegister={handleRegister} error={error} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="bg-gray-800 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600 rounded-full">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">Temporary Chat</h1>
            <span className="text-sm text-gray-400">(Messages expire in 3 days)</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">
              Logged in as <span className="font-semibold">{currentUser.username}</span>
            </span>
            <button
              onClick={logoutUser}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
              title="Logout"
            >
              <LogOut className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUser={currentUser.username === message.sender}
          />
        ))}
      </div>

      <ChatInput onSendMessage={addMessage} />
    </div>
  );
}

export default App;