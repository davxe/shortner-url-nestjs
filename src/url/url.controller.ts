import { Body, Controller, Get, Post } from '@nestjs/common';
import { UrlShortner } from './interface/url-shortner.interface';
import { UrlShortnerService } from './url.service';
import { CreateUrlShortnerDto } from './dto/url-shortner.dto';

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
}
