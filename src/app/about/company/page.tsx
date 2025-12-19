import { EventCard } from "@/components/event-card";
import { UserProfile } from "@/components/user";

export default function CompanyPage() {
  return (
    <div>
      <div>Company</div>
      <UserProfile>
        <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex justify-center items-center">
          A
        </div>
      </UserProfile>
      <EventCard
        title="Event 1"
        place="Malang"
        date="18 Desember 2025"
        active
      />
      <EventCard title="Event 2" place="Pontianak" date="19 Desember 2025" />
      <EventCard title="Event 3" place="Cianjur" date="20 Desember 2025" />
    </div>
  );
}
