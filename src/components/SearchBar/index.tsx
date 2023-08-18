"use client";

import { useState } from "react";
import { ApiUrl } from "@/utils/constant";

interface SeachBarProps {
  onGetResult: (product: Product[]) => void;
}

export default function SearchBar({ onGetResult }: SeachBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(
          `${ApiUrl}/products/search?q=${searchValue}&limit=10&skip=0`
        );

        const result = await response.json();
        onGetResult(result.products);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="input-search w-full flex justify-end mb-4">
      <input
        type="text"
        value={searchValue}
        name="search"
        placeholder="Search Product"
        className="border w-72 p-2 px-4 outline-none"
        onKeyDown={handleSearch}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}
