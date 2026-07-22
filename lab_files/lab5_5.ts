class FitnessProfile {
    private _weight: number = 0;
    private _height: number = 0;

    set weight(value: number) {
        if (value > 0) {
            this._weight = value;
        } else {
            console.log("ข้อผิดพลาด: น้ำหนักต้องมากกว่า 0");
        }
    }

    set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("ข้อผิดพลาด: ส่วนสูงต้องมากกว่า 0");
        }
    }

    get bmi(): number {
        if (this._height === 0) {
            return 0;
        }
        return this._weight / (this._height ** 2);
    }
}

const profile = new FitnessProfile();

profile.weight = 70;
profile.height = 1.75;

console.log(`ค่า BMI ปัจจุบัน: ${profile.bmi.toFixed(2)}`);

profile.weight = -5;