import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <figure>
                <Image alt="Hollow image of a book"
                       src="/logo.svg"
                       width={ 32 }
                       height={ 36 }
                />
            </figure>

            <section className="flex gap-x-[26px] h-fit items-center">
                <div className="">
                    <select>
                        <option>Sans Serif</option>
                        <option>Serif</option>
                        <option>Mono</option>
                    </select>
                </div>

                <span className="border-r"></span>

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
            </section>
        </header>
    );
};

export default Header;