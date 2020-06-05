const value = document.body;
value.textContent = ''

const h1 = document.createElement('h1')
h1.textContent = 'DOM'
value.appendChild(h1)

const p = document.createElement('p')
p.textContent = 'JavaScriptからHTMLを扱うための仕組み'
value.appendChild(p)

const h2 =document.createElement('h2')
h2.textContent = '印象に残っているトピック'
value.appendChild(h2)

const ul = document.createElement('ul')
ul.textContent = ''
value.appendChild(ul)

const li1 = document.createElement('li')
li1.textContent = 'documentオブジェクト'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.textContent = 'getElementById'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.textContent = 'イベントリスナ'
ul.appendChild(li3)