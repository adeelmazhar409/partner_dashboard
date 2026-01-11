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
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Program Growth</CardTitle>
            <p className="text-sm text-neutral-500 mt-1">
              New partner acquisition breakdown
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-teal-600">+124</div>
            <div className="text-xs text-teal-600 mt-1">→ This Month</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-6 text-xs">
          <button className="px-3 py-1.5 bg-neutral-100 rounded-lg font-medium">
            APPLICATION
          </button>
          <button className="px-3 py-1.5 text-neutral-500 hover:bg-neutral-100 rounded-lg">
            PRODUCT
          </button>
          <button className="px-3 py-1.5 text-neutral-500 hover:bg-neutral-100 rounded-lg">
            CAMPAIGN
          </button>
        </div>

        <div className="space-y-4">
          {programs?.map((program) => {
            const percentage = (program.partners / maxPartners) * 100;

            return (
              <div key={program.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700">
                    {program.name}
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">
                    {program.partners} Partners
                  </span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
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