import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getGameInfo() {
    console.log('Request received for getGameInfo');
    const game = await this.gameService.getGameInfo();

    if (!game) {
      console.log('Game not found');
      return []; // O cualquier respuesta adecuada si el juego no se encuentra
    }

    const imageUrls = game.cards.map((card) => card.img_url);
    console.log('Image URLs:', imageUrls);
    return imageUrls;
  }
}
