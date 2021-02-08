import { Test, TestingModule } from 'src/books/controllers/items/node_modules/@nestjs/testing';
import { UserService } from './user.service';

describe('ServicesService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
