const hrim = document.getElementById('leader');

const js = document.getElementById('waruru');

const ehyun = document.getElementById('yoshi');

const hoyeon = document.getElementById('pinokio');

const yeonsung = document.getElementById('likeBlack');

const xhr = new XMLHttpRequest();

hrim.addEventListener('click',()=>{
  xhr.open('GET','/hrim');
  xhr.send();

  xhr.addEventListener('load',()=>{
    if(xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      throw new Error('에러 발생!');
    }
  });
});