import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';

import { MetricCards } from './components/MetricCards';
import { ApprovalRequests } from './components/ApprovalRequests';
import { PartnerFunnel } from './components/PartnerFunnel';
import { PayoutsChart } from './components/PayoutsChart';
import { ProgramGrowth } from './components/ProgramGrowth';
import { Inbox } from './components/Inbox';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      
      <main className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">

        {/* Approval Requests */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <ApprovalRequests />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
          {/* Left Column - Payouts */}
          <div className="lg:col-span-4">
            <PayoutsChart />
          </div>

          {/* Center Column - Partner Funnel */}
          <div className="lg:col-span-8">
            <PartnerFunnel />
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <MetricCards />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Program Growth */}
          <div>
            <ProgramGrowth />
          </div>

          {/* Inbox */}
          <div>
            <Inbox />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;