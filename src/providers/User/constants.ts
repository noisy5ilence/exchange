import { Role } from '@/providers/User/models.ts';

export const userTypes = {
  [Role.cashier]: { id: Role.cashier, name: 'Касир' },
  [Role.administrator]: { id: Role.administrator, name: 'Адміністратор' }
};
