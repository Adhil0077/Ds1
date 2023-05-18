class Node {
  constructor(element) {
    this.prev = null;
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
      this.head.prev = node;
      this.head = node;
    }
  }

  addLast(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }else{
       this.tail.next = node;
       node.prev = this.tail;
       this.tail = node  
    }
  }

  addPosBefore(pos,value){
    let node = new Node(value)
    if(!this.head){
      return null;
    }else if(pos == this.head.value){
      node.next = this.head
      this.head.prev = node;
      this.head = node
    }else if (this.tail.value == pos){
      let temp = this.head
      while(temp.next.next){
        temp=temp.next
      }
      node.prev = temp
      node.next = temp.next
      temp.next
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
}



let list = new linkedList()
list.addFirst(55)
list.addFirst(560)
list.addFirst(57)
list.addFirst(58)
list.addLast(1)
list.addLast(2)
list.addLast(13)

list.print()