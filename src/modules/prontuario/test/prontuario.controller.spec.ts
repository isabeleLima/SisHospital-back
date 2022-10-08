import { Test } from '@nestjs/testing';
import { ProntuarioController } from '../prontuario.controller';
import { ProntuarioService } from '../prontuario.service';
import { stub } from 'sinon';

describe('ProntuarioController', () => {
  let controller: ProntuarioController;
  let service: ProntuarioService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProntuarioController],
      providers: [
        {
          provide: ProntuarioService,
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProntuarioService>(ProntuarioService);
    controller = module.get<ProntuarioController>(ProntuarioController);
  });
  it('should return successfuly if service finds prontuario by id', async () => {
    stub(service, 'findOne').resolves({
      status: 'ABERTO',
      return: true,
      id: '62e77c98-3469-11ed-a261-0242ac120002',
      observation: '',
    });

    const response = await controller.findById(
      '62e77c98-3469-11ed-a261-0242ac120002',
    );

    expect(response).toMatchObject({
      status: expect.any(String),
      return: expect.any(Boolean),
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
      status: 'ABERTO',
      return: true,
      id: '62e77c98-3469-11ed-a261-0242ac120002',
      observation: '',
    });

    const response = await controller.create({
      status: 'ABERTO',
      return: true,
      observation: '',
    });

    expect(response).toMatchObject({
      status: expect.any(String),
      return: expect.any(Boolean),
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
