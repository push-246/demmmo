let out=document.querySelector('#output')
out.value='';

let numArr = []
let opArr=[]
let numStr = ''

// let count=0;
// let inputEnt={0:'',1:''}


let btnac=document.getElementById('ac')
let btnc=document.getElementById('c')
//let btnpm=document.getElementById('plusminus')
// let btnmod=document.getElementById('mod')

let btn7=document.getElementById('7')
let btn8=document.getElementById('8')
let btn9=document.getElementById('9')
let btnDiv=document.getElementById('div')

let btn4=document.getElementById('4')
let btn5=document.getElementById('5')
let btn6=document.getElementById('6')
let btnMul=document.getElementById('mul')

let btn1=document.getElementById('1')
let btn2=document.getElementById('2')
let btn3=document.getElementById('3')
let btnSub=document.getElementById('sub')

let btn0=document.getElementById('0')
let btnPt=document.getElementById('pt')
let btnEq=document.getElementById('eq')
let btnPlus=document.getElementById('plus')

//row1


//row2
btnac.onclick=()=>{
    out.value='';
    numArr = [];
    numStr = '';
    opArr=[];
}  
btnc.onclick=()=>{
    let oldInp = out.value;
    let lastEnt = oldInp.charAt(length-1);
    if(lastEnt >=0 && lastEnt <=9)
    {
        let x = Number(numStr)
        numStr=String(Math.floor(x/10))
    }
    else{

    }

    out.value = oldInp.slice(0,oldInp.length-1);
    // console.log(out.value);
    
    
    // console.log("numstr "+numStr);
    // console.log("x "+x); 
    // console.log("Math.floor(x) :"+Math.floor(x/10));
    // console.log("x/Math.pow(10,len) :"+x/10)

    //need to add part 

}  
//row3
btn7.onclick=()=>{
   display(7);
}  

btn8.onclick=()=>{
    display(8)
}

btn9.onclick=()=>{
    display(9)
}
btnDiv.onclick=()=>{
    display('/')
}

//row4
btn5.onclick=()=>{
   display(5)
}
btn4.onclick=()=>{
    display(4)
}
btn6.onclick=()=>{
    display(6)
}
btnMul.onclick=()=>{
    display('x')
}

//row5
btn1.onclick=()=>{
    display(1);
}
btn2.onclick=()=>{
    display(2);
}
btn3.onclick=()=>{
    display(3)
}
btnSub.onclick=()=>{
    display('-')
}

//row 6
btn0.onclick=()=>{
    display(0)
}
btnPt.onclick=()=>{

    display('.');
    
}
btnEq.onclick=()=>{
    numArr.push(Number(numStr))
    console.log(numArr)
    out.value=calculate();
}
btnPlus.onclick=()=>{
    display('+');
}

function display(str){
    if(out.value.length!=12){
        if(str=='+'||str=='-'||str=='x'||str=='/')
        {
            numArr.push(Number(numStr))
            numStr='';
            opArr.push(str);
        }
        else{
            numStr+=str;
        }
        out.value+=str ;
    }
    console.log(numStr)
    console.log(numArr)
    console.log(opArr)
}

function calculate(){
    let res=numArr[0];
    console.log(res)
    opArr.forEach((val,index)=>{
        console.log("numArr value ="+numArr[index+1])
        // console.log("numArr index ="+index+1)
        if(val=='+'){
            res=res+numArr[index+1];
        }else if(val=='-'){
            res=res-numArr[index+1];
        }else if(val=='x'){
            res=res*numArr[index+1];
        }
        else{
            res=res/numArr[index+1];   
        }
    })
    return res
}