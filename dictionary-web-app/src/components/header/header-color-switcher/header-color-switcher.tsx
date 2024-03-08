import React from 'react';
import Image from 'next/image';

// States
import useColorModeStore from '@/store/color-store';

const HeaderColorSwitcher = () => {
    // States
    const currentMode = useColorModeStore((state) => state.currentMode);
    const selectedMode = useColorModeStore((state) => state.selectedMode);

    return (
        <div className="flex gap-x-[20px]">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>

            <span>
                <Image src="/icon-moon.svg"
                       alt=""
                       height={ 20 }
                       width={ 20 }
                />
            </span>
        </div>
    );
};

export default HeaderColorSwitcher;