import { Client, STATUS_CLIENT } from "../../domain/Client";
import { IRecieveCreateClientData } from "../../dto/ClientDTO";
import { hashSync } from "bcrypt";
import { v4 as uuid } from "uuid";
import { ClientRepository } from "../../repositories/ClientRepository";
import { formatDate } from "../../../../../shared/utils/formatDate";

export class CreateClientUseCase {
  private client = new Client();
  private repository = new ClientRepository();

  public async create(data: IRecieveCreateClientData): Promise<Client> {
    const { optionalId, cpf, email, name, password, telephone, seccional } =
      data;

    Object.assign(this.client, {
      id: optionalId ? optionalId : uuid(),
      cpf,
      seccional,
      email,
      is_active: STATUS_CLIENT.ACTIVE,
      name,
      password: hashSync(password, 12),
      telephone,
      created_at: formatDate(new Date().toISOString()),
    });

    try {
      await this.repository.create(this.client);
    } catch (error) {
      console.log(error);
    }

    return this.client;
  }
}
