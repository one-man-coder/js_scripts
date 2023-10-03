// myjsondata=fetch("data.json")
//                 .then(results => {
//                     return results.json();
//                  })
                

let response = fetch("data.json"); 
let parsed = response.json(); 

console.log(parsed);

