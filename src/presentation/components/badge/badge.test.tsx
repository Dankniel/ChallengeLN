import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Badge from './badge'

describe('Badge', () => {

  beforeEach(() => {
    const text = 'Chapita'
    render(<Badge text={text} />)
  })

  test('should render correctly', () => {
    expect(screen.getByText('Chapita')).toBeDefined()
  })
})