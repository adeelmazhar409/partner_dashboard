import { Target, Users, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Skeleton } from './ui/Skeleton';
import { useMetricCards } from '../hooks/useQueries';

const iconMap = {
  outreach: Target,
  onboarded: Users,
  deliverables: Clock,
};

const colorMap = {
  outreach: 'text-blue-500',
  onboarded: 'text-teal-500',
  deliverables: 'text-orange-500',
};

export const MetricCards = () => {
  const { data: metrics, isLoading, isError } = useMetricCards();

  if (isError) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6 text-center text-red-600">
              Failed to load
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {metrics?.map((metric) => {
        const Icon = iconMap[metric.icon];
        const color = colorMap[metric.icon];

        return (
          <Card key={metric.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="text-xs font-semibold text-neutral-500 tracking-wide uppercase">
                  {metric.title}
                </div>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-1">
                    {metric.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-neutral-500">{metric.label}</div>
                </div>
                {metric.change && (
                  <div className="text-right">
                    <div className="text-sm sm:text-lg font-bold text-teal-600">
                      +{metric.change}%
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};