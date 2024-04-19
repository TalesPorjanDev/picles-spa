import { useQuery } from "@tanstack/react-query"
import { GetPetRequest, GetPetsResponse } from "../interfaces/pet"
import { getPets } from "../services/pets/getPets"

interface IUsePetList {
    data?: GetPetsResponse 
    isLoading: boolean
}


export function usePetList (params: GetPetRequest): IUsePetList {
    const { data, isLoading } = useQuery({
        queryKey: ["get-pets", params],
        queryFn: () => getPets(params),
        staleTime: 1 * 60 * 1000,
      })

      return {data , isLoading}
}