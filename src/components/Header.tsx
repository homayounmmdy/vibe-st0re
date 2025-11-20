import {Flex, TabNav} from "@radix-ui/themes";
import {Search} from "lucide-react";
import {Link} from "react-router-dom";

const Header = ({searchQuery}: { searchQuery: string }) => {
    // Normalize the search query - treat empty string as "games"
    const normalizedQuery = searchQuery || "games";

    return (
        <Flex justify="between" align="center" className="mb-6 p-4">
            <Flex gap="2" align="center">
                <Link to="/" title="vibe store" className="flex text-2xl gap-2 items-center text-gray-500">
                    <img className="w-8 h-8 rounded-xl" src="/images/logo.png" alt="logo"/>
                    <span>
                        Vibe Sore
                    </span>
                </Link>
                <TabNav.Root>
                    {NavItems.map((item: NavItemType, index) => (
                        <TabNav.Link
                            href={`?${item.query}`}
                            active={normalizedQuery === item.query || (!searchQuery && index === 0)}
                            key={item.name}
                        >
                            {item.name}
                        </TabNav.Link>
                    ))}
                </TabNav.Root>
            </Flex>
            <div>
                <Search/>
            </div>
        </Flex>
    );
};

export default Header;

interface NavItemType {
    name: string;
    query: string;
}

const NavItems: NavItemType[] = [
    {
        name: "Games",
        query: 'games'
    },
    {
        name: "Apps",
        query: 'apps'
    }
];