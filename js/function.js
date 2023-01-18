function search_music() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let size = document.getElementsByTagName('img').length-1;
    let x = document.getElementsByTagName('img');
       for (i = 0; i < size; i++) { 
        if (!x[i].alt.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }


    // for (i = 0; i < x.length; i++) { 
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //         x[i].style.display="none";
    //     }
    //     else {
    //         x[i].style.display="list-item";                 
    //     }
    // }
}

