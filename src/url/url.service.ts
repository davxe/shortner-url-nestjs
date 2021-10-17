import { Injectable } from '@nestjs/common';
import { UrlShortner } from './interface/url-shortner.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UrlShortnerService {
  constructor(
    @InjectModel('Url') private readonly urlShort: Model<UrlShortner>,
  ) {}

  async list(): Promise<UrlShortner[]> {
    return await this.urlShort.find();
  }

  async create(url: UrlShortner): Promise<UrlShortner> {
    const shortUrl = new this.urlShort(url);
    return await shortUrl.save();
  }
}
