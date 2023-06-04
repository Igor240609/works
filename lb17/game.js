function playGuessNumberGame() {
    let attempts = 0;
    const targetNumber = Math.floor(Math.random() * 101);
    console.log(`Загадане число: ${targetNumber}`);
    while (true) {
      const guess = parseInt(prompt('Вгадайте число від 0 до 100:'));
      if (isNaN(guess)) {
        alert('Введіть дійсне число!');
        continue;
      }
      attempts++;
      const temperature = Math.abs(guess - targetNumber) >= 50 ? 'дуже холодно' :
                         Math.abs(guess - targetNumber) >= 30 ? 'холодно' :
                         Math.abs(guess - targetNumber) >= 10 ? 'тепло' :
                         'гаряче';
      console.log(`Спроба ${attempts}: число ${guess} – не вірно (${temperature})`);
      alert(`Спроба ${attempts}: число ${guess} – не вірно (${temperature})`);
      if (guess === targetNumber) {
        const message = `За ${attempts} спроб${attempts % 10 === 1 && attempts !== 11 ? 'у' :
                         [2, 3, 4].includes(attempts % 10) && ![12, 13, 14].includes(attempts % 100) ? 'и' :
                         'ів'} ви вгадали число ${targetNumber}!`;
        console.log(message);
        alert(message);
        break;
      }
    }
    if (confirm('Хочете зіграти ще раз?')) {
      playGuessNumberGame();
    }
  }
  playGuessNumberGame();