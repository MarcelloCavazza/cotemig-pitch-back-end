export interface IRecieveCreateLawyerData {
  name: string;
  cpf: string;
  seccional: string;
  email: string;
  optionalId?: string;
  oab_number: string;
  password: string;
  telephone: string;
}

export interface ILawyer {
  id: string;
  id_user: string;
  is_active: string;
  oab_number: string;
  seccional: string;
  created_at: string;
  updated_at?: string;
}

export interface IRecieveUpdateLawyerData {
  id: string;
  is_active?: string;
  seccional?: string;
  oab_number?: string;
}
