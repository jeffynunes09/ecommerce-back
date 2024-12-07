import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UUID } from "crypto";



describe('AuthorController', () => {
    let usersController: UsersController;
    let usersService :UsersService
    


    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: {

                        create  :jest.fn(),
                        findOne :jest.fn(),
                        findById :jest.fn(),
                        findAll :jest.fn(),
                        updated :jest.fn(),
                        delete :jest.fn(),
                    }

                }
            ],
        }).compile();

        usersController = module.get<UsersController>(UsersController);
        usersService = module.get<UsersService>(UsersService)
    });

    it('should be defined', () => {
        expect(usersController).toBeDefined();
        expect(usersService).toBeDefined();
    });
});