import { Test } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UsersService } from '../user.service';
import { stub } from 'sinon';
import { User } from '../user.entity';

describe('UserController', () => {
  let controller: UserController;
  let service: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    controller = module.get<UserController>(UserController);
  });
  it('should return successfuly if service finds user by id', async () => {
    stub(service, 'findOne').resolves({
      id: '62e77c98-3469-11ed-a261-0242ac120002',
      name: 'teste',
      email: 'email@gmail.com',
      password: '123',
      cpf: '000.000.000-00',
      type: 'MEDICO',
    });

    const response = await controller.findById(
      '62e77c98-3469-11ed-a261-0242ac120002',
    );

    expect(response).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      cpf: expect.any(String),
      type: expect.any(String),
    });
  });
});
