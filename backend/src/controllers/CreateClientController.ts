import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { AppError } from "../errors/AppError";
import { getClientAge } from "../utils/calculateAge";
import { formatDate } from "../utils/formatDate";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { fullName, birthDate: clientBirthday, cpf } = request.body;

    const cpfAlreadyExists = await prismaClient.client.findUnique({
      where: {
        cpf,
      },
    });

    if (cpfAlreadyExists) {
      throw new AppError("este CPF ja foi cadastrado");
    }

    const age = getClientAge(clientBirthday);
    const birthDate = formatDate(clientBirthday);

    const client = await prismaClient.client.create({
      data: {
        fullName,
        cpf,
        age,
        birthDate,
      },
    });

    return response.status(201).json(client);
  }
}
