import {Spinner} from "flowbite-react";
import React from "react";

export function Loading() {
  return (
    <div className="text-center p-2">
      <Spinner aria-label="Center-aligned spinner" size="lg" />
    </div>
  )
}