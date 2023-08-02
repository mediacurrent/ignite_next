import React from 'react'
import '@/styles/components/socialIcons.scss'

interface SocialIconsTypes {
  background?: string
  icons: {
    url: string
    ariaLabel: string
    name: string
    modifier: string
    icon: React.ReactNode
  }[]
}

const SocialIcons = ({ icons, background = 'light' }: SocialIconsTypes) => (
  <div className={`p-3 bg-${background}`}>
    <ul className="social-icons list-inline">
      {icons.map(({ url, ariaLabel, name, modifier, icon }, idx: number) => (
        <li
          data-cy="social-icons"
          className="list-inline-item"
          key={name + idx}
        >
          <a
            href={url}
            aria-label={ariaLabel}
            // @ts-ignore - name does not exist on DetailedHTMLProps
            name={name}
            className={modifier}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default SocialIcons
