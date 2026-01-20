"use client";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination";
import type React from "react";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils/ui";

export const Pagination: React.FC<{
  className?: string;
  page: number;
  totalPages: number;
}> = (props) => {
  const router = useRouter();

  const { className, page, totalPages } = props;
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  const hasExtraPrevPages = page - 1 > 1;
  const hasExtraNextPages = page + 1 < totalPages;

  const handleClick =
    (targetPage: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push(`/posts/page/${targetPage}`);
    };

  return (
    <div className={cn("my-12", className)}>
      <PaginationComponent>
        <PaginationContent>
          <PaginationItem>
            {hasPrevPage ? (
              <PaginationPrevious
                href={`/posts/page/${page - 1}`}
                onClick={handleClick(page - 1)}
              />
            ) : (
              <PaginationPrevious
                aria-disabled="true"
                className="pointer-events-none opacity-50"
                href="#"
              />
            )}
          </PaginationItem>

          {hasExtraPrevPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {hasPrevPage && (
            <PaginationItem>
              <PaginationLink
                href={`/posts/page/${page - 1}`}
                onClick={handleClick(page - 1)}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              href={`/posts/page/${page}`}
              isActive
              onClick={handleClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>

          {hasNextPage && (
            <PaginationItem>
              <PaginationLink
                href={`/posts/page/${page + 1}`}
                onClick={handleClick(page + 1)}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {hasExtraNextPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            {hasNextPage ? (
              <PaginationNext
                href={`/posts/page/${page + 1}`}
                onClick={handleClick(page + 1)}
              />
            ) : (
              <PaginationNext
                aria-disabled="true"
                className="pointer-events-none opacity-50"
                href="#"
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </PaginationComponent>
    </div>
  );
};
