// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역 div와 input 찾기
const searchEl = document.querySelector('.search');
console.log(searchEl);

// const searchInputEl = document.querySelector('.search.input');
const searchInputEl = searchEl.querySelector('Input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus(); //요소에 포커스 강제 적용
});

// input 요소에 포커스되면 placeholder 추가
searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder','통합검색');
  searchEl.classList.add('focused');
});

// input 요소에 포커스가 헤제(blur)되면 placeholder 초기화
searchInputEl.addEventListener('blur', function () {
  
  // searchInputEl.addEventListener('placeholder', ' ');
  searchInputEl.removeAttribute('placeholder');
  searchEl.classList.remove('focused');
});

// 스크롤 시 전역 배치(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function() {
  console.log(this.window.scrollY); //(y축으로 얼마나 스크롤 했는지) 페이지 스크롤 하기!

  // Quiz:
  // 페이지 스크롤 위치가 500px을 넣으면 배치 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배치 요소 보이기!
  // style.color = 'red'; 글자색을 빨간색으로 바꾸기
  // style.background-color = 'red'; 배경색을 빨간색으로 바꾸기

  if(this.scrollY > 500){
    // badgeEl.style.opacity = 0;
    // badgeEl.style.transition = '0.4s';
    // badgeEl.style.visibility = 'hidden';
  
  
    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: CSS 속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  
  } else {
    // badgeEl.style.opacity = 1;
    // badgeEl.style.visibility = 'visible';

    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

  }

});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기

const fadeEls = document.querySelectorAll('.VISUAL .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  console.log(fadeEls);
  
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay:  0.7 * (index + 1) //0.7 1.4 2.1 2.8
  });
  

});

// 공지사항 수직 슬라이드 기능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(요소, 옵션: {});
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달(API 페이지 참고)
new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical', // 수직 슬라이드
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: true // 자동 재생 여부
});