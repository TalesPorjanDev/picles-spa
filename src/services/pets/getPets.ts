import { GetPetRequest, GetPetResponse } from "../../interfaces/pet";
import httpClient from "../api/httpClient";

export async function getPets(params?: GetPetRequest): Promise<GetPetResponse> {
  try {
    const response = await httpClient.get("/pet", { params });

    return response.data;
  } catch (error) {
    console.log("Erro ao buscar pets", error);
    throw error;
  }
}
