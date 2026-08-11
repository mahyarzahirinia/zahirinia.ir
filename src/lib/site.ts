export function assetPath(path: string) {
  const basePath =
    typeof process !== "undefined"
      ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
      : "";

  if (!basePath || !path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
