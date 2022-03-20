import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { getClientAge } from "../utils/calculateAge";
import { formatDate } from "../utils/formatDate";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { fullName, birthDate, cpf } = request.body;

    //TODO verificar se a data veio no formato correto

    const clientAge = getClientAge(birthDate);
    const clientBirthDate = formatDate(birthDate);

    const client = await prismaClient.client.create({
      data: {
        fullName,
        cpf,
        clientAge,
        clientBirthDate,
      },
    });

    return response.json(client);
  }
}
