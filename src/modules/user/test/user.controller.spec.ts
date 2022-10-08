import { Test } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UsersService } from '../user.service';
import { stub } from 'sinon';

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
            create: jest.fn(),
            remove: jest.fn(),
            findAll: jest.fn(),
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

  it('should throw an eror if getAll call service fails', async () => {
    stub(service, 'findAll').rejects();

    await controller.index().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  it('should return successfuly if service creates user', async () => {
    stub(service, 'create').resolves({
      name: 'Doctor WHO',
      email: 'doctorrrr@gmail.com',
      password: '123',
      cpf: '123.223.456-88',
      type: 'MEDICO',
      id: '62e77c98-3469-11ed-a261-0242ac120002',
    });

    const response = await controller.create({
      name: 'Doctor WHO',
      email: 'doctorrrr@gmail.com',
      password: '123',
      cpf: '123.223.456-88',
      type: 'MEDICO',
    });

    expect(response).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      cpf: expect.any(String),
      type: expect.any(String),
    });
  });

  it('should throw an eror if remove call service fails', async () => {
    stub(service, 'remove').rejects();

    await controller
      .remove('62e77c98-3469-11ed-a261-0242ac120002')
      .catch((err) => {
        expect(err).toBeInstanceOf(Error);
      });
  });

  it('should remove successfully a enterprises', async () => {
    stub(service, 'remove').resolves([]);

    await controller
      .remove('62e77c98-3469-11ed-a261-0242ac120002')
      .then((res) => {
        expect(res).toBeInstanceOf(Array);
      });
  });
});
