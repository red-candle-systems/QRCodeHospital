
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/detail/:equipmentId', component: () => import('pages/index.vue') },
      { path: '/MaintenanceList', component: () => import('pages/MaintenanceList.vue') },
      { path: '/MaintenanceSectionEquipment', component: () => import('pages/MaintenanceSectionEquipmentPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
