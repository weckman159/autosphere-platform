import { BellIcon, ClockIcon } from "@heroicons/react/24/outline";

interface Notification {
  message: string;
  timestamp: string;
}

export default function NotificationCard({
  notification,
}: {
  notification: Notification;
}) {
  return (
    <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-md">
      <div className="flex-shrink-0">
        <BellIcon className="h-6 w-6 text-gray-400" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">
          {notification.message}
        </p>
        <div className="mt-1 flex items-center text-sm text-gray-500">
          <ClockIcon className="mr-1 h-4 w-4" />
          <span>{notification.timestamp}</span>
        </div>
      </div>
    </div>
  );
}
