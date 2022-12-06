import { link } from "fs";

export default class MinHeap {
    public length: number; //used for insertion 
    private data:number[];

    

    constructor() {
        this.data=[];
        this.length=0;
    }

    insert(value: number): void {
        this.data[this.length]=value; //insert at end
        this.heapifyUp(this.length); // bubble it up if needed
        this.length++; //update length

}
    delete(): number {
        if(this.length === 0){
            return -1
        }
        
        const out = this.data[0];
        this.length--; // do it before because other operation must have correct length
        
        if(this.length ===0){
            this.data=[];
            return out;
        }

        this.data[0]= this.data[this.length];
        this.heapifyDown(0);
        return out;

}
private heapifyDown(idx:number):void{
    //parent is greater than one of the children

    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    
    //currently at length or left child is greater than length
    //we are out of bounds cant swap
    if(idx>=this.length || lIdx >= this.length){
        return;
    }
    const lV = this.data[lIdx];//child value
    const rV = this.data[rIdx] //child value
    const v = this.data[idx] //current value

    if(lV > rV && v > rV ){ // right child is smaller and our value is greater than child
        //swap our value with childs
        this.data[idx]=rV;
        this.data[rIdx]=v;
        this.heapifyDown(rIdx)
    }else if(rV > lV && v > lV ){ // right child is smaller and our value is greater than child
        //swap our value with childs
        this.data[idx]=lV;
        this.data[lIdx]=v;
        
        this.heapifyDown(lIdx)
    }
    
}




private heapifyUp(idx:number):void{ //find correct spot for index value
    if(idx===0){ //at top cant go further
        return;
    }
    const p = this.parent(idx); //parent
    const parentV = this.data[p] //parent value
    const v = this.data[idx]; // current value

    if(parentV > v){ //min heap go up
        this.data[idx]=parentV //swap current with parent value
        this.data[p]=v 
        this.heapifyUp(p) //continue heapifying
    }


}   



private parent(idx:number):number{
    return Math.floor((idx-1)/2);
}   

private leftChild(idx:number):number{
    return idx * 2 + 1;
}
private rightChild(idx:number):number{
    return idx * 2 + 2;
}



}