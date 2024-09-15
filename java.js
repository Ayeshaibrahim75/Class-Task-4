var btn = document.getElementById('button');
btn.innerHTML = 'Night';
document.body.style.backgroundColor='white';
btn.onclick = function(){
    if (document.body.style.backgroundColor==='white') {
        document.body.style.backgroundColor='black';
        btn.innerHTML = 'Day';
        btn.style.backgroundColor='white';
          btn.style.color='black'
    }else{
document.body.style.backgroundColor='white';
btn.innerHTML = 'Night';
btn.style.backgroundColor='black';
btn.style.color='white'
    }
 
}

