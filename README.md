<div style="display: inline">
  <a href="https://www.jacksondev.com.br/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Website&message=JacksonDev&color=red&style=for-the-badge&logo=webflow"/>
  </a>
  <a href="https://pt-br.reactjs.org/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=&message=React Js&color=202124&style=flat-square&logo=react"/>
  </a>
  
  <a href="https://styled-components.com/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=&message=Styled Components&color=202124&style=flat-square&logo=styled-components"/>
  </a>
  <a href="https://console.firebase.google.com/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=&message=Firebase&color=202124&style=flat-square&logo=Firebase"/>
  </a>
</div>

# Projeto Autenticação Com Google

### <a href="https://jacksonrp1.github.io/AutenticacaoComGoogle/build/" target="_blank">Clique aqui</a> para visualizar o projeto concluído.

#### Scripts Disponíveis

```
git clone https://github.com/jacksonrp1/AutenticacaoComGoogle.git
```

#### Dentro do projeto recém-clonado, você pode executar:

```
npm install
```

No diretório do projeto, execute:

```
npm start
```

Abra http://localhost:3000 para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.

# Realizar configuração do Firebase para gerenciar as autenticações.

<!--ts-->
  * Acesse <a href="https://console.firebase.google.com/" target="_blank">Firebase</a> e realize seu cadastro.
    * Clique em "Adicionar projeto".
    * Insira o nome do projeto.
    * Se não quiser manter o Google Analytics neste projeto, demarque embaixo e clique em "Criar projeto".
    
  * Na tela inicial, abaixo de "Comece adicionando o Firebase ao seu aplicativo" selecione o tipo de projeto que criar, neste exemplo utilizei "WEB".
    * Em "Registrar app", coloque um Apelido do app e depois em "Registrar app".
    * Em "Adicionar o SDK do Firebase", copie a "const firebaseConfig" e guarde para mais tarde.
    * Depois clique em "Continuar no console".
    
  * Clique em "Criação" e depois "Authentication".
    * Clique em "Vamos começar".
    * Selecione o método de login que quer "incluir".
    * Em "Provedores" de login selecione Ativar e coloque um "E-mail de suporte do projeto" e depois em "Salvar".
<!--te-->

## Modifique o arquivo "firebase.js" dentro da pasta "src/service" e substitua a "const firebaseConfig" com a que você guardou :

``` javascript
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCZfR-W5kL801E6Cwaey-GjxXCZBlVieXk',
  authDomain: 'teste-66d36.firebaseapp.com',
  projectId: 'teste-66d36',
  storageBucket: 'teste-66d36.appspot.com',
  messagingSenderId: '616727271116',
  appId: '1:616727271116:web:9e331ead346bbd2df09469'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { provider, app, auth, signInWithPopup }

```
#### Neste projeto eu utilizei o localStorage para servir como simulação de banco de dados.
![image](https://user-images.githubusercontent.com/83042566/216134237-9f2d0b2f-a717-401c-846d-4aa5f9a5394b.png)
![image](https://user-images.githubusercontent.com/83042566/216134421-e48f5075-44b9-410a-b351-33f6ae557849.png)

![image](https://user-images.githubusercontent.com/83042566/216134536-3a821d92-2ac6-4a02-a775-3af71718b435.png)
![image](https://user-images.githubusercontent.com/83042566/216134735-5da84cc8-50b9-40ca-89dc-642f47e15484.png)

### No painel "Autentication" você consegue ver por qual provedor o usuário logou e gerenciar
![image](https://user-images.githubusercontent.com/83042566/216135896-a2b595a9-92e9-466b-afb5-fb301b56941a.png)
![image](https://user-images.githubusercontent.com/83042566/216135360-bae48aba-913c-4d29-84bc-ec762184042a.png)


Você também pode ver erros no console.
```
npm test
```
Inicia o executor de teste no modo de observação interativo.
Consulte a seção sobre como executar testes para obter mais informações.
```
npm run build
```
Cria o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.
A compilação é minificada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!
