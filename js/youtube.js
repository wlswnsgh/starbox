// (참고) IFrame(Inline Frame): HTML 문서 내에 다른 문서를 삽입하는데 사용
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player)
//after the API code downloads.
let player;
function onYouTubeIframeAPIReady() { //라이브러리가 이 함수의 이름을 찾아 실행
  player = new YT.Player('player', { //id가 player인 요소
    // height: '360',
    // width: '640',
    videoId: 'M7lc1UVf-VE', //최초 재생할 유튜브 영상ID
    playerVars: { //더 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유뮤()
      playlist: 'mEZqJ65ra08' //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때 지정한 함수를 실행
      onReady: function (event) {
        // event.target: 재생되고 있는 영상 요소
        event.target.mute(); // 음소거
      }
    }
  });
}