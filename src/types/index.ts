export interface DashboardStats {
    totalMarket: number;
    prospects: number;
    leads: number;
    sales: number;
  }
  
  export interface MetricCard {
    id: string;
    title: string;
    value: number;
    label: string;
    change?: number;
    icon: 'outreach' | 'onboarded' | 'deliverables';
  }
  
  export interface ProgramGrowth {
    name: string;
    partners: number;
  }
  
  export interface ApprovalRequest {
    id: string;
    name: string;
    action: string;
    avatar: string;
    timeAgo: string;
  }
  
  export interface Message {
    id: string;
    sender: string;
    message: string;
    timeAgo: string;
    avatar: string;
    badge?: number;
  }
  
  export interface PartnerFunnelData {
    totalMarket: number;
    prospects: number;
    leads: number;
    sales: number;
    growth: number;
    growthDescription: string;
  }
  
  export interface PayoutsData {
    percentageChange: number;
    amount: string;
    chartData: number[];
  }