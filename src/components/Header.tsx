import { Menu, Search, Bell } from "lucide-react";
import { Button } from "./ui/Button";
import { WelcomeBanner } from "./WelcomeBanner";
import { ActivityFeed } from "./ActivityFeed";

export const Header = () => {
  return (
    <header className="bg-white border-neutral-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="text-sm text-neutral-500">
              <span className="hover:text-neutral-700 cursor-pointer">
                Dashboard
              </span>
              <span className="mx-2">›</span>
              <span className="text-neutral-900 font-medium">Overview</span>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search across campaigns, partners, or assets..."
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-lime focus:border-transparent"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <div className="flex items-center gap-3 pl-3 border-l border-neutral-200">
              <div className="text-right">
                <div className="text-sm font-medium">Velto</div>
                <div className="text-xs text-neutral-500">ID: 5732</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium text-sm">
                V
              </div>
              <div className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                In progress
              </div>
            </div>
          </div>
        </div>

        <WelcomeBanner />

        <ActivityFeed />

        {/* Navigation tabs */}
        <div className="flex items-center gap-2 mt-2 overflow-x-auto scrollbar-hide">
          {[
            { name: "Performance", count: "244.5k", active: false },
            { name: "Social", count: "25M Views", active: false },
            { name: "Partners", active: true },
            { name: "Campaigns", count: "102 active", active: false },
            { name: "Content", count: "43k assets", active: false },
            { name: "Inbox", count: "48 unread", active: false },
            { name: "Operations", count: "12 Active", active: false },
            { name: "Expenses", count: "20 requests", active: false },
          ].map((tab) => (
            <button
              key={tab.name}
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                tab.active
                  ? "bg-primary-lime text-black"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {tab.name}
              {tab.count && (
                <span className="ml-2 text-xs opacity-75">{tab.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Navigation - Partners Section */}
      <div className="border-t border-neutral-200 bg-white mx-5 rounded-b-lg shadow-sm">
        <div className="px-2 py-1">
          <div className="flex items-center justify-between">
            {/* Left - Sub Navigation */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-sm">
                <button className="px-3 py-1.5 text-neutral-900 font-medium hover:bg-neutral-50 rounded">
                  Partners
                </button>
                <button className="px-3 py-1.5 text-neutral-600 font-medium bg-neutral-100 rounded">
                  Overview
                </button>
              </div>

              <div className="h-4 w-px bg-neutral-200"></div>

              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span>
                  Last synced:{" "}
                  <span className="text-neutral-900 font-medium">Just now</span>
                </span>
                <button className="flex items-center gap-1 hover:text-neutral-700">
                  <span>⟳</span>
                </button>
              </div>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-neutral-100 rounded">
                <Search className="w-4 h-4 text-neutral-500" />
              </button>
              <input
                type="text"
                placeholder="Search Partners..."
                className="px-3 py-1.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-lime focus:border-transparent w-64"
              />
              <div className="flex items-center gap-2 ml-2">
                <button className="px-3 py-1.5 text-xs bg-white border border-neutral-200 rounded hover:bg-neutral-50 flex items-center gap-1">
                  📅 Oct 1 - Oct 31
                </button>
                <button className="px-3 py-1.5 text-xs bg-white border border-neutral-200 rounded hover:bg-neutral-50">
                  Filter
                </button>
                <button className="px-3 py-1.5 text-xs bg-white border border-neutral-200 rounded hover:bg-neutral-50">
                  Export
                </button>
                <button className="p-1.5 hover:bg-neutral-100 rounded">
                  <span className="text-neutral-500">···</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
