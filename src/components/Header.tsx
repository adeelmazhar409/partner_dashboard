import { Menu, Search, Bell, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { WelcomeBanner } from "./WelcomeBanner";
import { ActivityFeed } from "./ActivityFeed";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { name: "Performance", count: "244.5k", active: false },
    { name: "Social", count: "25M Views", active: false },
    { name: "Partners", active: true },
    { name: "Campaigns", count: "102 active", active: false },
    { name: "Content", count: "43k assets", active: false },
    { name: "Inbox", count: "48 unread", active: false },
    { name: "Operations", count: "12 Active", active: false },
    { name: "Expenses", count: "20 requests", active: false },
  ];

  return (
    <header className="bg-white border-neutral-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 py-4">
        {/* Mobile: Hamburger menu and search row */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-lime focus:border-transparent"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>

        {/* Desktop: Full header layout */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
            >
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
      </div>

      {/* Secondary Navigation - Partners Section */}
      <div className="border-t border-neutral-200 bg-white mx-4 sm:mx-5 rounded-b-lg shadow-sm">
        <div className="px-2 py-2 sm:py-1">
          {/* Mobile layout */}
          <div className="block lg:hidden space-y-3">
            {/* Sub Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <button className="px-2 py-1 text-neutral-900 font-medium hover:bg-neutral-50 rounded">
                  Partners
                </button>
                <button className="px-2 py-1 text-neutral-600 font-medium bg-neutral-100 rounded">
                  Overview
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>Last synced: <span className="text-neutral-900 font-medium">Just now</span></span>
                <button className="flex items-center gap-1 hover:text-neutral-700">
                  <span>⟳</span>
                </button>
              </div>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search Partners..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-lime focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-neutral-100 rounded">
                  <span className="text-neutral-500">📅</span>
                </button>
                <button className="p-2 hover:bg-neutral-100 rounded">
                  <span className="text-neutral-500">🔽</span>
                </button>
                <button className="p-2 hover:bg-neutral-100 rounded">
                  <span className="text-neutral-500">📤</span>
                </button>
                <button className="p-2 hover:bg-neutral-100 rounded">
                  <span className="text-neutral-500">···</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-between">
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

      {/* Hamburger Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-out Menu */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out hamburger-menu">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium text-lg">
                  V
                </div>
                <div>
                  <div className="text-sm font-medium">Velto</div>
                  <div className="text-xs text-neutral-500">ID: 5732</div>
                  <div className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded w-fit mt-1">
                    In progress
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                  Navigation
                </h3>
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-primary-lime text-black"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {item.count && (
                        <span className={`text-xs ${
                          item.active ? "text-black/70" : "text-neutral-500"
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-4 border-t border-neutral-200">
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 text-center text-sm text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors">
                    <div className="text-2xl mb-1">📅</div>
                    <div className="text-xs">Calendar</div>
                  </button>
                  <button className="p-3 text-center text-sm text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors">
                    <div className="text-2xl mb-1">🔽</div>
                    <div className="text-xs">Filter</div>
                  </button>
                  <button className="p-3 text-center text-sm text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors">
                    <div className="text-2xl mb-1">📤</div>
                    <div className="text-xs">Export</div>
                  </button>
                  <button className="p-3 text-center text-sm text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors">
                    <div className="text-2xl mb-1">⚙️</div>
                    <div className="text-xs">Settings</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
