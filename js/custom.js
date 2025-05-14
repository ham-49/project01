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
  //버튼 누르면 서브 메뉴 나오게
  subBtn.addEventListener('click',function(){
    subBtnA.removeAttribute('href');
    let btnActive = subBtn.classList.contains('active');
    subBtn.classList.toggle('active');
    console.log(btnActive)
    //flase 일때 active
    if(btnActive){
      document.querySelector('.section_menu').classList.remove('hidden');
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
      document.querySelector('.section_menu').classList.add('hidden');
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
/* section_menu */
/* 데스크탑 + 모바일 */
let scrollInfo = document.getElementById('scroll_info');
document.addEventListener('scroll',function(){
  //스크롤 위치
  let scrollPostion = document.documentElement.scrollTop;
  //console.log(scrollPostion);
  let animate = document.querySelector('.section_menu')
  if(scrollPostion > 400){
    animate.classList.add('active')
  }else{
    animate.classList.remove('active')
  }
})
/* 모바일 추가 */
if(matchMedia("screen and (max-width: 767px)").matches){
  console.log("mobile");
  let sectionBtn = document.getElementById('section_btn');
  let menuList = document.querySelector('.section_menu ul');
  sectionBtn.addEventListener('click', function(){
    menuList.classList.toggle('active');
  })
}
/* main-visual */
var swiper01 = new Swiper(".visual_swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".visual-next",
    prevEl: ".visual-prev",
  },
  slidesPerView:1,
  spaceBetween: 10,
  pagination: {
    el: ".pagination-visual",
    type: "fraction",
  },
  mousewheel: false,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
/* movement */
const swiper02 = new Swiper(".movement_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 200,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".movement-next",
    prevEl: ".movement-prev",
  },
  pagination: {
    el: ".pagination-movement",
  },
  mousewheel: false,
  keyboard: true,
});
/* promotion */
const swiper03 = new Swiper(".promotion_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 120,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".promotion-next",
    prevEl: ".promotion-prev",
  },
  mousewheel: false,
  keyboard: true,
});
/* information */
/* 선언 */
let titleLink = document.querySelectorAll('.title_menu li a');
let contents = document.querySelectorAll('#notice_content div');
/* 실행 */
//기본 값 보여주기
//기본 실행 시 1번째 화면 먼저 보여줌
  document.getElementById('tab01').style.display = 'block';
//title menu 클릭 시
for(let i = 0; i < titleLink.length; i++){
  //첫번째 값만 기본 active
  titleLink[i].addEventListener('click', function(a){
    a.preventDefault();// a 기본 이동 기능 삭제
    //아이디 값 추출
    let aTarget = a.target.getAttribute('href')  //아이디 값   담을 변수 (a태그 href로 가져옴)
    let aOrgTarget = aTarget.replace('#','');
    //전체 none처리
    for(let x = 0; x < contents.length; x++){
      contents[x].style.display = 'none';
    }
    //클릭된 것에 대한 active 리스트 추가
    document.getElementById(aOrgTarget).style.display = 'block';
    /* title */
    for(let z = 0; z < titleLink.length; z++){
      titleLink[z].classList.remove('active'); // 설정된 active 전체 삭제
      a.target.classList.add('active');
    }
  })
}
/* 스와이퍼 */
var swiper04 = new Swiper(".board-Swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".board-next",
    prevEl: ".board-prev",
  },
  slidesPerView: 'auto',
  spaceBetween: 50,
  pagination: {
    el: ".pagination-board",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
});
/* business */
let textBoxs = document.querySelectorAll('.text_box');
//console.log(textBoxs,businessLists);
// 실행
textBoxs.forEach(function(textBox){
  let list = textBox.querySelector('.business_list');
  if (list) {
    //리스트 none처리
    list.style.display = 'none';
    //마우스 올라가면 보이기
    textBox.addEventListener('mouseenter', function(){
      list.style.display = 'block';
    });
    //마우스 떠나면 사라지기
    textBox.addEventListener('mouseleave', function(){
      list.style.display = 'none';
    });
  }
});
/* relation */
var swiper05 = new Swiper(".relation_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  loopedSlides : 2,
  loop : true,
});