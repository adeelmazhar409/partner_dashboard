import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Skeleton } from './ui/Skeleton';
import { useProgramGrowth } from '../hooks/useQueries';

export const ProgramGrowth = () => {
  const { data: programs, isLoading, isError } = useProgramGrowth();

  if (isError) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-red-600">
          Failed to load program growth data
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-40" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-48 w-full" />
        </CardContent>
      </Card>
    );
  }

  // Calculate max for scaling
  const maxPartners = Math.max(...(programs?.map((p) => p.partners) || [1]));

  return (
    <Card className="h-full">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
          <div>
            <CardTitle className="text-base sm:text-lg">Program Growth</CardTitle>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              New partner acquisition breakdown
            </p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-xl sm:text-2xl font-bold text-teal-600">+124</div>
            <div className="text-[10px] sm:text-xs text-teal-600 mt-1">→ This Month</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-[10px] sm:text-xs flex-wrap">
          <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-neutral-100 rounded-lg font-medium whitespace-nowrap">
            APPLICATION
          </button>
          <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-neutral-500 hover:bg-neutral-100 rounded-lg whitespace-nowrap">
            PRODUCT
          </button>
          <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-neutral-500 hover:bg-neutral-100 rounded-lg whitespace-nowrap">
            CAMPAIGN
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {programs?.map((program) => {
            const percentage = (program.partners / maxPartners) * 100;

            return (
              <div key={program.name}>
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-xs sm:text-sm font-medium text-neutral-700 truncate pr-2">
                    {program.name}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 whitespace-nowrap">
                    {program.partners} Partners
                  </span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-1.5 sm:h-2 overflow-hidden">
                  <div
                    className="bg-black h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};