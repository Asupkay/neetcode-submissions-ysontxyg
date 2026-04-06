class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxHeap()
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            const distance = Math.sqrt(Math.pow(point[0],2) + Math.pow(point[1], 2));
            heap.insertKey(distance, i);
            if (heap.heapSize > k) {
                heap.removeMax();
            }
        }
        const vals =[];
        for (let i = 0; i < heap.heapSize; i++) {
            vals.push(points[heap.arr[i][1]]);
        }
        return vals;
    }
}

class MaxHeap {
    constructor(maxSize) {
        // the array in the heap.
        this.arr = new Array(maxSize).fill(null);

        // Maximum possible size of
        // the Max Heap.
        this.maxSize = maxSize;

        // Number of elements in the
        // Max heap currently.
        this.heapSize = 0;
    }

    // Heapifies a sub-tree taking the
    // given index as the root.
    MaxHeapify(i) {
        const l = this.lChild(i);
        const r = this.rChild(i);
        let largest = i;
        if (l < this.heapSize && this.arr[l][0] > this.arr[i][0]) {
            largest = l;
        }
        if (r < this.heapSize && this.arr[r][0] > this.arr[largest][0]) {
            largest = r;
        }
        if (largest !== i) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[largest];
            this.arr[largest] = temp;
            this.MaxHeapify(largest);
        }
    }

    // Returns the index of the parent
    // of the element at ith index.
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Returns the index of the left child.
    lChild(i) {
        return 2 * i + 1;
    }

    // Returns the index of the
    // right child.
    rChild(i) {
        return 2 * i + 2;
    }

    // Removes the root which in this
    // case contains the maximum element.
    removeMax() {
        // Checking whether the heap array
        // is empty or not.
        if (this.heapSize <= 0) {
            return null;
        }
        if (this.heapSize === 1) {
            this.heapSize -= 1;
            return this.arr[0];
        }

        // Storing the maximum element
        // to remove it.
        const root = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize -= 1;

        // To restore the property
        // of the Max heap.
        this.MaxHeapify(0);

        return root;
    }

    // Increases value of key at
    // index 'i' to new_val.
    increaseKey(i, newVal) {
        this.arr[i][0] = newVal;
        while (i !== 0 && this.arr[this.parent(i)][0] < this.arr[i][0]) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    // Returns the maximum key
    // (key at root) from max heap.
    getMax() {
        return this.arr[0];
    }

    curSize() {
        return this.heapSize;
    }

    // Deletes a key at given index i.
    deleteKey(i) {
        // It increases the value of the key
        // to infinity and then removes
        // the maximum value.
        this.increaseKey(i, Infinity);
        this.removeMax();
    }

    // Inserts a new key 'x' in the Max Heap.
    insertKey(x, index) {
        // To check whether the key
        // can be inserted or not.
        if (this.heapSize === this.maxSize) {
            console.log("\nOverflow: Could not insertKey\n");
            return;
        }

        let i = this.heapSize;
        this.arr[i] = [x,index];

        // The new key is initially
        // inserted at the end.
        this.heapSize += 1;



        // The max heap property is checked
        // and if violation occurs,
        // it is restored.
        while (i !== 0 && this.arr[this.parent(i)][0] < this.arr[i][0]) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }
}