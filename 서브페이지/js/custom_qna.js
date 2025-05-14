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
  console.log(subBg, headerInner, subNav);
  //버튼 누르면 서브 메뉴 나오게
  subBtn.addEventListener('click',function(){
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

/* QnA */
/* 변수 선언 */
let tabBtns = document.querySelectorAll('.QnA_menu li a');
let tabContents = document.querySelectorAll('.tab');
let contentItems = document.querySelectorAll('.tab .content_item');
//console.log(firstitems);
/* for(item of firstitems){
  item.classList.add('active');
} */
tabBtns.forEach(function(btn, idx){
  btn.addEventListener('click', function(a){
  a.preventDefault();
  displayContent(idx);

  })
})
/* 클릭되면 모든 active 삭제, 해당 되는 부분만 보여주기 */
function displayContent(idx){
  for(let btns of tabBtns){
    btns.classList.remove('active');
  }
    for(let Contents of tabContents){
    Contents.classList.remove('active');
  }
  tabBtns[idx].classList.add('active');
  tabContents[idx].classList.add('active');
  for(items of contentItems){
    items.classList.remove('active');
  }
}
displayContent(0); //초기값에는 처음 내용만 보여주기

/* content_item */
    contentItems.forEach(function(item,index){
      item.addEventListener('click',function(itemlist){
        item.classList.toggle('active');
      })
    })

