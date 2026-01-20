"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Page() {
  const t = useTranslations("HomePage");
  const query = useQuery({
    queryKey: ["photos"],
    queryFn: () =>
      fetch(
        "https://boringapi.com/api/v1/photos?page=2&limit=20&sort_by=file_size&sort_order=desc"
      ).then((res) => res.json()),
  });

  console.log(query.data);

  return (
    <div className="flex flex-col gap-4">
      {t("title")}
      <Link href="/">home</Link>
    </div>
  );
}
