import { useHome } from "../../Providers/Home";



const Display = () => {
  const { products, ProductsDeletar } = useHome();
  return (
    <div style={{display:'flex'}}>
    {ProductsDeletar.map((item)=> (
        <div width='150px' height='180px' >
        <img width='120px' height='200px' src={item.image_url} alt={item.name}/>
        <h3>{item.first_brewed}</h3>
        <p>{item.description}</p>
        <h3>{item.volume.value} {item.volume.unit}</h3>
        </div>
    ))}
    </div>
  );
};

export default Display;