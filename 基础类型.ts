
//boolean
let isDone:boolean = false;

//number
let  n10:number=6;
let  n16:number=0xf00d;
let  n2:number=0b1010;
let  n8:number=0o744;
console.log(isDone)
console.log(n10,n16,n2,n8)

//string
let nick:string = 'bob';
nick = "qmj";
console.log(nick)
let nick1:string = `QAQ`;
let age:number=25;
//有换行
let sentence:string=`Hello,my name is ${nick1}.
I'll be ${age+1} years old next month.`

console.log(sentence)

//数组
let list:number[]=[1,2,3];
//数组泛型Array<元素类型>
let list2:Array<number>=[1,2,3]


//元组Tuple
let x:[string,number];
x=['hello',10];//不对应则会报错
console.log(x)
console.log(x[0].substr(1))//'number' does not have 'substr'
//越界则会使用联合类型替代
x[3] = 'world';//字符串可以赋值给(string | number)类型
// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
//x[6] = true;//错误会报错

//枚举
enum Color{Red=1,Green=2,Blue=4}
let c:Color=Color.Green;
console.log(c);  //2
//枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
enum Color2{Red=1,Green,Blue}
let colorName:string = Color2[1];
console.log(colorName)  //Red 因为我们知道值是1，对象可以获取到

//Any任意类型
let notSure: any = 4;
console.log(notSure);
notSure='Maybe a string instead';
console.log(notSure);
notSure=false;
console.log(notSure);
//比object多的功能
// notSure.ifItExists(); 
// notSure.toFixed(); //可把 Number 四舍五入为指定小数位数的数字。
let prettySure:Object = 4;
// prettySure.toFixed();//报错
let list3:any[]=[1,true,"free"];
list3[1]=100;
console.log(list3)

//Void   --只能赋予undefined与null
function warnUser():void{
    // alert('This is my warning message');
}
warnUser();
let  unusable:void =undefined;
console.log(unusable)

//Null与Undefined
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let u: undefined = undefined;
let n: null = null;

//Never 永不存在的值的类型
function error(message:string):never{
    throw new Error(message);
}
// error('meme')
function fail(){
    return error('Something failed');
}
// fail();
function infiniteLoop():never{
    while(true){
    }
}

//类型断言
let someValue:any = "this is a string";
//尖括号语法
let strLength:number=(<string>someValue).length;
//as语法 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let strLength2:number=(someValue as string).length;
console.log(strLength,strLength2);

