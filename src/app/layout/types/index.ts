export type SidebarMenusType = {
  name: string;
  path: string;
  icon?: string;
  target?: string;
  children?: SidebarMenusType[];
  is_enable: boolean;
};
