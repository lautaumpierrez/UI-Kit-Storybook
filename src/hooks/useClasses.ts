function useClasses(...classes: Array<string | undefined>): string {
  return classes.join(" ");
}

export { useClasses }