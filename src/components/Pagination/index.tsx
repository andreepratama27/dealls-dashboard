"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Pagination() {
  const [localSkip, setLocalSkip] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const handleNext = () => {
    setLocalSkip((prevState) => prevState + 10);

    router.push(`${pathname}?limit=10&skip=${localSkip}`);
  };

  const handlePrev = () => {
    setLocalSkip((prevState) => prevState - 10);

    router.push(`${pathname}?limit=10&skip=${localSkip}`);
  };

  return (
    <div className="pagination-component flex float-right pt-4">
      <button
        className="button border w-20 mr-4 bg-gray-100 py-2 text-sm bg-transparent"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="button w-20 bg-transparent border py-2 bg-gray-100 text-sm"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
