import { Settings } from "lucide-react";
import { theme } from "../../../styles/theme";
import Logo from "../../../components/Logo";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      <section
        className="hidden md:flex md:w-1/2 flex-col px-12 py-10 lg:px-16 lg:py-12"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.brand.dark}, ${theme.colors.brand.primary})`,
          color: theme.colors.white,
        }}
      >
        <div className="rounded-2xl p-8 sm:p-12 text-white flex items-start justify-start min-h-72 sm:min-h-80">
          <Logo size="small" variant="light" className="sm:hidden" />
          <Logo size="medium" variant="light" className="hidden sm:block" />
        </div>

        <div className="max-w-xl">
          <span
            className="inline-block px-8 py-3 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: ` ${theme.colors.brand.medium}`,
              border: `1px solid ${theme.colors.brand.light}`,
            }}
          >
            Gestão inteligente para assistência técnica
          </span>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Organize clientes, técnicos, serviços e agendamentos em um só lugar.
          </h2>

          <p className="text-lg leading-8 opacity-85 max-w-lg">
            Uma plataforma pensada para centralizar a operação e facilitar o dia
            a dia da assistência técnica.
          </p>
        </div>

        <p className="text-sm opacity-70">
          © 2026 Romatec. Todos os direitos reservados.
        </p>
      </section>

      <section
        className="w-full md:w-1/2 flex items-center justify-center px-6 py-10"
        style={{ backgroundColor: theme.colors.gray[100] }}
      >
        <div
          className="w-full max-w-lg rounded-3xl p-8 md:p-10 shadow-xl"
          style={{ backgroundColor: theme.colors.white }}
        >
          <div className="mb-8 flex items-center gap-3 md:hidden">
            <Settings
              className="w-7 h-7"
              style={{ color: theme.colors.brand.primary }}
            />
            <div>
              <h1
                className="font-bold tracking-tight"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.25rem",
                  color: theme.colors.brand.primary,
                }}
              >
                Romatec
              </h1>
              <p className="text-sm" style={{ color: theme.colors.gray[500] }}>
                Sistema de Gestão
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ color: theme.colors.gray[800] }}
            >
              Entrar
            </h2>
            <p className="text-base" style={{ color: theme.colors.gray[500] }}>
              Acesse sua conta para continuar
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.gray[800] }}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@empresa.com"
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
                style={{
                  borderColor: "#dbe3ea",
                  color: theme.colors.gray[800],
                  backgroundColor: theme.colors.white,
                }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.gray[800] }}
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
                style={{
                  borderColor: "#dbe3ea",
                  color: theme.colors.gray[800],
                  backgroundColor: theme.colors.white,
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl py-3.5 font-semibold transition hover:opacity-95"
              style={{
                backgroundColor: theme.colors.brand.primary,
                color: theme.colors.white,
              }}
            >
              Entrar
            </button>
          </form>

          <p
            className="text-sm text-center mt-6"
            style={{ color: theme.colors.gray[500] }}
          >
            Acesso restrito a usuários autorizados
          </p>
        </div>
      </section>
    </main>
  );
}
