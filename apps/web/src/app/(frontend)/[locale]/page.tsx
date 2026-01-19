import { Button } from "@workspace/ui/components/button";
import { Spinner } from "@workspace/ui/components/spinner";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Page() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col gap-4">
      {t("title")}
      <Link href="/test">test page</Link>{" "}
      <div>
        <Button disabled size={"sm"}>
          <Spinner className="size-4" />
          Loading...
        </Button>
      </div>
    </div>
  );
}
