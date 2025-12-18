
import NotificationCard from '@/components/notification-card';

const notifications = [
  {
    message: 'Your car has been successfully listed on the marketplace!',
    timestamp: '2 hours ago',
  },
  {
    message: 'You have a new follower: @username.',
    timestamp: '1 day ago',
  },
  {
    message: 'A new event has been added to your community.',
    timestamp: '3 days ago',
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Notifications</h1>
      {
        notifications.map((notification, index) => (
          <NotificationCard key={index} notification={notification} />
        ))
      }
    </div>
  );
}
