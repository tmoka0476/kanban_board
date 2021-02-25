import React from "react"
import ReactDom from "react-dom"
import styled, { createGlobalStyle } from "styled-components"
import * as color from "./color"

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>Kanban Board</Logo>
        <CardFilter placeholder="Filter cards" />
      </Header>

      <MainArea>
        <HorizontalScroll>
          <Column>
            <ColumnHeader>TODO</ColumnHeader>
            <Card>朝食をとる</Card>
            <Card>メールをチェックする✉️</Card>
          </Column>
          <Column>
            <ColumnHeader>Doing</ColumnHeader>
            <Card>テスト用タスク</Card>
            <Card>テスト用タスク</Card>
          </Column>
          <Column>
            <ColumnHeader>Waiting</ColumnHeader>
            <Card>テスト用タスク</Card>
            <Card>テスト用タスク</Card>
          </Column>
          <Column>
            <ColumnHeader>Done</ColumnHeader>
            <Card>テスト用タスク</Card>
            <Card>テスト用タスク</Card>
          </Column>
        </HorizontalScroll>
      </MainArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Header = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${color.Navy};
  flex-shrink: 0;
  color: ${color.Silver};
  font-size: 16px;
  font-weight: bold;
`

const Logo = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`

const CardFilter = styled.input`
  display: flex;
  align-items: center;
  min-witdh: 300px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
`

const MainArea = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`

const HorizontalScroll = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: "";
  }
`

const Column = styled.div`
  display: flex;
  flex-flow: column;
  width: 355px;
  height: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  background-color: ${color.LightSilver};

  > :not(:last-child) {
    flex-shrink: 0;
  }
`

const ColumnHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: center;
  padding: 8px;
`

const Card = styled.div`
  position: relative;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  padding: 8px 32px;
  background-color: ${color.White};
  cursor: move;
`

const GlobalStyle = createGlobalStyle`
html,body, #app {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
       Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
 
     overflow-wrap: break-word;
}`

ReactDom.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("app"),
)
