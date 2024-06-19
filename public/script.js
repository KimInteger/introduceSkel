document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const hrim = document.getElementById('leader');
  const js = document.getElementById('waruru');
  const ehyun = document.getElementById('yoshi');
  const hoyeon = document.getElementById('pinokio');
  const yeonsung = document.getElementById('likeBlack');
  const xhr = new XMLHttpRequest();

  hrim.addEventListener('click', () => {
    xhr.open('GET', '/hrim');
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        root.innerHTML = xhr.responseText;
        let a = document.createElement('a');
        a.setAttribute('href', '/index.html');
        a.textContent = '돌아가기';
        root.appendChild(a);
      } else {
        throw new Error('에러 발생!');
      }
    });
  });
});