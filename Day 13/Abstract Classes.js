
// Declare your class here.
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    
// End class
class MyBook extends Book {
    
    constructor(
        title, author, price
    ) {
        super(
            title,  author 
        );
        this.price = price;
    }
    
    display() {
        const obj = {
            Title: this.title,
            Author: this.author,
            Price: this.price
        }
        for (const [key, value] of Object.entries(obj)) {
            console.log(`${key}: ${value}`);
        }
    }
}
