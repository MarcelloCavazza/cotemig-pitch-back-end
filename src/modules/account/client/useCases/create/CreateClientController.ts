import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, password, telephone, optionalId, state } =
      request.body;

    const createClientUseCase = new CreateClientUseCase();
    const client = await createClientUseCase.create({
      optionalId,
      name,
      cpf,
      email,
      state,
      password,
      telephone,
    });
    return response.json(client);
  }
}
