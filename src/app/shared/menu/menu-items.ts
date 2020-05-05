export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/admin/medicine',
    title: 'Harga Ubat',
    type: 'sub',
    icontype: 'fas fa-cogs text-purple',
    collapse: 'medicine',
    isCollapsed: false,
    children: [
      { path: 'management', title: 'Penyelenggaraan', type: 'link' },
      { path: 'data1', title: 'Data Ubat 1', type: 'link' },
      { path: 'data2', title: 'Data Ubat 2', type: 'link' },
      { path: 'data3', title: 'Data Ubat 3', type: 'link' },
      { path: 'certification', title: 'Penghargaan', type: 'link' }
    ]
  },
  {
    path: '/admin/profile',
    title: 'Profil',
    type: 'link',
    icontype: 'far fa-id-badge text-red'
  },
  {
    path: '/admin/settings',
    title: 'Tetapan',
    type: 'link',
    icontype: 'fas fa-sliders-h text-orange'
  }
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/user/medicine',
    title: 'Harga Ubat',
    type: 'sub',
    icontype: 'fas fa-cogs text-purple',
    collapse: 'medicine',
    isCollapsed: false,
    children: [
      { path: 'data', title: 'Data Ubat', type: 'link' },
      { path: 'user-management', title: 'Pengurusan Pengguna', type: 'link' }
    ]
  },
  {
    path: '/admin/profile',
    title: 'Profil',
    type: 'link',
    icontype: 'far fa-id-badge text-red'
  },
  {
    path: '/admin/settings',
    title: 'Tetapan',
    type: 'link',
    icontype: 'fas fa-sliders-h text-orange'
  }
]

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/