import BookmarkedBtn from '../../ui/Buttons/FavouriteBtn';
import RoverBtn from '../../ui/Buttons/RoverBtn';

function RoverBtnGroup() {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center">
      <fieldset className="border rounded-md p-2 flex flex-col md:flex-row gap-2">
        <legend className="text-center px-2">Select a Rover</legend>
        <RoverBtn text="Curiosity" />
        <RoverBtn text="Opportunity" />
        <RoverBtn text="Spirit" />
      </fieldset>
      <fieldset className="border rounded-md p-2 flex flex-col md:flex-row gap-2">
        <legend className="text-center px-2">Show Bookmarked</legend>
        <BookmarkedBtn />
      </fieldset>
    </div>
  );
}

export default RoverBtnGroup;
