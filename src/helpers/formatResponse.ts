import CharacterRequestInterface from '../interfaces/character/character.response';
import CharacterResponseInterface from '../interfaces/character/character.response';

export const charactersResponse = (data: Array<CharacterRequestInterface>) => {
    let response: CharacterResponseInterface[] = [];

    Object.keys(data).forEach(key => {
        response.push(
            {
                id: data[key].id,
                name: data[key].name,
                status: data[key].status,
                species: data[key].species,
                origin: data[key].origin,
                image: data[key].image,
                episode: data[key].episode
            }
        );
    });
    
    return response;
}

export const characterResponse = (data: CharacterRequestInterface) => {
    let response: CharacterResponseInterface = 
        {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin,
            image: data.image,
            episode: data.episode
        }

    return response;
}
