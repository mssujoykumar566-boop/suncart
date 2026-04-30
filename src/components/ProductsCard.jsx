import { Card } from "@heroui/react";
import Image from "next/image";


const ProductsCard = ({product}) => {
    // console.log(product)
    return (
        <Card className="">
             <div>
                <Image src={product.image} width={200} height={200} alt={product.name}/>
                 <h2>{product.name}</h2>
             </div>
        </Card>
    );
};

export default ProductsCard;