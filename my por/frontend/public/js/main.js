// Terminal Simulation Logic
document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetchApi');
  const resultDisplay = document.getElementById('apiResult');

  // Typing effect helper
  const typeText = async (element, text, speed = 30) => {
    element.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text.charAt(i);
        await new Promise(r => setTimeout(r, speed));
    }
  };

  fetchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    fetchBtn.disabled = true;
    
    // Initial typing sequence
    await typeText(resultDisplay, "Initializing connection...\n", 20);
    await new Promise(r => setTimeout(r, 400));
    resultDisplay.innerHTML += "Establishing secure TLS handshake...\n";
    await new Promise(r => setTimeout(r, 600));
    resultDisplay.innerHTML += "Sending GET request to /api/hello...\n\n";
    await new Promise(r => setTimeout(r, 800));

    try {
      const response = await fetch('/api/hello');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Formatting the JSON beautifully for terminal
      const formattedData = JSON.stringify(data, null, 2);
      
      const successBlock = `<span class="success-text">[OK] Connection Established. Payload Received:</span>\n${formattedData}`;
      
      // Instead of typing the whole JSON slowly, we type a success then instant reveal JSON
      await typeText(resultDisplay, resultDisplay.innerHTML + "[OK] Connection Established. Decrypting payload...", 20);
      await new Promise(r => setTimeout(r, 500));
      
      // We append the JSON
      resultDisplay.innerHTML = resultDisplay.innerHTML.replace("[OK] Connection Established. Decrypting payload...", successBlock);

    } catch (error) {
       const errorMsg = `<span class="error-text">[FAILED] Connection Refused or Timeout. Error Details:</span>\n${error.message}\n\nEnsure the backend server is running in another terminal.`;
       
       await typeText(resultDisplay, resultDisplay.innerHTML + "[ERROR] Payload retrieval failed...", 20);
       await new Promise(r => setTimeout(r, 400));
       resultDisplay.innerHTML = resultDisplay.innerHTML.replace("[ERROR] Payload retrieval failed...", errorMsg);
    } finally {
      fetchBtn.disabled = false;
    }
  });

  // Glitch effect on hover for the hero title
  const glitch = document.querySelector('.glitch');
  if(glitch) {
    setInterval(() => {
      if(Math.random() > 0.95) {
        glitch.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
          glitch.style.transform = 'translate(0, 0)';
        }, 50);
      }
    }, 100);
  }
});
