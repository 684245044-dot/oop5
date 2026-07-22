class Book {
    public readonly isbn: string;
    public title: string;
    private isBorrowed: boolean;

    constructor(isbn: string, title: string) {
        this.isbn = isbn;
        this.title = title;
        this.isBorrowed = false;
    }
    public borrowBook() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("ยืมหนังสือสำเร็จ");
        } else {
            console.log("หนังสือเล่มนี้ถูกยืมไปแล้ว");
        }
    }
    public returnBook() {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log("คืนหนังสือสำเร็จ");
        } else {
            console.log("หนังสือเล่มนี้ไม่ได้ถูกยืมไป");
        }
    }
}

const book1 = new Book("978-1234567890", "คู่มือ TypeScript");

book1.borrowBook();
book1.borrowBook();
book1.returnBook();