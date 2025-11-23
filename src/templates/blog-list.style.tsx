import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  resetBorder,
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
} from "../style/common";

export const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  position: relative;
`;

export function Main({ children }: React.PropsWithChildren) {
  return (
    <MainWrapper>
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
  );
}

export const YearDivider = styled.h2`
  margin-left: 1rem;
  &:not(:first-child) {
    margin-top: 3rem;
  }
  font-size: 1rem;
  text-align: left;
`;
