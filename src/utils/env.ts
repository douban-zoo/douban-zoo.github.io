
export function isDev() {
  // return false;
  try {
    return import.meta.env.DEV ;
  } catch {
    return false;
  }
}
