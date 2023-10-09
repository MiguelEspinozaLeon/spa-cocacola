export default function ProductsPage(){
    const products = [
        {id: 1, name: 'Orange Fanta', price: 10, description: 'Orange Fanta 600ml', img: 'https://chedrauimx.vtexassets.com/arquivos/ids/20060808/7501055311002_00.jpg?v=638322234590100000'},
        {id: 2, name: 'Classic Coca Cola', price: 15, description: 'Classic Coca Cola 600ml', img: 'https://oneiconn.vtexassets.com/arquivos/ids/185413/COCA-COLA-ORIGINAL-PET-3L.jpg?v=638061145755000000'},
        {id: 3, name: 'Sprite', price: 10, description: 'Sprite 600ml', img: 'https://panoli.mx/cdn/shop/products/12959_2_1000x.jpg?v=1617824909'},
    ]
    return (
        <section id="products-page">
            <h2 className="text-2xl">Our Products</h2>
            <div className=" container w-100 flex flex-col items-center">
                <ul className="flex flex-row items-center gap-4">
                    
                    {products.map((product)=>(  
                        <div className="w-[350px] rounded-sm shadow-lg">
                            <li key={product.id}>
                                <img src={product.img} className="h-50" alt="" />
                                <h3 className="text-xl">{product.name}</h3>
                                <p className="text-lg">{product.description}</p>
                                <div className="rounded-full bg-green-700 w-1/2 ">
                                    <p className="text-white text-xl font-bold p-2">${product.price}</p>
                                </div>
                            </li>
                        </div> 
                    ))}
                </ul>                
            </div>

        </section>
    )



}