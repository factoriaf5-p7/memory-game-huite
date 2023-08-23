import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://huilenpe:fni71E1yon1TDWg0@cluster0.kjy0y3t.mongodb.net/Memory-game',
    ),
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
