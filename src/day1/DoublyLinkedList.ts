// export default class DoublyLinkedList<T> {
//     public length: number;

    

//     constructor() {
//     }

//     prepend(item: T): void {

// }
//     insertAt(item: T, idx: number): void {

// }
//     append(item: T): void {

// }
//     remove(item: T): T | undefined {

// }
//     get(idx: number): T | undefined {

// }
//     removeAt(idx: number): T | undefined {

// }
// }

export default class DoublyLinkedList<T>{
    ///declare variables and types
    public length:number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor(){
        ///initialize variables
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

///add to begining at list
    prepend(item:T):void{
        const node = {value:item} as ListNode<T> ///create node to append
        
        this.length++;

        ///no head defined or falsy then new node is head
        if(!this.head){
            this.head = this.tail = node;
            return
        }

        node.next = this.head /// point new node to head
        this.head.prev = node; /// point the current head prev to new node
        this.head = node; /// update the head to the new node 
    }


    ///insert at this index
    insertAt(item:T, index: number):void{
        if(index > this.length){///index wanted to insert is out of range
            throw new Error('out of range insert at')
        }

        
        if(index === this.length){/// insert at end since that is the index
            this.append(item);
            return
        }else if(index === 0){///prepending to list
            this.prepend(item);
            return
        }
        
        this.length++;///update node list length
        const curr = this.getAt(index) as ListNode<T>;//! replacing bottom code 
        const newNode = {value:item} as ListNode<T>

        // let curr = this.head;
        // for(let i =0; curr && i<index; i++ ){/// curr actually exists and we have not passed index yet
        //     curr = curr.next;     ///keep walking list until index is met
        // }
        // ///after loop curr will be the node at index we wanted
        // curr = curr as ListNode<T>;


        newNode.next = curr; ///attach new one to current node
        newNode.prev=curr.prev; /// attach new one to the node to upstream node
        curr.prev= newNode;/// update link of current node upstream link to new node

        if(newNode.prev){///update upstream node if it exists
            newNode.prev.next = newNode ///point upstream to new node
        }
        


    }

    ///add to end of list
    append(item:T):void{
        this.length++;

        const newNode = {value:item} as ListNode<T>;

        if(!this.tail){
            this.head = this.tail = newNode;
            return
        }

        newNode.prev = this.tail; /// new node prev set to tail
        this.tail.next = newNode; /// original tails next set to new node
        this.tail = newNode; ///tail updated to new node
    }


    ///remove node by value it has
    remove(item:T):any | undefined {

        let curr = this.head

        for(let i = 0; curr && i<this.length; i++){
            if(curr.value === item){
                break;
            }
            curr=curr.next; ///curr will be wanted item or undefined since last next = undefined
        }

        if(!curr){ ///never found the item curr will be undefined 
            return undefined
        }

       return this.removeNode(curr)
       
    }
    

    get(index:number): T | undefined{
        return this.getAt(index)?.value;
    }

  ///return length of list
    getlength():number{
        return this.length;
    }

   

    ///remove node given destroys and merges the links to node given
    private removeNode(node:ListNode<T>): T | undefined{

        this.length--;/// something was found to get this far update length


        if(this.length=== 0 ){///if list had only 1 item then list is empty now
            const outValue = node.value; ///found item
            this.head = this.tail = undefined;
            return outValue;
        }

        if(node.prev){ ///if node node we are gonna remove has prev node
            node.prev.next = node.next
        }

        if(node.next){ /// if node node as next node
            node.next.prev = node.prev
        }
            
        

        if(node === this.head){ ///if the node happens to be the head 
            this.head = node.next;/// update head
        }

        if(node === this.tail){
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;/// break the connection at current
        return node.value;
    }


    ///remove node at given index
    removeAt(index:number): T | undefined {
        const node = this.getAt(index);

        if(!node){
            return undefined;
        }
        return this.removeNode(node);
    }


     ///return node at index
     private getAt(index:number):ListNode<T>|undefined{
        let curr = this.head;
        for(let i =0; curr && i < index ; ++i){///current node is truthy and less than total length
          
            curr= curr.next;
        }
        return curr
    }

}

