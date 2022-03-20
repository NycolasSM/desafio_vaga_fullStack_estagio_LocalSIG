import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const client = await prismaClient.client.findFirst({
      where: {
        id,
      },
    });

    return response.json(client);
  }
}
