export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "Microcervejaria",
      });
    }, 2000);
  });
}
