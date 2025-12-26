import { Container, Grid } from "@radix-ui/themes";
import CardImage from "../../components/CardImage";
import {cardData, type cardDataType} from "./data/cardData";
import Header from "../../components/Header.tsx";
import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import Footer from "../../components/Footer.tsx";

const HomePage = () => {
    const { search } = useLocation();
    const [query, setQuery] = useState("games"); // Default to "games"

    useEffect(() => {
        if (search) {
            // Extract query parameter from URL (remove the "?" and any trailing characters)
            const urlQuery = search.replace('?', '');
            setQuery(urlQuery);
        }
    }, [search]);

    const finalData: cardDataType[] = cardData.filter((item: cardDataType) =>
        item.type === query
    );

    return (
        <Container>
            <Header searchQuery={query}/>
            <Grid columns={{ initial: "2", md: "3", lg: "4", xl: "5" }} className="gap-2 md:gap-5 mt-2 p-4">
                {finalData.map((card: cardDataType) => (
                    <CardImage card={card} key={card.title} />
                ))}
            </Grid>
            <Footer />
        </Container>
    );
};

export default HomePage;