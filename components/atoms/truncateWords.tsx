export const truncateWords = (words: string, maxWords: number) =>
  words.split(" ").length <= maxWords
    ? words
    : `${words.split(" ").slice(0, maxWords).join(" ")}...`;
