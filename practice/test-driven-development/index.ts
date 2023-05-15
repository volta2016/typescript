export function wordWrap(rowLength: number, input: string): string[] {
  const result: string[] = [];
  let currentIndex = 0;

  while (currentIndex < input.length) {
    result.push(input.substring(currentIndex, currentIndex + rowLength));
    currentIndex += rowLength;
  }

  return result;
}