import { dot } from 'node:test/reporters';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogServeice: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAll() {
    return this.blogServeice.getAllBlogs();
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: BlogDto) {
    return this.blogServeice.create(dto);
  }

  @HttpCode(200)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.blogServeice.getById(id);
  }

  @HttpCode(200)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: BlogDto) {
    return this.blogServeice.update(id, dto);
  }

  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.blogServeice.delete(id);
  }
}
