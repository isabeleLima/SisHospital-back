import { Test } from '@nestjs/testing';
import { PacienteController } from '../paciente.controller';
import { PacienteService } from '../paciente.service';
import { stub } from 'sinon';

describe('PacienteController', () => {
  let controller: PacienteController;
  let service: PacienteService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PacienteController],
      providers: [
        {
          provide: PacienteService,
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PacienteService>(PacienteService);
    controller = module.get<PacienteController>(PacienteController);
  });
  it('should return successfuly if service finds prontuario by id', async () => {
    stub(service, 'findOne').resolves({
      name: 'Paciente',
      email: 'paciente@gmail.com',
      birth_date: new Date('2002-04-14'),
      cpf: '123.223.456-88',
      address: 'Rua aquela lá mesmo',
      id: '62e77c98-3469-11ed-a261-0242ac120002',
      observation: '',
    });

    const response = await controller.findById(
      '62e77c98-3469-11ed-a261-0242ac120002',
    );

    expect(response).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      birth_date: expect.any(Date),
      cpf: expect.any(String),
      address: expect.any(String),
      id: expect.any(String),
      observation: expect.any(String),
    });
  });

  it('should throw an eror if getAll call service fails', async () => {
    stub(service, 'findAll').rejects();

    await controller.index().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  it('should return successfuly if service creates prontuario', async () => {
    stub(service, 'create').resolves({
      name: 'Paciente',
      email: 'paciente@gmail.com',
      birth_date: new Date('2002-04-14'),
      cpf: '123.223.456-88',
      address: 'Rua aquela lá mesmo',
      id: '62e77c98-3469-11ed-a261-0242ac120002',
      observation: '',
    });

    const response = await controller.create({
      name: 'Paciente',
      email: 'paciente@gmail.com',
      birth_date: new Date('2002-04-14'),
      cpf: '123.223.456-88',
      address: 'Rua aquela lá mesmo',
      observation: '',
    });

    expect(response).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      birth_date: expect.any(Date),
      cpf: expect.any(String),
      address: expect.any(String),
      id: expect.any(String),
      observation: expect.any(String),
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

  it('should remove successfully a prontuario', async () => {
    stub(service, 'remove').resolves([]);

    await controller
      .remove('62e77c98-3469-11ed-a261-0242ac120002')
      .then((res) => {
        expect(res).toBeInstanceOf(Array);
      });
  });
});
