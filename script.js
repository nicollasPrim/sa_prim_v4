// Função para gerar números aleatórios dentro de um intervalo
function gerRand(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para exibir o código dos exercícios ao clicar no botão "Mostrar Código"
function mostra(id) {
    const codeSection = document.getElementById(id);
    codeSection.style.display = codeSection.style.display === 'block' ? 'none' : 'block';
}

// Exercício 1 - Ordenação com Bubble Sort
function bubbleSortEx() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(gerRand(100, 1)); 
    }

    let count = bubbleSort(array);
    displayResult("questProva1", array, count, "Trocas realizadas");
}

function bubbleSort(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                count++;
            }
        }
    }
    return count;
}

// Exercício 2 - Ordenação com Selection Sort
function selectionSortEx() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(gerRand(100, 1)); // Gerando 10 números aleatórios
    }

    let count = selectionSort(array);
    displayResult("questProva2", array, count, "Comparações realizadas");
}

function selectionSort(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            count++;
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
        }
    }
    return count;
}

// Exercício 3 - Ordenação com Insertion Sort
function insertionSortEx() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(gerRand(100, 1)); // Gerando 10 números aleatórios
    }

    let count = insertionSort(array);
    displayResult("questProva3", array, count, "Movimentos realizados");
}

function insertionSort(array) {
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            count++;
        }
        array[j + 1] = key;
    }
    return count;
}

// Exercício 4 - Comparação dos algoritmos de ordenação
function ordenacaoGeral() {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(gerRand(1000, 1)); // Gerando 1000 números aleatórios
    }

    // Comparação de tempo de execução dos algoritmos
    compareExecutionTime("Bubble Sort", bubbleSort, [...array]);
    compareExecutionTime("Selection Sort", selectionSort, [...array]);
    compareExecutionTime("Insertion Sort", insertionSort, [...array]);
}

// Função para exibir o resultado
function displayResult(sectionId, array, count, label) {
    const quest = document.querySelector(`#${sectionId}`);
    let resultDiv = document.getElementById(`res${sectionId}`);
    
    // Cria o elemento de resultado se ainda não existir
    if (!resultDiv) {
        resultDiv = document.createElement('pre');
        resultDiv.id = `res${sectionId}`;
        quest.appendChild(resultDiv);
    }

    // Exibe o array inicial e o resultado da ordenação com o contador
    resultDiv.innerHTML = `Array ordenado: ${array} <br> ${label}: ${count}`;
}

// Função para medir o tempo de execução dos algoritmos
function compararOrdenacoes(algorithmName, sortingFunction, array) {
    const startTime = performance.now();
    sortingFunction(array);  // Executa o algoritmo com uma cópia do array
    const endTime = performance.now();

    console.log(`${algorithmName} levou: ${(endTime - startTime).toFixed(2)} ms`);
    
    // Exibe o resultado na página
    const ordenacaoSection = document.querySelector("#ordenacao");
    let resultDiv = document.getElementById("resOrdenacao");
    if (!resultDiv) {
        resultDiv = document.createElement("pre");
        resultDiv.id = "resOrdenacao";
        ordenacaoSection.appendChild(resultDiv);
    }

    resultDiv.innerHTML += `${algorithmName} levou: ${(endTime - startTime).toFixed(2)} ms<br>`;
}
