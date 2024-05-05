import { ListView } from '../ListView';
import { CardsView } from '../CardsView';
import { products } from '../../assets';
import { EViewSwitch } from '../../enums';

interface StoreProps {
    view: EViewSwitch;
}

export function Store({ view }: StoreProps) {
    const SelectedView = view === EViewSwitch.viewList ? ListView : CardsView;

    return <SelectedView products={products} />;
}
