var produtos = [ {
    img: "https://th.bing.com/th/id/OIP.nqEWVGqaMfgNxuI3QEa4oAHaHa?w=202&h=203&c=7&r=0&o=5&pid=1.7",
    titulo: "Nike air Max 90",
    preco: "R$ 899,00",
    descricao: "Elseve seu estilo com o classico  einventado. Conforto supremoencontra design inovador",
  } 
]

var divProduto = document.querySelector(".produtos")

for(var i =0; i <produtos,length;i++) {
    divProduto.innerHTML +=  `<div class="card">
    <img src="${produtos[i].img}" alt="#">
     <div class="content">
      <div class="title">
         <h2>${produtos[i].titulo}</h2>
           <p>${produtos[i].descricao}</p>
              </div>
  <div class="btns">
   <p>${produtos[i]}</p>
     <button>Comprar agora</button>
     </div>
      <div class="freight">
          <img src="./img/caminhaoFrete.jpg" alt="icon">
          <p>Frete grátis para todo o Brasil

      </div>
`}