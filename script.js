const API_URL = "https://여기에-Cloudflare-Worker-주소";

async function askAI() {
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer");

  answer.textContent = "생각하는 중...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: question
      })
    });

    const data = await res.json();
    answer.textContent = data.reply;

  } catch (e) {
    answer.textContent = "서버 연결 실패";
  }
}
