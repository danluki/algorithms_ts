class MinStack {
  stack: number[];
  min: number;
  constructor() {
    this.stack = [];
    this.min = Number.MAX_VALUE;
  }

  push(val: number): void {
    this.stack.push(val);
    if (val <= this.min) {
      this.min = val;
    }
  }

  pop(): void {
    let res = this.stack.pop();

    if (res === this.min) {
      this.min = Number.MAX_VALUE;
    }
    for(let i = 0; i < this.stack.length; i++) { 
      if(this.stack[i] <= this.min){
        this.min = this.stack[i];
      }
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}

var obj = new MinStack();
obj.push(5);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
