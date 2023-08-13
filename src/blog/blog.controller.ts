import { BlogDto } from './dto/blog.dto';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  blogs: BlogDto[];

  constructor() {
    this.blogs = [
      {
        id: 1,
        title: 'NestJS',
        excerpt: 'NestJS Full Courses',
        description: 'NestJS Full course from 0 to hero',
      },
      {
        id: 2,
        title: 'NextJS',
        excerpt: 'NextJS Full Courses',
        description: 'NextJS Full course from 0 to hero',
      },
      {
        id: 3,
        title: 'NuxtJS',
        excerpt: 'NuxtJS Full Courses',
        description: 'NuxtJS Full course from 0 to hero',
      },
    ];
  }

  @HttpCode(200)
  @Get()
  async getAll() {
    return this.blogs;
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: BlogDto) {
    const data: BlogDto = {
      id: new Date().getTime(),
      ...dto,
    };

    return [...this.blogs, data];
  }
}
