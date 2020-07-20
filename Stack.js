class Stack{    //Stack class

    constructor(){
        
        this.items = []
        this.count = 0
    }
    
    //Add elements to top of stack
    push(elements){
        this.items[this.count] = elements
        this.count++
        console.log(`${elements} added to ${this.count}`)
        return this.count - 1
    }

    //Return and remove top element in stack
    //Return undefined if stack is empty
    pop(){                                     //we are not passing any specific elements because we are just del the top element
        if(this.count == 0) return undefined
        var delItm = this.items[this.count - 1]
        this.count--
        console.log(`${delItm} has been removed`)
        return delItm
    }

    //Check top element in the stack
    peek(){
        console.log(`The top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Checking if stack is empty or not?
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is not empty')
        return this.count == 0

    }

    // Check the size of strack
    size(){
        if (this.count == 0){ //if stack is empty 
            console.log('Stack is Empty')
        }
        else{
            console.log(`${this.count} elements in stack`) //if stack has some element
        }
        return this.count
    }

    //print each elements in stack
    print(){
        var str = ''
        for(let i=0; i < this.count; i++){
           str += this.items[i] + ' '
        }
        console.log(str) //to print the each element of stack
        return str
        
    }

    //Clear stack
    clear(){
        this.items = []
        this.count = 0
        console.log('Stack has been cleared!')
        return this.items
    }

}

const stack = new Stack()
stack.isEmpty()
 stack.push(5)
 stack.push(6)
 stack.push(7)
 stack.print()
 stack.clear()
 stack.peek()
 stack.pop()
 stack.pop()
 stack.pop()
 console.log(stack.pop()) //to print the undefined statement
 stack.isEmpty()
 stack.size()