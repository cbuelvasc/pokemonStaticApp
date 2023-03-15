import { useEffect, useState } from "react";
import { NextPage } from "next";

import { Layout } from "../../../components/layout";
import { FavoritePokemons, NoFavorites } from "../../../components/ui";
import { localFavorites } from "../../../utils";

const Favorites: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites - Pokemons">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
