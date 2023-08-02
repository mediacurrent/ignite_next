import Breadcrumb from 'react-bootstrap/Breadcrumb'

const BreadcrumbComponent = ({ breadcrumb }) => (
  <Breadcrumb>
    <h2 id="system-breadcrumb" className="visually-hidden">
      Breadcrumb
    </h2>
    {breadcrumb.map(({ text, url }, idx: number) => {
      if (url) {
        return (
          <Breadcrumb.Item data-cy="breadcrumb-item" href={url} key={idx}>
            {text}
          </Breadcrumb.Item>
        )
      }
      return (
        <Breadcrumb.Item data-cy="breadcrumb-active" active key={idx}>
          {text}
        </Breadcrumb.Item>
      )
    })}
  </Breadcrumb>
)

export default BreadcrumbComponent
