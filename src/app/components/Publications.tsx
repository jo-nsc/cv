// PublicationsWorkStyle.tsx

import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

type PublicationLink = {
  href: string
  label: string
}

type Publication = {
  title: string
  authors: string
  year: number | string
  type: string             // e.g., "Journal Article", "Master Thesis", etc.
  category?: string        // e.g., "Scientific Reports", "RWTH-Aachen University"
  link?: PublicationLink
  description?: string
}

interface PublicationsProps {
  publications: readonly Publication[]
}

/**
 * Renders the publication title with an optional link
 */
function PublicationTitle({ title, link }: { title: string; link?: PublicationLink }) {
  if (!link) return <span>{title}</span>

  return (
    <a
      className="hover:underline"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} publication link`}
    >
      {title}
    </a>
  )
}

/**
 * Displays type, category, and year as a list of badges
 */
function PublicationBadgeList({
  type,
  category,
  year,
}: {
  type: string
  category?: string
  year: number | string
}) {
  const badges = [type, category, `${year}`].filter(Boolean)

  return (
    <ul
      className="inline-flex list-none gap-x-1 p-0"
      aria-label="Publication details"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  )
}

function PublicationCard({
  title,
  authors,
  type,
  category,
  year,
  link,
  description,
}: Publication) {
  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <PublicationTitle title={title} link={link} />
            {/* Show badges (type, category, year) on desktop */}
            <div className="hidden sm:inline-flex">
              <PublicationBadgeList type={type} category={category} year={year} />
            </div>
          </h3>
        </div>

        <div className="font-mono text-sm leading-none print:text-[12px] text-pretty">
          <strong>Authors:</strong> {authors}
        </div>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
        {/* Show badges on mobile */}
        <div className="mt-2 sm:hidden">
          <PublicationBadgeList type={type} category={category} year={year} />
        </div>
      </CardContent>
    </Card>
  )
}

export function PublicationsWorkStyle({ publications }: PublicationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="publications">
        Publications
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="publications"
      >
        {publications.map((pub) => (
          <article key={pub.title} role="article">
            <PublicationCard {...pub} />
          </article>
        ))}
      </div>
    </Section>
  )
}
