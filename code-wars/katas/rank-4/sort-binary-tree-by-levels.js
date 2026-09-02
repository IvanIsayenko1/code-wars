export class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * @see https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
 * @param {Node} rootNode
 * @returns {number[]}
 */
export function treeByLevels(rootNode) {
  let result = [];
  let remember = [];

  const setNodes = (node, index) => {
    if (!node) return;

    result[index] = `${result[index] || ""}${node.value},`;

    if (!node.left && node.right) {
      setNodes(node.right, index + 1);
    }

    if (node.left && !node.right) {
      setNodes(node.left, index + 1);
    }

    if (node.left && node.right) {
      remember.push({ index: index + 1, node: node.right });
      setNodes(node.left, index + 1);
    }

    if (!node.left && !node.right) {
      const nodeToCheck = remember[remember.length - 1]?.node;
      const index = remember[remember.length - 1]?.index;
      remember.pop();
      setNodes(nodeToCheck, index);
    }
  };

  setNodes(rootNode, 0);

  return result
    .join("")
    .split(",")
    .filter((n) => n)
    .map((n) => +n);
}

//                1
//            8        4
//              3        5
//                         7
