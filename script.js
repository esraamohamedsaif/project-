var allproducts = document.querySelectorAll('.card button')
var content = document.querySelector('#content')
var btn1 = document.querySelector('#btn1')
var totalprice = 0
var total = document.querySelector('#total')
var del = document.querySelector('#del')

allproducts.forEach(function(item){
  item.onclick = function(){
     totalprice += +(item.getAttribute('price'))

     //total.innerHTML = total.textContent + '<br>'

    content.innerHTML += item.getAttribute('product') + '<br>'
    
   if(content.innerHTML != ''){
     
    btn1.style.display = 'block'
    btn1.style.backgroundColor = 'blue'
    btn1.style.color = '#fff'
    btn1.style.width = '270px'
    btn1.style.heigh = '80px'
    btn1.style.margin = 'auto'
    btn1.style.border = '5px'
    btn1.style.padding = '15px 10px'
    btn1.style.borderRadius = '8px'
    
    del.style.display = 'block'

    del.style.width = '80px'
    del.style.heigh = '50px'
    del.style.backgroundColor = 'red'
    del.style.border = '5px'
    del.style.color = '#fff'
    del.style. marginLeft = '5px'
    del.style.borderRadius = '4px'

   

    


    

   }
    
  }
})
  

btn1.onclick = function(){
 document.getElementById('total').innerHTML = (totalprice)

  
}

del.onclick = function(){
  content.innerHTML = ''
  del.style.display ='none'
  btn1.style.display = 'none'
  del.style.width = '80px'
    del.style.heigh = '50px'
    del.style.backgroundColor = 'red'
    del.style.border = '5px'
     del.style.color = '#fff'
    del.style. marginLeft = '5px'
    del.style.borderRadius = '8px'
    
   document.getElementById('total').innerHTML = (totalprice = 0)
  

}