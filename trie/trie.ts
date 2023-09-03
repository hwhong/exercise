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
        nextNode.isLeaf = true;
      }

      currNode = nextNode;
    });
  }

  find(word: string): boolean {
    const node = this.getNode(word);
    return !!node;
  }

  count(word: string): number {
    const node = this.getNode(word);
    return node?.count ?? 0;
  }

  predict(prefix: string): string[] {
    const node = this.getNode(prefix, true);
    return node ? this.findLeafs(node, prefix) : [];
  }

  /**
   * helpers
   */
  private getNode(
    word: string,
    anyNode: boolean = false
  ): TrieNode | undefined {
    let currNode = this.rootNode;

    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      let nextNode = currNode.children[c];
      // node doesn't exist
      if (!this.isNodeFull(nextNode)) {
        return undefined;
      }
      const isEnd = i === word.length - 1;
      if ((anyNode || nextNode.isLeaf) && isEnd) {
        return nextNode;
      }

      currNode = nextNode;
    }

    return undefined;
  }

  private findLeafs(node: TrieNode, concatStr: string): string[] {
    const acc: string[] = node.isLeaf ? [concatStr] : [];
    const keys = Object.keys(node.children);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const next = node.children[key];

      // dfs and find the next char in line
      if (next && this.isNodeFull(next)) {
        const result = this.findLeafs(next, `${concatStr}${key}`);
        acc.push(...result);
      }
    }
    return acc;
  }

  private isNodeFull(node: TrieNode) {
    return "children" in node;
  }

  private makeDefaultTrieNode(isLeaf?: boolean): TrieNode {
    const children = ALPHABETS.reduce(
      (acc, curr) => ({ ...acc, [curr]: {} }),
      {}
    );
    return { children, isLeaf, count: isLeaf ? 1 : 0 };
  }
}
