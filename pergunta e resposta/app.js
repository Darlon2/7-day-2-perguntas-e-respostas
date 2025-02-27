document.getElementById('startQuiz').addEventListener('click', function() {
    let score = 0;

    // Pergunta 1
    let answer1 = prompt("Qual é a capital do Brasil?");
    if (answer1.toLowerCase() === "brasilia") {
        score++;
        alert("Correto!");
    } else {
        alert("Incorreto! A resposta correta é Brasília.");
    }

    // Pergunta 2
    let answer2 = prompt("Quantos continentes existem no mundo?");
    if (answer2 === "7") {
        score++;
        alert("Correto!");
    } else {
        alert("Incorreto! A resposta correta é 7.");
    }
    
    // Resultado final
    document.getElementById('output').innerText = `Você acertou ${score} de 2 perguntas.`;
});
</script>
</body>
</html>