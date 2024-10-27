import { SidebarMenusType } from '../types';

export const SidebarMenus: SidebarMenusType[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
    is_enable: true,
  },
  {
    name: 'Users',
    path: '/users',
    icon: 'group',
    is_enable: true,
  },
  {
    name: 'Vaults',
    path: '/vaults',
    icon: 'settings_applications',
    is_enable: true,
  },
  {
    name: 'Custom Fields',
    path: '/custom-fields',
    icon: 'code',
    is_enable: true,
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: 'payment',
    is_enable: true,
  },
  {
    name: 'Analytics & Reports',
    path: '/analytics-&-reports',
    icon: 'monitoring',
    is_enable: true,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'settings',
    is_enable: true,
  },
  {
    name: 'Activity & Logs',
    path: '/activity-&-logs',
    icon: 'history',
    is_enable: true,
  },
  {
    name: 'Metadata',
    path: '/metadata',
    icon: 'dataset',
    is_enable: true,
  },
  {
    name: 'Support',
    path: '/support',
    icon: 'support_agent',
    is_enable: true,
  },
  {
    name: 'Sign out',
    path: '/auth',
    icon: 'power_settings_new',
    is_enable: true,
  },
];
