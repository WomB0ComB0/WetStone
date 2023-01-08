const data = [
  {
    id: 0,
    title: "Astronomy",
    headline: "asdasdadkadsfifhif",
    image: "./image/astro.jpeg",
    term: "What is Black Hole?",
    definition:
      "hasdhasidahsdaisdaisdbaisbdaisbdaibdaibdaihgbkfiueroiuqwoiruqwoiruqi",
  },
  {
    id: 1,
    title: "Rocket",
    headline: "asdasdadkadsfifhif",
    image: "./image/rocket.jpeg",
    term: "What is Black Hole?",
    definition:
      "hasdhasidahsdaisdaisdbaisbdaisbdaibdaibdaihgbkfiueroiuqwoiruqwoiruqi",
  },
  {
    id: 2,
    title: "Brain",
    headline: "asdasdadkadsfifhif",
    image: "./image/brain.jpg",
    term: "What is Black Hole?",
    definition:
      "hasdhasidahsdaisdaisdbaisbdaisbdaibdaibdaihgbkfiueroiuqwoiruqwoiruqi",
  },
  {
    id: 3,
    title: "Astronomy",
    headline: "asdasdadkadsfifhif",
    image: "./image/astro.jpeg",
    term: "What is Black Hole?",
    definition:
      "hasdhasidahsdaisdaisdbaisbdaisbdaibdaibdaihgbkfiueroiuqwoiruqwoiruqi",
  },
  {
    id: 4,
    title: "Rocket",
    headline: "asdasdadkadsfifhif",
    image: "./image/rocket.jpeg",
    term: "What is Black Hole?",
    definition:
      "hasdhasidahsdaisdaisdbaisbdaisbdaibdaibdaihgbkfiueroiuqwoiruqwoiruqi",
  },
  {
    id: 5,
    title: "Brain",
    headline: "asdasdadkadsfifhif",
    image: "./image/brain.jpg",
    term: "What is Black Hole?",
    definition:
      "hasdhasidahsdaisdaisdbaisbdaisbdaibdaibdaihgbkfiueroiuqwoiruqwoiruqi",
  },
  
];

let filteredArray = [];

// getting DOM elements
let cardContainer = document.querySelector(".card-container");
let mainBody = document.querySelector('.main-body');
let searchbar = document.querySelector(".searchbar");

// searchbar.addEventListener("input", () => {
//   console.log(searchbar.value);
//   filteredArray.push(
//     data.filter(
//       (task) =>
//         task.title.toLowerCase() == searchbar.value.toLowerCase() ||
//         task.headline.toLowerCase() == searchbar.value.toLowerCase()
//     )
//   );
//   console.log(filteredArray);

//   filteredArray?.map((elem) => {
//     if (elem[0]) {
//       cardContainer.innerHTML += `<div class="card"> <a href="">
//         <img src="${elem[0]?.image}" alt="work-image" class="card-image"> </a>
//         <p class="card-title">${elem[0]?.title}</p>
//      </div>`;
//     }
//   });
// });

window.addEventListener("DOMContentLoaded", () => {
    data?.map((task) => {
    cardContainer.innerHTML += `<div class="card">
        <img src="${task.image}" alt="work-image" class="card-image" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <p class="card-title">${task.title}</p>
     </div>`;
  });
});


function showTask(id) {
    console.log(id);
    mainBody.innerHTML += `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content modal-box">
       <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">${data[id].title}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
          ...
       </div>
       <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
       </div>
    </div>
    </div>
 </div>`
}