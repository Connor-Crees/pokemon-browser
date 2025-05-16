
export interface Type {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

export interface Pokemon{
    name: string,
    id: string,
    types: Type[],
    image: string
}