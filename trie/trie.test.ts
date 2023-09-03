import { DICTIONARY } from "./sample-data";
import { Trie } from "./trie";

describe("trie", () => {
  let trie: Trie;

  beforeAll(() => {
    trie = new Trie();
    DICTIONARY.forEach((word) => {
      trie.insert(word);
    });
  });

  it("returns true when the word is in the dictionary", () => {
    const isPresent = trie.find("lemma");
    expect(isPresent).toBe(true);
  });

  it("returns the correct count of word in the dictionary", () => {
    const count = trie.count("lemma");
    expect(count).toBe(3);
  });

  it("returns false when the word is not in the dictionary", () => {
    const isPresent = trie.find("hotspurs");
    expect(isPresent).toBe(false);
  });
});
