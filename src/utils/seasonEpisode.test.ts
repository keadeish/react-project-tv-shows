import { episodeCode } from "./seasonEpisode";

test("function episodeCode returns a string with season and episode number", () => {
  expect(episodeCode(2, 3)).toBe(`S02E03`);
  expect(episodeCode(4, 5)).toBe(`S04E05`);
  expect(episodeCode(4, 10)).toBe(`S04E10`);
  expect(episodeCode(14, 10)).toBe(`S14E10`);
});
