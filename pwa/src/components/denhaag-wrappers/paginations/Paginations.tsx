/**
 * This is a wrapper element based on https://nl-design-system.github.io/denhaag/?path=/docs/css-navigation-pagination--default-story
 *
 * IMPORTANT: DO NOT MAKE CHANGES TO THIS FILE, AS ALL CHANGES WILL BE LOST UPON PACKAGE IMPLEMENTATION
 *
 * Note: we do not use css modules here due to this component being a wrapper
 */

import * as React from "react";
import "./Paginations.css";
import { Link } from "gatsby";

interface PaginationsProps {
  pages: {
    ariaLabel: string;
    label: string;
    href: string;
  }[];
  nextPageHref: string;
  previousPageHref: string;
}

export const Paginations: React.FC<PaginationsProps> = ({ pages, previousPageHref, nextPageHref }) => {
  return (
    <nav className="denhaag-pagination">
      <PreviousPage href={previousPageHref} />
      <span className="denhaag-pagination__links" role="group">
        {pages.map((page) => {
          return (
            <Link aria-label={page.ariaLabel} className="denhaag-pagination__link" to={page.href}>
              {page.label}
            </Link>
          );
        })}
      </span>
      <NextPage href={nextPageHref} />
    </nav>
  );
};

interface PreviousPageProps {
  href: string;
}
const PreviousPage: React.FC<PreviousPageProps> = ({ href }) => (
  <Link
    aria-label="Previous page"
    className="denhaag-pagination__link denhaag-pagination__link--arrow"
    to={href}
    rel="prev"
  >
    <svg
      aria-hidden="true"
      className="denhaag-icon"
      fill="none"
      height="1em"
      viewBox="0 0 7 12"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.9921 10.8143C5.36382 11.1914 5.97222 11.1914 6.34393 10.8143C6.7079 10.4451 6.70822 9.8521 6.34466 9.48248L3.36315 6.45123C2.98039 6.06209 2.98039 5.43791 3.36315 5.04877L6.34466 2.01752C6.70822 1.6479 6.7079 1.05492 6.34394 0.685696C5.97222 0.308599 5.36382 0.308599 4.9921 0.685695L0.692003 5.04799C0.308224 5.43732 0.308224 6.06268 0.692003 6.45201L4.9921 10.8143Z"
        fill="currentColor"
      />
    </svg>
  </Link>
);

interface NextPageProps {
  href: string;
}
const NextPage: React.FC<NextPageProps> = ({ href }) => (
  <Link
    aria-label="Next page"
    className="denhaag-pagination__link denhaag-pagination__link--arrow"
    to={href}
    rel="next"
  >
    <svg
      aria-hidden="true"
      className="denhaag-icon"
      fill="none"
      height="1em"
      viewBox="0 0 7 12"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0079 1.1857C1.63618 0.8086 1.02778 0.8086 0.656065 1.18569V1.18569C0.292103 1.55492 0.291779 2.1479 0.655339 2.51752L3.63685 5.54877C4.01961 5.93791 4.01961 6.56209 3.63686 6.95123L0.655339 9.98248C0.291779 10.3521 0.292102 10.9451 0.656065 11.3143V11.3143C1.02778 11.6914 1.63618 11.6914 2.0079 11.3143L6.308 6.95201C6.69178 6.56268 6.69178 5.93732 6.308 5.54799L2.0079 1.1857Z"
        fill="currentColor"
      />
    </svg>
  </Link>
);
