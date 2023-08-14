import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
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
  async getAllBlogs() {
    return this.blogs;
  }

  async create(dto: BlogDto) {
    const data: BlogDto = {
      id: new Date().getTime(),
      ...dto,
    };
    return [...this.blogs, data];
  }

  async getById(id: string) {
    return this.blogs.find((item) => item.id === Number(id));
  }

  async update(id: string, dto: BlogDto) {
    let currentBlog = this.blogs.find((item) => item.id === Number(id));
    currentBlog = dto;
    return currentBlog;
  }

  async delete(id: string) {
    return this.blogs.filter((item) => item.id !== Number(id));
  }
}
