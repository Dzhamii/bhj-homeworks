document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const itemsContainer = document.getElementById("items");
  
    function fetchCurrencyData() {
      loader.classList.add("loader_active");
      fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
        .then(response => response.json())
        .then(data => {
          displayCurrencyData(data.response.Valute);
          loader.classList.remove("loader_active");
        })
        .catch(error => {
          console.error("Error fetching currency data:", error);
          loader.classList.remove("loader_active");
        });
    }
  
    function displayCurrencyData(currencyData) {
      itemsContainer.innerHTML = ""; 
  
      for (const currencyCode in currencyData) {
        const currency = currencyData[currencyCode];
        const currencyItem = document.createElement("div");
        currencyItem.classList.add("item");
  
        const codeElement = document.createElement("div");
        codeElement.classList.add("item__code");
        codeElement.innerText = currency.CharCode;
  
        const valueElement = document.createElement("div");
        valueElement.classList.add("item__value");
        valueElement.innerText = currency.Value;
  
        const currencyElement = document.createElement("div");
        currencyElement.classList.add("item__currency");
        currencyElement.innerText = "руб.";
  
        currencyItem.appendChild(codeElement);
        currencyItem.appendChild(valueElement);
        currencyItem.appendChild(currencyElement);
  
        itemsContainer.appendChild(currencyItem);
      }
    }
  
    fetchCurrencyData(); 
  });
  