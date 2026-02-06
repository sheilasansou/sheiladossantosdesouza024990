export interface PetFoto {
  id: number;
  nome: string;
  contentType: string;
  url: string;
}

export interface Pet {
  id: number; 
  nome: string;
  raca: string;
  idade: number;
  especie?: string; 
  foto?: PetFoto;   
}

export interface PetResponse {
  page: number;
  size: number;
  total: number;
  pageCount: number;
  content: Pet[]; // cards
}