const calculateFatorial = number => {
  let fatorial = 1;

  for (let i = 2; i <= number; i += 1) {
    fatorial *= i;
  }
  return fatorial
}
