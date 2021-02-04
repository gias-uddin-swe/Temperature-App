document.getElementById("search-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;
  cityName(inputValue);
});

function cityName(inputValue) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=a013840c110c2fbd33be36a81142a76d`
  )
    .then((res) => res.json())
    .then((data) => {
      const cityName = document.getElementById("input-value").value;
      document.getElementById("temp").innerText = Math.round(
        data.main.temp - 273.46
      );
      //   console.log(data.name);
      document.getElementById("current-place").innerText = cityName;
      const user = data.weather[0];
      const skyCondition = user.main;
      document.getElementById("sky").innerText = skyCondition;
      console.log(skyCondition);
    });
}
