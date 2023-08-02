const Typography = () => (
  <>
    <h2>Headings</h2>

    <div className="border p-3 mt-3 mb-4">
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>
    </div>

    <h2>Display headings</h2>

    <div className="border p-3 mt-3 mb-4">
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
    </div>

    <h2>Lead</h2>

    <div className="border p-3 mt-3 mb-4">
      <p className="lead">
        This is a lead paragraph. It stands out from regular paragraphs.
      </p>
    </div>

    <h2>Inline text elements</h2>

    <div className="border p-3 mt-3 mb-4">
      <p>
        You can use the mark tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>
          This line of text is meant to be treated as an addition to the
          document.
        </ins>
      </p>
      <p>
        <u>This line of text will render as underlined.</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as italicized text.</em>
      </p>
    </div>

    <h2>Blockquotes</h2>

    <div className="border p-3 mt-3 mb-4">
      <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
    </div>

    <h2>Naming a source</h2>

    <div className="border p-3 mt-3 mb-4">
      <figure className="text-end">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>

    <h2>Lists</h2>

    <div className="border p-3 mt-3 mb-4">
      <h3>Unordered</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h3>Ordered</h3>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
    </div>
  </>
)

export default Typography
