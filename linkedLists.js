/*
 * Linked Lists
 * 
 * An implmentation of linked list. Please don't ever use this, it's pointless. Linked lists
 * have pros and cons, but generally work well in place of dynamic arrays. Since all arrays in
 * JavaScript are dynamic (they are actually hash tables ... what?!? MIND BLOWN.), there's really no need
 * to use a linked list. Just carry on with your high level language and forget these things 
 * even exist.
 * 
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */

function LinkedList() {
  this.head = null;
  this.length = 0;
}


LinkedList.prototype.push = function (val) {
  this.length++;

  var node = {
    value: val,
    next: null
  };

  if (!this.head) {
    this.head = node;
  } else {
    var current = this.head;
    
    //Move to the end of the list
    while (current.next) {
      current = current.next;
    }
    
    current.next = node;
  }

  return this;
};


LinkedList.prototype.pop = function () {
  if (!this.head) {
    this.length = 0;
    return null;
  }
  
  var output;
  var current = this.head;
  var i = 0;
  
  if (this.length === 1) {
    output = this.head.value;
    this.head = null;
    return output;
  }

  //Move to the end of the list
  while (current) {
    if (i === this.length - 2) {
      output = current.next.value;

      //Chop off the last node
      current.next = null;
      this.length--;

      return output;
    }

    current = current.next;
    i++;
  }

  return;
}


LinkedList.prototype.unshift = function (val) {
  this.length++;

  var node = {
    value: val,
  };
  
  if (!this.head) {
    node.next = null;
  } else {
    node.next = { value: this.head.value, next: this.head.next };
  }
    
  this.head = node;
  
  return this;
};


LinkedList.prototype.shift = function () {
  this.length--;

  if (!this.head) {
    this.length = 0;
    return null;
  }

  //Save the output
  var output = this.head.value;

  //Set the new head
  if (this.head.next) {
    this.head = { value: this.head.next.value, next: this.head.next.next };
  } else {
    this.head = null;
  }

  return output; 
};



LinkedList.prototype.reverse = function () {
  var newList = new LinkedList();

  var current = this.head;
  
  while (current) {
    newList.unshift(current.value);
    current = current.next;
  }
  
  this.head = newList.head;

  return this;
};


LinkedList.prototype.get = function (index) {
  var i = 0;

  var current = this.head;

  while (current) {
    if (i === index) {
      return current.value;
    }
    current = current.next;
    i++;
  }

  return;
};


LinkedList.prototype.set = function (index, val) {
  var i = 0;

  var current = this.head;

  while (current) {
    if (i === index) {
      current.value = val;
      return this;
    }
    
    current = current.next;
    i++;
  }

  return this;
};


LinkedList.prototype.toArray = function () {
  var output = [];

  var current = this.head;

  while (current) {
    output.push(current.value);
    current = current.next;
  }
  
  return output;
};


LinkedList.prototype.concat = function (list) {
  
  var current = list.head;

  while (current) {
    this.push(current.value);
    this.length++;
    current = current.next;
  }
  
  return this;
};


LinkedList.prototype.forEach = function (callback) {
  var current = this.head;
  var i = 0;

  while (current) {
    callback(current.value, i++);
    current = current.next;
  }

  return this;
};


LinkedList.prototype.map = function (iteratee) {

  var current = this.head;
  var i = 0;

  while (current) {
    current.value = iteratee(current.value, i++);
    current = current.next;
  }

  return this;
};


module.exports = LinkedList;
