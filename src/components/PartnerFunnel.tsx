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
    <Card className="bg-gradient-to-br from-[#c8ff00] to-[#9de01e] border-0 shadow-lg h-full ">
      <CardContent className="p-8 flex flex-col h-full justify-between">
        {/* Header with Title and Growth */}
        <div className="flex flex-col items-start justify-between mb-8">
          <div className="flex flex-row gap-2 justify-between w-full">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-black" />
              <h3 className="text-lg font-bold text-black">Partner Funnel</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="default" 
                size="sm"
                className="bg-black text-white hover:bg-black/90 rounded-full px-4 h-8 text-xs"
              >
                Last quarter
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-black hover:bg-black/10 rounded-full px-4 h-8 text-xs"
              >
                What has influenced
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-black hover:bg-black/10 rounded-full px-4 h-8 text-xs"
              >
                Forecast
              </Button>
            </div>
          </div>
          <div className="text-right flex flex-row items-end gap-2">
            <div className="text-5xl font-medium text-black leading-none">+{data?.growth}%</div>
            <div className="text-xs w-25 text-black/70 mt-2 text-left">{data?.growthDescription}</div>
          </div>
        </div>

        {/* Funnel Metrics - Flowing Layout */}
        <div className="flex items-end gap-3" style={{ height: '160px' }}>
          {/* Total Market - Tallest */}
          <div className="flex flex-col justify-end gap-2" style={{ width: '28%', height: '100%' }}>
            <div className="flex flex-col gap-2 justify-between"> 
              <div className="text-4xl font-bold text-black leading-none">
                {data?.totalMarket.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">TOTAL MARKET</div>
            </div>
            <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-5 h-full flex flex-col justify-between">
            </div>
          </div>

          {/* Prospects */}
          <div className="flex flex-col justify-end gap-2" style={{ width: '26%', height: '85%' }}>
            <div className="flex flex-col gap-2 justify-between"> 
              <div className="text-4xl font-bold text-black leading-none">
                {data?.prospects.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">PROSPECTS</div>
            </div>
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-5 h-full flex flex-col justify-between">
            </div>
          </div>

          {/* Leads */}
          <div className="flex flex-col justify-end gap-2" style={{ width: '23%', height: '70%' }}>
            <div className="flex flex-col gap-2 justify-between"> 
              <div className="text-4xl font-bold text-black leading-none">
                {data?.leads.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">LEADS</div>
            </div>
            <div className="bg-white/45 backdrop-blur-sm rounded-2xl p-5 h-full flex flex-col justify-between">
            </div>
          </div>

          {/* Sales */}
          <div className="flex flex-col justify-end gap-2" style={{ width: '23%', height: '55%' }}>
            <div className="flex flex-col gap-2 justify-between">

              <div className="text-4xl font-bold text-black leading-none">
                {data?.sales.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-black/60 uppercase tracking-wide">SALES</div>
            </div>
            <div className="bg-black backdrop-blur-sm rounded-2xl p-5 h-full flex flex-col justify-between">
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};