import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlShortnerModule } from './url/url-shortner.module';

@Module({
  imports: [
    UrlShortnerModule,
    MongooseModule.forRoot(
      'mongodb+srv://davxd:Prince123@cluster0.1kf85.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
