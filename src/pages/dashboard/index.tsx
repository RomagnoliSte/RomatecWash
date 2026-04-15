import { CalendarDays, House, ListChecks, Users, Wrench } from "lucide-react";
import { theme } from "../../styles/theme";

const menuItems = [
  { label: "Dashboard", icon: House, active: true },
  { label: "Clientes", icon: Users, active: false },
  { label: "Técnicos", icon: Wrench, active: false },
  { label: "Serviços", icon: ListChecks, active: false },
  { label: "Agendamentos", icon: CalendarDays, active: false },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex bg-white">
      <aside
        className="w-[320px] min-h-screen border-r flex flex-col"
        style={{
          backgroundColor: "#edf2f7",
          borderColor: "#cbd5e1",
        }}
      >
        <div className="px-8 pt-12 pb-8">
          <h1
            className="text-3xl font-medium leading-none mb-2"
            style={{
              color: theme.colors.brand.dark,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Romatec Manager
          </h1>

          <p className="text-1xl" style={{ color: theme.colors.gray[500] }}>
            Assistência técnica
          </p>
        </div>

        <div className="px-5">
          <div
            className="w-full h-px mb-6"
            style={{ backgroundColor: theme.colors.brand.light }}
          />

          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition"
                  style={{
                    border: `1px solid ${theme.colors.brand.light}`,
                    backgroundColor: item.active ? "#e7edf5" : "transparent",
                    color: theme.colors.brand.dark,
                  }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-1xl font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto px-5 pb-6">
          <p className="text-md" style={{ color: theme.colors.gray[500] }}>
            © 2026 TechWash
          </p>
        </div>
      </aside>

      <section className="flex-1 bg-white" />
    </main>
  );
}
