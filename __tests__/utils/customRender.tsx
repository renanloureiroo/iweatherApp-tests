import { CityProvider } from "@contexts/CityContext";
import { RenderOptions, render } from "@testing-library/react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";
export { customRender as render, Providers };
