import { IProduct } from '../../types';
import { ShopItem } from './ShopItem';

interface ListViewProps {
    products: IProduct[];
}

export function ListView({ products }: ListViewProps) {
    return (
        <>
            {products.map((product: IProduct) => (
                <ShopItem key={product.img} product={product} />
            ))}
        </>
    );
}
