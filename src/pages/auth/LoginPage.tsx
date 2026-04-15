import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen w-screen">
      <div className="hidden md:flex md:w-1/2 bg-brand-dark text-white p-10">
        <div className="flex flex-col w-full">
          <div className="rounded-2xl text-white flex items-start justify-start min-h-72 sm:min-h-80">
            <Logo size="small" variant="light" className="sm:hidden" />
            <Logo size="medium" variant="light" className="hidden sm:block" />
          </div>

          <div className="max-w-xl">
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Organize clientes, técnicos, serviços e agendamentos em um só
              lugar.
            </h2>

            <p className="text-lg leading-8 opacity-85 max-w-lg">
              Uma plataforma pensada para centralizar a operação e facilitar o
              dia a dia da assistência técnica.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-brand-dark">Entrar</h2>
          <p className="mt-2 text-sm text-gray-500">
            Acesse sua conta para continuar.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@empresa.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-primary"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-primary"
              />
            </div>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-full rounded-xl bg-brand-primary py-3 font-medium text-white transition hover:bg-brand-medium"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
