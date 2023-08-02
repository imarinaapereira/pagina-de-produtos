

const roupas = [{
  id: "1",
  nome: "Vestido",
  img: 'data:image/jpeg;base64,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',
  valor: "80,00"
},
{
  id: "2",
  nome: "Saia Midi",
  img: 'https://th.bing.com/th/id/OIP.kP42IGvPMMziel9y4EYk9AHaI7?w=186&h=225&c=7&r=0&o=5&dpr=1.7&pid=1.7',
  valor: "65,00"
},
{
  id: "3",
  nome: "Vestido",
  img: 'https://mandoras.com.br/cdn/shop/products/vestido-retro-rosa-p-297176.jpg?v=1644527436&width=900',
  valor: "70,00"
},
{
  id: "4",
  nome: "Mini Saia",
  img: 'https://th.bing.com/th/id/OIP.zmd-rkFm3gjJ13JX_ew4DwHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.7&pid=1.7',
  valor: "80,00"
},
{
  id: "5",
  nome: "Blusa Nó Elegante",
  img: 'https://www.bing.com/th?id=OP.y3hR3TZ70JPKiA474C474&o=5&pid=21.1&w=142&h=142&qlt=100&dpr=1,7',
  valor: "50,00"
},
{
  id: "6",
  nome: "Vestido",
  img: 'https://th.bing.com/th/id/OIP.mUs5My3PvLD9wIPivn5zrgHaKe?w=186&h=263&c=7&r=0&o=5&dpr=1.7&pid=1.7',
  valor: "100,00"
},
{
  id: "7",
  nome: "Blusa Look Jeans",
  img: 'https://www.bing.com/th?id=OP.jZ9FJv5Wm%2bB%2bEQ474C474&o=5&pid=21.1&w=130&h=130&qlt=100&dpr=1,7&bw=6&bc=FFFFFF',
  valor: "50,00"
},
{
  id: "8",
  nome: "Vestido Midi Hering",
  img: 'https://www.bing.com/th?id=OP.JaTzdZRE8GU0%2bA474C474&o=5&pid=21.1&w=136&h=136&qlt=100&dpr=1,7',
  valor: "80,00"
},
{
  id: "9",
  nome: "Blusa de Trainer",
  img: 'https://www.bing.com/th?id=OP.AMa5OX2I5F4mFA474C474&o=5&pid=21.1&w=142&h=142&qlt=100&dpr=1,7',
  valor: "100,00"
},]
const Divroupas = document.querySelector('#lista-roupas');
roupas.forEach((r) => {
  const h2Roupa = document.createElement('h2');
  h2Roupa.textContent = r.nome;
  Divroupas.appendChild(h2Roupa);

  const imgRoupa = document.createElement('img');
  imgRoupa.src = r.img;
  Divroupas.appendChild(imgRoupa);
  imgRoupa.classList.add("imgs")
  const pRoupa = document.createElement('p');
  pRoupa.textContent = r.valor;
  Divroupas.appendChild(pRoupa);

  const checkboxRoupa = document.createElement('input');
  checkboxRoupa.type = 'checkbox';
  checkboxRoupa.value = parseFloat(pRoupa.textContent)

  Divroupas.appendChild(checkboxRoupa);
})

const compra = [];

function mostrarVlInput() {
  const dataAtual = new Date();
  const tresDiasEmMilissegundos = 3 * 24 * 60 * 60 * 1000; // 3 dias em milissegundos

  const dataAposTresDias = new Date(dataAtual.getTime() + tresDiasEmMilissegundos);
  const data = dataAposTresDias.toDateString();

  const checkboxesAcs = document.querySelectorAll("input[type='checkbox'");
  let valorTotal = 0;

  checkboxesAcs.forEach(checkbox => {
    if (checkbox.checked) {
      const valorProduto = parseFloat(checkbox.value);
      valorTotal += valorProduto;
      compra.push(valorProduto);
    }
  });

  if (valorTotal > 0) {
    alert(`Esse é o valor total R$ da sua compra ${valorTotal}`);
    const parcelar = prompt("Você deseja parcelar esse valor? Sim/Não");

    if (parcelar.toLowerCase() === "sim") {
      const numeroDeParcelas = Number(prompt("Em quantas vezes você deseja parcelar?"));
      const valorDaParcela = valorTotal / numeroDeParcelas;
      alert(`Você pagará ${numeroDeParcelas} parcelas de ${valorDaParcela.toFixed(2)}R$`);
    }

    alert(`Sua compra foi feita com sucesso, a entrega será feita no dia ${data}`);
  } else {
    alert("Selecione pelo menos um produto antes de finalizar a compra.");
  }
  console.log(compra)
}

const comprar = document.querySelector(".comprar");
comprar.addEventListener('click', mostrarVlInput);

