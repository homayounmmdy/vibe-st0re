export const cardData: cardDataType[] = [
    {
        title: "Cyber Ninja",
        href: "/games/cyber-ninja",
        imageURL: "images/cyber-ninja.png",
        type: "games"
    },
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
    {
        title: "Tetris",
        href: "/games/tetris",
        imageURL: "images/tetris.png",
        type: "games"
    },
    {
        title: "Calculator",
        href: "/tools/calculator",
        imageURL: "images/calculator.png",
        type: "apps"
    },
    {
        title: "Character Counter",
        href: "/tools/character-counter",
        imageURL: "images/character-counter.png",
        type: "apps"
    },
    {
        title: "StackVisualizer",
        href: "/tools/stack-visualizer",
        imageURL: "images/stack-visualizer.png",
        type: "apps"
    },
     {
        title: "Counter",
        href: "/tools/counter",
        imageURL: "images/counter.png",
        type: "apps"
    },
]

export type cardDataType = {
    title: string,
    href: string
    imageURL: string,
    type: "games" | "apps";
}