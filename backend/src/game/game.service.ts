import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from './game.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel('images') private readonly gameModel: Model<Game>) {}

  async getGameInfo() {
    try {
      const game = await this.gameModel.findOne().exec();
      if (!game) {
        throw new Error('Game not found');
      }
      return game;
    } catch (error) {
      console.error('Error fetching game:', error);
      throw new Error('Error fetching game');
    }
  }
}
