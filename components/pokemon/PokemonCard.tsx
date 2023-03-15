import { FC, PropsWithChildren } from "react";
import { Card, Row, Text, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<PropsWithChildren<Props>> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemonByName/${pokemon.name}`);
  };

  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card isPressable isHoverable variant="bordered" onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{pokemon.name}</Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
