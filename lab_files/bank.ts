class BankAccount {
    public readonly accountNo : string ;
    private balance : number = 0 ;
    constructor(accno:string){
        this.accountNo = accno ;
    }
    public deposit(d: number){
        if(d>0){
            this.balance+=d;
            console.log("ฝากเงิน"+d+"บาท เข้าบัญชี"+this.accountNo);
        }else{
            console.log("การฝากเงินไม่สามารถติดลบได้");
        }
    }
    public withdraw(w:number){
        if(this.balance<w){
            console.log(`ยอดเงินคุณมี${this.balance}ไม่เพียงพอต่อการถอน`)
        }else{
        this.balance-=w;
        console.error("ถอนเงิน"+w+"บาท ออกจากบัญชี"+this.accountNo+"ยอดเงินคงเหลือ"+this.balance);
        }
    }

    public showBal(){
        return this.balance ;
    }
}

const account2= new BankAccount("213456789");
account2.deposit(1000);
account2.deposit(2000);
console.log(account2.accountNo);
console.log(account2.showBal());