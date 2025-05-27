function showContent(content) {
    // Mostrar el contenido en la sección de resultados
    const contentResult = document.getElementById('contentResult');
    contentResult.innerHTML = `<p>${content}</p>`;
}