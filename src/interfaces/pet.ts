export interface IPet {
    id: any
    name: string
    type: string
    size: string
    gender: string
    bio: string
    photo: string
}

export type GetPetRequest = Partial <Pick<IPet, 'type' | 'size' | 'gender'>> & {
    page?: number
}

export type GetPetsResponse = {
    items: IPet[]
    totalPages: number
    currentPage: number
}