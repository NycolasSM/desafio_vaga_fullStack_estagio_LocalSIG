import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { getClientAge } from "../utils/calculateAge";
import { formatDate } from "../utils/formatDate";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { fullName, birthDate: clientBirthday, cpf } = request.body;

    //TODO verificar se a data veio no formato correto

    const age = getClientAge(clientBirthday).toString();
    const birthDate = formatDate(clientBirthday);

    const client = await prismaClient.client.create({
      data: {
        fullName,
        cpf,
        age,
        birthDate,
      },
    });

    return response.json(client);
  }
}
