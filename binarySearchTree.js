/*
 * Binary Search Trees 
 * 
 * BSTs are awesome and fun. Use them whenever possible. Try not to break this tree 
 * by making it unbalanced!
 *
 * Learn more: https://en.wikipedia.org/wiki/Binary_search_tree
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */
function Node (val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}


function BST () {};


BST.prototype = {
  add: function (val) {  
    val = Array.isArray(val) ? val : [val];

    for (var i=0, len=val.length;i<len;i++) {
      if (!this.root) {
        this.root = new Node(val[i]);
      } else {
        (function worker(current) {
          if (val[i] <= current.val) {
            if (!current.left) {
              current.left = new Node(val[i]);
            } else {
              worker(current.left);
            }
          } else {
            if (!current.right) {
              current.right = new Node(val[i]);
            } else {
              worker(current.right);
            }
          }
        })(this.root);
      }
    }

    return this;
  },
  

  traverse: function (reverse) {
    var output = [];

    (function worker (current) {
      if (!current) {
        return;
      }
      
      if (reverse) {
        worker(current.right);
        output.push(current.val);
        worker(current.left);
      } else {
        worker(current.left);
        output.push(current.val);
        worker(current.right);
      }
    })(this.root);
    
    return output;
  },

  
  remove: function (val) {
    var parent = this.root;
    
    return (function worker(current) {
      if (!current) {
        return false;
      }
       
      if (current.val === val) {
        var children = current.left ? 1 : 0;
        children += current.right ? 1 : 0;

        switch (children) {
          case 0:
            if (parent.val < val) {
              parent.left = undefined;
            } else {
              parent.right = undefined;
            }
            break;
          
          case 1:
            if (parent.val < val) {
              if (current.left) {
                parent.left = current.left;
              } else {
                parent.left = current.right;
              }  
            } else {
              if (current.left) {
                parent.right = current.left;
              } else {
                parent.right = current.right;
              }
            }
            break;

          case 2:
            var replacement = current.left;
            var replacementParent = current;

            while(replacement.right) {
              replacementParent = replacement;
              replacement = replacement.right;
            }
            
            replacementParent.right = replacement.left;

            replacement.right = current.right;
            replacement.left = current.left;

            if (parent.val < val) {
              parent.left = replacement;  
            } else {
              parent.right = replacement;
            }

            break;
        }

        return true;
      } 
      
      //Save the new parent
      parent = current;

      if (current.val < val) {
        worker(current.left);
      } else {
        worker(current.right);
      }
    })(this.root);
  },

};

module.exports = BST;
