type CPF = string;
type Partial = number[];

const CPF_REGEX = /^(\d{3})(.|-)?(\d{3})(.|-)?(\d{3})(.|-)?(\d{2})$/;

function digit(partial: Partial): number {
  const remainder =
    partial
      .map((value, index) => (partial.length + 1 - index) * value)
      .reduce((accumulator, value) => accumulator + value, 0) % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

// externals

export function strip(formattedCPF: any): string {
  return `${formattedCPF}`.replace(/\D/g, '');
}

export function format(something: any): CPF {
  const result = strip(something).substr(0, 11).replace(CPF_REGEX, '$1.$3.$5-$7');

  return result.length === 14 ? result : '';
}

export function validate(something: any): boolean {
  const numberSomething = strip(something);

  if (numberSomething.length !== 11) {
    return false;
  }

  const numbers = numberSomething
    .split('')
    .map((char): number => parseInt(char, 10));

  if (numbers.every(value => value === numbers[0])) {
    return false;
  }

  if (numbers[9] !== digit(numbers.slice(0, 9))) {
    return false;
  }

  if (numbers[10] !== digit(numbers.slice(0, 10))) {
    return false;
  }

  return true;
}

export function generate(formatted?: boolean): CPF {
  const prefix = Array(9)
    .fill(0)
    .map(() => Math.floor(Math.random() * 9));

  const firstVerifier = digit(prefix);

  const finalString = `${prefix.join('')}${firstVerifier}${digit(
    prefix.concat(firstVerifier),
  )}`;

  return formatted ? format(finalString) : finalString;
}

export default {
  strip,
  format,
  validate,
  generate,
};
