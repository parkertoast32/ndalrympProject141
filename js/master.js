function isEmpty() {
    if( document.getElementById('FirstName').value === '' ){
        alert('Please fill in all blanks');
        return false;
    }
    if( document.getElementById('LastName').value === '' ){
        alert('Please fill in all blanks');
        return false;
    }
    if( document.getElementById('PhoneNumber').value === '' ){
        alert('Please fill in all blanks');
        return false;
    }
    if( document.getElementById('Email').value === '' ){
        alert('Please fill in all blanks');
        return false;
    }
    let radio = document.getElementById('Subscribe to Newsletter');
    if( ! radio.checked ){
        alert('Please fill in all blanks');
        return false;
    }

    
}

function toTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
