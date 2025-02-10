// src/app/providers.tsx
"use client"; // Karena provider digunakan di client side

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/store";

export function ReduxProvider({ children }: PropsWithChildren) {
  const store = makeStore();
  return <Provider store={store}>{children}</Provider>;
}
