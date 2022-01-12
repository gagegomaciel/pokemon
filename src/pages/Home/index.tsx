import React, { useEffect, useState } from "react";

import {
  TableContainer,
  PokemonImage,
  PokemonImageDiv,
  TableDiv,
  ButtonsDiv,
  BtnGoBack,
} from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import api from "../../services/api";

type TPokemonsParam = {
  name: string;
  url: string;
};

interface IPokemonReponse {
  results: TPokemonsParam[];
}

export const Home = () => {
  const [pokemons, setPokemons] = useState<TPokemonsParam[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async (action?: string) => {
    if (action === "back" && page === 0) {
      return;
    } else if (action === "back" && page > 0) {
      setPage(page - 1);
    }

    if (action === "next") {
      setPage(page + 1);
    }

    try {
      const { data } = await api.get<IPokemonReponse>(
        `pokemon/?offset=${page}&limit=10`
      );
      setPokemons(data.results);
    } catch (error) {
      console.log("getPokemons ", error);
    }
  };

  return (
    <>
      <Header home="Home" company="Pokemon" contact="Contato" />

      <TableContainer>
        <PokemonImageDiv>
          <PokemonImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon"
          />
        </PokemonImageDiv>
        <TableDiv>
          <table className="table table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.map((item, index) => (
                <tr key={item.url}>
                  <td>{item.name}</td>
                  <td>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableDiv>
        <ButtonsDiv>
          <BtnGoBack onClick={() => getPokemons("back")}>Voltar</BtnGoBack>
          <BtnGoBack onClick={() => getPokemons("next")}>Proximo</BtnGoBack>
        </ButtonsDiv>
      </TableContainer>
      <Footer />
    </>
  );
};
