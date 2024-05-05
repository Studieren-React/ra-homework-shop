import { Store } from './components/Store';
import { EViewSwitch } from './enums';
import { useState } from 'react';
import { IconSwitch } from './components/IconSwitch/IconSwitch.tsx';

export default function App() {
    const [view, setView] = useState(EViewSwitch.viewList);
    const handleViewSwitch = () => {
        setView(
            view === EViewSwitch.viewList
                ? EViewSwitch.viewCard
                : EViewSwitch.viewList,
        );
    };

    return (
        <div className="flex flex-col">
            <IconSwitch icon={view} handleViewSwitch={handleViewSwitch} />
            <Store view={view} />
        </div>
    );
}
