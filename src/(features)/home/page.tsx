import { Container, Grid } from "@radix-ui/themes";
import CardImage from "../../components/CardImage";
import { cardData } from "./data/cardData";
import Header from "../../components/Header.tsx";

const HomePage = () => {
  return (
    <Container>
        <Header />
      <Grid columns={{ initial: "2", md: "3", lg: "4", xl: "5" }} gap="5" className="mt-2 p-4">
        {cardData.map((card) => (
          <CardImage card={card} key={card.title} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
