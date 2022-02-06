export default interface ICharacterResponse {
    id: number,
    name: string,
    status: string,
    species: string,
    origin: {
        name: string,
        url: string
    },
    image: string,
    episode: string
}
