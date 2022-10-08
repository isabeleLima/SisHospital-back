import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * @desc Returns the payload from jwt token.
 * @returns entire payload by default.
 */

export const JwtPayload = createParamDecorator(
  (data: 'id' | 'email' | 'name' | 'cpf' | 'role', ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const issuer = data ? request.issuer[data] : request.issuer;

    return issuer;
  },
);

export interface UserJwtToken {
  id: string;
  email: string;
  cpf: string;
  name: string;
  role: string;
}
