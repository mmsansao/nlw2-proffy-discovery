// Servidor
const express = require('express')
const server = express()
const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require('./pages')

// configurar nunjucks (template engine) depois de instalar
// engine de trabalho para alimentar dados ao html
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Inínio e configuração do servidor
server
  // Receber os dados do req.body (por padrão ele não recebe, deve implementar o método)
  .use(express.urlencoded({ extended: true }))
  //configurar arquivos estáticos (css, scripts, imagens), fazer com que o js procure também em:
  .use(express.static('public'))
  // rotas da aplicação
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/save-classes', saveClasses)
  // Start do servidor
  .listen(5500)
