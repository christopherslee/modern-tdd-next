/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const Card = ({ title, imageUrl, isFavorite }) => {
  const [fave, setFave] = useState(isFavorite);

  return (
    <div className="rounded border shadow py-2 px-4 m-2 w-full max-w-xs inline-block">
      <h1 className="text-gray-700 my-2 font-semibold">{title}</h1>
      <img src={imageUrl} className="rounded w-full h-40" alt="some picture" />
      <ul className="text-gray-400 mt-2">
        <li className="inline-block cursor-pointer">
          {!fave && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-testid="favoriteBtn"
              data-favorite={false}
              onClick={() => {
                setFave(!fave);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          )}
          {fave && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-testid="favoriteBtn"
              data-favorite={true}
              onClick={() => {
                setFave(!fave);
              }}
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Card;
