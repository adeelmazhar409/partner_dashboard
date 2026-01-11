import { useQuery } from '@tanstack/react-query';
import {
  fetchDashboardStats,
  fetchMetricCards,
  fetchProgramGrowth,
  fetchApprovalRequests,
  fetchMessages,
  fetchPartnerFunnelData,
  fetchPayoutsData,
} from '../api/mockApi';

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardStats,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useMetricCards = () => {
  return useQuery({
    queryKey: ['metricCards'],
    queryFn: fetchMetricCards,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProgramGrowth = () => {
  return useQuery({
    queryKey: ['programGrowth'],
    queryFn: fetchProgramGrowth,
    staleTime: 1000 * 60 * 5,
  });
};

export const useApprovalRequests = () => {
  return useQuery({
    queryKey: ['approvalRequests'],
    queryFn: fetchApprovalRequests,
    staleTime: 1000 * 60 * 5,
  });
};

export const useMessages = () => {
  return useQuery({
    queryKey: ['messages'],
    queryFn: fetchMessages,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePartnerFunnelData = () => {
  return useQuery({
    queryKey: ['partnerFunnel'],
    queryFn: fetchPartnerFunnelData,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePayoutsData = () => {
  return useQuery({
    queryKey: ['payouts'],
    queryFn: fetchPayoutsData,
    staleTime: 1000 * 60 * 5,
  });
};