import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { Image, ImageSchema } from './image.schema';
import { ImageModule } from './image/image.module';
import { ImageService } from './image/image.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://huilenpe:fni71E1yon1TDWg0@cluster0.kjy0y3t.mongodb.net/Memory-game',
    ),
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend/public/img'), // Apunta a la carpeta "public"
    }),
    ImageModule,
  ],
  controllers: [AppController],
  providers: [{ ImageService }],
})
export class AppModule {}
