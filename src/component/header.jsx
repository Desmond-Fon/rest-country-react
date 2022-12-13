// import moon from '../images/icon-moon.svg'

const Header = ({onSwitch}) => {
    return ( <>
    <header className="flex justify-between items-center px-4 md:px-20 py-8 bg-whiteLMDM shadow-lg dark:bg-darkBlue">
        <h1 className="font-bold text-veryDarkBlueLM dark:text-whiteLMDM">Where in the world?</h1>
        <div className="flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-5" id="moon-icon" onClick = {onSwitch}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
              </svg>
              
              
            <p className="text-sm font-semibold pl-3 text-veryDarkBlueLM dark:text-whiteLMDM">Dark Mode</p>
        </div>
    </header>
    </> );
}
 
export default Header;