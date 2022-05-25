// 프라미스 체이닝이 아닌 경우
let p = new p(function (resolve, reject) {
  setTimeout(() => resolve(10), 1000);
});

p.then((result) => {
  console.log(result);
  return result ** 2;
});

p.then((result) => {
  console.log(result);
  return result ** 2;
});

p.then((result) => {
  console.log(result);
  return result ** 2;
});

async function getUserEmail(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  const email = user.email;
  console.log(email);
}
getUserEmail(3);

fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
)
  .then(function (response) {
    console.log(1);
    return response.json();
  })
  .then((json) => {
    let 지역 = json.find((s) => s["시·도별(1)"] == "전국");
    console.log(지역);
    console.log(지역["1차 접종 누계"]);
    console.log(지역["2차 접종 퍼센트"]);
  });

// 이미지 삽입
async function printImg() {
  const response = await fetch(`https://picsum.photos/200`);
  const blobImg = await response.blob();

  //blob을 담을 img 태그를 만든다.
  const img = document.createElement("img");
  //html body에 위에서 만든 img 태그를 삽입한다.
  document.body.append(img);
  //img 태그의 주소를 설정한다.
  img.src = URL.createObjectURL(blobImg);
}
printImg();
