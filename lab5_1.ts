class UserAccount {
    public username: string;
    private password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    public changePassword(oldPass: string, newPass: string): void {
        if (oldPass === this.password) {
            this.password = newPass;
            console.log("เปลี่ยนรหัสผ่านสำเร็จ!");
        } else {
            console.log("รหัสผ่านเดิมไม่ถูกต้อง ไม่สามารถเปลี่ยนรหัสผ่านได้!");
        }
    }
}
const user1 = new UserAccount("Phanuwat", "12345");
user1.changePassword("wrongpass", "54321"); 
user1.changePassword("12345", "54321"); 
