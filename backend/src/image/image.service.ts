import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image, ImageDocument } from './schema/image.schema';

@Injectable()
export class ImageService {
  constructor(@InjectModel('Image') private imageModel: Model<ImageDocument>) {}

  async getAllImages(): Promise<Image[]> {
    return await this.imageModel.find().exec();
  }
}
