import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: "midudev",
        name: "Miguel 1",
        isFollowing: true,
        id: 1,
    },
    {
        userName: "pheralb",
        name: "Miguel 2",
        isFollowing: false,
        id: 2,
    },
    {
        userName: "PacoHdezs",
        name: "Miguel 3",
        isFollowing: false,
        id: 3,
    },
    {
        userName: "TMChein",
        name: "Miguel 4",
        isFollowing: true,
        id: 4,
    },
];

export function App() {
    return (
        <section className="app">
            {users.map(({ id, userName, name, isFollowing }) => (
                <TwitterFollowCard key={id} userName={userName} initialIsFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            ))}
        </section>
    );
}
