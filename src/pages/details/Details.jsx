// import DisplayCountry from '../home/component/DisplayCountry';
import Button from './Button';
import DisplayDetails from './DisplayDetails';

const Details = ({showDetails}) => {
    return ( <>
    <main className="px-5 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
     <Button />
     <DisplayDetails showDetails = {showDetails}/>
    </main>
    </> );
}
 
export default Details;