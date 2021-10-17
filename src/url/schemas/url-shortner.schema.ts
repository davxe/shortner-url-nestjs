import * as mongoose from 'mongoose';
import * as shorthash from 'shorthash';
export const urlShortnerSchema = new mongoose.Schema({
  title: String,
  originalUrl: String,
  shortUrl: String,
});
urlShortnerSchema.pre('save', function(next) {
  const sort = shorthash.unique(this.originalUrl);
  this.shortUrl = sort;
  next();
});
