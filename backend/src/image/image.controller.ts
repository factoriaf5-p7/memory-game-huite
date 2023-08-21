import { Controller, Post, Get, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { Image } from './schema/image.schema';

@Controller()
export class AppController {
  constructor(private readonly imageService: ImageService) {}

  /*   @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file, @Body() body): Promise<Image> {
    const { title } = body;
    const imagePath = file.filename;

    return this.imageService.createImage(title, imagePath);
  } */

  @Get('images')
  async getImages(): Promise<Image[]> {
    return this.imageService.getAllImages();
  }
}
