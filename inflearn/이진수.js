function solution(n) {
  let anwser = "";

  function DFS(n) {
    // console.log(n);
    if (n <= 0) return;
    else {
      DFS(parseInt(n / 2));
      anwser += String(n % 2);
    }
  }

  DFS(n);
  return anwser;
}

console.log(solution(11));
