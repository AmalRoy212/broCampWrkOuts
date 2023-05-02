function Header(props){
  return(
    <div style={{backgroundColor:"Gray",color:"green",width:'100%',height:'100px'}}>
        <h2>Hey welcome all am from the outer file in componant{props.data }</h2>
    </div>
  );
}
//exporting the component
export default Header;