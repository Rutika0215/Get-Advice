let adviceCount = 0;

async function getAdvice(){
    adviceCount++;
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();
    document.getElementById('advice-container').textContent = advice.slip.advice;
    document.getElementById('advice-count').textContent =  `You Get ${adviceCount} pieaces of Advice today!`
}