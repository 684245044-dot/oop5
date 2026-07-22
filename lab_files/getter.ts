export{};
class User {
    private _age: number = 0;

    // Setter: verify before save
    set age(value: number) {
        if (value < 0) throw new Error("Age cannot be negative");
        this._age = value;
    }

    // Getter: extract value
    get age(): number {
        return this._age;
    }
}

const user1 = new User();
user1.age = 25; // easily call from Setter
console.log(user1.age);

