import Link from "next/link";

export default function Home() {
  return (
    <main className="flex text-center min-h-screen flex-col items-center justify-between">
      <div className="bg-slate-500 w-full h-56 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-slate-50 mb-4">MONITORAMENTO DE AÇÃO ACELERADORA</h2>
        <p className="text-orange-300">REGIAO CENTRAL-SP</p>
      </div>
      <section className="w-full max-w-7xl flex justify-between border h-96">
        <div className="flex-1 border p-3">
          <div className="w-full h-8 p-3">
            <h3>USO DOS DADOS</h3>
          </div>
          <div className="w-full h-8 p-3">
            <h3>PROJETO</h3>
          </div>
        </div>
        <div className="flex-1 border">
          <h3>DISTRIBUICAO</h3>
        </div>
        <div className="flex-1 border">
          <h3>GERENTE</h3>
        </div>
        <div className="flex-1 border">
          <h3>DISTRIBUICAO</h3>
        </div>
        <div className="flex-1 border">
          <h3>STATUS</h3>
        </div>

      </section>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
