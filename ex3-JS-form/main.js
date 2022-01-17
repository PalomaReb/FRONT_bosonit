const formulario=document.getElementById('form');
const body = document.body;


fetch('http://localhost:8080/person') // method por defecto es get
  .then((r) => r.json())
  .then((d) => {
      console.log(d)
      if (d.length > 0) {
    document.getElementById('name').value = d[0].user
    document.getElementById('lastName').value = d[0].surname
    document.getElementById('comp_email').value = d[0].company_email
    document.getElementById('personal_email').value = d[0].personal_email
    document.getElementById('city').value = d[0].city
    document.getElementById('image_url').value = d[0].imagen_url
    document.getElementById('creation_date').value = d[0].created_date
    document.getElementById('active').value = d[0].active
    document.getElementById('term_date').value = d[0].finish_date
      }
  });

  document.addEventListener('submit', ((e) => {
      console.log(e)
    fetch('http://localhost:8080/addperson',{
    method:'post',
    mode:"cors",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
      'Usuario': document.getElementById('name').value,
      'Apellido': document.getElementById('lastName').value,
      'Email de la compañia': document.getElementById('company_email').value,
      'Email personal': document.getElementById('personal_email').value,
      'Ciudad': document.getElementById('city').value,
      'url imagen': document.getElementById('image_url').value,
      'Fecha creacion': document.getElementById('creation_date').value,
      'Activado': document.getElementById('active').value,
      'Fecha fin': document.getElementById('term_date').value,
    })  

})
.then((r)=> r.json())
.then(e.preventDefault())
document.getElementById('form').reset();
  }))