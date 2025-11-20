import {Flex, TabNav} from "@radix-ui/themes";
import {Search} from "lucide-react";

const Header = () => {
    return (
        <Flex justify="between" align="center" className="mb-6 p-4">
            <Flex gap="2" align="center">
                <span className="text-2xl text-gray-500">Vibe Sore</span>
                <TabNav.Root>
                    <TabNav.Link href="#" active>
                        Games
                    </TabNav.Link>
                    <TabNav.Link href="#">Apps</TabNav.Link>
                </TabNav.Root>
            </Flex>
            <div>
                <Search />
            </div>
        </Flex>
    );
};

export default Header;