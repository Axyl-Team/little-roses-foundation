"use client";

import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useDebounce } from "@/lib/hooks/useDebounce";

export const Search: React.FC = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ""}`);
  }, [debouncedValue, router]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Label className="sr-only" htmlFor="search">
          Search
        </Label>
        <Input
          id="search"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          placeholder="Search"
        />
        <button className="sr-only" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
