const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is first meetup",
    image:
      "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg",
    address: "Itahari-20, Tarahara",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "m2",
    title: "This is second meetup",
    image:
      "https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg",
    address: "Dharan, Sunsari",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
  {
    id: "m3",
    title: "This is third meetup",
    image:
      "https://www.planetware.com/wpimages/2019/08/united-states-best-places-to-visit-grand-canyon-lookout.jpg",
    address: "Newroad, Kathmandu",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia",
  },
];

function AllMeetupPage() {
  return (
    <section>
      <h1>All Meetup Page</h1>
      <ul>
        {DUMMY_DATA.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </section>
  );
}

export default AllMeetupPage;
