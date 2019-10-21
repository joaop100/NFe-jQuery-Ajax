/*
  * Para executar utilizando NodeJS (Necessário instalar jQuery e JSDom via npm install pacote_name --save)
  * var jsdom = require('jsdom');
  * $ = require('jquery')(new jsdom.JSDOM().window);
*/

const json = JSON.stringify({
  "ID": 1137,
  "url_notificacao": "http://meudominio.com/retorno.php",
  "operacao": 1,
  "natureza_operacao": "Venda de produção do estabelecimento",
  "modelo": 1,
  "finalidade": 1,
  "ambiente": 2,
  "cliente": {
     "cpf": "000.000.000-00",
     "nome_completo": "Nome do Cliente",
     "endereco": "Av. Brg. Faria Lima",
     "complemento": "Escritório",
     "numero": 1000,
     "bairro": "Itaim Bibi",
     "cidade": "São Paulo",
     "uf": "SP",
     "cep": "00000-000",
     "telefone": "(00) 0000-0000",
     "email": "nome@email.com"
  },
  "produtos": [
     {
        "nome": "Nome do produto",
        "codigo": "nome-do-produto",
        "ncm": "6109.10.00",
        "cest": "28.038.00",
        "quantidade": 3,
        "unidade": "UN",
        "peso": "0.800",
        "origem": 0,
        "subtotal": "44.90",
        "total": "134.70",
        "classe_imposto": "REF2892",
        "tributos_federais": "13.25",
        "tributos_estaduais": "8.00"
     },
     {
        "nome": "Nome do produto",
        "codigo": "nome-do-produto",
        "ncm": "6109.10.00",
        "cest": "28.038.00",
        "quantidade": "1",
        "unidade": "UN",
        "peso": "0.200",
        "origem": 0,
        "subtotal": "29.90",
        "total": "29.90",
        "tributos_federais": "13.25",
        "tributos_estaduais": "8.00",
        "impostos": {
          "icms": {
            "codigo_cfop": "6.102",
            "situacao_tributaria": "102"
          },
          "ipi": {
            "situacao_tributaria": "99",
            "codigo_enquadramento": "999",
            "aliquota": "0.00"
          },
          "pis": {
            "situacao_tributaria": "99",
            "aliquota": "0.00"
          },
          "cofins": {
            "situacao_tributaria": "99",
            "aliquota": "0.00"
          }
        }
     }
  ],
  "pedido": {
     "pagamento": 0,
     "presenca": 2,
     "modalidade_frete": 0,
     "frete": "12.56",
     "desconto": "10.00",
     "total": "174.60",
     "pagamento": 0,
     "forma_pagamento": 15
  }
})

$.ajax({
  headers: {
    "cache-control": "no-cache",
    "content-type": "application/json",
    "x-consumer-key": "",
    "x-consumer-secret": "",
    "x-access-token": "",
    "x-access-token-secret": ""
  },
  url: "https://webmaniabr.com/api/1/nfe/emissao/",
  method: "POST",
  dataType: 'json',
  data: json
}).done(function( data ) {
  console.log(data)
}).fail(function( error ){
  console.log(error.responseJSON)
})
