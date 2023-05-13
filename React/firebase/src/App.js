
import firebase from './Firebase'

function App() {
  function Handle(){
    //reading the file from the firebase firestore database
    firebase.firestore().collection('products').get().then(snapshot=>{
      snapshot.forEach((obj)=>{
        console.log(obj.data())
      })
    });
    //inserting to the firebase firestore database
    firebase.firestore().collection('products').add({
      name:'vivo',
      price :2000,
      type : 'mobile',
      status : 'new'
    })
    //deleting a doc from database with the id of the document
    firebase.firestore().collection('products').doc('dI2t6OfiOVkI7P17wHAD').delete() 
    //we had a mobie samsung but after this instruction the mobile of sumsung was deleted
  }
  return (
    <div className="App">
      <button onClick={Handle}> Click me</button>

    </div>
    
  );
}

export default App;
