/* AOS */
AOS.init();
/* header */
if(matchMedia("screen and (max-width: 767px)").matches){
  console.log("mobile");
  let subBg = document.querySelector('.sub_wrap_bg');
  let headerInner = document.querySelector('.header_inner');
  let subNav = document.querySelectorAll('.sub_wrap .sub_nav');
  let subBtn = document.querySelector('.site_map');
  let headLists = document.querySelector('.header_nav_ul');
  let headItems = document.querySelectorAll('.header_nav ul li');
  let subLists = document.querySelectorAll('.sub_wrap .sub_nav');
  let subBtnA = document.querySelector('.site_map a')
  console.log(subBg, headerInner, subNav);
  console.log(subBg, headerInner, subNav);
  //버튼 누르면 서브 메뉴 나오게
  subBtn.addEventListener('click',function(){
    subBtnA.removeAttribute('href');
    let btnActive = subBtn.classList.contains('active');
    subBtn.classList.toggle('active');
    console.log(btnActive)
    //flase 일때 active
    if(btnActive){
      headerInner.classList.remove('active');
      subBg.classList.remove('active');
      headItems[0].classList.remove('active');
      subNav.forEach(menu => {
        menu.classList.remove('active');
      });
      headItems.forEach(navli => {
        navli.classList.remove('active');
      });
      }else{
      headerInner.classList.toggle('active');
      subBg.classList.toggle('active');
      subNav[0].classList.add('active');
      headItems[0].classList.add('active'); //초기값만 보이게 
    }
  })
  headItems.forEach(function(headItem){
    headItem.addEventListener('click', function(){
      headItems.forEach(function(it){
        it.classList.remove('active')
      })
      headItem.classList.add('active');
      //모든 서브메뉴 숨기기
      subLists.forEach(function(subList){
        subList.classList.remove('active');
        })
      
      let target = document.getElementById(headItem.dataset.target);
    if(target){
      target.classList.toggle('active');
    }
    })
  })
}else if(matchMedia("screen and (min-width: 768px)").matches){
  console.log("desktop");
  /* language, service */
  let btns = document.querySelectorAll('.header_btn');
  let headLists = document.querySelectorAll('.header_list');
  console.log(btns, headLists);
  //버튼 클릭 시 active 추가
  btns.forEach(function (btn, index) {
    //버튼 클릭시 event 추가
    btn.addEventListener('click', function () {
      let target = headLists[index];//이 조건에서 사용할  지역변수 설정_list 동일 순번 가져오기
      let isOpen = target.classList.contains('active')
      console.log('중간확인중', target, isOpen)
      headLists.forEach(function (lists){
        btn.classList.remove('active')
        lists.classList.remove('active')
      })
      if (!isOpen) {
        btn.classList.add('active')
        target.classList.add('active')
      };
    });
  });
  /* 메인 nav / sub_nav */
  let menuItems =document.querySelectorAll(".nav_item");
  let subMenus =document.querySelectorAll(".sub_nav");
  //console.log(menuItems,subMenus);
  /* menuItems에 마우스가 들어오면 서브 메뉴 표시 */
  menuItems.forEach(function(item){
    item.addEventListener('mouseenter',function(){
      subMenus.forEach(function(sub){
      //모든 서브메뉴 숨기기
      sub.style.display = 'none';
      })
      //현재 타켓 서브메뉴만 표시
      let Mtarget = document.getElementById(item.dataset.target);
      if(Mtarget){
        Mtarget.style.display='block';
      }
      menuItems.forEach(function(list){
        //전체 지우기
        list.classList.remove('active');
        })
        //class 생성
        item.classList.add('active');
    });
  });
  //마우스 떠나면 서브메뉴 숨기기
  subMenus.forEach(function(sub){
    sub.addEventListener('mouseenter',function(){
      sub.style.display='block';
    });
    sub.addEventListener('mouseleave',function(){
      sub.style.display='none';
    });
  });
  // header / sub_nav에 마우스 없는 경우 active 삭제
  document.querySelector('.sub_wrap').addEventListener  ('mouseleave', function(){
    menuItems.forEach(function(item){
      item.classList.remove('active');
    });
  });
};
/* 크기 변할때 자동 새로고침 */
window.onresize = function(){
  document.location.reload();
};

/* content */
/* 변수 선언 */
//페이지 별 보여줄 행 개수
let rowsPerPage = 10;
//테이블 모든 행 가져오기
let rows = document.querySelectorAll('#tables tbody tr');
//전체 행 개수
let rowsCount = rows.length;
//총 필요한 페이지 수 계산
let pageCount = Math.ceil(rowsCount / rowsPerPage);
//페이지 번호를 추가할 ul 선택
let numbers = document.querySelector('#numbers');
//console.log(rows,rowsCount,pageCount,numbers);

/* 페이지 */
//1페이지부터 마지막페이지까지 번호 만들어 넣기
for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
}
//모든 페이지 번호 가져오기
let numberBtn = numbers.querySelectorAll('#numbers a');

//a클릭 시 이동하는 이벤트
//a클릭 시 기존 이동 기능 삭제 / 행 보여주기
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', function(e){
    e.preventDefault();//링크 클릭시 화면이동 막기
    displayRow(idx)//해당페이지에 맞는 행 보여주기
  })
})
/* 함수 */
//해당 페이지에 맞는 행 보여주는 함수
function displayRow(idx){
  let start = idx * rowsPerPage;//시작행 번호
  let end = start + rowsPerPage; //끝행 번호
  let rowsArray = [...rows]; //전체 값 배열로 가져오기
  console.log(rowsArray);
  //모든 행 전부 안보이게
  for(let ra of rowsArray){
    ra.style.display = "none"
  }
  //해당되는 행 10개씩 보이게 하기 
  let newRows = rowsArray.slice(start,end);
  for(let nr of newRows){
    nr.style.display = ""
  }
  //모든 번호에서 active class 삭제
  for(let nb of numberBtn){
    nb.classList.remove('active')
  }
  //현재 선택한 페이지 번호만 class 추가
  numberBtn[idx].classList.add('active')
}
displayRow(0);