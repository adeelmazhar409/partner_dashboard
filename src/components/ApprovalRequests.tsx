import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Skeleton } from "./ui/Skeleton";
import { useApprovalRequests } from "../hooks/useQueries";

export const ApprovalRequests = () => {
  const { data: requests, isLoading, isError } = useApprovalRequests();

  if (isError) {
    return (
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6 text-center text-red-600">
          Failed to load approval requests
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <Skeleton className="h-32 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <CardContent className="p-4 sm:p-6 bg-amber-50 border-l-4 border-amber-300 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-900">Needs Approval</h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              {requests?.length} requests pending your review
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-amber-700 hover:text-amber-800 text-xs sm:text-sm self-start sm:self-auto"
        >
          APPROVE ALL →
        </Button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {requests?.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow border border-neutral-100"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium text-sm">
                {request.avatar}
              </div>
              <div className="text-[10px] sm:text-xs text-neutral-500">{request.timeAgo}</div>
            </div>
            <div className="mb-2">
              <div className="font-medium text-xs sm:text-sm text-neutral-900 mb-1">
                {request.name}
              </div>
              <div className="text-[10px] sm:text-xs text-neutral-600 line-clamp-1">{request.action}</div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-2 text-[10px] sm:text-xs">
              ⊙ Review
            </Button>
          </div>
        ))}
      </div>
    </CardContent>
  );
};
