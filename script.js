
        function convertirFahrenheit() {
            // Conversor de temperatura a Fahrenheit
            var celsius = parseFloat(document.getElementById("celsius").value);
            if (!isNaN(celsius)) {
                var fahrenheit = (celsius * 9/5) + 32;
                document.getElementById("total").innerText = "Temperatura en Fahrenheit: " + fahrenheit.toFixed(2);
            } else {
                document.getElementById("total").innerText = "Por favor, ingrese una temperatura válida.";
            }
        }

        function convertirKelvin() {
            // Conversor de temperatura a Kelvin
            var celsius = parseFloat(document.getElementById("celsius").value);
            if (!isNaN(celsius)) {
                var kelvin = celsius + 273.15;
                document.getElementById("total").innerText = "Temperatura en Kelvin: " + kelvin.toFixed(2);
            } else {
                document.getElementById("total").innerText = "Por favor, ingrese una temperatura válida.";
            }
        }

        function convertirMillas() {
            // Conversor de distancia a Millas
            var dKm = parseFloat(document.getElementById("dKm").value);
            if (!isNaN(dKm)) {
                var dMillas = dKm * 0.621371;
                document.getElementById("dTotal").innerText = "Distancia en Millas: " + dMillas.toFixed(2);
            } else {
                document.getElementById("dTotal").innerText = "Por favor, ingrese una distancia válida.";
            }
        }

        function convertirMetros() {
            // Conversor de distancia a Metros
            var dKm = parseFloat(document.getElementById("dKm").value);
            if (!isNaN(dKm)) {
                var dMetros = dKm * 1000;
                document.getElementById("dTotal").innerText = "Distancia en Metros: " + dMetros.toFixed(2);
            } else {
                document.getElementById("dTotal").innerText = "Por favor, ingrese una distancia válida.";
            }
        }

        function calcularIMC() {
            // Calculadora del IMC
            var pesoKg = parseFloat(document.getElementById("pesoKg").value);
            var alturaM = parseFloat(document.getElementById("alturaM").value);
            if (!isNaN(pesoKg) && !isNaN(alturaM) && pesoKg > 0 && alturaM > 0) {
                var imc = pesoKg / (alturaM * alturaM);
                document.getElementById("IMC").innerText = "Su IMC es: " + imc.toFixed(2);
            } else {
                document.getElementById("IMC").innerText = "Por favor, ingrese un peso y altura válidos.";
            }
        }
