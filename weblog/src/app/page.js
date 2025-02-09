import { supabaseServerClient } from "../../api/config";
import { cookies } from "next/headers";


export default async function Home() {
  const cookieStoore = cookies();
  const supabase = supabaseServerClient(cookieStoore);

  const { data: products } =await  supabase.from('products').select('*')


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-5xl">supabase project</h1>
        </div>
        {JSON.stringify(products)}
      </main>

    </div>
  );
}
