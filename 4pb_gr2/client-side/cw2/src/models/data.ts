export type Game = {
    id: number;
    name: string;
    description: string;
    price: number;   
}
export const games: Game[] = [
    {
        id: 1,
        name: 'The Legend of Zelda: Breath of the Wild',
        description: 'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.',
        price: 59.99
    },
    {
        id: 2,
        name: 'Super Mario Odyssey',
        description: 'Join Mario on a massive, globe-trotting 3D adventure and use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser’s wedding plans!',
        price: 59.99
    },
    {
        id: 3,
        name: 'Mario Kart 8 Deluxe',
        description: 'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere',
        price: 59.99
    }
];