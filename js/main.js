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


// input 요소에 포커스가 헤제(blur)되면 placeholder 초기화

