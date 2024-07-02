let index =0;
while(index<=10){
    console.log(`Value of index ${index}`);
    index=index+1;
}

let array = ['falsh',"batman","superman"]

let arr =0
while(arr<array.length){
    console.log(array[arr])
    arr++
}

const requestURL = 'https://api.github.com/users/hiteshchaudhary';
    const xhr = new XMLHttpRequest();
    /* `xhr.open('GET',requestURL)` is opening a GET request to the specified `requestURL`. This means
    that the code is making a request to the `requestURL` to retrieve data from it. */
    xhr.open('GET',requestURL)
    /* `xhr.onreadystatechange = function(){` is assigning an anonymous function to the
    `onreadystatechange` event of the `xhr` object. This function will be called whenever the
    `readyState` property of the `xhr` object changes. The `readyState` property represents the
    state of the request, and it can have different values from 0 to 4, indicating different stages
    of the request. In this case, the function is checking if the `readyState` is 4, which means the
    request has been completed and the response is ready. If the `readyState` is 4, the function
    retrieves the response text and parses it as JSON to access the `followers` property of the
    response data. */
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
        if(xhr.readyState === 4){
            const data1 = this.responseText;
            const data = JSON.parse(this.responseText);
            console.log(typeof data1);
            console.log(data.followers);
        }
    }
    // console.log("Pratik raj"