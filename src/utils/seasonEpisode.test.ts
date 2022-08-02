import { episodeCode } from "./seasonEpisode";

test("function episodeCode returns a string with season and episode number", () => {
  expect(episodeCode(2, 3)).toBe(`S0${2}E0${3}`);
  expect(episodeCode(4, 50)).toBe(`S0${4}E${50}`);
  expect(episodeCode(4, 10)).toBe(`S04E10`);
});
