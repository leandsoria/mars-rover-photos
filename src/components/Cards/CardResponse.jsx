import { StatusMessage } from './CardResponseStatuses';

function CardResponse() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12 w-full">
      <StatusMessage />
    </div>
  );
}

export default CardResponse;
