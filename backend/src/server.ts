import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

dotenv.config();

export class Server {
  constructor(private readonly port = process.env.PORT) {
    this.init();
    this.setup();
  }

  private app: Application = express();

  private init(): void {
    this.app.listen(this.port, () => {
      console.log(`server is started on port ${this.port}`);
    });
  }

  private setup(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }
}

new Server();
