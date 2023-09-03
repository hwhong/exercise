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

  describe("find", () => {
    it("returns true when the word is in the dictionary - lemma", () => {
      const isPresent = trie.find("lemma");
      expect(isPresent).toBe(true);
    });

    it("returns true when the word is in the dictionary - squeak", () => {
      const isPresent = trie.find("squeak");
      expect(isPresent).toBe(true);
    });

    it("returns false when the word is not in the dictionary - hotspurs", () => {
      const isPresent = trie.find("hotspurs");
      expect(isPresent).toBe(false);
    });

    it("returns false when the word is not in the dictionary - hey", () => {
      const isPresent = trie.find("hey");
      expect(isPresent).toBe(false);
    });
  });

  describe("count", () => {
    it("returns the correct count of word in the dictionary - lemma", () => {
      const count = trie.count("lemma");
      expect(count).toBe(3);
    });

    it("returns the correct count of word in the dictionary - bluecollar", () => {
      const count = trie.count("bluecollar");
      expect(count).toBe(1);
    });

    it("returns the correct count of word in the dictionary - lyricism", () => {
      const count = trie.count("lyricism");
      expect(count).toBe(2);
    });
  });

  describe("predict", () => {
    it("returns list of strings given a prefix - lem", () => {
      const result = trie.predict("lem");
      expect(result).toEqual(["lemma"]);
    });

    it("returns list of strings given a prefix - sq", () => {
      const result = trie.predict("sq");
      expect(result).toEqual(["squeak", "squeaked", "squeaking", "squeaks"]);
    });

    it("returns list of strings given a prefix - dii", () => {
      const result = trie.predict("dii");
      expect(result).toEqual(["diigo"]);
    });

    it("returns list of strings given a prefix - di", () => {
      const result = trie.predict("di");
      expect(result.sort()).toEqual(
        [
          "digged",
          "diigo",
          "dilator",
          "dimitroff",
          "disasterous",
          "disgracefully",
          "director",
          "dispersant",
          "disservice",
        ].sort()
      );
    });
  });
});
