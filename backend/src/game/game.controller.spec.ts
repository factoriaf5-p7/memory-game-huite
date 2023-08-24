import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from './game.schema';

describe('GameController', () => {
  let gameController: GameController;
  let gameService: GameService;
  let gameModel: Model<Game>; // Asegúrate de que el tipo Game esté correctamente importado

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [
        GameService,
        {
          provide: getModelToken('images'),
          useValue: {},
        },
      ],
    }).compile();

    gameController = module.get<GameController>(GameController);
    gameService = module.get<GameService>(GameService);
    gameModel = module.get<Model<Game>>(getModelToken('images'));
  });

  describe('getGameInfo', () => {
    it('should return image URLs', async () => {
      const mockGame = {
        cards: [{ img_url: 'example-url' }],
      };

      jest.spyOn(gameModel, 'findOne').mockReturnValue({
        exec: jest.fn().mockResolvedValue(mockGame),
      } as any);

      const result = await gameController.getGameInfo();

      expect(result).toEqual(['example-url']);
    });

    it('should throw an error if game is not found', async () => {
      jest.spyOn(gameModel, 'findOne').mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      } as any);

      await expect(gameController.getGameInfo()).rejects.toThrow(
        'Error fetching game',
      );
    });
  });
});
