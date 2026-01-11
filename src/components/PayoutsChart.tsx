import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Skeleton } from "./ui/Skeleton";
import { usePayoutsData } from "../hooks/useQueries";

export const PayoutsChart = () => {
  const { data, isLoading, isError } = usePayoutsData();

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

  const chartData = data?.chartData || [];
  const maxValue = Math.max(...chartData);
  const labels = [
    "01.23",
    "02.23",
    "03.23",
    "04.23",
    "05.23",
    "06.23",
    "07.23",
    "08.23",
    "09.23",
    "10.23",
  ];

  const getBarColor = (index: number) => {
    const isLast = index === chartData.length - 1;
    if (isLast) return "bg-[#c8ff00] hover:bg-[#b8ef00]";
    else if (index < 3) return "bg-neutral-200 hover:bg-neutral-300";
    else return "bg-black hover:bg-neutral-700";
  };

  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-900">
              Payouts last quarter
            </h3>
          </div>
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
        </div>

        <div className="mb-4 sm:mb-6">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-1 leading-none">
            +{data?.percentageChange}%
          </div>
          <div className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-600">
            {data?.amount}
          </div>
        </div>

        <div className="relative h-40 sm:h-48 lg:h-52">
          <div className="absolute inset-0 flex items-end justify-between gap-0.5 sm:gap-1 pb-6">
            {chartData.map((value, index) => {
              const heightPercentage = (value / maxValue) * 100;
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center justify-end group relative"
                  style={{ height: "100%" }}
                >
                  <div
                    className={`w-full max-w-[32px] sm:max-w-[42px] rounded-full transition-all duration-300 ease-out cursor-pointer ${getBarColor(
                      index
                    )}`}
                    style={{ height: `${Math.max(heightPercentage, 10)}%` }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-md whitespace-nowrap z-20 pointer-events-none">
                      ${value}m
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-0.5 sm:px-1">
            {labels.slice(0, chartData.length).map((label, index) => (
              <div
                key={label}
                className={`text-[8px] sm:text-[10px] font-medium flex-1 text-center ${
                  index === chartData.length - 1
                    ? "text-neutral-900 font-bold"
                    : "text-neutral-400"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
