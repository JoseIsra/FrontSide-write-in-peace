export const appTabs = [
  {
    name: 'trunk',
    label: 'Baúl de escritos',
    redirect: { name: 'trunk' },
    icon: 'markunread_mailbox',
  },
  {
    name: 'emotional',
    label: 'Diario emocional',
    redirect: { name: 'emotional' },
    icon: 'history_edu',
  },
  {
    name: 'writting',
    label: 'Nuevo escrito',
    redirect: { name: 'writting' },
    icon: 'edit_note',
  },
];

export const menuProfile = [
  {
    label: 'Ver perfil',
    icon: 'person',
    action: 'profile',
  },
  {
    label: 'Cerrar sesión',
    icon: 'logout',
    action: 'logout',
  },
];

export enum API_RESPONSE {
  SUCCESS = 200,
}

export enum WRITTING_TYPE {
  DIARYEMOTIONAL = 0,
  WRITTING = 1,
}

export enum WRITTING_CLASSIFICATION {
  PUBLISHED = 0,
  NOT_PUBLISHED = 1,
}
