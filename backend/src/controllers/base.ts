import { Request, Response } from "express";

export class baseController {
  async handle(request: Request, response: Response) {
    return response.json();
  }
}
