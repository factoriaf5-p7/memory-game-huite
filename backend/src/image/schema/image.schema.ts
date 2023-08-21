import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Image extends Document {
  @Prop()
  title: string;

  @Prop()
  imagePath: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
