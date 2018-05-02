import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string
}

export default Head

