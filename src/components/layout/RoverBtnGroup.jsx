import BookmarkedBtn from '../../ui/Buttons/FavouriteBtn';
import RoverBtn from '../../ui/Buttons/RoverBtn';

function RoverBtnGroup() {
  return (
    <div className="flex flex-row gap-2 justify-center">
      <RoverBtn text="Curiosity" />
      <RoverBtn text="Opportunity" />
      <RoverBtn text="Spirit" />
      <BookmarkedBtn />
    </div>
  );
}

export default RoverBtnGroup;
