import {
  BlockObjectResponse,
  Client,
  PageObjectResponse,
} from "@notionhq/client";
import React from "react";
import "server-only";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.DATABASE_KEY!,
    filter: {
      property: "Status",
      status: {
        equals: "Live",
      },
    },
  });
});

export const fetchBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.DATABASE_KEY!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
});
