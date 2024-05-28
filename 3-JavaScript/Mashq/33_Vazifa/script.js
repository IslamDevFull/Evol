let date = new Date()
document.querySelector('h1').innerHTML = 
`
${date.getFullYear()} - Yil <br> 
${date.getMonth()+1} - Oy <br> 
${date.getDay()} - Hafta <br>
${date.getDate()} - Kun <br>
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - Soat <br>
${date.toDateString()} <br>
`;