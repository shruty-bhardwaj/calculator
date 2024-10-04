let string='';
let buttons= document.querySelectorAll('.button');   
function clearInput(){
    string='';
    document.querySelector('#calc-input').value= string;
}
 Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
     if(e.target.innerHTML=='='){
        try{
            if(string.includes('X')){
        string= eval(string.replace(/X/g, '*'));}
        else {
            string= eval(string);

        }
        document.querySelector('#calc-input').value=string;

    }catch(error){
    document.querySelector('#calc-input').value = 'Error';
     string = '';
    }    
 } else if(e.target.innerHTML=='AC'){
        clearInput();

    }
    else{ 
        if(e.target.innerHTML == 'X'){
            string+= '*';
        } else {
        string+= e.target.innerHTML;
        }
        document.querySelector('#calc-input').value = string;

    }
   });
 }); 
 