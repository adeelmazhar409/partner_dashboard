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
      <div className="bg-white border-b rounded-full mx-2 sm:mx-4 shadow-sm border-neutral-200 px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 sm:gap-2 min-w-fit cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                {activity.icon}
              </div>
              <div className="text-[10px] sm:text-xs">
                <div className="font-medium text-neutral-700 whitespace-nowrap">{activity.user}</div>
                <div className="text-neutral-500 max-w-[100px] sm:max-w-none truncate sm:whitespace-nowrap">{activity.action}</div>
              </div>
              <div className="text-[10px] sm:text-xs text-neutral-400 ml-1 sm:ml-2 whitespace-nowrap">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };