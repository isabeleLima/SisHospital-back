import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * @desc Returns the payload from jwt token.
 * @returns entire payload by default.
 */

export const JwtPayload = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserJwtToken;
  },
);

export interface UserJwtToken {
  id: string;
  email: string;
  cpf: string;
  name: string;
  role: string;
}
