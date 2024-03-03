import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-between">
            <figure>
                <Image alt="Hollow image of a book"
                       src="/logo.svg"
                       width={ 32 }
                       height={ 36 }
                />
            </figure>

            <section className="flex">
                <div>
                    <select>
                        <option value="">Sans Serif</option>
                        <option>Sans Serif</option>
                    </select>
                </div>
                <div>
                controls
                </div>
            </section>
        </header>
    );
};

export default Header;