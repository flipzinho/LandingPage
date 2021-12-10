class Cadastro{
    constructor(name, pwd, usr, pwd2){
        this.name = name
        this.pwd = pwd
        this.usr = usr
        this.pwd2 = pwd2
    }
}
class Bd{
    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    getId(){
        let idNovo = localStorage.getItem('id')
        return (parseInt(idNovo) +1)
    }
    gravar(c){
        let id = this.getId()

        localStorage.setItem(id, JSON.stringify(c))
        localStorage.setItem('id', id)
    }
}
let bd = new Bd()
function cadastrar()    {
    let name = document.getElementById('name')
    let pwd = document.getElementById('pwd')
    let pwd2 = document.getElementById('pwd2')
    let usr = document.getElementById('usr')
    let min_char = 7;
    let cadastro = new Cadastro(name.value, pwd.value, usr.value, pwd2.value)
       
    if(pwd.value === pwd2.value){
        bd.gravar(cadastro) 
     
          alert(`Seja bem vindo, ${name.value}`)
          location.reload() 
      }
      else{
          alert('Senhas digitadas não são iguais. Digite novamente.')
      } 
    }
