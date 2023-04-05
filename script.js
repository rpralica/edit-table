const tableEdit = document.getElementById('tableEdit');
let cells = tableEdit.getElementsByTagName('td');

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = function () {
    if (this.hasAttribute('data-clicked')) {
      return;
    }

    this.setAttribute('data-clicked', 'yes');
    this.setAttribute('data-text', this.innerHTML);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = this.innerHTML;
    input.style.width = this.offsetWidth - this.clientLeft * 2 + 'px';
    input.style.height = this.offsetHeight - this.clientTop * 2 + 'px';
    input.style.border = '0px';
    input.style.fontFamily = 'inherit';
    input.style.fontSize = 'inherit';
    input.style.textAlign = 'inherit';
    input.style.backgroundColor = 'white';

    input.onblur = function () {
      const td = input.parentElement;
      let originalText = input.parentElement.getAttribute('data-text');
      let currentText = this.value;
      if (originalText !== currentText) {
        td.removeAttribute('data-clicked');
        td.removeAttribute('data-text');
        td.innerHTML = currentText;
      }
    };

    this.innerHTML = '';
    this.style.cssText = 'padding:0px 0px';
    this.append(input);
    this.firstElementChild.select();
  };
}
