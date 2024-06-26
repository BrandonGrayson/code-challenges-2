class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;

                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true;
            }

            if (!found) return undefined;
            return current;
        }
    }

    contains(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right
            } else {
                return true;
            }
            return false
        }
    }

    BFS() {
        var node = this.root;
        var data = [];
        var queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value)
            if (node.left) data.push(node.left);
            if (node.right) data.push(node.right);
        }
        traverse(this.root);

        return data;
    }
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            data.push(node.value)
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value)
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}
