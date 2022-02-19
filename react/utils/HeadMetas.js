import React,{Component} from 'react';
import MetaTags from 'react-meta-tags';

class HeadMetas extends Component {
  render() {

    const data = this.props.data;

    return(
      <MetaTags>
        {data.title ?
          <title>{data.title}</title>
        :null}

        {data.canonical ?
          data.canonical === "false" ? null :
          <link rel="canonical" href={data.canonical} />
          :
          <link rel="canonical" href="https://robotlimpieza.org/" />
        }

        {data.desc ?
          <meta name="description" content={data.desc} />
        :null}

        {data.keys ?
          <meta name="keywords" content={data.keys} />
        :null}

        {data.ogTitle ?
          <meta property="og:title" content={data.ogTitle} />
        :null}

        {data.ogImg ?
          <meta property="og:image" content={data.ogImg} />
        :null}

        {data.index ? null :
          <meta name="robots" content="noindex,follow" />
        }
      </MetaTags>
    )
  }
}

export default HeadMetas;
