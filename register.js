function addData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pnumber = document.getElementById("pnumber").value;
    console.log(fname)
    let data = {
        firstname: fname,
        lastname: lname,
        email: email,
        phoneNumber: pnumber
    }
    firebase.firestore().collection('users').add(data).value;
    document.getElementById("fgroup").reset();
}
async function readData() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        console.log(doc.data());
        doc.data()

    }
}