export enum STATUS_CLIENT {
  ACTIVE = "active",
  INCATIVE = "inactive",
}

export class Client {
  public id: string;
  public status: string;
  public name: string;
  public cpf: string;
  public email: string;
  public password: string;
  public telephone: string;
  public created_at: string;
  public updated_at?: string;
}
