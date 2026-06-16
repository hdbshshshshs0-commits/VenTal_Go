import fetch from 'isomorphic-fetch';

const prompt = process.argv.slice(2).join(' ');
if (!prompt) {
  console.log('Пожалуйста, напишите, что нужно сделать с сайтом.');
  process.exit(1);
}

async function ask() {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://replit.com",
        "X-Title": "Replit Delivery Project"
      },
      body: JSON.stringify({
        // Переключаем на стабильную бесплатную модель от Meta
        model: "meta-llama/llama-3.3-70b-instruct:free", 
        messages: [{ role: "user", content: prompt }]
      })
    });
    
    const data = await response.json();
    
    if (data.error) {
      console.log('\n❌ ОШИБКА ОТ OPENROUTER:', data.error.message);
      process.exit(1);
    }
    
    console.log('\n🤖 ОТВЕТ ИИ-РАЗРАБОТЧИКА (Llama 3 Free):\n');
    console.log(data.choices[0].message.content);
  } catch (err) {
    console.log('\n❌ Ошибка сети или кода:', err.message);
  }
}
ask();
