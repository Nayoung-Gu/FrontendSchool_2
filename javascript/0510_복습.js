// switch문 (정형화된 조건 판단문)

switch (new Date().getDay()) {
  case 0:
    document.write("일요일입니다");
    break;
  case 1:
    document.write("월요일입니다");
    break;
  case 2:
    document.write("화요일입니다");
    break;
}

// do ... while 문
let sum = 0;
let i = 0;

do {
  i++;
  sum += i;
} while (i < 10);

console.log(sum);
