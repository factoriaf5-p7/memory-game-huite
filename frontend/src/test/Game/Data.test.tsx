import { render } from '@vitest/react';
import Data from '../../data/data.json'; 

describe('Data from data.json', () => {
  it('should have the correct number of entries', () => {
    expect(Array.isArray(Data)).toBe(true);
    expect(Data.length).toBe(12);
  });

  it('should have the expected structure for each entry', () => {
    for (const entry of Data) {
      expect(entry).toHaveProperty('img');
      expect(entry).toHaveProperty('isFlipped');
      expect(entry).toHaveProperty('isMatched');
    }
  });

  it('should have valid image URLs', () => {
    for (const entry of Data) {
      expect(entry.img).toMatch(/^\/img\//);
    }
  });
});

