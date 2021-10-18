import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UrlShortner } from './interface/url-shortner.interface';
import { UrlShortnerService } from './url.service';
import { CreateUrlShortnerDto } from './dto/url-shortner.dto';
import { Response } from 'express';
import { timeStamp } from 'console';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlShortnerService) {}

  @Get()
  listAll(): Promise<UrlShortner[]> {
    return this.urlService.list();
  }

  @Post()
  create(@Body() body: CreateUrlShortnerDto): Promise<UrlShortner> {
    return this.urlService.create(body);
  }

  @Get(':short')
  async show(
    @Param('short') short,
    @Res() res: Response,
  ): Promise<UrlShortner> {
    const data = this.urlService.show(short);
    res.redirect((await data).originalUrl);
    return data;
  }

  @Put(':id')
  update(
    @Body() body: CreateUrlShortnerDto,
    @Param('id') id,
  ): Promise<UrlShortner> {
    return this.urlService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<UrlShortner> {
    return this.urlService.delete(id);
  }
}
