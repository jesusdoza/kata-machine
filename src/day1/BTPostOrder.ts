///walk will recieve a binary node or undefined and the PATH
///base case is undefined is passed
function walk(curr: BinaryNode<number> | null, path:number[]):number[]{
    if(!curr){///nothing to walk return the path BASE CASE
        return path;
    }

    
    //recurse
    walk(curr.left ,path);
    
    // post
    walk(curr.right, path);
    

    //pre 
    path.push(curr.value); //visit node
    

    
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head,[]);// begin recursing with empty path and the head node

}