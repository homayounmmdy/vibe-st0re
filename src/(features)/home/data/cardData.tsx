export const cardData: cardDataType[] = [
    {
        title: "flag game",
        href: "/games/flag",
        imageURL: "images/flag-game.png",
        type: "games"
    },
    {
        title: "star date",
        href: "/games/star-date",
        imageURL: "images/starDate-game.png",
        type: "games"
    },
    {
        title: "German noun",
        href: "/tools/german-noun",
        imageURL: "images/german-nouns.png",
        type: "apps"
    },
    {
        title: "Flappy Bird",
        href: "/games/flappy-bird",
        imageURL: "images/flappy-bird.png",
        type: "games"
    },
    {
        title: "Tic Tac Toe",
        href: "/games/tic-tac-toe",
        imageURL: "images/tic-tac-toe.png",
        type: "games"
    },
]

export type cardDataType = {
    title: string,
    href: string
    imageURL: string,
    type: "games" | "apps";
}