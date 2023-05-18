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

  addPosAfter(pos,value){
    let node = new Node(value)
    if(!this.head){
      node.next = this.head
      this.head = node
    }else if(pos == this.tail.value){
      this.tail.next = node;
      this.tail = node;
    }else{
      let temp = this.head;
      while(temp){
        if(pos == temp.next.value){
         node.next = temp.next.next;
         temp.next.next = node
         return
        }
        temp = temp.next
      }
    }
  }

  deleteFirst(){
    if(!this.head){
      return null;
    }else{
      this.head= this.head.next
    }
  }

  deleteLast(){
    if(!this.head){
      return null;
    }else{
      let temp = this.head
      while(temp)
      {
        if(temp.next == this.tail){
          temp.next = null;
          this.tail = temp
          return
        }
        temp = temp.next
      }
    }
  }

deleteDuplicate(){
  let prev = null;
  let current = this.head;
  let seen = {}
  if(!this.head){
    return null
  }
  while(current){
    if(seen[current.value]){
      prev.next = current.next
    }else{
      seen[current.value]= true;
      prev = current
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

reverse(){
  if(!this.head){
    return null
  }else{
    let arr = [];
    let temp = this.head
    while(temp){
      arr.push(temp.value)
      temp = temp.next
    }
    while(arr.length>0){
      console.log(arr.pop());
    }
  }
}

}





const list = new linkedList();
list.addFirst(3);
list.addFirst(2);
list.addFirst(1);
list.addLast(1);
list.addLast(5);
list.addLast(6);
// list.addPosBefore(3, 250000);
// list.addPosAfter(3,50000)
// list.deleteFirst()
// list.deleteLast()
// list.deleteDuplicate()
list.reverse()

list.print();
