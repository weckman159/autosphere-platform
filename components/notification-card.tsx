
import { BellIcon, ClockIcon } from '@heroicons/react/24/outline';

interface Notification {
  message: string;
  timestamp: string;
}

export default function NotificationCard({ notification }: { notification: Notification }) {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-md space-x-4">
      <div className="flex-shrink-0">
        <BellIcon className="h-6 w-6 text-gray-400" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{notification.message}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <ClockIcon className="h-4 w-4 mr-1" />
          <span>{notification.timestamp}</span>
        </div>
      </div>
    </div>
  );
}
