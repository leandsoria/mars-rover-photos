import RoverBtnGroup from './layout/RoverBtnGroup';
import CardGrid from './Cards/CardGrid';
import FilterGroupBackground from '../ui/FilterGroup/FilterGroupBackground';
import CamerasFilter from './CameraFilter';
import DateSelector from './Date/DateSelector';

function MainSearchGroup() {
  return (
    <div className="w-full">
      <>
        <RoverBtnGroup />
        <FilterGroupBackground>
          <DateSelector />
          <CamerasFilter />
        </FilterGroupBackground>
        <CardGrid />
      </>
    </div>
  );
}

export default MainSearchGroup;
