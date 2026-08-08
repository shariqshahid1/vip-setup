import MenuGrid from "@/components/MenuGrid";

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.cat) ? params.cat[0] : params.cat;
  return (
    <section className="pt-24 bg-surface">
      <MenuGrid initialCat={raw ?? "All"} />
    </section>
  );
}
