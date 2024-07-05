import Link from "next/link";
import React from "react";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const getAPokemon = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/pokemons/${id}`);
    const data = res.json();
    return data;
  };
  const pokemon = await getAPokemon(params.id);

  return (
    <div className="relative w-4/12 h-4/6 p-8 flex flex-col items-center border-2 border-solid border-white rounded-2xl bg-white/[.4] overflow-y-auto">
      <img src={pokemon.sprites.front_default} alt="" className="w-32" />
      <Link
        href="/"
        className="absolute top-4 left-6 text-xl text-white hover:text-gray-500 ease-in duration-200"
      >
        ←
      </Link>
      <span className="absolute top-6 right-8 text-xs text-gray-500">{`No. ${pokemon.id} `}</span>
      <div className="text-lg text-gray-700">{pokemon.korean_name}</div>
      <div className="text-xs text-gray-700 mb-4">{pokemon.name}</div>
      <div className="text-sm text-gray-700 mb-4">{`
      키 : ${pokemon.height}cm  /  몸무게 : ${pokemon.weight}g
      `}</div>
      <div className="text-sm text-gray-700 mb-4 flex flex-row flex-wrap gap-2 justify-center">
        {pokemon.moves.map((move: { move: { [key: string]: string } }) => {
          return (
            <span className="px-2 border border-gray-400 border-solid rounded-md bg-gray-400/[.2]">
              {move.move.korean_name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPage;
