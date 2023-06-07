export function useGetLocalStorage() {
  return JSON.parse(localStorage.getItem('photos'));
}
