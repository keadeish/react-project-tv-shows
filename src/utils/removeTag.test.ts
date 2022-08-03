import { removeParagraphTag } from "./removeTag";

test("function removeParagraphTag removes tags from the inputString : String", () => {
  expect(removeParagraphTag("<p>aloha</p>")).toBe(`aloha`);
  expect(removeParagraphTag("<b>lol</>")).toBe(`lol`);
  expect(removeParagraphTag("<b><p>hi<p/><b>")).toBe(`hi`);
});
