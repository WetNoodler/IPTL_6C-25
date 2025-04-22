window.addEventListener('load', () => getFact());

const getFact = () => {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(res => res.json())
      .then(data => {
        document.getElementById('fact').textContent = data.text;
      })
      .catch(err => {
        document.getElementById('fact').textContent = "Failed to fetch a fartcloud";
      });
  };