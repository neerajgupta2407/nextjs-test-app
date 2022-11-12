import Layout from '../../components/layout';

export default function Post({postData}) {
  return <Layout> <Layout>
  {postData.title}
  <br />
  {postData.id}
  <br />
  {postData.date}
</Layout></Layout>;
}

export async function getStaticPaths() {
    // const paths = getAllPostIds();
    let paths =  [
          {
            params: {
              id: 'ssg-ssr'
            }
          },
          {
            params: {
              id: 'pre-rendering'
            }
          }
        ]
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    // const postData = getPostData(params.id);
    let postData = postData.id
    return {
      props: {
        postData,
      },
    };
  }