/**
 * create
//  */
// function addData(){
//     firebase.firestore().collection('users').add({
//         name: 'Nam',
//         age:17,
//         fav:['phim','bongda','tan gai']
//     });
// }
// async function readData(){
//doc nhieu ban ghi
// let result= await firebase.firestore().collection('users').get();
// for(let doc of result.docs){
//     console.log(doc.data());
// }

//doc 1 ban ghi theo id
// let doc = await firebase.firestore().collection('users').doc('ks8qqGvXbDMDhfKPsgkH').get();
// console.log(doc.data());

// //doc ban ghi thoa man dieu kien
// let result= await firebase.firestore().collection('users').where('fav','array-contains','bong chuyen')
// .where().get('age','==','22');
// for(let doc of result.docs){
//     console.log(doc.data());
// }
// }
// async function update(){
//     // update 1 ban ghi
//     await firebase.firestore().collection('users').doc('MYATXVhP0wXbmmlzxOd4').update({
// name:'Thang',
// age:21
//     });

// //update nhieu ban ghi
// let result= await firebase.firestore().collection('users').where('fav','array-contains','nghe nhac').get();
// for(let doc of result.docs){
//     await firebase.firestore().collection('users').doc(doc.id).update({
//         age:25
//             });
// }

// async function deleteData(){
//     //xoa 1 ban ghi
//     // await firebase.firestore().collection('users').doc('ks8qqGvXbDMDhfKPsgkH' ).delete();

//     //xoa nhieu ban ghi
//     let result= await firebase.firestore().collection('users').where('favourite','array-contains','nghe nhac').get();
// for(let doc of result.docs){
//     await firebase.firestore().collection('users').doc(doc.id).delete();
// }
// }
function addData(){
    firebase.firestore().collection('class').add(){
let object = {
        classname: 'c4',
        teacher:'Minh',
        student:['dung','ha','nam','giang']
    }
};
async function readData() {
    let result = await firebase.firestore().collection('class').where('teacher', '==', 'Nga');
    for (let doc of result.docs) {
        console.log(doc.data());
    }
}
async function update() {
let result= await firebase.firestore().collection('class').where('teacher','==','Nga').get();
for(let doc of result.docs){
    await firebase.firestore().collection('class').doc(doc.id).update({
       teacher:'Hoa'
            });
}
}
async function deleteData(){
    let result= await firebase.firestore().collection('class').where('student','==','tu').get();
for(let doc of result.docs){
    await firebase.firestore().collection('class').doc(doc.id).delete();
}
}
