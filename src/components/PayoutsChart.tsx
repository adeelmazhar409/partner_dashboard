import { Zap } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Skeleton } from './ui/Skeleton';

// Dummy data that matches your screenshot proportions
const dummyData = {
  percentageChange: 350,
  amount: '$2.5m',
  chartData: [
    0.35,    // Jan 23   ~ small
    0.45,    // Feb 23   medium
    0.9,     // Mar 23   tall
    1.75,    // Sep 23   highest (last bar - 350% growth vibe)
  ],
};

export const PayoutsChart = () => {
  // Use real data when available, fallback to dummy
  const data = dummyData; // ← In production: replace with real data from usePayoutsData()
  const isLoading = false;
  const isError = false;

  if (isError) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-red-600">
          Failed to load payouts data
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <Skeleton className="h-80 w-full" />
        </CardContent>
      </Card>
    );
  }

  const chartData = data.chartData;
  const maxValue = Math.max(...chartData, 1);
  const lastIndex = chartData.length - 1;

  const labels = ['01.23', '02.23', '03.23', '09.23'];
  if(data){

    return (
      <Card className="border-none shadow-none bg-white">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-black" />
              <h3 className="text-sm font-semibold text-neutral-900">
                Payouts last quarter
              </h3>
            </div>
            {/* Optional: small avatar like in second screenshot */}
            {/* <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" /> */}
          </div>
  
          {/* Big stats */}
          <div className="mb-10">
            <div className="text-6xl md:text-7xl font-extrabold text-neutral-900 leading-none tracking-tight">
              +{data.percentageChange}%
            </div>
            <div className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-600">
              {data.amount}
            </div>
          </div>
  
          {/* Pill-shaped bar chart */}
          <div className="relative h-64 flex items-end gap-3 px-2">
            {chartData.map((value, index) => {
              const height = Math.max((value / maxValue) * 100, 10);
              const isLast = index === lastIndex;
  
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center justify-end group relative"
                >
                  <div
                    className={`
                      w-full rounded-t-full transition-all duration-300 ease-out
                      ${isLast
                        ? 'bg-[#c8ff00]'
                        : 'bg-black group-hover:bg-neutral-800'
                      }
                    `}
                    style={{ height: `${height}%` }}
                  />
  
                  {/* Tooltip on hover */}
                  <div className="
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    absolute -top-11 left-1/2 -translate-x-1/2
                    bg-black/90 text-white text-xs px-3 py-1.5 rounded-md
                    whitespace-nowrap z-20 pointer-events-none shadow-lg
                  ">
                    ${(value * 1).toFixed(1)}m
                  </div>
                </div>
              );
            })}
          </div>
  
          {/* X-axis labels */}
          <div className="flex justify-between mt-5 px-2 text-xs md:text-[11px] text-neutral-400 font-medium">
            {labels.map((label, i) => (
              <span
                key={label}
                className={i === lastIndex ? 'font-bold text-neutral-900' : ''}
              >
                {label}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
};