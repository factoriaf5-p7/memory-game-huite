import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'images' })
export class Game extends Document {
  @Prop()
  cards: [
    {
      card_id: string;
      name: string;
      img_url: string;
    },
  ];
}

export const GameSchema = SchemaFactory.createForClass(Game);
