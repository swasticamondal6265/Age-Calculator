let btn=document.querySelector("button");
let res=document.querySelector(".result");
let d3,m3,y3;
let bd=document.querySelector("#date");
bd.max = new Date().toISOString().split("T")[0];
btn.addEventListener(("click"),()=>{
    calculate();
    res.innerHTML=`your age is ${y3} years ${m3} months ${d3} days`;
})
function calculate() {
    let birthDate = new Date(bd.value);
    let today = new Date();
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();
    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();
    
    d3 = d2 - d1;
    m3 = m2 - m1;
    y3 = y2 - y1;

    if (d3 < 0) {
        m3--;
        let daysInPrevMonth = new Date(y2, m2, 0).getDate();
        d3 += daysInPrevMonth;
    } if (m3 < 0) {
        y3--;
        m3 += 12;
    }
}