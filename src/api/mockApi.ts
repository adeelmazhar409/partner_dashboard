import type { 
    DashboardStats, 
    MetricCard, 
    ProgramGrowth, 
    ApprovalRequest, 
    Message,
    PartnerFunnelData,
    PayoutsData 
  } from '../types';
  
  // Simulated delay to mimic API calls
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
  // Mock data
  const mockDashboardStats: DashboardStats = {
    totalMarket: 87027,
    prospects: 48027,
    leads: 32027,
    sales: 0, // This appears to be hidden in the UI
  };
  
  const mockMetricCards: MetricCard[] = [
    {
      id: '1',
      title: 'OUTREACHED',
      value: 1240,
      label: 'Partners Contacted',
      change: 15,
      icon: 'outreach',
    },
    {
      id: '2',
      title: 'ONBOARDED',
      value: 85,
      label: 'Active in Program',
      change: 8,
      icon: 'onboarded',
    },
    {
      id: '3',
      title: 'AWAITING DELIVERABLES',
      value: 12,
      label: 'Pending Content',
      icon: 'deliverables',
    },
  ];
  
  const mockProgramGrowth: ProgramGrowth[] = [
    { name: 'Levanta', partners: 45 },
    { name: 'Impact', partners: 32 },
    { name: 'Social Snowball', partners: 28 },
    { name: 'Shopify Collabs', partners: 19 },
  ];
  
  const mockApprovalRequests: ApprovalRequest[] = [
    {
      id: '1',
      name: 'UrbanFit Life',
      action: 'Approve Content',
      avatar: 'U',
      timeAgo: '2h ago',
    },
    {
      id: '2',
      name: 'TechSavvy Mom',
      action: 'Approve Commission',
      avatar: 'T',
      timeAgo: '5h ago',
    },
    {
      id: '3',
      name: 'Daily Gadgets',
      action: 'Validate Lead',
      avatar: 'D',
      timeAgo: '1d ago',
    },
    {
      id: '4',
      name: 'Yoga with Jen',
      action: 'Approve Invoice',
      avatar: 'Y',
      timeAgo: '1d ago',
    },
  ];
  
  const mockMessages: Message[] = [
    {
      id: '1',
      sender: 'Sarah Jenkins',
      message: 'The new assets for the campaign look amazing! Can we schedule a call to discuss the rollout?',
      timeAgo: '2m ago',
      avatar: 'https://i.pravatar.cc/150?img=1',
      badge: 2,
    },
    {
      id: '2',
      sender: 'Mike Ross',
      message: 'Just sent over the revised agreement. Let me know if you need anything else modified.',
      timeAgo: '1h ago',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: '3',
      sender: 'Elena Fisher',
      message: 'I have some questions about the attribution window for the "Summer Glow" bundle.',
      timeAgo: '3h ago',
      avatar: 'https://i.pravatar.cc/150?img=5',
      badge: 5,
    },
    {
      id: '4',
      sender: 'David Kim',
      message: 'The referral links are working perfectly now. Thanks for the quick fix on the tracking!',
      timeAgo: '5h ago',
      avatar: 'https://i.pravatar.cc/150?img=13',
      badge: 1,
    },
    {
      id: '5',
      sender: 'Alex Morgan',
      message: 'Can we push the meeting to next Tuesday?',
      timeAgo: '6h ago',
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: '6',
      sender: 'Jessica Lee',
      message: 'Invoice #4022 has been paid. Thanks!',
      timeAgo: '1d ago',
      avatar: 'https://i.pravatar.cc/150?img=9',
      badge: 3,
    },
  ];
  
  const mockPartnerFunnelData: PartnerFunnelData = {
    totalMarket: 142382,
    prospects: 87027,
    leads: 48027,
    sales: 32027,
    growth: 37,
    growthDescription: '6,653 growth in closed sales',
  };
  
  const mockPayoutsData: PayoutsData = {
    percentageChange: 350,
    amount: '$2.5 m',
    chartData: [0.5, 0.7, 1.2, 1.8, 1.6, 2.1, 1.4, 2.5, 1.8, 0.6],
  };
  
  // API Functions
  export const fetchDashboardStats = async (): Promise<DashboardStats> => {
    await delay(800);
    return mockDashboardStats;
  };
  
  export const fetchMetricCards = async (): Promise<MetricCard[]> => {
    await delay(600);
    return mockMetricCards;
  };
  
  export const fetchProgramGrowth = async (): Promise<ProgramGrowth[]> => {
    await delay(700);
    return mockProgramGrowth;
  };
  
  export const fetchApprovalRequests = async (): Promise<ApprovalRequest[]> => {
    await delay(500);
    return mockApprovalRequests;
  };
  
  export const fetchMessages = async (): Promise<Message[]> => {
    await delay(900);
    return mockMessages;
  };
  
  export const fetchPartnerFunnelData = async (): Promise<PartnerFunnelData> => {
    await delay(750);
    return mockPartnerFunnelData;
  };
  
  export const fetchPayoutsData = async (): Promise<PayoutsData> => {
    await delay(650);
    return mockPayoutsData;
  };