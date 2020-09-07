function addData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pnumber = document.getElementById("pnumber").value;
    let data = {
        firstname: fname,
        lastname: lname,
        email: email,
        phoneNumber: pnumber
    }
    firebase.firestore().collection('users').add(data);
}