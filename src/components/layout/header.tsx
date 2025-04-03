import React from 'react';
import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AlertCircle, Bell } from 'lucide-react';
import { Button } from '../ui/button';

// Example alerts data with statuses
const alerts = [
  {
    id: '1',
    title: 'Contamination Alert',
    message: 'High levels of ammonia detected in Yamuna River near Location X. Immediate action required. Water quality: Hazardous.',
    read: false
  },
  {
    id: '2',
    title: 'Routine Cleaning Completed',
    message: 'Desilting and cleaning activities successfully completed at Water Body Y. Water quality improved by 15%.',
    read: false
  },
  {
    id: '3',
    title: 'pH Imbalance Detected',
    message: 'pH levels are outside the normal range in River Z. Investigation required.',
    read: true
  },
  {
    id: '4',
    title: 'Debris Removal Completed',
    message: 'Debris removal process at Lake A has been completed. Water clarity has improved.',
    read: true
  },
  {
    id: '5',
    title: 'Routine Maintenance Update',
    message: 'Scheduled maintenance on Reservoir B is in progress. Expected to finish by the end of the week.',
    read: true
  }
];

// Function to truncate the message to a specified word limit
function truncateMessage(message: string, wordLimit: number) {
  const words = message.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return message;
}

// Function to get the number of unread alerts
function getUnreadAlertCount() {
  return alerts.filter(alert => !alert.read).length;
}

export default function Header() {
  const unreadAlertCount = getUnreadAlertCount();

  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur mt-2">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link
            href={'https://github.com/Kiranism/next-shadcn-dashboard-starter'}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative border bg-white text-black hover:bg-gray-100 flex items-center p-2 rounded-md">
                <Bell className="h-5 w-5" />
                {unreadAlertCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                    {unreadAlertCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
              {alerts.map(alert => (
                <Link key={alert.id} href={`/dashboard/alert/${alert.id}`} passHref>
                  <DropdownMenuItem
                    className={cn(
                      'flex items-start cursor-pointer p-2 m-2',
                      alert.read ? 'bg-gray-100' : 'bg-blue-50'
                    )}
                  >
                    <AlertCircle
                      className={cn(
                        'mr-2',
                        alert.read ? 'text-gray-600' : 'text-blue-500'
                      )}
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{alert.title}</span>
                      <span className="text-sm text-gray-600">{truncateMessage(alert.message, 20)}</span>
                    </div>
                    {!alert.read && (
                      <span className="ml-auto h-3 w-3 bg-blue-500 rounded-full" />
                    )}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
