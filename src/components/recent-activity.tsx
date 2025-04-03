import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface RecentActivity {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string;
    initials: string;
  };
  activity: string;
  timestamp: string;
}

const recentActivities: RecentActivity[] = [
  {
    id: '1',
    user: {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      avatar: '/avatars/01.png',
      initials: 'OM',
    },
    activity: 'Cleaned Water Body X',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    user: {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      avatar: '/avatars/02.png',
      initials: 'JL',
    },
    activity: 'Removed debris from Water Body Y',
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    user: {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      avatar: '/avatars/03.png',
      initials: 'IN',
    },
    activity: 'Updated water quality report for Water Body Z',
    timestamp: '1 day ago',
  },
  {
    id: '4',
    user: {
      name: 'William Kim',
      email: 'will@email.com',
      avatar: '/avatars/04.png',
      initials: 'WK',
    },
    activity: 'Scheduled maintenance for Water Body A',
    timestamp: '2 days ago',
  },
  {
    id: '5',
    user: {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      avatar: '/avatars/05.png',
      initials: 'SD',
    },
    activity: 'Conducted pH level check for Water Body B',
    timestamp: '3 days ago',
  },
];

export function RecentActivities() {
  return (
    <div className="space-y-8">
      {recentActivities.map(({ id, user, activity, timestamp }) => (
        <div key={id} className="flex items-start">
          {/* <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} alt="Avatar" />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar> */}
          <div className="ml-4 space-y-1">
            {/* <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p> */}
            <p className="text-sm">{activity}</p>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
