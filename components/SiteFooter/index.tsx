import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import '@/styles/components/siteFooter.scss'

interface SiteFooterTypes {
  siteLogo: string
  modifier: string
  menuModifier: string
  links: {
    text: string
    url: string
  }[]
  socialIcons: {
    url: string
    ariaLabel: string
    name: string
    modifier: string
    icon: React.ReactNode
  }[]
}

const SiteFooter = ({
  siteLogo,
  modifier,
  menuModifier,
  socialIcons,
  links
}: SiteFooterTypes) => (
  <div className={`site-footer ${modifier}`}>
    <Container fluid className="p-md-5 pt-8 pb-5">
      <Row className="d-lg-flex flex-wrap justify-content-lg-between align-items-center">
        <Col lg={2}>
          <Image
            data-cy="site-footer-logo"
            src={siteLogo}
            className="logo "
            alt="Site logo"
          />
        </Col>
        <Col lg={8} className="text-right justify-lg-content-end">
          <div className="mb-9 fs-5 fw-semibold">
            <div className={menuModifier}>
              <ul className="list-unstyled">
                {links.map(({ url, text }, idx: number) => (
                  <li data-cy="site-footer-links" key={text + idx}>
                    <a href={url} className="text-decoration-none ">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="justify-content-lg-end d-lg-flex">
              <ul className="social-icons list-inline">
                {socialIcons.map(
                  ({ url, ariaLabel, name, modifier, icon }, index: number) => (
                    <li
                      data-cy="site-footer-social-links"
                      className="list-inline-item"
                      key={name + index}
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
                  )
                )}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default SiteFooter
