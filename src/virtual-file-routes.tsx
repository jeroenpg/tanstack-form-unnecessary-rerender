import { rootRoute, route } from "@tanstack/virtual-file-routes";

export const virtualRoutesConfig = rootRoute('__root.tsx', [
  route('', './index.tsx'),
]);