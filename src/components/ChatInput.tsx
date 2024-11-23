import React, { useState, useCallback } from 'react';
import { Send, Image } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface ChatInputProps {
  onSendMessage: (content: string, type: 'text' | 'image', imageUrl?: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        onSendMessage('Shared an image', 'image', dataUrl);
      };
      reader.readAsDataURL(file);
    });
  }, [onSendMessage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message, 'text');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 border-t border-gray-700">
      <div className="flex items-center space-x-4">
        <div {...getRootProps()} className="cursor-pointer">
          <input {...getInputProps()} />
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            <Image className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-6 h-6 text-white" />
        </button>
      </div>
    </form>
  );
};