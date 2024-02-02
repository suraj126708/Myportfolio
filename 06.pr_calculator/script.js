        function clearInput() {
            document.getElementById('inputBox').value = '';
        }

        function deleteLast() {
            var currentInput = document.getElementById('inputBox').value;
            document.getElementById('inputBox').value = currentInput.slice(0, -1);
        }

        function append(value) {
            document.getElementById('inputBox').value += value;
        }

        function calculate() {
            try {
                var result = eval(document.getElementById('inputBox').value);
                document.getElementById('inputBox').value = result;
            } catch (error) {
                document.getElementById('inputBox').value = 'Error';
            }
        }
 