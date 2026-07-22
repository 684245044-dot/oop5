class Product {
    private _price: number = 0;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            console.log("ข้อผิดพลาด: ราคาต้องมากกว่าศูนย์");
        }
    }
}

const product = new Product();

product.price = 100;
console.log(`ราคาปัจจุบัน: ${product.price}`);

product.price = -50;
console.log(`ราคาปัจจุบัน: ${product.price}`);