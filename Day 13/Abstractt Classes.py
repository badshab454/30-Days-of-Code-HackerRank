class MyBook(Book):
    def __init__(self, title, author, price):
        super(Book, self).__init__()
        self.price = price 

    def display(self):
        print("Title: {}\nAuthor: {}\nPrice: {}".format(title,author,price))