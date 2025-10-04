class MyQueue {
    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }

    // Enqueue operation
    push(x) {
        this.stackIn.push(x);
    }

    // Dequeue operation
    pop() {
        this.moveInToOut();
        return this.stackOut.pop();
    }

    // Return front of the queue
    peek() {
        this.moveInToOut();
        return this.stackOut[this.stackOut.length - 1];
    }

    // Check if queue is empty
    empty() {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }

    // Helper function to move elements from stackIn to stackOut
    moveInToOut() {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
    }
}