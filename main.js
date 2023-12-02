let form = document.getElementById('frm');
let error = document.getElementById('error');
// let list =document.getElementById('list');
form.addEventListener('submit', async function(e)
{
e.preventDefault();

let cityname = document.getElementById('cityname').value;
let key = `d0527fa9a0ce4ed8b87c3859301d735d`;
let api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${key}`;
let list = document.getElementById('list');
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');
let list5 = document.getElementById('list5');
let list6 = document.getElementById('list6');
let list7 = document.getElementById('list7');
let list8 = document.getElementById('list8');
let list9 = document.getElementById('list9');
let list10 = document.getElementById('list10');








if(cityname == "")
{
    error.innerText = 'Please Enter City name...';
}
else
{

   let result = await fetch(api);
   let res = await result.text();
   let values = await JSON.parse(res);
   console.log(values);

   list1.innerHTML += `<h2 id="name">${values.name}</h2>`;
   list2.innerHTML += `<h2 <i class="fa-solid fa-temperature-three-quarters"></i>  ${values.main.temp} °</h2>`;
   list3.innerHTML += `<h2>${values.main.feels_like} °</h2>`;
   list4.innerHTML += `<h2>${values.weather[0].main}</h2>`;
   list5.innerHTML += `<h2>${values.wind.speed}</h2>`;
   list6.innerHTML += `<h2>${values.sys.id}</h2>`;
   list7.innerHTML += `<h2>${values.visibility}</h2>`;
   list8.innerHTML += `<h2>${values.timezone}</h2>`;
   list9.innerHTML += `<h2>${values.sys.country}</h2>`;
   list10.innerHTML += `<h2>${values.main.pressure}</h2>`;




}
});


















// let form =document.getElementById('form');
// let erorr =document.getElementById('erorr');
// form.addEventListener('submit', async function(e)
// {
//     e.preventDefault();

// let cityname  = document.getElementById('cityname').Value;
// let key = 'd0527fa9a0ce4ed8b87c3859301d735d';
// let api= 'https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${key}';
// let list =document.getElementById('list');




// if(cityname == ""){
//     erorr.innerHTML = "Please Enter City!";
// }
// else{
//     let result = await fetch(api);
//     let res = await result.text();
//     let values = await JSON.parse(res);
//     console.log(res);
  


//     // list1.innerHTML = '<h2>${values.}</h2>';
// }

// });