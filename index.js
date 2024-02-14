const addSpanText = (text) => {
  const textContainer = document.getElementById('text-container');
  textContainer.innerText = text;
  const textContent = textContainer.textContent;
  textContainer.innerHTML = '';
  const textArray = Array.from(textContent);
  textArray.forEach((e, i) => {
      const span = document.createElement('span');
      span.id = i;
      span.textContent = e;
      textContainer.appendChild(span);
  });
}
export default addSpanText;