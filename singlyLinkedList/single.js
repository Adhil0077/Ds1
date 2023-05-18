class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addLast(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  addPosBefore(pos, value) {
    let node = new Node(value);
    if (!this.head) {
      return null;
    } else if (pos == this.head.value) {
      node.next = this.head;
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        if (pos == temp.next.value) {
          node.next = temp.next;
          temp.next = node;
          return;
        }
        temp = temp.next;
      }
    }
  }

  addPosAfter(pos, value) {
    let node = new Node(value);
    if (!this.head) {
      return null;
    } else if (this.tail.value == pos) {
      this.tail.next = node;
      this.tail = node;
    } else {
      let temp = this.head;
      while (temp) {
        if (temp.next.value == pos) {
          node.next = temp.next.next;
          temp.next.next = node;
          return;
        }
        temp = temp.next;
      }
    }
  }

  firstDelete() {
    if (!this.head) {
      return null;
    } else {
      this.head = this.head.next;
    }
  }

  lastDelete() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp) {
      if (temp.next == this.tail) {
        temp.next = null
        this.tail = temp;
        return;
      }
      temp = temp.next;
    }
  }

  duplicateDelete(){
    let pre = null;
    let current = this.head;
    let seen = {}
    if(!this.head){
      return null
    }

    while(current){
      if(seen[current.value]){
        pre.next = current.next
      }else{
        seen[current.value] = true
        pre = current
      }
      current = current.next
    }
  }
   

  print() {
    if (!this.head) {
      return null;
    } else {
      let temp = this.head;
      while (temp) {
        console.log(temp.value);
        temp = temp.next;
      }
    }
  }

  revList(){
    if(!this.head){
      return null
    }else{
       let arr=[];
    let temp = this.head;
    while(temp)
    {
     arr.push(temp.value)
     temp = temp.next
    }
    while(arr.length>0){
      console.log(arr.pop());
    }
  }
    }

}

let list = new linkedList();
list.addFirst(5);
list.addLast(6);
list.addLast(7);
list.addLast(8);
// list.addPosBefore(5,5)
// list.addPosAfter(7,7.5)
// list.firstDelete()
// list.lastDelete();
list.revList()

// list.print();
