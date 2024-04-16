import { request, gql } from 'graphql-request'

const MAIN_URL = 'https://api-ap-south-1.hygraph.com/v2/clutklmpu15ag07w0z9y6dbzh/master'

const getBussinesList = async () =>{
  const query = gql`
      query GetBussinesList {
        bussinessLists {
          id
          name
          email {
            text
          }
          contactPerson
          address
          about
          images {
            url
          }
          category {
            name
          }
        }
      }
      `
  const result = await request(MAIN_URL, query);
  return result;
}



const getBussinesListByCategory = async (category) =>{
  const query = gql`
  query GetBussinesList {
    bussinessLists(where: {category: {name: "${category}"}}) {
      id
      name
      email {
        text
      }
      contactPerson
      address
      about
      images {
        url
      }
      category {
        name
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


const createBooking= async (data) =>{
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked, 
        bussinessList: {connect: {id: "${data.bussinesId}"}}, 
        serviceDate: "${data.date}", 
        serviceTime: "${data.time}", 
        notes:"${data.notes}",
        userEmail: "${data.email}", 
        userName: "${data.userName}"}
    ) {
      id
    }
  }`

  let result = await request(MAIN_URL, mutationQuery);
  let ID =  result.createBooking.id
  const publishQuery = gql`
  mutation {
    publishBooking(where: { id: "${ID}" }, to: PUBLISHED) {
      id
    }
  }
  `
  result = await request(MAIN_URL, publishQuery);
  return ID;
}

const getBookings = async (userName) =>{
  const query = gql`
    query GetBookings {
      bookings  (where: {userName: "${userName}"}) {
        id
        notes
        serviceDate
        serviceTime
        userEmail
        userName
        bookingStatus
        bussinessList {
          id
          name
          address
          contactPerson
          images {
            url
          }
        }
      }
    }  
  `

  const result = await request(MAIN_URL, query);
  return result;
}
export default {
    getSlider,
    getCategories,
    getBussinesList,
    getBussinesListByCategory,
    createBooking,
    getBookings
}