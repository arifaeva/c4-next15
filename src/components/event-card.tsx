interface EventCardProps {
  title: string;
  place: string;
  date: string;
  active?: boolean;
}

export const EventCard = ({ title, place, date, active }: EventCardProps) => {
  return (
    <div className="bg-slate-800 text-white p-12">
      <div>
        Title: {title} {active ? "- Currently Active" : ""}
      </div>
      <div>Place: {place}</div>
      <div>Date: {date}</div>
    </div>
  );
};
