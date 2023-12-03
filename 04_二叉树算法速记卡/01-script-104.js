// 二叉树的遍历思路-递归函数无返回值
var maxDepth = function (root) {
    let depth = 0;
    let res = 0;
    traverse(root);
    return res;

    function traverse(node) {
        if (node === null) {
            res = Math.max(res, depth);
            return;
        }

        depth++;
        traverse(node.left);
        traverse(node.right);
        depth--;
    }
};

// 二叉树的分解问题思路-有返回值
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }

    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);

    return Math.max(leftMax, rightMax) + 1;
};
