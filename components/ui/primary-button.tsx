'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import './primary-button.css'

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  sentText?: string
  isSent?: boolean
  size?: 'default' | 'sm'
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      text = 'SendMessage',
      sentText = 'Sent',
      isSent = false,
      size = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const renderLetters = (word: string, startIdx: number = 0) => {
      return word.split('').map((char, index) => (
        <span
          key={index}
          style={{ '--i': index + startIdx } as React.CSSProperties}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))
    }

    return (
      <button
        ref={ref}
        className={cn(
          'primary-button',
          size === 'sm' && 'primary-button--sm',
          isSent && 'is-sent',
          className
        )}
        {...props}
      >
        <div className="button-outline" />

        {/* Default State */}
        {!isSent && (
          <div className="state state--default">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="62;0"
                  />
                </path>
              </svg>
            </div>
            <p>{renderLetters(text)}</p>
          </div>
        )}

        {/* Sent State */}
        {isSent && (
          <div className="state state--sent">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                strokeWidth="0.5px"
                stroke="black"
              >
                <g style={{ filter: 'url(#shadow-sent)' }}>
                  <path
                    fill="currentColor"
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  ></path>
                </g>
                <defs>
                  <filter id="shadow-sent">
                    <feDropShadow
                      dx="0"
                      dy="1"
                      stdDeviation="0.6"
                      floodOpacity="0.5"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <p>{renderLetters(sentText, 5)}</p>
          </div>
        )}
      </button>
    )
  }
)

PrimaryButton.displayName = 'PrimaryButton'

export { PrimaryButton }
