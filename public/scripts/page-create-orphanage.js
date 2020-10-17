// Create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remove icon
  marker && map.removeLayer(marker);

  // Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Adicionar o campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");

  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // Adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";

    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// Seleção de sim e não
function toggleSelect(event) {
  // Retirar a classe .active
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  // colocar a classe .active
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  // verificar se sim ou não
  input.value = button.dataset.value;
}

////////////////////////////////
function toggleSelect(event) {
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}

function validate(event) {
  // Verificar se latitude e longitude foram preenchidos
  const lat = document.querySelector('[name="lat"]');
  const lng = document.querySelector('[name="lng"]');

  if (lat.value === "" && lng.value === "") {
    alert("Selecione a localização no mapa!");
    event.preventDefault();
  }
}
