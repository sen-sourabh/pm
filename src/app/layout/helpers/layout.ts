import { SidebarMenusType } from '../types';

export const SidebarMenus: SidebarMenusType[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
    is_enable: true,
  },
  {
    name: 'Categories',
    path: '/categories',
    icon: 'category',
    is_enable: true,
  },
  {
    name: 'Tags',
    path: '/tags',
    icon: 'sell',
    is_enable: true,
  },
  {
    name: 'Products',
    path: '/products',
    icon: 'inventory_2',
    is_enable: false,
  },
  {
    name: 'Orders',
    path: '/orders',
    icon: 'shopping_bag',
    is_enable: false,
  },
  {
    name: 'Carts',
    path: '/carts',
    icon: 'shopping_cart',
    is_enable: false,
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: 'payment',
    is_enable: false,
  },
  {
    name: 'Analytics & Reports',
    path: '/analytics-&-reports',
    icon: 'monitoring',
    is_enable: false,
  },
  {
    name: 'Metadata',
    path: '/metadata',
    icon: 'dataset',
    is_enable: false,
  },
  {
    name: 'Support',
    path: '/support',
    icon: 'support_agent',
    is_enable: false,
  },
  {
    name: 'Activity & Logs',
    path: '/activity-&-logs',
    icon: 'history',
    is_enable: false,
  },
  {
    name: 'Customers',
    path: '/customers',
    icon: 'person_2',
    is_enable: false,
  },
  {
    name: 'Users',
    path: '/users',
    icon: 'group',
    is_enable: false,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'settings',
    is_enable: false,
  },
  {
    name: 'Sign out',
    path: '/auth',
    icon: 'power_settings_new',
    is_enable: true,
  },
];
