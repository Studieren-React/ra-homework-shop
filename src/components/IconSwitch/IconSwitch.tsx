import './IconSwitch.css';
import { EViewSwitch } from '../../enums';

interface IconSwitchProps {
    icon: EViewSwitch;
    handleViewSwitch: () => void;
}

export function IconSwitch({ icon, handleViewSwitch }: IconSwitchProps) {
    return (
        <div
            className="icon-switch relative cursor-pointer m-8"
            onClick={handleViewSwitch}
        >
            <span className="absolute top-0 right-0">
                <i className="material-icons">{icon}</i>
            </span>
        </div>
    );
}
