import { SetMetadata } from '@nestjs/common';
import { TypesEnum } from '../enums/types.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: TypesEnum[]) => SetMetadata(ROLES_KEY, roles);
