const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');

app.use(cors()); //habilitando cors na nossa aplicacao

//http://localhost:3000/clientes/5e74f6d7cb397de0be345b20
app.get('/clientes/:id', function(req, res) {
  var vId = req.params.id;

  let jsonData = require('./customers.json');
  
  function myIdFilter(vId) {
    let result = jsonData.filter(it => new RegExp(vId, "i").test(it._id));
    return result;
  }
  res.send(myIdFilter(vId));
});

app.get('/clientes', function (req, res) {
  var pagina = req.query.pagina;
  var vNome = req.query.nome;
  var vSort = req.query.sort;
  var vDetalhes = req.query.pegaDetalhes;
  let jsonData = require('./customers.json');
  
   var cliente = jsonData.map(v => {
      return {
          'Photos': v.pictures,
          'Nome': v.name.first +' '+ v.name.last,
          'PrimeiroNome': v.name.first,
          'E-mail': v.email,
          'Empresa': v.company,
          'Idade': v.age,
          'Budget': v.budget,
      }
    })
    
    //Filtrar cliente por nome
    //acessar a URL http://localhost:3000/clientes?nome=ali
    function filterItems(nome) {
      let result = cliente.filter(it => new RegExp(nome, "i").test(it.Nome));
      return result;
    }

    //Pegar Json com detalhes do cliente filtrado por nome
    //acessar a URL http://localhost:3000/clientes?pegaDetalhes=cox
    function detalhesCliente(nome) {
      let result = jsonData.filter(it => new RegExp(nome, "i").test(it.name.first));
      return result;
    }    
  
    var items = cliente;
    //acessar a URL http://localhost:3000/clientes?pagina=1
    function Paginator(items, page, per_page) {

      var page = parseInt(page || 1),
      per_page = per_page || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page),
      total_pages = Math.ceil(items.length / per_page);

      var myPage = paginatedItems;
      //http://localhost:3000/clientes?pagina=1&sort=asc
      if( vSort == 'asc' ) {
        var myArray = myPage.sort(function(a,b) {
          return a.Nome < b.Nome ? -1 : a.Nome > b.Nome ? 1 : 0;
        });
        //console.log(myArray);
        
      //http://localhost:3000/clientes?pagina=1&sort=desc  
      } else if(vSort == 'desc' ) {
        var myArray = myPage.sort(function(a,b) {
          return a.Nome > b.Nome ? -1 : a.Nome < b.Nome ? 1 : 0;
        });
        //console.log(myArray);
      }

      return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
      };
    }
    
  if( pagina >= 1 && pagina <= 50 || vSort == 'asc' || vSort == 'desc') {
    //console.log("Paginacao e Sort");
    res.send(Paginator(items, pagina));
  } else if(vNome !== undefined && vNome !== null) {
    //console.log("Busca nome");
    res.send(filterItems(vNome));
  } else if(vDetalhes !== undefined && vDetalhes !== null) {
    //console.log("Pega detalhes pelo primeiro nome");
    res.send(detalhesCliente(vDetalhes));
  }
    
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

