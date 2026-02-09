import MenuLayout from "@/components/MenuLayout";

const getMenu = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/menu`, { cache: "no-store" });
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch menu:", error);
    return [];
  }
}

export default async function HomePage() {
  const menu = await getMenu();
  return (
    <MenuLayout menu={menu} />
  )
}
