import { TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Skeleton } from './ui/Skeleton';
import { usePartnerFunnelData } from '../hooks/useQueries';

export const PartnerFunnel = () => {
  const { data, isLoading, isError } = usePartnerFunnelData();

  if (isError) {
    return (
      <Card className="bg-gradient-to-br from-[#c8ff00] to-[#9de01e]">
        <CardContent className="p-8">
          <div className="text-center text-red-600">
            Failed to load partner funnel data
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="bg-gradient-to-br from-[#c8ff00] to-[#9de01e]">
        <CardContent className="p-8">
          <Skeleton className="h-48 w-full bg-white/20" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-[#c8ff00] to-[#9de01e] border-0 shadow-lg h-full">
      <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col h-full justify-between">
        {/* Header with Title and Growth */}
        <div className="flex flex-col items-start justify-between mb-4 sm:mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-between w-full mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-black">Partner Funnel</h3>
            </div>
            <div className="flex flex-row gap-1 sm:gap-2 flex-wrap items-center">
              <Button
                variant="default"
                className="bg-black text-white hover:bg-black/90 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 h-auto text-[9px] sm:text-[10px] lg:text-xs font-medium whitespace-nowrap"
              >
                Last quarter
              </Button>
              <Button
                variant="ghost"
                className="text-black hover:bg-black/10 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 h-auto text-[9px] sm:text-[10px] lg:text-xs whitespace-nowrap hidden md:flex"
              >
                What has influenced
              </Button>
              <Button
                variant="ghost"
                className="text-black hover:bg-black/10 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 h-auto text-[9px] sm:text-[10px] lg:text-xs whitespace-nowrap hidden md:flex"
              >
                Forecast
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-end gap-2">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-none">+{data?.growth}%</div>
            <div className="text-[10px] sm:text-xs w-16 sm:w-20 lg:w-24 text-black/70 text-left leading-tight">{data?.growthDescription}</div>
          </div>
        </div>

        {/* Funnel Metrics - Flowing Layout */}
        <div className="flex items-end gap-1.5 sm:gap-2 lg:gap-3 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px]">
          {/* Total Market - Tallest */}
          <div className="flex flex-col justify-end gap-1 sm:gap-2" style={{ width: '28%', height: '100%' }}>
            <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-none">
                {data?.totalMarket.toLocaleString()}
              </div>
              <div className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-black/60 uppercase tracking-wide leading-tight">TOTAL MARKET</div>
            </div>
            <div className="bg-black/25 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5 h-full flex flex-col justify-between">
            </div>
          </div>

          {/* Prospects */}
          <div className="flex flex-col justify-end gap-1 sm:gap-2" style={{ width: '26%', height: '85%' }}>
            <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-none">
                {data?.prospects.toLocaleString()}
              </div>
              <div className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-black/60 uppercase tracking-wide leading-tight">PROSPECTS</div>
            </div>
            <div className="bg-black/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5 h-full flex flex-col justify-between">
            </div>
          </div>

          {/* Leads */}
          <div className="flex flex-col justify-end gap-1 sm:gap-2" style={{ width: '23%', height: '70%' }}>
            <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-none">
                {data?.leads.toLocaleString()}
              </div>
              <div className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-black/60 uppercase tracking-wide leading-tight">LEADS</div>
            </div>
            <div className="bg-white/45 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5 h-full flex flex-col justify-between">
            </div>
          </div>

          {/* Sales */}
          <div className="flex flex-col justify-end gap-1 sm:gap-2" style={{ width: '23%', height: '55%' }}>
            <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-none">
                {data?.sales.toLocaleString()}
              </div>
              <div className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-black/60 uppercase tracking-wide leading-tight">SALES</div>
            </div>
            <div className="bg-black backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-5 h-full flex flex-col justify-between">
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};