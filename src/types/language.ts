export const Languages = {
  FRENCH: 'french',
  ENGLISH: 'english',
} as const;

export type Language = (typeof Languages)[keyof typeof Languages];
