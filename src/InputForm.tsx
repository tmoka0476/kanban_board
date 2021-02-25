import React from "react"
import styled from "styled-components"
import * as color from "./color"
import { Button, ConfirmButton } from "./Button"

export function InputForm({
  value,
  onChange,
  onConfirm,
  onCancel,
  className,
}: {
  value?: string
  onChange?(value: string): void
  onConfirm?(): void
  onCancel?(): void
  className?: string
}) {
  const disabled = !value?.trim()
  const handleConfirm = () => {
    if (disabled) return
    onConfirm?.()
  }

  return (
    <Container className={className}>
      <Input
        autoFocus
        placeholder="Enter a note"
        value={value}
        onChange={event => onChange?.(event.currentTarget.value)}
        onKeyDown={event => {
          if (!((event.metaKey || event.ctrlKey) && event.key === "Enter"))
            return
          handleConfirm()
        }}
      />
    </Container>
  )
}

const Container = styled.div``

const Input = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
  padding: 6px 8px;
  background-color: ${color.White};
  font-size: 14px;
  line-height: 1.7;

  :focus {
    outline: none;
    border-color: ${color.Blue};
  }
`

const ButtonRow = styled.div`
  display: flex;

  > :not(:first-child) {
    margin-left: 8px;
  }
`

const AddButton = styled(ConfirmButton).attrs({
  children: "Add",
})``

const CancelButton = styled(Button).attrs({
  children: "Cancel",
})``