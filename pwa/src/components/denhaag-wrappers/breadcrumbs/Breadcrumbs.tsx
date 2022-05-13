/**
 * This is a wrapper element based on https://nl-design-system.github.io/denhaag/?path=/docs/css-navigation-breadcrumb--default-story
 *
 * IMPORTANT: DO NOT MAKE CHANGES TO THIS FILE, AS ALL CHANGES WILL BE LOST UPON PACKAGE IMPLEMENTATION
 *
 * Note: we do not use css modules here due to this component being a wrapper
 */

import * as React from "react";
import "./Breadcrumbs.css";

export const Breadcrumbs: React.FC = () => {
  return (
    <nav aria-label="Breadcrumb" className="denhaag-breadcrumb">
      <ol className="denhaag-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
        <li
          className="denhaag-breadcrumb__item"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a className="denhaag-breadcrumb__link" href="https://example.com/" itemProp="item">
            <span className="denhaag-breadcrumb__text" itemProp="name">
              Home
            </span>
            <svg
              aria-hidden="true"
              className="denhaag-icon"
              fill="none"
              focusable="false"
              height="1em"
              shape-rendering="auto"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                fill="currentColor"
              />
            </svg>
            <meta content="1" itemProp="position" />
          </a>
        </li>

        <li
          className="denhaag-breadcrumb__item"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a className="denhaag-breadcrumb__link" href="https://example.com/a/" itemProp="item">
            <span className="denhaag-breadcrumb__text" itemProp="name">
              Afval
            </span>
            <svg
              aria-hidden="true"
              className="denhaag-icon"
              fill="none"
              focusable="false"
              height="1em"
              shape-rendering="auto"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.293 18.707a1 1 0 010-1.414L14.586 12 9.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z"
                fill="currentColor"
              />
            </svg>
            <meta content="2" itemProp="position" />
          </a>
        </li>

        <li
          aria-current="page"
          className="denhaag-breadcrumb__item"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a
            aria-current="page"
            className="denhaag-breadcrumb__link denhaag-breadcrumb__link--current"
            href="https://example.com/a/b/"
            itemProp="item"
          >
            <span className="denhaag-breadcrumb__text" itemProp="name">
              Kliko's
            </span>
            <meta content="3" itemProp="position" />
          </a>
        </li>
      </ol>
    </nav>
  );
};
