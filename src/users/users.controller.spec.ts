import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUsersDto';
import { UpdatedUserDto } from './dto/updatedUserDto';
import { UUID } from 'crypto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  // Mocking the UsersService
  const mockUsersService = {
    create: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      const createUserDto: CreateUserDto = { name: 'John', email: 'john@example.com',password:"123456768" };
      const result = { id: '123', ...createUserDto };

      mockUsersService.create.mockResolvedValue(result);

      expect(await controller.create(createUserDto)).toEqual(result);
      expect(mockUsersService.create).toHaveBeenCalledWith(createUserDto);
    });

    it('should throw an InternalServerErrorException if creation fails', async () => {
      const createUserDto: CreateUserDto = { name: 'John', email: 'john@example.com',password:"12345678" };
      const error = new Error('Error creating user');
      mockUsersService.create.mockRejectedValue(error);

      try {
        await controller.create(createUserDto);
      } catch (e) {
        expect(e).toBeInstanceOf(InternalServerErrorException);
        expect(e.message).toBe(`Erro ao criar usuário : ${error.message}`);
      }
    });
  })
})