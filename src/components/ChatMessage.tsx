import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
  isCurrentUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isCurrentUser }) => {
  const timeAgo = formatDistanceToNow(message.timestamp, { addSuffix: true });

  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-2xl p-4 ${
          isCurrentUser
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-gray-700 text-white rounded-bl-none'
        }`}
      >
        {!isCurrentUser && (
          <div className="text-sm text-gray-400 mb-1">{message.sender}</div>
        )}
        {message.type === 'text' ? (
          <p className="text-sm">{message.content}</p>
        ) : (
          <img
            src={message.imageUrl}
            alt="Shared"
            className="rounded-lg max-w-full h-auto"
            loading="lazy"
          />
        )}
        <div className={`text-xs mt-1 ${isCurrentUser ? 'text-indigo-200' : 'text-gray-400'}`}>
          {timeAgo}
        </div>
      </div>
    </div>
  );
};