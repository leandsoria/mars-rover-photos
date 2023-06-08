import BookmarkedBtn from '../../ui/Buttons/FavouriteBtn';
import RoverBtn from '../../ui/Buttons/RoverBtn';

function RoverBtnGroup() {
  return (
    <div className="flex flex-row gap-2 justify-center">
      <fieldset className="border rounded-md p-2 flex flex-row gap-2">
        <legend className="text-center px-2">Select a Rover</legend>
        <RoverBtn text="Curiosity" />
        <RoverBtn text="Opportunity" />
        <RoverBtn text="Spirit" />
      </fieldset>
      <fieldset className="border rounded-md p-2 flex flex-row gap-2">
        <legend className="text-center px-2">show bookmarked</legend>
        <BookmarkedBtn />
      </fieldset>
    </div>
  );
}

export default RoverBtnGroup;
