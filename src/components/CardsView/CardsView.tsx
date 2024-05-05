import { IProduct } from '../../types';
import { ShopCard } from './ShopCard';

interface CardsViewProps {
    products: IProduct[];
}

export function CardsView({ products }: CardsViewProps) {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {products.map((product: IProduct) => (
                <ShopCard key={product.img} product={product} />
            ))}
        </div>
    );
}
