import { Flex, TabNav } from "@radix-ui/themes";
import { Search } from "lucide-react";
import Logo from "./Logo";

const Header = ({ searchQuery }: { searchQuery: string }) => {
  // Normalize the search query - treat empty string as "games"
  const normalizedQuery = searchQuery || "games";

  return (
    <Flex justify="between" align="center" className="mb-6 p-4">
      <Flex gap="2" align="center">
        <Logo />
        <TabNav.Root>
          {NavItems.map((item: NavItemType, index) => (
            <TabNav.Link
              href={`?${item.query}`}
              active={
                normalizedQuery === item.query || (!searchQuery && index === 0)
              }
              key={item.name}
            >
              {item.name}
            </TabNav.Link>
          ))}
        </TabNav.Root>
      </Flex>
      <div>
        <Search />
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
    query: "games",
  },
  {
    name: "Apps",
    query: "apps",
  },
];
