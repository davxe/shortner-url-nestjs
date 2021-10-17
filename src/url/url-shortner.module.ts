import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlController } from './url.controller';
import { UrlShortnerService } from './url.service';
import { urlShortnerSchema } from './schemas/url-shortner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Url', schema: urlShortnerSchema }]),
  ],
  controllers: [UrlController],
  providers: [UrlShortnerService],
})
export class UrlShortnerModule {}
