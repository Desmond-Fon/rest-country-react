import Button from "./Button";
import DisplayDetails from "./DisplayDetails";

const Details = ({ showDetails }) => {
  return (
    <>
      <main className="px-10 md:px-20 bg-veryLightGrayLM text-veryDarkBlueLM pt-7 dark:bg-veryDarkBlueDM dark:text-whiteLMDM w-full">
        <Button />
        <DisplayDetails showDetails={showDetails} />
      </main>
    </>
  );
};

export default Details;
