import { request, gql } from 'graphql-request'

const MAIN_URL = 'https://api-ap-south-1.hygraph.com/v2/clutklmpu15ag07w0z9y6dbzh/master'

const getSlider = async () =>{
    const query = gql`
    query GetSliders {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    `
    const result = await request(MAIN_URL, query);
    return result;
}

const getCategories = async () =>{
    const query = gql`
    query GetCategories {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
    `
    const result = await request(MAIN_URL, query);
    return result;
}

export default {
    getSlider,
    getCategories
}