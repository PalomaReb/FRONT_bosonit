const formulario=document.getElementById('form');
const body = document.body;


fetch('http://localhost:8080/person') // method por defecto es get
  .then((r) => r.json())
  .then((d) => {
      console.log(d)
      if (d.length > 0) {
    document.getElementById('name').value = d[0].name
    document.getElementById('lastName').value = d[0].lastName
    document.getElementById('comp_email').value = d[0].comp_email
    document.getElementById('personal_email').value = d[0].personal_email
    document.getElementById('city').value = d[0].city
    document.getElementById('image_url').value = d[0].image_url
    document.getElementById('creation_date').value = d[0].created_date
    document.getElementById('active').value = d[0].active
    document.getElementById('term_date').value = d[0].term_date
      }
  });

  document.addEventListener('submit', ((e) => {
      console.log(e)
    fetch('http://localhost:8080/addperson',{
    method:'post',
    mode:"cors",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
      'name': document.getElementById('name').value,
      'lastName': document.getElementById('lastName').value,
      'comp_email': document.getElementById('company_email').value,
      'personal_email': document.getElementById('personal_email').value,
      'city': document.getElementById('city').value,
      'image_url': document.getElementById('image_url').value,
      'created_date': document.getElementById('creation_date').value,
      'active': document.getElementById('active').value,
      'term_date': document.getElementById('term_date').value,
    })  

})
.then((r)=> r.json())
.then(e.preventDefault())
document.getElementById('form').reset();
  }))