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
    <CardContent className="p-6 bg-amber-50 border-l-4 border-amber-300 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <div>
            <h3 className="font-semibold text-neutral-900">Needs Approval</h3>
            <p className="text-sm text-neutral-600">
              {requests?.length} requests pending your review
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-amber-700 hover:text-amber-800"
        >
          APPROVE ALL →
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {requests?.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-neutral-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium">
                {request.avatar}
              </div>
              <div className="text-xs text-neutral-500">{request.timeAgo}</div>
            </div>
            <div className="mb-2">
              <div className="font-medium text-sm text-neutral-900 mb-1">
                {request.name}
              </div>
              <div className="text-xs text-neutral-600">{request.action}</div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
              ⊙ Review
            </Button>
          </div>
        ))}
      </div>
    </CardContent>
  );
};
