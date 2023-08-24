import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) { }

  @Get()
  async getGameInfo() {
    console.log('Request received for getGameInfo');
    const game = await this.gameService.getGameInfo(); // Get game info from database

    if (!game) {
      console.log('Game not found');
      return [];
    }
    // Return the entire game object with card details
    const mappedCards = game.cards.map((card) => {
      console.log('card_id:', card.card_id); // Log card_id for debugging
      return {
        card_id: card.card_id,
        name: card.name,
        img_url: card.img_url,
      };
    });

    return mappedCards;
  }
}
