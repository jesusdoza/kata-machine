///walk will recieve a binary node or undefined and the PATH
///base case is undefined is passed
function walk(curr: BinaryNode<number> | null, path:number[]):number[]{
    if(!curr){///nothing to walk return the path BASE CASE
        return path;
    }

    //pre add this value to path
    path.push(curr.value);

    //recurse
    walk(curr.left ,path);
    walk(curr.right, path);

    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {

    return walk(head,[]);// begin recursing with empty path and the head node


}