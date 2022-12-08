import { fireEvent, render, screen } from "@testing-library/react"
import { calculateStyle } from "../circleProgress/CircleProgress.helpers"
import Range from './Range'

describe('Range', () => {
  it('test minimum - 1', () => {
    render(<Range />)

    const range = screen.getByTestId('range-input')

    fireEvent.change(range, {
      target: {
        value: 1
      }
    })

    const circleProgress = screen.getByTestId('circle_progress')

    const [dashArray, dashOffset] = calculateStyle(200, 5, 1, 10)

    expect(circleProgress).toHaveStyle(`strokeDasharray: ${dashArray}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)

    const circleValue = screen.getByText(1)
    expect(circleValue).toBeInTheDocument()
  })

  it('test maximum - 10', () => {
    render(<Range />)

    const range = screen.getByTestId('range-input')

    fireEvent.change(range, {
      target: {
        value: 10
      }
    })

    const circleProgress = screen.getByTestId('circle_progress')

    const [dashArray, dashOffset] = calculateStyle(200, 5, 10, 10)

    expect(circleProgress).toHaveStyle(`strokeDasharray: ${dashArray}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)

    const circleValue = screen.getByText(10)
    expect(circleValue).toBeInTheDocument()
  })

  it('test greater than maximum - 11 - error', () => {
    render(<Range />)

    const range = screen.getByTestId('range-input')

    fireEvent.change(range, {
      target: {
        value: 11
      }
    })

    const circleProgress = screen.getByTestId('circle_progress')

    const [dashArray, dashOffset] = calculateStyle(200, 5, 10, 10)

    expect(circleProgress).toHaveStyle(`strokeDasharray: ${dashArray}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)

    const circleValue = screen.getByText(10)
    expect(circleValue).toBeInTheDocument()
  })

  it('test less than minimum - (-1) - error', () => {
    render(<Range />)

    const range = screen.getByTestId('range-input')

    fireEvent.change(range, {
      target: {
        value: -1
      }
    })

    const circleProgress = screen.getByTestId('circle_progress')

    const [dashArray, dashOffset] = calculateStyle(200, 5, 0, 10)

    expect(circleProgress).toHaveStyle(`strokeDasharray: ${dashArray}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)
    expect(circleProgress).toHaveStyle(`strokeDashoffset: ${dashOffset}`)

    const circleValue = screen.getByText(0)
    expect(circleValue).toBeInTheDocument()
  })

})