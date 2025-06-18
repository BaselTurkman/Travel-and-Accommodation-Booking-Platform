import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import PageLoadErrorFallback from "@/pages/PageLoadErrorFallback";

export function safeLazy<T extends ComponentType<P>, P extends object = object>(
  factory: () => Promise<{ default: T }>
): LazyExoticComponent<T> {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error) {
      console.error("Failed to dynamically import module:", error);
      const Fallback: ComponentType<P> = PageLoadErrorFallback;
      return { default: Fallback as T };
    }
  });
}
