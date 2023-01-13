const divs = document.querySelectorAll('div');

let posArr = [];
const base = -300;

for(let el of divs) {
  posArr.push(el.offsetTop);
  console.log(el.offsetTop);
}

window.addEventListener("scroll",()=>{
  let scroll = window.scrollY || window.pageYOffset;

  divs.forEach((el,index)=>{
    // on을 붙이고 떼었다 붙였다 하는 코드
    divs[index].classList.remove('on');
      if(scroll >= posArr[index] + base) {

        // 해당 순번의 div에 on을 활성화시키기
        divs[index].classList.add('on');
      }
  })

})
