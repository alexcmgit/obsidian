import styled from "styled-components";
import { withBorder, withBorderBottom } from "../../style/common";
import { InLink } from "../inlink";

export const BlogPostItem = styled.div`
  padding: 0.5rem 1.5rem;
  padding-top: 1rem;
`;

export const BlogPostItemLink = styled(InLink)`
  color: var(--text-color);
  &:hover {
    color: var(--link-color);
  }
  display: flex;
`;

export const BlogPostItemContent = styled.div`
  flex: 1;
  h1 {
    font-size: 14px;
  }
  .excerpt {
    font-size: 12px;
  }
  .date {
    font-size: 10px;
    margin: 0;
  }
`;

export const BlogPostItemThumb = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 12px;
  margin-right: 12px;
  overflow: hidden;
  .gatsby-image-wrapper {
    border: none;
    width: 100%;
    height: 100%;
  }
`;

export const BlogPostItemFallbackThumb = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 12px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "JetBrains Mono";
  background-color: var(--surface-color);
  color: var(--title-color);
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
`;
