import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.mainHeader}>
            <div className={s.headerNavigation}><img src={window.location.origin + '/logomini.png'} />
                <div className={s.Search}><input type="search" name="q" placeholder="Поиск"></input>
                    <input type="submit" value="Найти"></input>
                </div>
            </div>
        </header>
    )
}

export default Header;
