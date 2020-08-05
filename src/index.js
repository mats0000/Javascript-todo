const input = document.querySelector("#input");

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      console.log(`${input.value}`);
    }
});