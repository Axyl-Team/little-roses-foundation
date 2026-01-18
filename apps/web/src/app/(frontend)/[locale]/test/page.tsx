import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Page() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col gap-4">
      {t("title")}
      <Link href="/">home</Link>
    </div>
  );
}
