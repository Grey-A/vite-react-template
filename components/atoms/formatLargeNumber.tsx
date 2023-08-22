export const formatLargeNumber = (num: number | undefined): string => {
  if (typeof num !== "number" || isNaN(num)) {
    return "0";
  }

  const suffixes = [
    "",
    "k",
    "M",
    "B",
    "T",
    "Q",
    "Qi",
    "Sx",
    "Sp",
    "Oc",
    "Nn",
    "Dc",
  ];

  let i = 0;

  for (const suffix of suffixes) {
    if (Math.abs(num) < 1000 || i === suffixes.length - 1) {
      return num.toFixed(1) + suffix;
    }
    num /= 1000;
    i++;
  }

  return num.toFixed(1) + "Dc";
};

export const unformatLargeNumber = (
  formattedNumber: string
): number | undefined => {
  const suffixMultipliers: { [key: string]: number } = {
    "": 1,
    k: 1000,
    M: 1000000,
    B: 1000000000,
    T: 1000000000000,
    Q: 1e15,
    Qi: 1e18,
    Sx: 1e21,
    Sp: 1e24,
    Oc: 1e27,
    Nn: 1e30,
    Dc: 1e33,
  };

  const match = formattedNumber.match(/([\d.]+)([kMBTQQiSxSpOcNnDc]*)/);
  if (!match) {
    return undefined;
  }

  const numericPart = parseFloat(match[1]);
  const suffix = match[2];

  if (suffix in suffixMultipliers) {
    return numericPart * suffixMultipliers[suffix];
  } else {
    return undefined;
  }
};
