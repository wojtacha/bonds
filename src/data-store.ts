import { writable } from "svelte/store";

export const initialLenght = 4;
export const count = writable(initialLenght);
export const inflationProvider = writable();

export interface YearInflation {
  year: number;
  inflation: number;
}

let simpleData: Array<YearInflation> = [
  {
    year: 2022,
    inflation: 3.5,
  },
  {
    year: 2023,
    inflation: 3.5,
  },
  {
    year: 2024,
    inflation: 4.5,
  },
  {
    year: 2025,
    inflation: 0.5,
  },
  {
    year: 2026,
    inflation: 6.5,
  },
  {
    year: 2027,
    inflation: 1.5,
  },
  {
    year: 2028,
    inflation: 2.5,
  },
  {
    year: 2029,
    inflation: 3.5,
  },
  {
    year: 2030,
    inflation: 3.5,
  },
  {
    year: 2031,
    inflation: -0.5,
  },
  {
    year: 2032,
    inflation: 0.5,
  },
  {
    year: 2033,
    inflation: -0.5,
  },
];

export function getNumberOfEntries(number: number): Array<YearInflation> {
  let partialData = simpleData.slice(0, number);
  if (partialData.length == 0) {
    partialData = [
      {
        year: 0,
        inflation: 0,
      },
    ];
  }
  return partialData;
}
