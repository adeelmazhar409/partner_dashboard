import { Send } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Skeleton } from './ui/Skeleton';
import { useMessages } from '../hooks/useQueries';

export const Inbox = () => {
  const { data: messages, isLoading, isError } = useMessages();

  if (isError) {
    return (
      <Card className="h-full">
        <CardContent className="p-6 text-center text-red-600">
          Failed to load messages
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="h-full">
        <CardContent className="p-6">
          <Skeleton className="h-96 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-neutral-900">Inbox</h3>
          <Button variant="ghost" size="sm" className="text-sm">
            View Full Inbox →
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto mb-4">
          {messages?.map((message) => (
            <div
              key={message.id}
              className="flex items-start gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors cursor-pointer group"
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium text-sm overflow-hidden">
                  {message.avatar.startsWith('http') ? (
                    <img
                      src={message.avatar}
                      alt={message.sender}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    message.sender[0]
                  )}
                </div>
                {message.badge && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {message.badge}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm text-neutral-900">
                    {message.sender}
                  </span>
                  <span className="text-xs text-neutral-500 flex-shrink-0">
                    {message.timeAgo}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 line-clamp-2 group-hover:text-neutral-900">
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reply */}
        <div className="border-t pt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Quick reply..."
              className="w-full px-4 py-2.5 pr-10 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-lime focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-neutral-200 rounded-lg transition-colors">
              <Send className="w-4 h-4 text-neutral-600" />
            </button>
          </div>
        </div>

        {/* AI Chat Assistant */}
        <div className="mt-4">
          <Button className="w-full bg-black text-white hover:bg-neutral-800 h-12 rounded-lg font-medium">
            <span className="mr-2">✨</span>
            AI Chat Assistant
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};