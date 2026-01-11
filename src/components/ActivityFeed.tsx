export const ActivityFeed = () => {
    const activities = [
      { icon: '📝', user: 'LATEST', action: 'Updated', time: '2h ago' },
      { icon: '🎨', user: 'CreativeDir', action: 'Q4 Brand Assets are live...', time: '4h ago' },
      { icon: '📊', user: 'Editor', action: 'First draft of live "YellBox...', time: '6h ago' },
      { icon: '📱', user: 'MediaBuyer', action: 'Brick is up 10% on the A...', time: '8h ago' },
      { icon: '👤', user: 'Sarah J.', action: 'Velko app, approved for...', time: '10h ago' },
      { icon: '📢', user: 'MediaTeam', action: 'Premium inventory secur...', time: '12h ago' },
    ];
  
    return (
      <div className="bg-white border-b rounded-full mx-4 shadow-sm border-neutral-200 px-6 py-3">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 min-w-fit cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm">
                {activity.icon}
              </div>
              <div className="text-xs">
                <div className="font-medium text-neutral-700">{activity.user}</div>
                <div className="text-neutral-500">{activity.action}</div>
              </div>
              <div className="text-xs text-neutral-400 ml-2">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };