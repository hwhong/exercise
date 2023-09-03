import { ALPHABETS, TrieNode } from "./types";

export class Trie {
  rootNode: TrieNode;

  constructor() {
    this.rootNode = this.makeDefaultTrieNode();
  }

  insert(word: string) {
    let currNode = this.rootNode;

    word.split("").forEach((c, i) => {
      let nextNode = currNode.children[c];

      const isLeaf = i === word.length - 1;

      if (!this.isNodeFull(nextNode)) {
        nextNode = this.makeDefaultTrieNode(isLeaf);
        currNode.children[c] = nextNode;
      } else if (isLeaf) {
        ++nextNode.count;
      }

      currNode = nextNode;
    });
  }

  private getNode(word: string): TrieNode | undefined {
    let currNode = this.rootNode;

    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      let nextNode = currNode.children[c];
      if (!this.isNodeFull(nextNode)) {
        return undefined;
      }

      if (nextNode && nextNode.isLeaf && i === word.length - 1) {
        return nextNode;
      }

      currNode = nextNode;
    }

    return undefined;
  }

  find(word: string): boolean {
    const node = this.getNode(word);
    return !!node;
  }

  count(word: string): number {
    const node = this.getNode(word);
    return node?.count ?? 0;
  }

  isNodeFull(node: TrieNode) {
    return "children" in node;
  }

  listPredictions(): string[] {
    return [];
  }

  makeDefaultTrieNode(isLeaf?: boolean): TrieNode {
    const children = ALPHABETS.reduce(
      (acc, curr) => ({ ...acc, [curr]: {} }),
      {}
    );
    return { children, isLeaf, count: isLeaf ? 1 : 0 };
  }
}
