import { Request, Response } from "express";
import { CreateLawyerUseCase } from "./CreateLawyerUseCase";

export class CreateLawyerController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, password, telephone, seccional, oab_number } =
      request.body;

    const createLawyerUseCase = new CreateLawyerUseCase();
    const client = await createLawyerUseCase.create({
      name,
      cpf,
      email,
      seccional,
      password,
      telephone,
      oab_number,
    });
    return response.json(client);
  }
}
