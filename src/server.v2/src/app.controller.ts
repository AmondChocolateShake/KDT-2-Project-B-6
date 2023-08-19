import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller()
export class AppController {
  @Get()
  async getFiles(@Res() res: Response): Promise<void> {
    const htmlPath = path.join(__dirname, '..', '..', 'dist', 'index.html');
    try {
      const html = await fs.promises.readFile(htmlPath, 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
}
