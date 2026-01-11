import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { ActivityFeed } from './components/ActivityFeed';
import { WelcomeBanner } from './components/WelcomeBanner';
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
      
      
      <main className="max-w-[1920px] mx-5 px-6 py-8">

        {/* Approval Requests */}
        <div className="mb-8">
          <ApprovalRequests />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 mx-5">
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
        <div className="mb-8">
          <MetricCards />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Program Growth */}
          <div className="lg:col-span-6">
            <ProgramGrowth />
          </div>

          {/* Inbox */}
          <div className="lg:col-span-6">
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