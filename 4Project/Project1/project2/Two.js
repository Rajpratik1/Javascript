const form = document.querySelector('form')
// this usercase will give you empty
//cosnt height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault()
     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)
     const results = document.querySelector('#results')
     
     if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
     }
      
     else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`
     }
     else  {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            results.innerHTML = document.querySelector('p:first-child')
        }
        else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML = document.querySelector('weight-guide').value[1]
        }
        else{
            results.innerHTML = document.getElementById('weight-guide').value[2]
        }
     }
      
})