import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is first meetup",
//     image:
//       "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg",
//     address: "Itahari-20, Tarahara",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
//   },
//   {
//     id: "m2",
//     title: "This is second meetup",
//     image:
//       "https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg",
//     address: "Dharan, Sunsari",
//     description:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//   },
//   {
//     id: "m3",
//     title: "This is third meetup",
//     image:
//       "https://www.planetware.com/wpimages/2019/08/united-states-best-places-to-visit-grand-canyon-lookout.jpg",
//     address: "Newroad, Kathmandu",
//     description:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
//   },
// ];

function AllMeetupPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://react-getting-start-32a65-default-rtdb.firebaseio.com/meetup.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedData(meetups);
      });

    // console.log(loadedData);
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading....</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetup Page</h1>
      <MeetupList items={loadedData} />
    </section>
  );
}

export default AllMeetupPage;
