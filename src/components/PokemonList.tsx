"use client";

import React, { useEffect, useState } from "react";
import { Pokemon } from "@/types/pokemonType";
import Link from "next/link";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch("/api/pokemons");
        const pokemons = await res.json();
        console.log(pokemons);
        setPokemon(pokemons);
      } catch (error) {
        console.log("Error =>", error);
      }
    };

    getPokemons();
  }, []);

  return (
    <div className="w-full h-96 px-6 py-1 grid grid-cols-6 gap-6 overflow-y-auto">
      {pokemon.length === 0 ? (
        <div>Loading...</div>
      ) : (
        pokemon.map((mon) => (
          <Link
            href={`/pokemon/${mon.id}`}
            className=" relative w-24 h-28 border-2 border-white rounded-lg bg-white/[.4] flex flex-col items-center -skew-y-12 rotate-12 hover:scale-110 hover:bg-sky-900/[.2] cursor-pointer"
          >
            <img
              src={mon.sprites.front_default}
              alt=""
              className="skew-y-12 -rotate-12 "
            />
            <div className="absolute bottom-1 right-2 text-xs text-gray-500 skew-y-12 -rotate-12  ">
              {mon.korean_name}
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default PokemonList;
