import { UserType } from './UserType';

export interface User {
  id?: string;
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  dob: string;
  phone: number | null;
  wilaya?: string;
  first_name: string;
  last_name: string;
  roles?: string;
  commune?: string;
  stopDeskHub?: string;
  matricule?: string;
  type: UserType;
  createdAt?: Date;
  updatedAt?: Date;
}
