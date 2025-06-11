class TrieNode {
    constructor() {
       
        this.children = new Map();
      
        this.isEndOfWord = false;
    }
}
class Trie {
    constructor() {
        
        this.root = new TrieNode();
    }  
    insert(word) {
        let currentNode = this.root; 
        for (const char of word) {
            
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
          
            currentNode = currentNode.children.get(char);
        }
        
        currentNode.isEndOfWord = true;
    }

    
    search(word) {
        let currentNode = this.root;
        for (const char of word) {
          
            if (!currentNode.children.has(char)) {
                return false;
            }
           
            currentNode = currentNode.children.get(char);
        }
        
        return currentNode.isEndOfWord;
    }

    
    startsWith(prefix) {
        let currentNode = this.root;
        for (const char of prefix) {
            
            if (!currentNode.children.has(char)) {
                return false;
            }
           
            currentNode = currentNode.children.get(char);
        }
       
        return true;
    }
}



console.log("--- Trie Example ---");

const trie = new Trie();
console.log("Trie initialized.");
trie.insert("apple");
console.log("Inserted 'apple'."); 

console.log(Search 'apple': ${trie.search("apple")}); 

console.log(Search 'app': ${trie.search("app")}); 

console.log("Starts with app:" $ {trie.startsWith("app")}); 

trie.insert("app");
console.log("Inserted 'app'."); 
console.log(Search 'app': ${trie.search("app")}); 