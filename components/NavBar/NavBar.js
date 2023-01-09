import Button from '../Button/Button'
import styles from './NavBar.module.css'
import NavLink from './NavLink/NavLink'

function NavBar() {
    return (
        <nav className={styles.nav}>

            <ul className={styles.nav_list+' '+styles.nav_list_left}>
                <li className={styles.logo_container}><img className={styles.logo} src='images/logo.svg' /></li>
                <NavLink text="Home" />
                <NavLink text="Store" />
                <NavLink text="Channels" />
                <NavLink text="Categories" textBold dropDownIcon />
                <NavLink text="My Stuff" />
            </ul>


            <ul className={styles.nav_list+' '+styles.nav_list_right}>
                <li>
                    <Button text="Try for free" lightFont glowOnHover />
                </li>
                <li>
                    <input className={styles.search_bar} placeholder='Search' onClick={(e) => {
                        e.target.classList.add(styles.search_bar_active)
                    }}

                        onBlur={
                            (e) => {
                                e.target.classList.remove(styles.search_bar_active)
                            }
                        }
                    ></input>
                </li>


                <NavLink text="EN" dropDownIcon image='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjQ0NDIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI5LjEiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMC41IDEuOHYxOC40TTEuOCAxMWgxOC40TTQuNiA0LjZjMCAxIDIuOSAxLjggNi40IDEuOCAzLjUgMCA2LjQtLjggNi40LTEuOE00LjYgMTcuNGMwLTEgMi45LTEuOCA2LjQtMS44IDMuNSAwIDYuNC44IDYuNCAxLjgiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTEgMCkiIHJ4PSI5LjIiIHJ5PSI0LjYiLz48L2c+PC9zdmc+' />
                <NavLink dropDownIcon image="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIyMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSI3LjUiIGN5PSI2IiByPSI2Ii8+PG1hc2sgaWQ9ImIiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgeD0iMCIgeT0iMCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIj48cGF0aCBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNC45NyAxOS4yNGMwLTQuNDc3LTMuMzUtOC4xMDctNy40ODUtOC4xMDdTMCAxNC43NjMgMCAxOS4yNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHVzZSBzdHJva2Utd2lkdGg9IjQiIG1hc2s9InVybCgjYikiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg==" />
            </ul>
        </nav>
    )
}

export default NavBar