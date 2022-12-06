import { link } from "fs";

export default class MinHeap {
    public length: number; //used for insertion 
    private data:number[];

    

    constructor() {
        this.data=[];
        this.length=0;
    }

    insert(value: number): void {


}
    delete(): number {

}
private heapifyDown(idx:number):void{
    //parent is greater than one of the children

    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    
    //currently at length or left child is greater than length
    //we are out of bounds cant swap
    if(idx>=this.length || lIdx >= length){
        return;
    }
    const lV = this.data[lIdx];
    const rV = this.data[rIdx]
    
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
    return idx * 2 - 1;
}
private rightChild(idx:number):number{
    return idx * 2 - 2;
}



}