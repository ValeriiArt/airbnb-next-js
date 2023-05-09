'use client'

import { IconType } from "react-icons";

interface CategoryProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}
const CategoryInput: React.FC<CategoryProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
                rounded-xl
                border-2
                p-4
                flex
                flex-col
                gap-3
                hover:border-black
                transition
                cursor-pointer
                ${selected ? 'border-black' : 'border-neutral-200'}
            `}
        >
            <Icon size={30} />
            <h4 className="font-semibold">{label}</h4>
        </div>
    );
}

export default CategoryInput;